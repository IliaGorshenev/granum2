'use client';

import {
  Button,
  Card,
  Form,
} from '@heroui/react';
import type { FormEvent } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/shared/config';
import { useFeedbackForm } from '../model/use-feedback-form';
import { FeedbackFields } from './feedback-fields';
import { FeedbackStatus } from './feedback-status';

export const FeedbackForm = () => {
  const {
    form,
    isSubmitting,
    status,
    submit,
    updateField,
  } = useFeedbackForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submit();
  };

  return (
    <Card className="z-10 h-fit min-w-0 border border-border/80 p-1 shadow-xl">
      <Card.Header className="min-w-0 items-start px-5 pt-6 pb-2 sm:px-6">
        <div className="min-w-0">
          <p className="mb-2 text-xs font-bold tracking-[0.16em] text-accent uppercase">
            Заявка на расчёт
          </p>
          <Card.Title className="text-2xl font-semibold tracking-[-0.035em]">
            Получите предварительный расчёт
          </Card.Title>
          <Card.Description className="mt-2 text-sm leading-6">
            Уточним детали и свяжемся в рабочее время.
          </Card.Description>
        </div>
      </Card.Header>
      <Card.Content className="min-w-0 px-5 py-4 sm:px-6">
        <Form className="flex min-w-0 flex-col gap-4" onSubmit={handleSubmit}>
          <FeedbackFields form={form} onChange={updateField} />
          <Button
            className="font-bold"
            fullWidth
            isPending={isSubmitting}
            size="sm"
            type="submit"
            variant="primary">
            {isSubmitting ? 'Отправка...' : 'Получить расчёт'}
          </Button>
          {status && <FeedbackStatus value={status} />}
        </Form>
      </Card.Content>
      <Card.Footer className="justify-center px-5 pt-0 pb-6 text-center text-xs leading-5 text-muted sm:px-6">
        <span>
          Отправляя форму, вы соглашаетесь с{' '}
          <Link
            className="text-accent underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
            href={ROUTES.privacy}>
            политикой обработки данных
          </Link>
          .
        </span>
      </Card.Footer>
    </Card>
  );
};
