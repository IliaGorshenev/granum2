import { Surface } from '@heroui/react';

import { ArticleReadingProgress } from '@/features/article-reading-progress';
import { PrintArticleButton } from '@/features/print-article';
import { ShareArticle } from '@/features/share-article';
import { ArticleHero, ArticleMarkdown } from '@/widgets/article-content';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { RelatedArticles } from '@/widgets/related-articles';

import type { ArticleDetailsPageProps } from '../model/types';

const ArticleDetailsPage = ({
  article,
  relatedArticles,
}: ArticleDetailsPageProps) => (
  <Surface
    className="min-h-screen rounded-none bg-background p-0"
    variant="secondary">
    <ArticleReadingProgress />
    <Header />
    <main className="mx-auto max-w-5xl px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
      <ArticleHero article={article} />
      <ShareArticle title={article.title} />
      <ArticleMarkdown>{article.content}</ArticleMarkdown>
      {relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}
    </main>
    <PrintArticleButton />
    <Footer />
  </Surface>
);

export default ArticleDetailsPage;
