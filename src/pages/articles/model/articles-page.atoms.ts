import { atom } from 'jotai';

import {
  ARTICLE_CATEGORY_ALL,
  articles,
  selectArticleCategories,
  selectArticlesByCategory,
} from '@/entities/article';

export const articleCategoriesAtom = atom(
  selectArticleCategories(articles)
);

export const selectedArticleCategoryAtom = atom(
  ARTICLE_CATEGORY_ALL
);

export const filteredArticlesAtom = atom((get) =>
  selectArticlesByCategory(
    articles,
    get(selectedArticleCategoryAtom)
  )
);

export const selectArticleCategoryAtom = atom(
  null,
  (_get, set, category: string) =>
    set(selectedArticleCategoryAtom, category)
);

export const resetArticleCategoryAtom = atom(
  null,
  (_get, set) =>
    set(selectedArticleCategoryAtom, ARTICLE_CATEGORY_ALL)
);
