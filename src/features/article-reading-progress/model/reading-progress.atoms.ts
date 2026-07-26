import { atom } from 'jotai';

export const readingProgressAtom = atom(0);

export const setReadingProgressAtom = atom(
  null,
  (_get, set, progress: number) =>
    set(readingProgressAtom, progress)
);
