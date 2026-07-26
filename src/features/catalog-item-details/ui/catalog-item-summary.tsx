import Image from 'next/image';

import type { CatalogItem } from '@/entities/catalog-item';

interface CatalogItemSummaryProps {
  item: CatalogItem;
}

export const CatalogItemSummary = ({
  item,
}: CatalogItemSummaryProps) => (
  <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
    <Image
      alt={item.name}
      className="aspect-[4/3] w-full rounded-2xl object-cover"
      height={320}
      sizes="(max-width: 1024px) 100vw, 50vw"
      src={item.image}
      width={800}
    />
    <p className="min-w-0 text-sm leading-7 text-muted">
      {item.description}
    </p>
  </div>
);
