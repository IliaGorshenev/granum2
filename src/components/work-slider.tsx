import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface WorkSliderProps {
  works: WorkItem[];
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SliderContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`;

const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const SliderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SliderSubtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SliderTrack = styled.div<{ transform: string }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.transform};
`;

const SlideItem = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    min-width: 50%;
  }
  
  @media (min-width: 1200px) {
    min-width: 33.333%;
  }
`;

const SlideCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const SlideImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  
  ${SlideCard}:hover & {
    transform: scale(1.05);
  }
`;

const SlideContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SlideTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2d3748;
`;

const SlideDescription = styled.p`
  font-size: 1rem;
  color: #718096;
  line-height: 1.6;
  flex-grow: 1;
`;
// First, let's update the NavigationButtons styled component
const NavigationButtons = styled.div`
  position: absolute;
  width: 105%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none; // This ensures clicks pass through to elements below
  z-index: 10;
`;

// Update the NavButton styled component
const NavButton = styled.button<{ isActive?: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.isActive ? 'white' : '#2d3748'};
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s;
  pointer-events: auto; // Ensure buttons are clickable
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const Indicator = styled.button<{ isActive: boolean }>`
  width: ${props => props.isActive ? '2rem' : '0.75rem'};
  height: 0.75rem;
  border-radius: 1rem;
  background: ${props => props.isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#cbd5e0'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#a0aec0'};
  }
`;

const WorkSlider: React.FC<WorkSliderProps> = ({ works }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const totalSlides = works.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  
  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index));
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [maxIndex]);
  
  return (
    <SliderContainer>
      <SliderHeader>
        <SliderTitle>Our Completed Projects</SliderTitle>
        <SliderSubtitle>
          Browse through our portfolio of premium stone installations that showcase our craftsmanship and attention to detail
        </SliderSubtitle>
      </SliderHeader>
      
      {/* Position the slider and navigation buttons together */}
      <div style={{ position: 'relative' }}>
        <SliderTrack transform={`translateX(-${currentIndex * (100 / slidesPerView)}%)`}>
          {works.map((work) => (
            <SlideItem key={work.id}>
              <SlideCard>
                <SlideImageContainer>
                  <SlideImage src={work.imageSrc} alt={work.title} />
                </SlideImageContainer>
                <SlideContent>
                  <SlideTitle>{work.title}</SlideTitle>
                  <SlideDescription>{work.description}</SlideDescription>
                </SlideContent>
              </SlideCard>
            </SlideItem>
          ))}
        </SliderTrack>
        
        <NavigationButtons>
          <NavButton onClick={goToPrev} disabled={currentIndex === 0}>
            ←
          </NavButton>
          <NavButton onClick={goToNext} disabled={currentIndex >= maxIndex}>
            →
          </NavButton>
        </NavigationButtons>
      </div>
      
      <IndicatorsContainer>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <Indicator 
            key={index}
            isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </IndicatorsContainer>
    </SliderContainer>
  );
};

export default WorkSlider;
