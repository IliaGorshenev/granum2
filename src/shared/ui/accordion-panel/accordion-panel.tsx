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
    className="overflow-hidden rounded-2xl border border-border/80 bg-surface/80 transition-colors data-[expanded=true]:border-accent/25 data-[expanded=true]:bg-background"
    id={id}>
    <Disclosure.Heading>
      <Disclosure.Trigger className="flex min-h-14 w-full items-center gap-4 px-5 py-3.5 text-left text-sm font-semibold sm:min-h-16 sm:px-6 sm:py-4 sm:text-base">
        <span className="min-w-0 flex-1">{title}</span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/8 text-accent">
          <Disclosure.Indicator className="size-4" />
        </span>
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
