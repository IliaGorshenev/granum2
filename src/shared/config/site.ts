export const SITE_URL = 'https://granum-stone.ru';

export const ROUTES = {
  home: '/',
  articles: '/articles',
  privacy: '/privacy',
  article: (slug: string) => `/articles/${slug}`,
} as const;

export const HOME_SECTION_IDS = {
  catalog: 'catalog',
  works: 'works',
  process: 'process',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
} as const;
