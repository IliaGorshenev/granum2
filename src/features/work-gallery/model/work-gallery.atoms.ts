import { atom } from 'jotai';

export const galleryImageIndexAtom = atom(0);

export const selectGalleryImageAtom = atom(
  null,
  (_get, set, index: number) =>
    set(galleryImageIndexAtom, index)
);

export const nextGalleryImageAtom = atom(
  null,
  (get, set, imageCount: number) =>
    set(
      galleryImageIndexAtom,
      (get(galleryImageIndexAtom) + 1) % imageCount
    )
);

export const previousGalleryImageAtom = atom(
  null,
  (get, set, imageCount: number) =>
    set(
      galleryImageIndexAtom,
      (get(galleryImageIndexAtom) - 1 + imageCount) % imageCount
    )
);
