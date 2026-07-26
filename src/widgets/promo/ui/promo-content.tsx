'use client';

import {
  Button,
  Chip,
  Surface,
} from '@heroui/react';
import Image from 'next/image';

import type { PromoSlide } from '@/entities/promo';
import { ACTION_BUTTON_ICON_URL } from '@/shared/config';
import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

import { PROMO_TEXT_ANIMATION_DELAYS } from '../config/promo';

interface PromoContentProps {
  currentIndex: number;
  primaryHref: string;
  secondaryHref: string;
  slide: PromoSlide;
}

const scrollToSection = (href: string) => {
  const section = document.querySelector(href);

  if (!section) {
    throw new Error(`Section "${href}" is missing`);
  }

  section.scrollIntoView({ behavior: 'smooth' });
};

export const PromoContent = ({
  currentIndex,
  primaryHref,
  secondaryHref,
  slide,
}: PromoContentProps) => (
  <Surface
    className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-black/38 px-3 py-7 text-center shadow-xl backdrop-blur-sm sm:px-10 sm:py-9"
    variant="transparent">
    <Chip
      className="mb-5 border-white/20 bg-white/10 text-white"
      size="sm"
      variant="soft">
      Изделия из натурального камня
    </Chip>
    <div
      className="animate-promo-fade-in-up opacity-0"
      key={`title-${currentIndex}`}>
      <h1 className="mx-auto mb-4 max-w-2xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.04] font-semibold tracking-[-0.05em] text-white drop-shadow-lg">
        {slide.title}
      </h1>
    </div>
    <div
      className="animate-promo-fade-in-up opacity-0"
      key={`subtitle-${currentIndex}`}
      style={{
        animationDelay: `${PROMO_TEXT_ANIMATION_DELAYS.subtitle}s`,
      }}>
      <p className="mx-auto mb-7 max-w-xl text-sm leading-6 font-medium text-white/80 drop-shadow sm:text-base sm:leading-7">
        {slide.subtitle}
      </p>
    </div>
    <div key={`button-${currentIndex}`}>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          className="w-full max-w-xs min-w-0 justify-center px-3 text-sm font-bold sm:w-auto sm:px-5"
          onPress={() => {
            trackGoal(Goals.QUOTE_CTA_CLICKED);
            scrollToSection(primaryHref);
          }}
          size="md"
          variant="primary">
          <Image
            alt=""
            className="size-5 shrink-0 object-contain max-sm:hidden"
            height={20}
            src={ACTION_BUTTON_ICON_URL}
            width={20}
          />
          <span>Рассчитать стоимость</span>
        </Button>
        <Button
          className="w-full max-w-xs min-w-0 justify-center border-white/30 px-3 text-sm font-bold text-white sm:w-auto sm:px-5"
          onPress={() => {
            trackGoal(Goals.CATALOG_CTA_CLICKED);
            scrollToSection(secondaryHref);
          }}
          size="md"
          variant="outline">
          Смотреть каталог
        </Button>
      </div>
    </div>
  </Surface>
);
