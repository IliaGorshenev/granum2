import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LeftArrowIcon, RightArrowIcon } from '../icons/slider-buttons';

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface WorksSliderProps {
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
  margin: 6rem auto;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`;

const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const SliderTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SliderSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Slide = styled.div<{ width: string }>`
  min-width: ${(props) => props.width};
  position: relative;
  overflow: hidden;
  padding: 0 15px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

// Update the SliderTrack to add padding
const SliderTrack = styled.div<{ transform: string }>`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${(props) => props.transform};
  height: 500px;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

// Update the SliderWrapper to ensure buttons are outside the overflow area
const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  margin: 0 40px;
  padding: 2rem;

  @media (max-width: 768px) {
    margin: 0 30px;
  }

  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
  border-radius: 12px;

  ${Slide}:hover & {
    transform: scale(1.05);
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0) 60%);
  border-radius: 12px;
  z-index: 1;
  pointer-events: none;
  width: 96%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

// Add this new component for navigation buttons container
const NavigationButtons = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;

  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 95%;
  color: white;
  transform: translateY(0);
  transition: transform 0.5s ease;
  z-index: 2;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%);
`;

const SlideTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.8rem;
`;

const Indicator = styled.button<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? '2.5rem' : '1rem')};
  height: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => (props.isActive ? 'linear-gradient(90deg, #3b7a57, #6b8e23)' : '#ddd')};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.isActive ? 'linear-gradient(90deg, #3b7a57, #6b8e23)' : '#bbb')};
  }
`;

const ViewAllButton = styled.button`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 3rem auto 0;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 122, 87, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const WorksSlider: React.FC<WorksSliderProps> = ({ works }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 900) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 600) {
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

  // Calculate max index based on slides per view
  const maxIndex = Math.max(0, works.length - slidesPerView);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }

    if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index));
  };

  // Auto-advance slides
  useEffect(() => {
    const play = () => {
      autoPlayRef.current = setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next > maxIndex ? 0 : next;
        });
      }, 5000);
    };

    play();

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, maxIndex]);

  // Calculate slide width based on slides per view
  const slideWidth = `${100 / slidesPerView}%`;

  return (
    <SliderContainer id="works">
      <SliderHeader>
        <SliderTitle>Наши работы</SliderTitle>
        <SliderSubtitle>Ознакомьтесь с нашим портфолио премиальных каменных инсталляций, демонстрирующих наше мастерство и внимание к деталям</SliderSubtitle>
      </SliderHeader>

      <SliderWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <SliderTrack transform={`translateX(-${currentIndex * (100 / slidesPerView)}%)`}>
          {works.map((work) => (
            <Slide key={work.id} width={slideWidth}>
              <SlideImage src={work.imageSrc} alt={work.title} />
              {/* <SlideOverlay /> */}
              <SlideContent>
                <SlideTitle>{work.title}</SlideTitle>
                <SlideDescription>{work.description}</SlideDescription>
              </SlideContent>
            </Slide>
          ))}
        </SliderTrack>
      </SliderWrapper>

      <NavigationButtons>
        <LeftArrowIcon onClick={goToPrev} position="left" />
        <RightArrowIcon onClick={goToNext} position="right" />
      </NavigationButtons>

      <IndicatorsContainer>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <Indicator key={index} isActive={index === currentIndex} onClick={() => goToSlide(index)} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </IndicatorsContainer>

      {/* <ViewAllButton onClick={() => console.log('View all works clicked')}>Посмотреть все работы</ViewAllButton> */}
    </SliderContainer>
  );
};

export default WorksSlider;
