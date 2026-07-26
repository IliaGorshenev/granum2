import { formatFeedbackMessage } from '../lib/format-feedback-message';
import type { FeedbackPayload } from '../model/types';

interface TelegramResponse {
  ok: boolean;
  description?: string;
}

const requiredEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
};

export const sendFeedback = async (
  payload: FeedbackPayload
): Promise<void> => {
  const token = requiredEnv('TELEGRAM_BOT_TOKEN');
  const chatId = requiredEnv('TELEGRAM_CHAT_ID');
  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatFeedbackMessage(payload),
      }),
    }
  );
  const result = (await response.json()) as TelegramResponse;

  if (!response.ok || !result.ok) {
    throw new Error(
      result.description ?? `Telegram request failed: ${response.status}`
    );
  }
};
