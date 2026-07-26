import type { ReactNode } from 'react';

import { AccordionPanel } from '@/shared/ui/accordion-panel';

interface AboutSectionProps {
  children: ReactNode;
  id: string;
  title: string;
}

export const AboutSection = ({
  children,
  id,
  title,
}: AboutSectionProps) => (
  <AccordionPanel
    bodyClassName="space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
    id={id}
    title={title}>
    {children}
  </AccordionPanel>
);
