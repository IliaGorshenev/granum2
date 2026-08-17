import { Modal } from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';

import { CatalogItemSummary } from './catalog-item-summary';
import { CatalogPriceTable } from './catalog-price-table';

interface CatalogItemDetailsProps {
  item: CatalogItem;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CatalogItemDetails = ({
  item,
  onClose,
  onRequestQuote,
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
        className="w-full sm:p-6"
        placement="center"
        scroll="inside"
        size="full">
        <Modal.Dialog className="min-w-0 overflow-hidden bg-surface p-0 sm:h-auto sm:min-h-0 sm:max-w-[80rem] sm:rounded-[2rem] sm:border sm:border-border/60 sm:shadow-2xl">
          <Modal.CloseTrigger className="top-4 right-4 z-30 bg-surface/90 text-foreground shadow-lg ring-1 ring-border/80 backdrop-blur-md sm:top-5 sm:right-5" />
          <Modal.Header className="sr-only">
            <Modal.Heading>{item.name}</Modal.Heading>
          </Modal.Header>
          <Modal.Body className="m-0 min-w-0 gap-0 p-0">
            <CatalogItemSummary
              item={item}
              onClose={onClose}
              onRequestQuote={onRequestQuote}
            />
            <CatalogPriceTable item={item} />
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
);
