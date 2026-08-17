import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect, useMemo } from 'react';

import type { Work } from '@/entities/work';

import {
  galleryImageIndexAtom,
  galleryThumbsSwiperAtom,
  nextGalleryImageAtom,
  previousGalleryImageAtom,
  resetWorkGalleryAtom,
  selectGalleryImageAtom,
  setGallerySwiperAtom,
  setGalleryThumbsSwiperAtom,
  syncGalleryImageAtom,
} from './work-gallery.atoms';

export const useWorkGallery = (product: Work) => {
  const currentIndex = useAtomValue(galleryImageIndexAtom);
  const thumbsSwiper = useAtomValue(galleryThumbsSwiperAtom);
  const selectImage = useSetAtom(selectGalleryImageAtom);
  const nextImage = useSetAtom(nextGalleryImageAtom);
  const previousImage = useSetAtom(previousGalleryImageAtom);
  const resetGallery = useSetAtom(resetWorkGalleryAtom);
  const setSwiper = useSetAtom(setGallerySwiperAtom);
  const setThumbsSwiper = useSetAtom(
    setGalleryThumbsSwiperAtom
  );
  const syncImage = useSetAtom(syncGalleryImageAtom);
  const images = useMemo(
    () => [product.imageSrc, ...(product.additionalImages ?? [])],
    [product.additionalImages, product.imageSrc]
  );

  useEffect(() => () => resetGallery(), [resetGallery]);

  return {
    currentIndex,
    hasMultipleImages: images.length > 1,
    images,
    nextImage,
    previousImage,
    selectImage,
    setSwiper,
    setThumbsSwiper,
    syncImage,
    thumbsSwiper,
  };
};
