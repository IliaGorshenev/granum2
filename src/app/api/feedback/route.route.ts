import { NextResponse } from 'next/server';

import {
  parseFeedbackPayload,
  sendFeedback,
} from '@/features/feedback/server';

const HTTP_STATUS = {
  badRequest: 400,
  badGateway: 502,
  noContent: 204,
} as const;

export const runtime = 'nodejs';

export const POST = async (request: Request) => {
  let payload: ReturnType<typeof parseFeedbackPayload>;

  try {
    payload = parseFeedbackPayload(await request.json());
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Invalid feedback payload';

    return NextResponse.json(
      { error: message },
      { status: HTTP_STATUS.badRequest }
    );
  }

  try {
    await sendFeedback(payload);
    return new NextResponse(null, {
      status: HTTP_STATUS.noContent,
    });
  } catch (error) {
    console.error('Feedback delivery failed', error);
    return NextResponse.json(
      { error: 'Feedback delivery failed' },
      { status: HTTP_STATUS.badGateway }
    );
  }
};
