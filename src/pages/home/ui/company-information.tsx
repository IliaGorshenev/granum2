import { Surface } from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import { SectionHeading } from '@/shared/ui/section-heading';
import { AboutDetails } from '@/widgets/about';
import { Faq } from '@/widgets/faq';

export const CompanyInformation = () => (
  <section className="w-full bg-surface px-5 pt-0 pb-14 sm:px-6 sm:pb-16">
    <div className="mx-auto grid max-w-7xl min-w-0 items-start gap-5 lg:grid-cols-2 lg:gap-6">
      <Surface
        className="min-w-0 space-y-6 rounded-3xl border border-border/80 bg-background p-5 shadow-sm sm:p-7 lg:p-8"
        variant="transparent">
        <SectionHeading
          align="start"
          eyebrow="Гранум"
          icon="experience"
          title="О нас"
        />
        <AboutDetails />
      </Surface>
      <Surface
        className="min-w-0 scroll-mt-24 space-y-6 rounded-3xl border border-border/80 bg-background p-5 shadow-sm sm:p-7 lg:p-8"
        id={HOME_SECTION_IDS.faq}
        variant="transparent">
        <SectionHeading
          align="start"
          eyebrow="Перед заказом"
          icon="consultation"
          title="Частые вопросы"
        />
        <Faq />
      </Surface>
    </div>
  </section>
);
