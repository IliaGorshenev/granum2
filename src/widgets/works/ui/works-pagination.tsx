import { Button, ButtonGroup } from '@heroui/react';

import type { Work } from '@/entities/work';

interface WorksPaginationProps {
  currentSlide: number;
  onSelect: (index: number) => void;
  works: Work[];
}

export const WorksPagination = ({
  currentSlide,
  onSelect,
  works,
}: WorksPaginationProps) => (
  <ButtonGroup
    aria-label="Выбор работы"
    className="mt-7 flex w-full flex-wrap justify-center gap-2"
    size="sm"
    variant="ghost">
    {works.map((work, index) => (
      <Button
        aria-current={
          index === currentSlide ? 'true' : undefined
        }
        aria-label={`Показать работу «${work.title}»`}
        className={`size-2 min-w-0 rounded-full p-0 transition-all ${
          index === currentSlide
            ? 'w-6 bg-accent'
            : 'bg-default'
        }`}
        isIconOnly
        key={work.id}
        onPress={() => onSelect(index)}
      />
    ))}
  </ButtonGroup>
);
