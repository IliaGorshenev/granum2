'use client';

import { ProgressBar } from '@heroui/react';

import { useReadingProgress } from '../model/use-reading-progress';

export const ArticleReadingProgress = () => {
  const progress = useReadingProgress();

  return (
    <ProgressBar
      aria-label="Прогресс чтения"
      className="fixed top-0 left-0 z-[1100] w-full"
      value={progress}>
      <ProgressBar.Track className="h-1 rounded-none">
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
  );
};
