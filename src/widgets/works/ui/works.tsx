'use client';

import { Surface } from '@heroui/react';
import { lazy, Suspense } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Work } from '@/entities/work';
import { HOME_SECTION_IDS } from '@/shared/config';
import { Loader } from '@/shared/ui/loader';
import { SectionHeading } from '@/shared/ui/section-heading';
import { LeftArrowIcon, RightArrowIcon } from '@/shared/ui/slider-controls';

import { WORKS_SLIDER } from '../config/slider';
import { useWorksSlider } from '../model/use-works-slider';
import { WorkCard } from './work-card';
import { WorksPagination } from './works-pagination';

const WorkGalleryModal = lazy(() =>
  import('@/features/work-gallery').then((module) => ({
    default: module.WorkGalleryModal,
  }))
);

interface WorksSliderProps {
  works: Work[];
}

const WorksSlider = ({ works }: WorksSliderProps) => {
  const slider = useWorksSlider();

  return (
    <Surface
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-5 py-14 sm:px-6 sm:py-16"
      id={HOME_SECTION_IDS.works}
      variant="transparent">
      <SectionHeading
        eyebrow="Портфолио"
        icon="project"
        title="Наши работы"
      />

      <div className="relative mx-auto mt-10 px-1 sm:mt-12 sm:px-5">
        <Swiper
          className="[&_.swiper-slide]:h-auto [&_.swiper-wrapper]:items-stretch"
          modules={[Autoplay]}
          onSwiper={slider.setSwiper}
          spaceBetween={WORKS_SLIDER.spaceBetween}
          slidesPerView={1}
          onSlideChange={(swiper) =>
            slider.selectSlide(swiper.activeIndex)
          }
          autoplay={{
            delay: WORKS_SLIDER.autoplayDelayMs,
            disableOnInteraction: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: WORKS_SLIDER.breakpoints[600],
            },
            900: {
              slidesPerView: WORKS_SLIDER.breakpoints[900],
            },
            1200: {
              slidesPerView: WORKS_SLIDER.breakpoints[1200],
            },
          }}>
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <WorkCard onSelect={slider.selectWork} work={work} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between">
          <LeftArrowIcon
            className="-left-2 hidden sm:flex"
            onClick={slider.previousSlide}
          />
          <RightArrowIcon
            className="-right-2 hidden sm:flex"
            onClick={slider.nextSlide}
          />
        </div>
        <WorksPagination
          currentSlide={slider.currentSlide}
          onSelect={slider.showSlide}
          works={works}
        />
      </div>
      {slider.selectedWork && (
        <Suspense fallback={<Loader text="Загружаем галерею" />}>
          <WorkGalleryModal
            key={slider.selectedWork.id}
            onClose={slider.closeWork}
            product={slider.selectedWork}
          />
        </Suspense>
      )}
    </Surface>
  );
};

export default WorksSlider;
