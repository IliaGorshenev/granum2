'use client';

import { Button } from '@heroui/react';

import type { PromoSlide } from '@/entities/promo';
import { LeftArrowIcon, RightArrowIcon } from '@/shared/ui/slider-controls';

import { usePromo } from '../model/use-promo';
import { PromoBackground } from './promo-background';
import { PromoContent } from './promo-content';
import { PromoDots } from './promo-dots';

interface PromoBlockProps {
  slides: PromoSlide[];
  primaryHref: string;
  secondaryHref: string;
}

const PromoBlock = ({
  slides,
  primaryHref,
  secondaryHref,
}: PromoBlockProps) => {
  const promo = usePromo(slides);

  return (
    <section className="relative flex min-h-[42rem] w-full items-center overflow-hidden py-28 sm:min-h-[46rem]">
      <PromoBackground
        isMotionPaused={promo.isMotionPaused}
        isVideoEnabled={promo.isVideoEnabled}
        isVideoLoaded={promo.isVideoLoaded}
        onVideoError={() => promo.setVideoLoaded(false)}
        onVideoReady={() => promo.setVideoLoaded(true)}
        slide={promo.currentSlide}
      />

      <div className="relative mx-auto w-full max-w-5xl px-12 text-center sm:px-18">
        <PromoContent
          currentIndex={promo.currentIndex}
          primaryHref={primaryHref}
          secondaryHref={secondaryHref}
          slide={promo.currentSlide}
        />
        <PromoDots
          currentIndex={promo.currentIndex}
          onSelect={promo.selectSlide}
          slides={slides}
        />

        <LeftArrowIcon
          className="left-1 sm:left-3"
          onClick={promo.previousSlide}
        />
        <RightArrowIcon
          className="right-1 sm:right-3"
          onClick={promo.nextSlide}
        />
      </div>
      {promo.currentSlide.type === 'video' &&
        promo.isVideoEnabled && (
          <Button
            aria-label={
              promo.isMotionPaused
                ? 'Возобновить видео'
                : 'Приостановить видео'
            }
            className="absolute right-5 bottom-5 z-10 border-white/20 bg-black/45 text-white backdrop-blur-sm"
            onPress={promo.toggleMotion}
            size="sm"
            variant="tertiary">
            {promo.isMotionPaused ? 'Включить видео' : 'Пауза'}
          </Button>
        )}
    </section>
  );
};

export default PromoBlock;
