import { atom } from 'jotai';

export const printArticleAtom = atom(
  null,
  () => window.print()
);
