import {
  Button,
  Chip,
} from '@heroui/react';
import Image from 'next/image';

import type { CatalogItem } from '@/entities/catalog-item';
import { StoneIcon } from '@/shared/ui/stone-icon';

import { CatalogItemDescription } from './catalog-item-description';
import { CatalogItemMeta } from './catalog-item-meta';

interface CatalogItemSummaryProps {
  item: CatalogItem;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CatalogItemSummary = ({
  item,
  onClose,
  onRequestQuote,
}: CatalogItemSummaryProps) => (
  <div className="grid min-w-0 lg:grid-cols-[minmax(0,0.92fr)_minmax(32rem,1.08fr)]">
    <div className="relative min-h-[18rem] overflow-hidden bg-surface-secondary sm:min-h-[24rem] lg:min-h-[36rem]">
      <Image
        fill
        priority
        alt={item.name}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 46vw"
        src={item.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/15" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-white/65 uppercase">
            Натуральная текстура
          </p>
          <p className="mt-1 text-lg font-semibold text-white">
            {item.color}
          </p>
        </div>
        <StoneIcon name="stone" tone="inverse" />
      </div>
    </div>

    <div className="flex min-w-0 flex-col p-5 pt-7 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3">
        <StoneIcon name="stone" />
        <Chip color="accent" size="sm" variant="soft">
          Гранитная плита
        </Chip>
      </div>
      <h2 className="mt-6 max-w-2xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-foreground sm:text-4xl">
        {item.name}
      </h2>
      <CatalogItemDescription description={item.description} />

      <CatalogItemMeta item={item} />

      <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
        <Button
          className="w-full min-w-0 font-bold sm:w-auto"
          onPress={onRequestQuote}
          size="md"
          variant="primary">
          <StoneIcon name="measure" size="sm" tone="inverse" />
          <span className="truncate">Рассчитать изделие</span>
        </Button>
        <Button
          className="w-full font-bold sm:w-auto"
          onPress={onClose}
          size="md"
          variant="secondary">
          Закрыть
        </Button>
      </div>
    </div>
  </div>
);
