import { Button } from '@heroui/react';
import Image from 'next/image';

interface GalleryThumbnailsProps {
  currentIndex: number;
  images: string[];
  onSelect: (index: number) => void;
}

export const GalleryThumbnails = ({
  currentIndex,
  images,
  onSelect,
}: GalleryThumbnailsProps) => (
  <nav
    aria-label="Миниатюры проекта"
    className="relative z-20 border-t border-white/10 bg-black/60 px-3 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
    <div className="scrollbar-thin mx-auto flex max-w-full justify-start gap-2 overflow-x-auto sm:justify-center">
      {images.map((image, index) => {
        const isSelected = currentIndex === index;

        return (
          <Button
            aria-label={`Открыть изображение ${index + 1}`}
            aria-pressed={isSelected}
            className={`relative h-14 w-20 min-w-20 shrink-0 overflow-hidden rounded-xl border p-0 transition sm:h-16 sm:w-24 sm:min-w-24 ${
              isSelected
                ? 'border-white bg-white/10 ring-2 ring-white/35'
                : 'border-white/15 bg-white/5 opacity-55 hover:opacity-100'
            }`}
            isIconOnly
            key={image}
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
        );
      })}
    </div>
  </nav>
);
