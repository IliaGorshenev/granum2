import type { FeedbackPayload } from '../model/types';
import { RUSSIAN_PHONE } from '../config/feedback';

const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const parseFeedbackPayload = (body: unknown): FeedbackPayload => {
  if (!body || typeof body !== 'object') {
    throw new Error('Feedback payload must be an object');
  }

  const {
    name,
    email,
    phone,
    projectType,
    message,
  } = body as Record<string, unknown>;

  if (
    !isString(name) ||
    !isString(email) ||
    !isString(phone) ||
    !isString(projectType) ||
    !isString(message)
  ) {
    throw new Error('Feedback fields must be strings');
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    projectType: projectType.trim(),
    message: message.trim(),
  };
  const phoneDigits = payload.phone.replace(/\D/g, '');

  if (
    !payload.name ||
    !payload.projectType ||
    phoneDigits.length !== RUSSIAN_PHONE.digitsCount ||
    !phoneDigits.startsWith(RUSSIAN_PHONE.countryCode)
  ) {
    throw new Error('Feedback required fields are missing');
  }

  return payload;
};
