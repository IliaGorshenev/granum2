import { Surface } from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import { SectionHeading } from '@/shared/ui/section-heading';

import { AboutHighlights } from './about-highlights';

const AboutCompany = () => (
  <section
    className="relative w-full overflow-hidden bg-surface px-5 pt-14 pb-4 sm:px-6 sm:pt-16 sm:pb-6"
    id={HOME_SECTION_IDS.about}>
    <Surface
      className="relative z-10 mx-auto max-w-7xl space-y-8 p-0 sm:space-y-10"
      variant="transparent">
      <SectionHeading
        eyebrow="Гранум"
        icon="workshop"
        title="Производство, которому доверяют"
      />
      <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-muted sm:text-base">
        Работаем с натуральным камнем и сопровождаем проект от выбора
        материала до монтажа.
      </p>
      <AboutHighlights />
    </Surface>
  </section>
);

export default AboutCompany;
