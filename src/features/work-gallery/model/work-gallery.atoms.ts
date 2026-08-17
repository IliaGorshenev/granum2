import { atom } from 'jotai';
import type { Swiper } from 'swiper';

export const galleryImageIndexAtom = atom(0);
export const gallerySwiperAtom = atom<Swiper | null>(null);
export const galleryThumbsSwiperAtom = atom<Swiper | null>(null);

export const setGallerySwiperAtom = atom(
  null,
  (_get, set, swiper: Swiper) =>
    set(gallerySwiperAtom, swiper)
);

export const setGalleryThumbsSwiperAtom = atom(
  null,
  (_get, set, swiper: Swiper) =>
    set(galleryThumbsSwiperAtom, swiper)
);

export const selectGalleryImageAtom = atom(
  null,
  (get, set, index: number) => {
    get(gallerySwiperAtom)?.slideTo(index);
    set(galleryImageIndexAtom, index);
  }
);

export const syncGalleryImageAtom = atom(
  null,
  (_get, set, index: number) =>
    set(galleryImageIndexAtom, index)
);

export const nextGalleryImageAtom = atom(
  null,
  (get) => get(gallerySwiperAtom)?.slideNext()
);

export const previousGalleryImageAtom = atom(
  null,
  (get) => get(gallerySwiperAtom)?.slidePrev()
);

export const resetWorkGalleryAtom = atom(null, (_get, set) => {
  set(galleryImageIndexAtom, 0);
  set(gallerySwiperAtom, null);
  set(galleryThumbsSwiperAtom, null);
});
