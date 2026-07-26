import { Modal } from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';

import { CatalogItemMeta } from './catalog-item-meta';
import { CatalogItemSummary } from './catalog-item-summary';
import { CatalogPriceTable } from './catalog-price-table';

interface CatalogItemDetailsProps {
  item: CatalogItem;
  onClose: () => void;
}

export const CatalogItemDetails = ({
  item,
  onClose,
}: CatalogItemDetailsProps) => (
  <Modal>
    <Modal.Backdrop
      isOpen
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose();
        }
      }}
      variant="blur">
      <Modal.Container
        className="mx-3 max-w-[calc(100%_-_1.5rem)]"
        placement="center"
        scroll="inside"
        size="lg">
        <Modal.Dialog className="min-w-0">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Heading>{item.name}</Modal.Heading>
          </Modal.Header>
          <Modal.Body className="min-w-0 gap-5">
            <CatalogItemSummary item={item} />
            <CatalogItemMeta item={item} />
            <CatalogPriceTable item={item} />
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
);
