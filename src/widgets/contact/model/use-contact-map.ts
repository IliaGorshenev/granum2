import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

import {
  contactMapVisibleAtom,
  resetContactMapAtom,
  showContactMapAtom,
} from './contact.atoms';

export const useContactMap = () => {
  const isVisible = useAtomValue(contactMapVisibleAtom);
  const showMap = useSetAtom(showContactMapAtom);
  const resetMap = useSetAtom(resetContactMapAtom);

  useEffect(() => () => resetMap(), [resetMap]);

  return {
    isVisible,
    show: () => {
      showMap();
      trackGoal(Goals.MAP_OPENED);
    },
  };
};
