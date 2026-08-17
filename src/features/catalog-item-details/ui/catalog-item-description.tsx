import { Disclosure } from '@heroui/react';

import { getDescriptionLead } from '../lib/get-description-lead';

interface CatalogItemDescriptionProps {
  description: string;
}

export const CatalogItemDescription = ({
  description,
}: CatalogItemDescriptionProps) => (
  <>
    <p className="mt-5 hidden max-w-2xl text-sm leading-7 text-muted sm:block sm:text-base">
      {description}
    </p>
    <div className="mt-5 sm:hidden">
      <p className="text-sm leading-7 text-muted">
        {getDescriptionLead(description)}
      </p>
      <Disclosure className="mt-3 overflow-hidden rounded-2xl border border-border/80 bg-surface-secondary">
        <Disclosure.Heading>
          <Disclosure.Trigger className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-foreground">
            <span className="min-w-0 flex-1">Полное описание</span>
            <Disclosure.Indicator className="size-4 shrink-0" />
          </Disclosure.Trigger>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body className="px-4 pb-4 text-sm leading-7 text-muted">
            {description}
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </div>
  </>
);
