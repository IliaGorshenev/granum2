import { SITE_URL } from './site';
import { COMPANY_CONTACTS } from './company';

export const DEFAULT_SEO = {
  title:
    'Купить гранит и мрамор от производителя Гранум в Челябинске',
  description:
    'Производство и продажа изделий из гранита и мрамора. Столешницы, ступени, подоконники и облицовка от производителя.',
  keywords:
    'гранит, мрамор, натуральный камень, изделия из камня, Гранум Челябинск',
  image: 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
  canonicalUrl: SITE_URL,
} as const;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Гранум',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    postalCode: '456581',
    addressLocality: 'Еманжелинск',
    addressRegion: 'Челябинская область',
    addressCountry: 'Россия',
    streetAddress: 'улица Советская, 11Б',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_CONTACTS.phone,
    email: COMPANY_CONTACTS.email,
    contactType: 'customer service',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '54.763927',
    longitude: '61.332730',
  },
} as const;
