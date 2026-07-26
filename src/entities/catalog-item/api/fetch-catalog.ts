import { CATALOG_CSV_URL } from '@/shared/config';

import { parseCatalogCsv } from '../lib/parse-catalog-csv';
import type { CatalogItem } from '../model/types';

export const fetchCatalog = async (): Promise<CatalogItem[]> => {
  const response = await fetch(CATALOG_CSV_URL);

  if (!response.ok) {
    throw new Error(
      `Catalog request failed: ${response.status} ${response.statusText}`
    );
  }

  return parseCatalogCsv(await response.text());
};
