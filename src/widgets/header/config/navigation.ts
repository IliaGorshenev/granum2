import { HOME_SECTION_IDS, ROUTES } from '@/shared/config';

export const HEADER_SCROLL_THRESHOLD_PX = 50;

export const HEADER_LOGOS = {
  default:
    'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png',
  scrolled:
    'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(3).png',
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
