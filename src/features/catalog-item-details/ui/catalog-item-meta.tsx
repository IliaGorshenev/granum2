import { Surface } from '@heroui/react';

import {
  CatalogColorSwatch,
  type CatalogItem,
} from '@/entities/catalog-item';
import { StoneIcon } from '@/shared/ui/stone-icon';

interface CatalogItemMetaProps {
  item: CatalogItem;
}

export const CatalogItemMeta = ({
  item,
}: CatalogItemMetaProps) => (
  <div className="mt-7 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
    <Surface
      className="flex min-w-0 items-center gap-3 rounded-2xl p-4"
      variant="secondary">
      <StoneIcon name="location" size="sm" />
      <div className="min-w-0">
        <p className="text-xs text-muted">Происхождение</p>
        <p className="mt-1 truncate text-sm font-semibold">
          {item.origin}
        </p>
      </div>
    </Surface>
    <Surface
      className="flex min-w-0 items-center gap-3 rounded-2xl p-4"
      variant="secondary">
      <StoneIcon name="palette" size="sm" />
      <div className="min-w-0">
        <p className="text-xs text-muted">Цвет</p>
        <p className="mt-1 truncate text-sm font-semibold">{item.color}</p>
      </div>
      <div className="ml-auto">
        <CatalogColorSwatch color={item.color} />
      </div>
    </Surface>
    <Surface
      className="flex min-w-0 items-center gap-3 rounded-2xl p-4"
      variant="secondary">
      <StoneIcon name="dimensions" size="sm" />
      <div className="min-w-0">
        <p className="text-xs text-muted">Размерный ряд</p>
        <p className="mt-1 text-sm font-semibold">
          {item.prices.length} вариантов толщины
        </p>
      </div>
    </Surface>
    <Surface
      className="flex min-w-0 items-center gap-3 rounded-2xl p-4"
      variant="secondary">
      <StoneIcon name="polish" size="sm" />
      <div className="min-w-0">
        <p className="text-xs text-muted">Обработка</p>
        <p className="mt-1 text-sm font-semibold">
          Термо и полировка
        </p>
      </div>
    </Surface>
  </div>
);
