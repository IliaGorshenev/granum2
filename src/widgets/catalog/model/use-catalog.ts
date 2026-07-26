import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import {
  closeCatalogItemAtom,
  selectedCatalogItemAtom,
  selectCatalogItemAtom,
} from './catalog.atoms';

export const useCatalog = () => {
  const selectedItem = useAtomValue(selectedCatalogItemAtom);
  const selectItem = useSetAtom(selectCatalogItemAtom);
  const closeItem = useSetAtom(closeCatalogItemAtom);

  useEffect(() => () => closeItem(), [closeItem]);

  return {
    closeItem,
    selectedItem,
    selectItem,
  };
};
