'use client';

import { Surface } from '@heroui/react';

import { ArticleCategoryFilter } from '@/features/article-category-filter';
import { ArticleList } from '@/widgets/article-list';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { useArticlesPage } from '../model/use-articles-page';

const ArticlesPage = () => {
  const {
    categories,
    filteredArticles,
    selectedCategory,
    selectCategory,
  } = useArticlesPage();

  return (
    <Surface
      className="min-h-screen rounded-none bg-background p-0"
      variant="secondary">
      <Header />
      <main className="mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
        <p className="mb-3 text-center text-xs font-bold tracking-[0.18em] text-accent uppercase">
          База знаний
        </p>
        <h1 className="mb-3 text-center text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          Статьи и советы о граните
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
          Экспертные советы и руководства по натуральному камню
        </p>
        <ArticleCategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={selectCategory}>
          <ArticleList articles={filteredArticles} />
        </ArticleCategoryFilter>
      </main>
      <Footer />
    </Surface>
  );
};

export default ArticlesPage;
