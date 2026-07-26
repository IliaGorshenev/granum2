import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  articles,
  selectArticleBySlug,
  selectRelatedArticles,
} from '@/entities/article';
import { ArticleDetailsPage } from '@/pages/article-details';
import { ROUTES } from '@/shared/config';

interface ArticleRouteProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  articles.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
  params,
}: ArticleRouteProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = selectArticleBySlug(articles, slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: ROUTES.article(article.slug),
    },
    openGraph: {
      description: article.excerpt,
      images: [article.image],
      publishedTime: article.publishedDate,
      title: article.title,
      type: 'article',
    },
  };
};

const ArticleRoute = async ({ params }: ArticleRouteProps) => {
  const { slug } = await params;
  const article = selectArticleBySlug(articles, slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleDetailsPage
      article={article}
      relatedArticles={selectRelatedArticles(articles, article)}
    />
  );
};

export default ArticleRoute;
