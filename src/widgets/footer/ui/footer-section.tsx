import { Card } from '@heroui/react';
import type { ReactNode } from 'react';

interface FooterSectionProps {
  children: ReactNode;
  title: string;
}

export const FooterSection = ({
  children,
  title,
}: FooterSectionProps) => (
  <Card
    className="flex min-w-0 flex-col items-start bg-transparent p-0 text-white shadow-none"
    variant="transparent">
    <Card.Title className="mb-4 text-base font-semibold text-white">
      {title}
    </Card.Title>
    <Card.Content className="flex min-w-0 flex-col items-start gap-3 p-0">
      {children}
    </Card.Content>
  </Card>
);
