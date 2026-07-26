import { articles } from '@/entities/article';
import { ROUTES, SITE_URL } from '@/shared/config';

const STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.articles,
  ROUTES.privacy,
] as const;

const buildSitemap = () => {
  const staticUrls = STATIC_ROUTES.map(
    (route) => `<url><loc>${SITE_URL}${route}</loc></url>`
  );
  const articleUrls = articles.map(
    (article) =>
      `<url><loc>${SITE_URL}${ROUTES.article(article.slug)}</loc>` +
      `<lastmod>${article.publishedDate}</lastmod></url>`
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...articleUrls,
    '</urlset>',
  ].join('');
};

export const GET = () =>
  new Response(buildSitemap(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
