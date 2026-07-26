import {
  Separator,
  Surface,
} from '@heroui/react';

import { getCurrentYear } from '../lib/get-current-year';
import { FooterCompany } from './footer-company';
import { FooterContacts } from './footer-contacts';
import { FooterNavigation } from './footer-navigation';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[var(--footer)] px-5 py-14 text-white sm:px-6 sm:py-16">
      <Surface
        className="mx-auto max-w-7xl bg-transparent p-0"
        variant="transparent">
        <div className="grid min-w-0 grid-cols-1 gap-9 md:grid-cols-3 md:gap-10">
          <FooterCompany />
          <FooterNavigation />
          <FooterContacts />
        </div>

        <Separator className="mt-10 bg-white/10" />
        <p className="pt-6 text-xs tracking-wide text-white/45 max-md:text-center">
          © {currentYear} ООО «Гранум». Все права защищены.
        </p>
      </Surface>
    </footer>
  );
};

export default Footer;
