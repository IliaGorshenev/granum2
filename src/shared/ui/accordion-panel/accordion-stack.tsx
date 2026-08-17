import { DisclosureGroup } from '@heroui/react';
import type { ReactNode } from 'react';

interface AccordionStackProps {
  children: ReactNode;
}

export const AccordionStack = ({
  children,
}: AccordionStackProps) => (
  <DisclosureGroup className="flex flex-col gap-3">
    {children}
  </DisclosureGroup>
);
