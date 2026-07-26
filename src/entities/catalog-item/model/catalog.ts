import { mediaUrl } from '@/shared/config';

import catalogData from '../data/catalog.json';
import type { CatalogItem } from './types';

export const catalog: CatalogItem[] = catalogData.map((item) => ({
  ...item,
  image: mediaUrl(item.image),
}));
