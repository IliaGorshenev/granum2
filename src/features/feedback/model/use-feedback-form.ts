import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

import { submitFeedback } from '../api/submit-feedback';
import { EMPTY_FEEDBACK, FEEDBACK_MESSAGES } from '../config/feedback';
import { parseFeedbackPayload } from '../lib/parse-feedback-payload';
import {
  feedbackFormAtom,
  feedbackStartedAtom,
  feedbackStatusAtom,
  feedbackSubmittingAtom,
  resetFeedbackAtom,
  updateFeedbackFieldAtom,
} from './feedback.atoms';
import type { FeedbackPayload } from './types';

export const useFeedbackForm = () => {
  const form = useAtomValue(feedbackFormAtom);
  const status = useAtomValue(feedbackStatusAtom);
  const isSubmitting = useAtomValue(feedbackSubmittingAtom);
  const hasStarted = useAtomValue(feedbackStartedAtom);
  const setForm = useSetAtom(feedbackFormAtom);
  const setStatus = useSetAtom(feedbackStatusAtom);
  const setStarted = useSetAtom(feedbackStartedAtom);
  const setSubmitting = useSetAtom(feedbackSubmittingAtom);
  const updateField = useSetAtom(updateFeedbackFieldAtom);
  const resetFeedback = useSetAtom(resetFeedbackAtom);

  useEffect(() => () => resetFeedback(), [resetFeedback]);

  const submit = async () => {
    let payload: FeedbackPayload;

    try {
      payload = parseFeedbackPayload(form);
    } catch {
      setStatus({
        message: FEEDBACK_MESSAGES.invalid,
        status: 'danger',
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await submitFeedback(payload);
      trackGoal(Goals.FEEDBACK_FORM_SUBMITTED, {
        projectType: payload.projectType,
      });
      setForm(EMPTY_FEEDBACK);
      setStatus({
        message: FEEDBACK_MESSAGES.success,
        status: 'success',
      });
    } catch {
      setStatus({
        message: FEEDBACK_MESSAGES.failure,
        status: 'danger',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    status,
    submit,
    updateField: (
      update: Parameters<typeof updateField>[0]
    ) => {
      if (!hasStarted) {
        setStarted(true);
        trackGoal(Goals.FEEDBACK_FORM_OPENED);
      }

      updateField(update);
    },
  };
};
