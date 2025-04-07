import React, { useEffect, useRef, useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from '../icons/slider-buttons';
import {
  Indicator,
  IndicatorsContainer,
  NavigationButtons,
  Slide,
  SlideContent,
  SlideDescription,
  SlideImage,
  SlideOverlay,
  SliderContainer,
  SliderHeader,
  SliderSubtitle,
  SliderTitle,
  SliderTrack,
  SliderWrapper,
  SlideTitle,
} from './styles';

interface WorkItem {
  id: number;
  title: string;
  description?: string;
  imageSrc: string;
  additionalImages?: string[];
}

interface WorksSliderProps {
  works: WorkItem[];
  onWorkClick: (work: WorkItem) => void;
}

const WorksSlider: React.FC<WorksSliderProps> = ({ works, onWorkClick }) => {
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
  const GAP_SIZE = 30;

  const calculateTransform = () => {
    // If we're at the last slide(s), ensure we don't scroll past the end
    if (currentIndex >= maxIndex) {
      // This will align the end of the track with the end of the viewport
      return `translateX(calc(-${maxIndex * (100 / slidesPerView)}% - ${maxIndex * GAP_SIZE}px))`;
    }

    // Normal calculation for other positions
    return `translateX(calc(-${currentIndex * (100 / slidesPerView)}% - ${currentIndex * GAP_SIZE}px))`;
  };

  return (
    <SliderContainer id="works">
      <SliderHeader>
        <SliderTitle>Наши работы</SliderTitle>

      </SliderHeader>

      <SliderWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <SliderTrack transform={calculateTransform()}>
          {works.map((work) => (
            <Slide key={work.id} width={slideWidth} onClick={() => onWorkClick(work)} style={{ cursor: 'pointer' }}>
              <SlideImage src={work.imageSrc} alt={work.title} />
              <SlideOverlay />
              <SlideContent>
                <SlideTitle>{work.title}</SlideTitle>
                {work.description && <SlideDescription>{work.description}</SlideDescription> }
               
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
