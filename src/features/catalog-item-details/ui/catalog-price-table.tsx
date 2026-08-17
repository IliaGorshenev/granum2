import {
  Surface,
  Table,
} from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';
import { StoneIcon } from '@/shared/ui/stone-icon';

interface CatalogPriceTableProps {
  item: CatalogItem;
}

export const CatalogPriceTable = ({
  item,
}: CatalogPriceTableProps) => (
  <section className="border-t border-border/80 bg-background px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
    <header className="mb-6 flex items-center gap-4">
      <StoneIcon name="polish" />
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground">
          Стоимость плит
        </h3>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Цена зависит от толщины и обработки.
        </p>
      </div>
    </header>

    <div className="grid gap-3 sm:hidden">
      {item.prices.map((price) => (
        <Surface
          className="rounded-2xl border border-border/70 p-4"
          key={`${price.size}-${price.price}-${price.additional}`}
          variant="secondary">
          <p className="font-semibold text-foreground">{price.size}</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted">Термообработка</p>
              <p className="mt-1 font-semibold text-foreground">
                {price.price}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Полировка</p>
              <p className="mt-1 font-semibold text-foreground">
                {price.additional}
              </p>
            </div>
          </div>
        </Surface>
      ))}
    </div>

    <Table className="hidden max-w-full sm:block" variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label={`Цены: ${item.name}`}>
          <Table.Header>
            <Table.Column isRowHeader>Размер</Table.Column>
            <Table.Column>Термообработка</Table.Column>
            <Table.Column>Полировка</Table.Column>
          </Table.Header>
          <Table.Body>
            {item.prices.map((price) => (
              <Table.Row
                id={`${price.size}-${price.price}-${price.additional}`}
                key={`${price.size}-${price.price}-${price.additional}`}>
                <Table.Cell>{price.size}</Table.Cell>
                <Table.Cell>{price.price}</Table.Cell>
                <Table.Cell>{price.additional}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  </section>
);
