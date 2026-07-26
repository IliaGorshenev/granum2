import {
  type PointerEventHandler,
  useRef,
} from 'react';

import { GALLERY_SWIPE_DISTANCE_PX } from '../config/gallery';

interface UseGallerySwipeParams {
  onNext: () => void;
  onPrevious: () => void;
}

export const useGallerySwipe = ({
  onNext,
  onPrevious,
}: UseGallerySwipeParams) => {
  const startXRef = useRef<number | null>(null);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (
    event
  ) => {
    startXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (
    event
  ) => {
    const swipeDistance = event.clientX - startXRef.current!;

    startXRef.current = null;

    if (Math.abs(swipeDistance) < GALLERY_SWIPE_DISTANCE_PX) {
      return;
    }

    if (swipeDistance < 0) {
      onNext();
      return;
    }

    onPrevious();
  };

  const handlePointerCancel = () => {
    startXRef.current = null;
  };

  return {
    onPointerCancel: handlePointerCancel,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
  };
};
