import { atom } from 'jotai';

export const promoSlideIndexAtom = atom(0);
export const promoVideoLoadedAtom = atom(false);
export const promoVideoEnabledAtom = atom(false);
export const promoMotionPausedAtom = atom(false);

export const selectPromoSlideAtom = atom(
  null,
  (_get, set, index: number) => set(promoSlideIndexAtom, index)
);

export const nextPromoSlideAtom = atom(
  null,
  (get, set, slideCount: number) =>
    set(
      promoSlideIndexAtom,
      (get(promoSlideIndexAtom) + 1) % slideCount
    )
);

export const previousPromoSlideAtom = atom(
  null,
  (get, set, slideCount: number) =>
    set(
      promoSlideIndexAtom,
      get(promoSlideIndexAtom) === 0
        ? slideCount - 1
        : get(promoSlideIndexAtom) - 1
    )
);

export const setPromoVideoEnabledAtom = atom(
  null,
  (_get, set, isEnabled: boolean) =>
    set(promoVideoEnabledAtom, isEnabled)
);

export const setPromoMotionPausedAtom = atom(
  null,
  (_get, set, isPaused: boolean) =>
    set(promoMotionPausedAtom, isPaused)
);

export const togglePromoMotionAtom = atom(null, (get, set) =>
  set(promoMotionPausedAtom, !get(promoMotionPausedAtom))
);

export const resetPromoAtom = atom(null, (_get, set) => {
  set(promoSlideIndexAtom, 0);
  set(promoVideoLoadedAtom, false);
  set(promoVideoEnabledAtom, false);
  set(promoMotionPausedAtom, false);
});
