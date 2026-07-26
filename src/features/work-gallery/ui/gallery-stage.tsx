import Image from 'next/image';

import { LeftArrowIcon, RightArrowIcon } from '@/shared/ui/slider-controls';

import { useGallerySwipe } from '../model/use-gallery-swipe';

interface GalleryStageProps {
  alt: string;
  hasNavigation: boolean;
  image: string;
  onNext: () => void;
  onPrevious: () => void;
}

export const GalleryStage = ({
  alt,
  hasNavigation,
  image,
  onNext,
  onPrevious,
}: GalleryStageProps) => {
  const swipeHandlers = useGallerySwipe({
    onNext,
    onPrevious,
  });

  return (
    <div
      aria-live="polite"
      className="relative flex min-h-0 min-w-0 flex-1 touch-pan-y select-none items-center justify-center overflow-hidden px-3 pt-20 pb-3 sm:px-20 sm:pt-24 sm:pb-5"
      {...swipeHandlers}>
      <div className="relative size-full min-h-0 min-w-0">
        <Image
          fill
          alt={alt}
          className="pointer-events-none object-contain"
          draggable={false}
          sizes="100vw"
          src={image}
        />
      </div>

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
