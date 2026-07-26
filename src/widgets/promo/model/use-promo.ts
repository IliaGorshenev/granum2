import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import type { PromoSlide } from '@/entities/promo';

import { PROMO_MEDIA_QUERIES } from '../config/promo';
import {
  nextPromoSlideAtom,
  previousPromoSlideAtom,
  promoSlideIndexAtom,
  promoMotionPausedAtom,
  promoVideoEnabledAtom,
  promoVideoLoadedAtom,
  resetPromoAtom,
  selectPromoSlideAtom,
  setPromoMotionPausedAtom,
  setPromoVideoEnabledAtom,
  togglePromoMotionAtom,
} from './promo.atoms';

interface NetworkInformation {
  saveData: boolean;
}

export const usePromo = (slides: PromoSlide[]) => {
  const currentIndex = useAtomValue(promoSlideIndexAtom);
  const isMotionPaused = useAtomValue(promoMotionPausedAtom);
  const isVideoEnabled = useAtomValue(promoVideoEnabledAtom);
  const isVideoLoaded = useAtomValue(promoVideoLoadedAtom);
  const setMotionPaused = useSetAtom(setPromoMotionPausedAtom);
  const setVideoEnabled = useSetAtom(setPromoVideoEnabledAtom);
  const setVideoLoaded = useSetAtom(promoVideoLoadedAtom);
  const selectSlide = useSetAtom(selectPromoSlideAtom);
  const nextSlide = useSetAtom(nextPromoSlideAtom);
  const previousSlide = useSetAtom(previousPromoSlideAtom);
  const resetPromo = useSetAtom(resetPromoAtom);
  const toggleMotion = useSetAtom(togglePromoMotionAtom);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      PROMO_MEDIA_QUERIES.reducedMotion
    );
    const videoViewportQuery = window.matchMedia(
      PROMO_MEDIA_QUERIES.videoViewport
    );
    const connection = (
      navigator as Navigator & {
        connection?: NetworkInformation;
      }
    ).connection;
    const syncMediaPreference = () => {
      const prefersReducedMotion = reducedMotionQuery.matches;

      setMotionPaused(prefersReducedMotion);
      setVideoEnabled(
        videoViewportQuery.matches &&
          !prefersReducedMotion &&
          !connection?.saveData
      );
    };

    syncMediaPreference();
    reducedMotionQuery.addEventListener(
      'change',
      syncMediaPreference
    );
    videoViewportQuery.addEventListener(
      'change',
      syncMediaPreference
    );

    return () => {
      reducedMotionQuery.removeEventListener(
        'change',
        syncMediaPreference
      );
      videoViewportQuery.removeEventListener(
        'change',
        syncMediaPreference
      );
    };
  }, [setMotionPaused, setVideoEnabled]);

  useEffect(() => () => resetPromo(), [resetPromo]);

  return {
    currentIndex,
    currentSlide: slides[currentIndex],
    isMotionPaused,
    isVideoEnabled,
    isVideoLoaded,
    nextSlide: () => nextSlide(slides.length),
    previousSlide: () => previousSlide(slides.length),
    selectSlide,
    setVideoLoaded,
    toggleMotion,
  };
};
