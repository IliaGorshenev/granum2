import { Surface } from '@heroui/react';

import {
  CatalogColorSwatch,
  type CatalogItem,
} from '@/entities/catalog-item';

interface CatalogItemMetaProps {
  item: CatalogItem;
}

export const CatalogItemMeta = ({
  item,
}: CatalogItemMetaProps) => (
  <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
    <Surface className="min-w-0 p-4" variant="secondary">
      <p className="text-xs text-muted">Происхождение</p>
      <p className="mt-1 truncate text-sm font-semibold">{item.origin}</p>
    </Surface>
    <Surface
      className="flex min-w-0 items-center gap-3 p-4"
      variant="secondary">
      <CatalogColorSwatch color={item.color} />
      <div className="min-w-0">
        <p className="text-xs text-muted">Цвет</p>
        <p className="mt-1 truncate text-sm font-semibold">{item.color}</p>
      </div>
    </Surface>
  </div>
);
