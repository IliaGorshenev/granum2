import {
  Card,
  Link,
  Surface,
} from '@heroui/react';
import NextLink from 'next/link';

import { COMPANY_CONTACTS, ROUTES } from '@/shared/config';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import {
  PRIVACY_SECTIONS,
  PRIVACY_UPDATED_AT,
} from '../config/privacy';

const PrivacyPage = () => (
  <Surface className="min-h-screen rounded-none bg-background p-0">
    <Header />
    <main className="mx-auto w-full max-w-4xl px-5 pt-32 pb-20 sm:px-6 sm:pt-36 sm:pb-24">
      <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
        Granum
      </p>
      <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.045em] sm:text-5xl">
        Политика обработки данных
      </h1>
      <p className="mt-4 text-sm text-muted">
        Обновлено: {PRIVACY_UPDATED_AT}
      </p>

      <div className="mt-10 grid gap-4">
        {PRIVACY_SECTIONS.map((section) => (
          <Card
            className="border border-border/80 p-1 shadow-sm"
            key={section.title}>
            <Card.Content className="px-5 py-5 sm:px-6">
              <Card.Title className="text-lg font-semibold">
                {section.title}
              </Card.Title>
              <div className="mt-3 space-y-2 text-sm leading-6 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm leading-6 text-muted">
        Запросы принимаются по адресу{' '}
        <Link href={COMPANY_CONTACTS.emailHref}>
          {COMPANY_CONTACTS.email}
        </Link>
        . Вернуться на{' '}
        <NextLink
          className="text-accent underline-offset-2 hover:underline"
          href={ROUTES.home}>
          главную страницу
        </NextLink>
        .
      </p>
    </main>
    <Footer />
  </Surface>
);

export default PrivacyPage;
