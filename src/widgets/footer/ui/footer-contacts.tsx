import { Link } from '@heroui/react';

import { COMPANY_CONTACTS } from '@/shared/config';

import { FooterSection } from './footer-section';

const contactClassName =
  'max-w-full break-words text-sm leading-6 text-white/60';

export const FooterContacts = () => (
  <FooterSection title="Свяжитесь с нами">
    <p className={contactClassName}>{COMPANY_CONTACTS.address}</p>
    <Link
      className={contactClassName}
      href={COMPANY_CONTACTS.phoneHref}>
      {COMPANY_CONTACTS.phone}
    </Link>
    <Link
      className={contactClassName}
      href={COMPANY_CONTACTS.emailHref}>
      {COMPANY_CONTACTS.email}
    </Link>
    <p className={contactClassName}>{COMPANY_CONTACTS.schedule}</p>
  </FooterSection>
);
