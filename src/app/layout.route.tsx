import '@fontsource-variable/manrope';
import '@/application/styles/heroui.css';

import type {
  Metadata,
  Viewport,
} from 'next';
import type { PropsWithChildren } from 'react';

import { AppProvider } from '@/application';
import {
  DEFAULT_SEO,
  ORGANIZATION_SCHEMA,
  SITE_URL,
} from '@/shared/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_SEO.title,
    template: '%s | Гранум',
  },
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords.split(', '),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.image],
    locale: 'ru_RU',
    siteName: 'Гранум',
    title: DEFAULT_SEO.title,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.image],
    title: DEFAULT_SEO.title,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#f6f5ef',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html className="light" data-theme="light" lang="ru">
    <body>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA).replace(
            /</g,
            '\\u003c'
          ),
        }}
        type="application/ld+json"
      />
      <AppProvider>{children}</AppProvider>
    </body>
  </html>
);

export default RootLayout;
