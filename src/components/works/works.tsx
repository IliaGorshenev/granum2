import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftArrowIcon, RightArrowIcon } from '../icons/slider-buttons';
import { 
  SlideContent, 
  SlideDescription, 
  SlideImage, 
  SlideOverlay, 
  SliderContainer, 
  SliderHeader, 
  SliderTitle, 
  SlideTitle, 
  SwiperWrapper,
  NavigationContainer
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
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <SliderContainer id="works">
      <SliderHeader>
        <SliderTitle>Наши работы</SliderTitle>
      </SliderHeader>

      <SwiperWrapper>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}>
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div onClick={() => onWorkClick(work)} style={{ cursor: 'pointer', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                <SlideImage src={work.imageSrc} alt={work.title} />
                <SlideOverlay />
                <SlideContent>
                  <SlideTitle>{work.title}</SlideTitle>
                  {work.description && <SlideDescription>{work.description}</SlideDescription>}
                </SlideContent>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <NavigationContainer>
          <LeftArrowIcon onClick={handlePrev} position="left" />
          <RightArrowIcon onClick={handleNext} position="right" />
        </NavigationContainer>
      </SwiperWrapper>
    </SliderContainer>
  );
};

export default WorksSlider;
