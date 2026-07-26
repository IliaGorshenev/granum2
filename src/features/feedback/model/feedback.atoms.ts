import { atom } from 'jotai';

import { EMPTY_FEEDBACK } from '../config/feedback';
import { formatRussianPhone } from '../lib/format-russian-phone';
import type {
  FeedbackFieldUpdate,
  FeedbackStatus,
} from './types';

export const feedbackFormAtom = atom(EMPTY_FEEDBACK);
export const feedbackStatusAtom = atom<FeedbackStatus | null>(null);
export const feedbackSubmittingAtom = atom(false);
export const feedbackStartedAtom = atom(false);

export const updateFeedbackFieldAtom = atom(
  null,
  (get, set, update: FeedbackFieldUpdate) => {
    const value =
      update.field === 'phone'
        ? formatRussianPhone(update.value)
        : update.value;

    set(feedbackFormAtom, {
      ...get(feedbackFormAtom),
      [update.field]: value,
    });
  }
);

export const resetFeedbackAtom = atom(null, (_get, set) => {
  set(feedbackFormAtom, EMPTY_FEEDBACK);
  set(feedbackStatusAtom, null);
  set(feedbackSubmittingAtom, false);
  set(feedbackStartedAtom, false);
});
