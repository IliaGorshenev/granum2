import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';

import {
  articleCategoriesAtom,
  filteredArticlesAtom,
  resetArticleCategoryAtom,
  selectArticleCategoryAtom,
  selectedArticleCategoryAtom,
} from './articles-page.atoms';

export const useArticlesPage = () => {
  const categories = useAtomValue(articleCategoriesAtom);
  const filteredArticles = useAtomValue(filteredArticlesAtom);
  const selectedCategory = useAtomValue(
    selectedArticleCategoryAtom
  );
  const selectCategory = useSetAtom(selectArticleCategoryAtom);
  const resetCategory = useSetAtom(resetArticleCategoryAtom);

  useEffect(() => () => resetCategory(), [resetCategory]);

  return {
    categories,
    filteredArticles,
    selectedCategory,
    selectCategory,
  };
};
