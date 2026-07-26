import { HOME_SECTION_IDS, ROUTES } from '@/shared/config';

export const FOOTER_LINKS = [
  {
    href: `${ROUTES.home}#${HOME_SECTION_IDS.catalog}`,
    label: 'Каталог',
  },
  {
    href: `${ROUTES.home}#${HOME_SECTION_IDS.works}`,
    label: 'Портфолио',
  },
  {
    href: `${ROUTES.home}#${HOME_SECTION_IDS.process}`,
    label: 'Как мы работаем',
  },
  { href: ROUTES.articles, label: 'Статьи' },
  {
    href: `${ROUTES.home}#${HOME_SECTION_IDS.about}`,
    label: 'О нас',
  },
  {
    href: `${ROUTES.home}#${HOME_SECTION_IDS.contact}`,
    label: 'Контакты',
  },
  {
    href: ROUTES.privacy,
    label: 'Обработка данных',
  },
] as const;
