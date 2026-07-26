import {
  ARTICLE_CATEGORY_ALL,
  RELATED_ARTICLES_LIMIT,
} from '../config/article';
import type { Article } from './types';

export const selectArticleCategories = (
  source: Article[]
): string[] => [
  ARTICLE_CATEGORY_ALL,
  ...Array.from(new Set(source.map((article) => article.category))),
];

export const selectArticlesByCategory = (
  source: Article[],
  category: string
): Article[] =>
  category === ARTICLE_CATEGORY_ALL
    ? source
    : source.filter((article) => article.category === category);

export const selectArticleBySlug = (
  source: Article[],
  slug: string
): Article | undefined =>
  source.find((article) => article.slug === slug);

export const selectRelatedArticles = (
  source: Article[],
  current: Article
): Article[] =>
  source
    .filter(
      (article) =>
        article.category === current.category && article.id !== current.id
    )
    .slice(0, RELATED_ARTICLES_LIMIT);
