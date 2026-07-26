import { atom } from 'jotai';

export const headerScrolledAtom = atom(false);
export const mobileMenuOpenAtom = atom(false);

export const setHeaderScrolledAtom = atom(
  null,
  (_get, set, isScrolled: boolean) =>
    set(headerScrolledAtom, isScrolled)
);

export const setMobileMenuOpenAtom = atom(
  null,
  (_get, set, isOpen: boolean) =>
    set(mobileMenuOpenAtom, isOpen)
);

export const openMobileMenuAtom = atom(
  null,
  (_get, set) => set(mobileMenuOpenAtom, true)
);

export const closeMobileMenuAtom = atom(
  null,
  (_get, set) => set(mobileMenuOpenAtom, false)
);

export const toggleMobileMenuAtom = atom(
  null,
  (get, set) =>
    set(mobileMenuOpenAtom, !get(mobileMenuOpenAtom))
);
