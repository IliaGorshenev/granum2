import { useSetAtom } from 'jotai';

import type { ShareTarget } from '../config/share-targets';
import {
  copyArticleLinkAtom,
  shareArticleAtom,
} from './share-article.atoms';

export const useShareArticle = (title: string) => {
  const copyLink = useSetAtom(copyArticleLinkAtom);
  const shareArticle = useSetAtom(shareArticleAtom);

  return {
    copyLink,
    share: (target: ShareTarget) =>
      shareArticle({ target, title }),
  };
};
