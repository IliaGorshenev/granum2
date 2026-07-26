import type { Metadata } from 'next';

import { ArticlesPage } from '@/pages/articles';
import { ROUTES } from '@/shared/config';

export const metadata: Metadata = {
  title: 'Статьи и советы о граните',
  description:
    'Экспертные статьи о выборе, обработке и уходе за натуральным камнем.',
  keywords: [
    'статьи о граните',
    'советы по граниту',
    'уход за гранитом',
    'выбор гранита',
  ],
  alternates: {
    canonical: ROUTES.articles,
  },
};

export default ArticlesPage;
