import { atom } from 'jotai';

import type { ShareTarget } from '../config/share-targets';

interface ShareArticlePayload {
  target: ShareTarget;
  title: string;
}

export const shareArticleAtom = atom(
  null,
  (_get, _set, { target, title }: ShareArticlePayload) => {
    const shareUrl = target.createUrl({
      title: encodeURIComponent(title),
      url: encodeURIComponent(window.location.href),
    });

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }
);

export const copyArticleLinkAtom = atom(null, async () => {
  await navigator.clipboard.writeText(window.location.href);
  window.alert('Ссылка скопирована в буфер обмена!');
});
