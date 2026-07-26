import type { FeedbackPayload } from '../model/types';

export const formatFeedbackMessage = ({
  name,
  email,
  phone,
  projectType,
  message,
}: FeedbackPayload) =>
  [
    'Поступила новая заявка с сайта',
    '',
    `Имя: ${name}`,
    email ? `Почта: ${email}` : '',
    `Телефон: ${phone}`,
    `Тип изделия: ${projectType}`,
    '',
    message ? 'Комментарий:' : '',
    message,
  ]
    .filter((line, index, lines) => line || lines[index - 1])
    .join('\n');
