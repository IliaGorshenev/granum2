import { useSetAtom } from 'jotai';

import { printArticleAtom } from './print-article.atoms';

export const usePrintArticle = () =>
  useSetAtom(printArticleAtom);
