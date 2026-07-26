import { Table } from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';

interface CatalogPriceTableProps {
  item: CatalogItem;
}

export const CatalogPriceTable = ({
  item,
}: CatalogPriceTableProps) => (
  <>
    <h3 className="text-lg font-semibold">Цены</h3>
    <Table className="max-w-full" variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label={`Цены: ${item.name}`}>
          <Table.Header>
            <Table.Column isRowHeader>Размер</Table.Column>
            <Table.Column>Термо</Table.Column>
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
  </>
);
