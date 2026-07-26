import {
  DisclosureGroup,
  Surface,
} from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import { AccordionPanel } from '@/shared/ui/accordion-panel';
import { SectionHeading } from '@/shared/ui/section-heading';

import { FAQ_ITEMS } from '../config/faq';

const Faq = () => (
  <section
    className="w-full bg-surface px-5 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-16"
    id={HOME_SECTION_IDS.faq}>
    <Surface
      className="mx-auto max-w-4xl space-y-8 p-0"
      variant="transparent">
      <SectionHeading
        eyebrow="Перед заказом"
        title="Частые вопросы"
      />
      <DisclosureGroup className="space-y-2">
        {FAQ_ITEMS.map((item) => (
          <AccordionPanel
            id={item.id}
            key={item.id}
            title={item.question}>
            {item.answer}
          </AccordionPanel>
        ))}
      </DisclosureGroup>
    </Surface>
  </section>
);

export default Faq;
