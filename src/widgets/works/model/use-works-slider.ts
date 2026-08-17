import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import type { Work } from '@/entities/work';

import {
  closeWorkAtom,
  resetWorksSliderAtom,
  selectedWorkAtom,
  selectWorkAtom,
  selectWorksSlideAtom,
  setWorksAutoplayPausedAtom,
  setWorksSwiperAtom,
  showNextWorksSlideAtom,
  showPreviousWorksSlideAtom,
  showWorksSlideAtom,
  worksAutoplayPausedAtom,
  worksSlideIndexAtom,
  worksSwiperAtom,
} from './works.atoms';

export const useWorksSlider = () => {
  const currentSlide = useAtomValue(worksSlideIndexAtom);
  const isAutoplayPaused = useAtomValue(worksAutoplayPausedAtom);
  const selectedWork = useAtomValue(selectedWorkAtom);
  const swiper = useAtomValue(worksSwiperAtom);
  const closeWork = useSetAtom(closeWorkAtom);
  const selectSlide = useSetAtom(selectWorksSlideAtom);
  const selectWork = useSetAtom(selectWorkAtom);
  const setAutoplayPaused = useSetAtom(
    setWorksAutoplayPausedAtom
  );
  const setSwiper = useSetAtom(setWorksSwiperAtom);
  const showSlide = useSetAtom(showWorksSlideAtom);
  const nextSlide = useSetAtom(showNextWorksSlideAtom);
  const previousSlide = useSetAtom(showPreviousWorksSlideAtom);
  const resetSlider = useSetAtom(resetWorksSliderAtom);

  useEffect(() => {
    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const syncMotionPreference = () =>
      setAutoplayPaused(motionQuery.matches);

    syncMotionPreference();
    motionQuery.addEventListener('change', syncMotionPreference);

    return () =>
      motionQuery.removeEventListener(
        'change',
        syncMotionPreference
      );
  }, [setAutoplayPaused]);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    if (isAutoplayPaused) {
      swiper.autoplay.stop();
      return;
    }

    swiper.autoplay.start();
  }, [isAutoplayPaused, swiper]);

  useEffect(() => () => resetSlider(), [resetSlider]);

  return {
    closeWork,
    currentSlide,
    isAutoplayPaused,
    nextSlide,
    previousSlide,
    selectSlide,
    selectedWork,
    selectWork: (work: Work) => selectWork(work),
    setSwiper,
    showSlide,
  };
};
