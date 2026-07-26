import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect, useMemo } from 'react';

import type { Work } from '@/entities/work';

import {
  galleryImageIndexAtom,
  nextGalleryImageAtom,
  previousGalleryImageAtom,
  selectGalleryImageAtom,
} from './work-gallery.atoms';

export const useWorkGallery = (product: Work) => {
  const currentIndex = useAtomValue(galleryImageIndexAtom);
  const selectImage = useSetAtom(selectGalleryImageAtom);
  const nextImage = useSetAtom(nextGalleryImageAtom);
  const previousImage = useSetAtom(previousGalleryImageAtom);
  const images = useMemo(
    () => [product.imageSrc, ...(product.additionalImages ?? [])],
    [product.additionalImages, product.imageSrc]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextImage(images.length);
      }

      if (event.key === 'ArrowLeft') {
        previousImage(images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      selectImage(0);
    };
  }, [images.length, nextImage, previousImage, selectImage]);

  return {
    currentIndex,
    hasMultipleImages: images.length > 1,
    images,
    nextImage: () => nextImage(images.length),
    previousImage: () => previousImage(images.length),
    selectedImage: images[currentIndex],
    selectImage,
  };
};
