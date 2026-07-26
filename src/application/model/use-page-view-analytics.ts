import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { trackPageView } from '@/shared/lib/analytics';

export const usePageViewAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === null) {
      throw new Error('Current pathname is unavailable');
    }

    trackPageView(pathname);
  }, [pathname]);
};
