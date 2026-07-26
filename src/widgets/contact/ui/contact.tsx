'use client';

import { Surface } from '@heroui/react';

import { FeedbackForm } from '@/features/feedback';
import { HOME_SECTION_IDS } from '@/shared/config';

import { ContactMap } from './contact-map';

const Contact = () => (
  <section
    className="w-full bg-background px-5 py-14 sm:px-6 sm:py-16"
    id={HOME_SECTION_IDS.contact}>
    <Surface
      className="mx-auto grid w-full max-w-7xl min-w-0 gap-6 p-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)]"
      variant="transparent">
      <div className="order-2 min-w-0 lg:order-1">
        <ContactMap />
      </div>
      <div className="order-1 min-w-0 lg:order-2">
        <FeedbackForm />
      </div>
    </Surface>
  </section>
);

export default Contact;
