import { ArticleCard, type Article } from '@/entities/article';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => (
  <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </div>
);
