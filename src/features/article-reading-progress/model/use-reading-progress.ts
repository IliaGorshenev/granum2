import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import { READING_PROGRESS_MAX } from '../config/progress';
import {
  readingProgressAtom,
  setReadingProgressAtom,
} from './reading-progress.atoms';

const calculateProgress = () => {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return READING_PROGRESS_MAX;
  }

  return Math.min(
    (window.scrollY / scrollableHeight) * READING_PROGRESS_MAX,
    READING_PROGRESS_MAX
  );
};

export const useReadingProgress = () => {
  const progress = useAtomValue(readingProgressAtom);
  const setProgress = useSetAtom(setReadingProgressAtom);

  useEffect(() => {
    const updateProgress = () => setProgress(calculateProgress());

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      setProgress(0);
    };
  }, [setProgress]);

  return progress;
};
