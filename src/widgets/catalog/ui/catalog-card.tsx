import { Button, Card } from '@heroui/react';
import Image from 'next/image';

import {
  CatalogColorSwatch,
  type CatalogItem,
} from '@/entities/catalog-item';
import { StoneIcon } from '@/shared/ui/stone-icon';

interface CatalogCardProps {
  item: CatalogItem;
  onSelect: (item: CatalogItem) => void;
}

export const CatalogCard = ({
  item,
  onSelect,
}: CatalogCardProps) => (
  <Card className="group flex h-full min-w-0 flex-col overflow-hidden border border-border/80 bg-surface p-0 shadow-sm transition-shadow duration-500 ease-out hover:shadow-lg motion-reduce:transition-none">
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary">
      <Image
        fill
        alt={item.name}
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={item.image}
      />
    </div>
    <Card.Header className="min-w-0 px-5 pt-5 pb-0">
      <Card.Title className="line-clamp-2 text-lg leading-6 font-semibold tracking-[-0.02em]">
        {item.name}
      </Card.Title>
    </Card.Header>
    <Card.Content className="min-w-0 flex-1 gap-4 px-5 py-4">
      <div className="min-w-0">
        <p className="mb-1 text-xs font-bold tracking-[0.08em] text-muted uppercase">
          Происхождение
        </p>
        <p className="truncate text-sm font-semibold text-foreground">
          {item.origin}
        </p>
      </div>
      <div className="flex min-w-0 items-end justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <CatalogColorSwatch color={item.color} />
          <div className="min-w-0">
            <p className="text-xs text-muted">Цвет камня</p>
            <p className="truncate text-sm font-semibold">{item.color}</p>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xs text-muted">Цена от</p>
          <p className="text-sm font-bold text-accent">
            {item.prices[0].price}
          </p>
        </div>
      </div>
    </Card.Content>
    <Card.Footer className="mt-auto min-w-0 overflow-hidden px-5 pt-0 pb-5">
      <Button
        className="max-w-full min-w-0 text-sm font-bold"
        fullWidth
        onPress={() => onSelect(item)}
        size="sm"
        variant="primary">
        <StoneIcon
          name="stone"
          size="sm"
          tone="inverse"
          variant="plain"
        />
        <span className="truncate">Подробнее</span>
      </Button>
    </Card.Footer>
  </Card>
);
