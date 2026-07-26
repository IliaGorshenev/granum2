'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import type { PromoSlide } from '@/entities/promo';

interface PromoBackgroundProps {
  isMotionPaused: boolean;
  isVideoEnabled: boolean;
  isVideoLoaded: boolean;
  onVideoError: () => void;
  onVideoReady: () => void;
  slide: PromoSlide;
}

export const PromoBackground = ({
  isMotionPaused,
  isVideoEnabled,
  isVideoLoaded,
  onVideoError,
  onVideoReady,
  slide,
}: PromoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const image =
    slide.type === 'video' ? slide.posterSrc : slide.imageSrc;

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isMotionPaused) {
      video.pause();
      return;
    }

    void video.play();
  }, [isMotionPaused]);

  return (
    <div className="animate-promo-fade-in absolute inset-0">
      <Image
        fill
        alt=""
        className="object-cover object-center"
        preload
        sizes="100vw"
        src={image}
      />
      {slide.type === 'video' && isVideoEnabled && (
        <video
          aria-hidden
          autoPlay={!isMotionPaused}
          className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          onCanPlay={onVideoReady}
          onError={onVideoError}
          playsInline
          poster={slide.posterSrc}
          preload="metadata"
          ref={videoRef}
          tabIndex={-1}>
          <source src={slide.imageSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/28 to-black/42" />
    </div>
  );
};
