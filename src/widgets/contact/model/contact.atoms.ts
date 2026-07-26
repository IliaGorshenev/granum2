import { atom } from 'jotai';

export const contactMapVisibleAtom = atom(false);

export const showContactMapAtom = atom(null, (_get, set) =>
  set(contactMapVisibleAtom, true)
);

export const resetContactMapAtom = atom(null, (_get, set) =>
  set(contactMapVisibleAtom, false)
);
