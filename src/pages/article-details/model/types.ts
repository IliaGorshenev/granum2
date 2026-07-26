import type { Article } from '@/entities/article';

export interface ArticleDetailsPageProps {
  article: Article;
  relatedArticles: Article[];
}
