import Image from 'next/image';
import 'swiper/css';
import {
  A11y,
  Keyboard,
  Thumbs,
} from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LeftArrowIcon, RightArrowIcon } from '@/shared/ui/slider-controls';

interface GalleryStageProps {
  currentIndex: number;
  hasNavigation: boolean;
  images: string[];
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  onSwiper: (swiper: SwiperInstance) => void;
  thumbsSwiper: SwiperInstance | null;
  title: string;
}

export const GalleryStage = ({
  currentIndex,
  hasNavigation,
  images,
  onNext,
  onPrevious,
  onSelect,
  onSwiper,
  thumbsSwiper,
  title,
}: GalleryStageProps) => {
  const activeThumbsSwiper =
    thumbsSwiper && !thumbsSwiper.destroyed
      ? thumbsSwiper
      : null;

  return (
    <div
      aria-live="polite"
      className="relative flex min-h-0 min-w-0 flex-1 select-none items-center justify-center overflow-hidden px-3 pt-20 pb-3 sm:px-20 sm:pt-24 sm:pb-5">
      <Swiper
        a11y={{ enabled: true }}
        allowTouchMove={hasNavigation}
        className="size-full min-h-0 min-w-0"
        keyboard={{ enabled: true, onlyInViewport: false }}
        modules={[A11y, Keyboard, Thumbs]}
        onSlideChange={(swiper) => onSelect(swiper.activeIndex)}
        onSwiper={onSwiper}
        rewind={hasNavigation}
        slidesPerView={1}
        thumbs={
          activeThumbsSwiper
            ? { swiper: activeThumbsSwiper }
            : undefined
        }>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative size-full min-h-0 min-w-0">
              <Image
                fill
                alt={`${title}. Фото ${index + 1}`}
                className="pointer-events-none object-contain"
                draggable={false}
                priority={index === currentIndex}
                sizes="100vw"
                src={image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasNavigation && (
        <>
          <LeftArrowIcon
            className="left-5 hidden sm:flex"
            onClick={onPrevious}
          />
          <RightArrowIcon
            className="right-5 hidden sm:flex"
            onClick={onNext}
          />
        </>
      )}
    </div>
  );
};
