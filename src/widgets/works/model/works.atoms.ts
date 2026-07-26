import { atom } from 'jotai';
import type { Swiper } from 'swiper';

import type { Work } from '@/entities/work';

export const worksSlideIndexAtom = atom(0);
export const worksSwiperAtom = atom<Swiper | null>(null);
export const worksAutoplayPausedAtom = atom(false);
export const selectedWorkAtom = atom<Work | null>(null);

export const selectWorksSlideAtom = atom(
  null,
  (_get, set, index: number) => set(worksSlideIndexAtom, index)
);

export const setWorksSwiperAtom = atom(
  null,
  (_get, set, swiper: Swiper) => set(worksSwiperAtom, swiper)
);

export const setWorksAutoplayPausedAtom = atom(
  null,
  (_get, set, isPaused: boolean) =>
    set(worksAutoplayPausedAtom, isPaused)
);

export const toggleWorksAutoplayAtom = atom(null, (get, set) =>
  set(worksAutoplayPausedAtom, !get(worksAutoplayPausedAtom))
);

export const selectWorkAtom = atom(
  null,
  (_get, set, work: Work) => set(selectedWorkAtom, work)
);

export const closeWorkAtom = atom(
  null,
  (_get, set) => set(selectedWorkAtom, null)
);

export const showWorksSlideAtom = atom(
  null,
  (get, _set, index: number) =>
    get(worksSwiperAtom)?.slideTo(index)
);

export const showNextWorksSlideAtom = atom(
  null,
  (get) => get(worksSwiperAtom)?.slideNext()
);

export const showPreviousWorksSlideAtom = atom(
  null,
  (get) => get(worksSwiperAtom)?.slidePrev()
);

export const resetWorksSliderAtom = atom(null, (_get, set) => {
  set(worksSlideIndexAtom, 0);
  set(worksSwiperAtom, null);
  set(worksAutoplayPausedAtom, false);
  set(selectedWorkAtom, null);
});
