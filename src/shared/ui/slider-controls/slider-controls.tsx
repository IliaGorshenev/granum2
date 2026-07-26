import { Button } from '@heroui/react';

interface ArrowIconProps {
  className?: string;
  onClick?: () => void;
}

const arrowClassName =
  'pointer-events-auto absolute top-1/2 z-10 size-10 min-w-0 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-0 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105';

export const LeftArrowIcon = ({
  className = '',
  onClick,
}: ArrowIconProps) => (
  <Button
    aria-label="Назад"
    className={`${arrowClassName} left-3 ${className}`}
    isIconOnly
    onPress={onClick}
    variant="tertiary">
    <svg className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  </Button>
);

export const RightArrowIcon = ({
  className = '',
  onClick,
}: ArrowIconProps) => (
  <Button
    aria-label="Вперёд"
    className={`${arrowClassName} right-3 ${className}`}
    isIconOnly
    onPress={onClick}
    variant="tertiary">
    <svg className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  </Button>
);
