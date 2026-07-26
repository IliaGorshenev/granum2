import {
  Card,
  Chip,
  Surface,
} from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import { SectionHeading } from '@/shared/ui/section-heading';

import { PROCESS_STEPS } from '../config/steps';

const Process = () => (
  <section
    className="w-full bg-surface px-5 py-14 sm:px-6 sm:py-16"
    id={HOME_SECTION_IDS.process}>
    <Surface
      className="mx-auto max-w-7xl space-y-8 p-0 sm:space-y-10"
      variant="transparent">
      <SectionHeading
        eyebrow="Понятный процесс"
        title="От идеи до готового изделия"
      />
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {PROCESS_STEPS.map((step) => (
          <Card
            className="min-w-0 border border-border/80 bg-background p-0 shadow-sm"
            key={step.number}>
            <Card.Header className="px-5 pt-5 pb-2">
              <Chip color="accent" size="sm" variant="soft">
                {step.number}
              </Chip>
            </Card.Header>
            <Card.Content className="gap-3 px-5 pt-2 pb-5">
              <Card.Title className="text-lg font-semibold tracking-[-0.02em]">
                {step.title}
              </Card.Title>
              <Card.Description className="text-sm leading-6">
                {step.description}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Surface>
  </section>
);

export default Process;
