import {
  Card,
  Surface,
} from '@heroui/react';

import { StoneIcon } from '@/shared/ui/stone-icon';

import { TRUST_FACTS } from '../config/facts';

const TrustBar = () => (
  <section
    aria-label="Преимущества компании"
    className="relative z-10 -mt-8 w-full px-5 sm:px-6">
    <Surface
      className="mx-auto grid max-w-6xl grid-cols-2 gap-3 rounded-2xl border border-border/80 bg-surface p-3 shadow-lg lg:grid-cols-4"
      variant="transparent">
      {TRUST_FACTS.map((fact) => (
        <Card
          className="min-w-0 border-0 bg-transparent p-0 shadow-none"
          key={fact.value}
          variant="transparent">
          <Card.Content className="flex-row items-start gap-3 px-3 py-4 sm:px-4">
            <StoneIcon name={fact.icon} size="sm" />
            <div className="min-w-0">
              <p className="text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
                {fact.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                {fact.label}
              </p>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Surface>
  </section>
);

export default TrustBar;
