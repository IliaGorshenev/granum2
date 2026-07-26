interface ShareLinkParams {
  title: string;
  url: string;
}

export const SHARE_TARGETS = [
  {
    label: '🐦 Twitter',
    color: '#1da1f2',
    createUrl: ({ title, url }: ShareLinkParams) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
  {
    label: '📘 Facebook',
    color: '#4267b2',
    createUrl: ({ url }: ShareLinkParams) =>
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    label: '🔵 VK',
    color: '#0077ff',
    createUrl: ({ title, url }: ShareLinkParams) =>
      `https://vk.com/share.php?url=${url}&title=${title}`,
  },
] as const;

export type ShareTarget = (typeof SHARE_TARGETS)[number];
