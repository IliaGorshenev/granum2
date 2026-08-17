'use client';

import { Surface } from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';
import { CatalogItemDetails } from '@/features/catalog-item-details';
import { HOME_SECTION_IDS } from '@/shared/config';
import { SectionHeading } from '@/shared/ui/section-heading';

import { useCatalog } from '../model/use-catalog';
import { CatalogCard } from './catalog-card';

interface CatalogProps {
  initialData: CatalogItem[];
}

const Catalog = ({ initialData }: CatalogProps) => {
  const {
    closeItem,
    requestQuote,
    selectedItem,
    selectItem,
  } = useCatalog();

  return (
    <>
      <section
        className="w-full bg-background px-5 py-14 sm:px-6 sm:py-16"
        id={HOME_SECTION_IDS.catalog}>
        <Surface
          className="mx-auto w-full max-w-7xl space-y-8 p-0 sm:space-y-10"
          variant="transparent">
          <SectionHeading
            eyebrow="Коллекция"
            icon="stone"
            title="Каталог гранитных плит"
          />
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {initialData.map((item) => (
              <CatalogCard
                item={item}
                key={item.id}
                onSelect={selectItem}
              />
            ))}
          </div>
        </Surface>
      </section>
      {selectedItem && (
        <CatalogItemDetails
          item={selectedItem}
          onClose={closeItem}
          onRequestQuote={requestQuote}
        />
      )}
    </>
  );
};

export default Catalog;
