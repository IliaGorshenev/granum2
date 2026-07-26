import { mediaUrl } from '@/shared/config';

import articleData from '../data/articles.json';
import type { Article } from './types';

export const articles: Article[] = articleData.map((article) => ({
  ...article,
  image: mediaUrl(article.image),
}));
