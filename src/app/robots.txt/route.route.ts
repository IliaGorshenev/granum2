import { SITE_URL } from '@/shared/config';

const ROBOTS_CONTENT = [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${SITE_URL}/sitemap.xml`,
].join('\n');

export const GET = () =>
  new Response(ROBOTS_CONTENT, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
