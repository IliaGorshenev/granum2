import {
  HOME_SECTION_IDS,
  mediaUrl,
  ROUTES,
} from '@/shared/config';

export const HEADER_SCROLL_THRESHOLD_PX = 50;

export const HEADER_LOGOS = {
  default: mediaUrl('brand/logo-overlay.png'),
  scrolled: mediaUrl('brand/logo-default.png'),
} as const;

export type HeaderNavigationItem =
  | { label: string; href: string }
  | { label: string; sectionId: string };

export const HEADER_NAVIGATION: HeaderNavigationItem[] = [
  { label: 'Каталог', sectionId: HOME_SECTION_IDS.catalog },
  { label: 'Как работаем', sectionId: HOME_SECTION_IDS.process },
  { label: 'Работы', sectionId: HOME_SECTION_IDS.works },
  { label: 'Статьи', href: ROUTES.articles },
  { label: 'О нас', sectionId: HOME_SECTION_IDS.about },
];
