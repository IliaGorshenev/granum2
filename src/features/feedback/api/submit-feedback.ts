import type { FeedbackPayload } from '../model/types';

export const submitFeedback = async (
  payload: FeedbackPayload
): Promise<void> => {
  const response = await fetch('/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Feedback request failed: ${response.status}`);
  }
};
