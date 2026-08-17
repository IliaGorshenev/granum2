import { Button } from '@heroui/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GalleryThumbnailsProps {
  currentIndex: number;
  images: string[];
  onSelect: (index: number) => void;
  onSwiper: (swiper: SwiperInstance) => void;
}

export const GalleryThumbnails = ({
  currentIndex,
  images,
  onSelect,
  onSwiper,
}: GalleryThumbnailsProps) => (
  <nav
    aria-label="Миниатюры проекта"
    className="relative z-20 border-t border-white/10 bg-black/60 px-3 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
    <Swiper
      centerInsufficientSlides
      className="mx-auto max-w-full"
      freeMode
      modules={[FreeMode]}
      onSwiper={onSwiper}
      slidesPerView="auto"
      spaceBetween={8}
      watchSlidesProgress>
      {images.map((image, index) => {
        const isSelected = currentIndex === index;

        return (
          <SwiperSlide
            className="!h-14 !w-20 sm:!h-16 sm:!w-24"
            key={image}>
            <Button
              aria-label={`Открыть изображение ${index + 1}`}
              aria-pressed={isSelected}
              className={`relative size-full min-w-0 overflow-hidden rounded-xl border p-0 transition ${
                isSelected
                  ? 'border-white bg-white/10 ring-2 ring-white/35'
                  : 'border-white/15 bg-white/5 opacity-55 hover:opacity-100'
              }`}
              isIconOnly
              onPress={() => onSelect(index)}
              variant="ghost">
              <Image
                fill
                alt=""
                className="object-cover"
                sizes="96px"
                src={image}
              />
            </Button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </nav>
);
