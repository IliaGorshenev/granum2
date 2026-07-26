'use client';

import {
  Button,
  Card,
  Chip,
  Surface,
} from '@heroui/react';

import { COMPANY_CONTACTS } from '@/shared/config';
import {
  Goals,
  trackExternalLink,
  trackGoal,
} from '@/shared/lib/analytics';

import {
  CONTACT_MAP_EXTERNAL_URL,
  CONTACT_MAP_URL,
} from '../config/contact';
import { useContactMap } from '../model/use-contact-map';

export const ContactMap = () => {
  const map = useContactMap();

  if (map.isVisible) {
    return (
      <Surface
        className="relative min-h-[28rem] overflow-hidden rounded-2xl border border-border/80 lg:min-h-[36rem]"
        variant="secondary">
        <iframe
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          src={CONTACT_MAP_URL}
          title="Карта проезда к производству Granum"
        />
        <Surface
          className="absolute inset-x-4 bottom-4 z-10 flex flex-col gap-3 rounded-xl border border-border/80 bg-surface/95 p-4 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
          variant="transparent">
          <p className="text-sm leading-5 font-semibold">
            {COMPANY_CONTACTS.address}
          </p>
          <Button
            className="shrink-0 font-bold"
            onPress={() => {
              trackExternalLink(CONTACT_MAP_EXTERNAL_URL);
              window.open(
                CONTACT_MAP_EXTERNAL_URL,
                '_blank',
                'noopener,noreferrer'
              );
            }}
            size="sm"
            variant="secondary">
            Открыть в Яндекс Картах
          </Button>
        </Surface>
      </Surface>
    );
  }

  return (
    <Card className="relative min-h-[28rem] overflow-hidden border border-border/80 bg-surface-secondary p-1 shadow-lg lg:min-h-[36rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(42_111_76_/_16%),transparent_38%),radial-gradient(circle_at_80%_75%,rgb(199_163_92_/_18%),transparent_42%)]" />
      <Card.Content className="relative flex h-full flex-col justify-end px-6 py-7 sm:px-8 sm:py-9">
        <Chip className="mb-5 w-fit" color="accent" variant="soft">
          Производство Granum
        </Chip>
        <Card.Title className="max-w-lg text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
          Приезжайте посмотреть камень
        </Card.Title>
        <Card.Description className="mt-4 max-w-xl text-sm leading-6 sm:text-base">
          {COMPANY_CONTACTS.address}
        </Card.Description>
        <p className="mt-2 text-sm font-semibold text-foreground">
          {COMPANY_CONTACTS.schedule}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            className="font-bold"
            onPress={map.show}
            variant="primary">
            Показать карту
          </Button>
          <Button
            className="font-bold"
            onPress={() => {
              trackGoal(Goals.PHONE_CLICKED);
              window.location.href = COMPANY_CONTACTS.phoneHref;
            }}
            variant="secondary">
            {COMPANY_CONTACTS.phone}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
