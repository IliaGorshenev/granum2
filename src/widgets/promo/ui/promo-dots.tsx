import { Button, ButtonGroup } from '@heroui/react';

import type { PromoSlide } from '@/entities/promo';

interface PromoDotsProps {
  currentIndex: number;
  onSelect: (index: number) => void;
  slides: PromoSlide[];
}

export const PromoDots = ({
  currentIndex,
  onSelect,
  slides,
}: PromoDotsProps) => (
  <ButtonGroup
    aria-label="Выбор слайда"
    className="mt-5 flex w-full flex-wrap justify-center gap-2"
    size="sm"
    variant="ghost">
    {slides.map((slide, index) => (
      <Button
        aria-current={
          index === currentIndex ? 'true' : undefined
        }
        aria-label={`Показать слайд ${index + 1}`}
        className={`size-2 min-w-0 rounded-full p-0 transition-all ${
          index === currentIndex
            ? 'w-6 bg-white'
            : 'bg-white/40'
        }`}
        isIconOnly
        key={slide.imageSrc}
        onPress={() => onSelect(index)}
      />
    ))}
  </ButtonGroup>
);
