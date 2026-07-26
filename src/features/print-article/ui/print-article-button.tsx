'use client';

import { Button } from '@heroui/react';

import { usePrintArticle } from '../model/use-print-article';

export const PrintArticleButton = () => {
  const printArticle = usePrintArticle();

  return (
    <Button
      aria-label="Распечатать статью"
      className="fixed right-4 bottom-4 z-50 shadow-xl sm:right-6 sm:bottom-6 print:hidden"
      isIconOnly
      onPress={printArticle}
      variant="primary">
      🖨️
    </Button>
  );
};
