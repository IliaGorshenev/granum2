import { Surface } from '@heroui/react';

import { ArticleCard, type Article } from '@/entities/article';
import { SectionHeading } from '@/shared/ui/section-heading';

interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => (
  <Surface className="mt-16" variant="transparent">
    <SectionHeading eyebrow="Читайте дальше" title="Похожие статьи" />
    <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  </Surface>
);
