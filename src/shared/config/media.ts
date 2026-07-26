const LOCAL_MEDIA_BASE_URL = '/media';

export const MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_MEDIA_URL ?? LOCAL_MEDIA_BASE_URL;

export const mediaUrl = (path: string) =>
  `${MEDIA_BASE_URL}/${path}`;
