'use client';

import { Provider as JotaiProvider } from 'jotai';
import Image from 'next/image';
import Script from 'next/script';
import type { PropsWithChildren } from 'react';

import { METRIKA_COUNTER_ID } from '@/shared/config';

import { METRIKA_SCRIPT } from '../config/metrika';
import { usePageViewAnalytics } from '../model/use-page-view-analytics';

export const AppProvider = ({ children }: PropsWithChildren) => {
  usePageViewAnalytics();

  return (
    <JotaiProvider>
      <Script
        dangerouslySetInnerHTML={{ __html: METRIKA_SCRIPT }}
        id="yandex-metrika"
        strategy="afterInteractive"
      />
      <noscript>
        <div>
          <Image
            alt=""
            height={1}
            src={`https://mc.yandex.ru/watch/${METRIKA_COUNTER_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            unoptimized
            width={1}
          />
        </div>
      </noscript>
      {children}
    </JotaiProvider>
  );
};
