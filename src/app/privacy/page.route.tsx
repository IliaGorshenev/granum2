import type { Metadata } from 'next';

import { PrivacyPage } from '@/pages/privacy';
import { ROUTES } from '@/shared/config';

export const metadata: Metadata = {
  title: 'Политика обработки данных',
  description:
    'Условия обработки данных, отправленных через форму сайта Granum.',
  alternates: {
    canonical: ROUTES.privacy,
  },
};

export default PrivacyPage;
