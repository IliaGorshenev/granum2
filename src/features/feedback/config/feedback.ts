import type { FeedbackPayload } from '../model/types';

export const RUSSIAN_PHONE = {
  countryCode: '7',
  digitsCount: 11,
  domesticPrefix: '8',
  localDigitsCount: 10,
  pattern: '\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}',
  placeholder: '+7 (___) ___-__-__',
  prefix: '+7',
} as const;

export const EMPTY_FEEDBACK: FeedbackPayload = {
  name: '',
  email: '',
  phone: RUSSIAN_PHONE.prefix,
  projectType: '',
  message: '',
};

export const PROJECT_TYPES = [
  { id: 'Столешница', label: 'Столешница' },
  { id: 'Ступени и входная группа', label: 'Ступени и входная группа' },
  { id: 'Подоконники', label: 'Подоконники' },
  { id: 'Благоустройство', label: 'Благоустройство' },
  { id: 'Другой проект', label: 'Другой проект' },
] as const;

export const FEEDBACK_MESSAGES = {
  invalid: 'Проверьте имя, телефон и тип изделия.',
  success: 'Спасибо! Свяжемся с вами для уточнения расчёта.',
  failure: 'Произошла ошибка при отправке заявки. Попробуйте заново.',
} as const;
