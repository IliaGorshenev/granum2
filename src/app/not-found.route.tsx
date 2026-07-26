import type { Metadata } from 'next';

import { NotFoundPage } from '@/pages/not-found';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Запрашиваемая страница не найдена.',
  robots: {
    index: false,
    follow: false,
  },
};

export default NotFoundPage;
