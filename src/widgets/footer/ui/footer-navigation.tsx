import { Link } from '@heroui/react';

import { FOOTER_LINKS } from '../config/footer';
import { FooterSection } from './footer-section';

export const FooterNavigation = () => (
  <FooterSection title="Быстрые ссылки">
    {FOOTER_LINKS.map((link) => (
      <Link
        className="text-sm text-white/60 transition-colors hover:text-white"
        href={link.href}
        key={link.href}>
        {link.label}
      </Link>
    ))}
  </FooterSection>
);
