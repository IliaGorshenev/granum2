import { Disclosure } from '@heroui/react';
import type { ReactNode } from 'react';

interface AccordionPanelProps {
  bodyClassName?: string;
  children: ReactNode;
  id: string;
  title: string;
}

export const AccordionPanel = ({
  bodyClassName = '',
  children,
  id,
  title,
}: AccordionPanelProps) => (
  <Disclosure
    className="overflow-hidden rounded-2xl border border-border/80 bg-background/70"
    id={id}>
    <Disclosure.Heading>
      <Disclosure.Trigger className="flex w-full items-center gap-4 px-5 py-3.5 text-left text-sm font-semibold sm:px-6 sm:py-4 sm:text-base">
        <span className="min-w-0 flex-1">{title}</span>
        <Disclosure.Indicator className="size-4 shrink-0" />
      </Disclosure.Trigger>
    </Disclosure.Heading>
    <Disclosure.Content>
      <Disclosure.Body
        className={`px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:pb-6 ${bodyClassName}`}>
        {children}
      </Disclosure.Body>
    </Disclosure.Content>
  </Disclosure>
);
