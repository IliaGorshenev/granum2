import { atom } from 'jotai';

import type { CatalogItem } from '@/entities/catalog-item';

export const selectedCatalogItemAtom = atom<CatalogItem | null>(
  null
);

export const selectCatalogItemAtom = atom(
  null,
  (_get, set, item: CatalogItem) =>
    set(selectedCatalogItemAtom, item)
);

export const closeCatalogItemAtom = atom(
  null,
  (_get, set) => set(selectedCatalogItemAtom, null)
);
