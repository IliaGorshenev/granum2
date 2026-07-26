export type PromoMediaType = 'image' | 'video';

interface PromoSlideBase {
  title: string;
  subtitle: string;
}

export interface PromoImageSlide extends PromoSlideBase {
  imageSrc: string;
  type: 'image';
}

export interface PromoVideoSlide extends PromoSlideBase {
  imageSrc: string;
  posterSrc: string;
  type: 'video';
}

export type PromoSlide = PromoImageSlide | PromoVideoSlide;
