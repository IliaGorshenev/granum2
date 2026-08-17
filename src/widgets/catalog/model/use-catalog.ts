import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import {
  useCallback,
  useEffect,
} from 'react';

import { HOME_SECTION_IDS } from '@/shared/config';
import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

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

  const requestQuote = useCallback(() => {
    const contactSection = document.getElementById(
      HOME_SECTION_IDS.contact
    );

    if (!contactSection) {
      throw new Error('Contact section is missing');
    }

    trackGoal(Goals.QUOTE_CTA_CLICKED);
    closeItem();
    requestAnimationFrame(() =>
      contactSection.scrollIntoView({ behavior: 'smooth' })
    );
  }, [closeItem]);

  return {
    closeItem,
    requestQuote,
    selectedItem,
    selectItem,
  };
};
