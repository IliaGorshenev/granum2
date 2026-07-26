'use client';

import {
  Chip,
  Modal,
} from '@heroui/react';

import type { Work } from '@/entities/work';

import { useWorkGallery } from '../model/use-work-gallery';
import { GalleryStage } from './gallery-stage';
import { GalleryThumbnails } from './gallery-thumbnails';
interface WorkGalleryModalProps {
  onClose: () => void;
  product: Work;
}

const WorkGalleryModal = ({
  onClose,
  product,
}: WorkGalleryModalProps) => {
  const gallery = useWorkGallery(product);

  return (
    <Modal>
      <Modal.Backdrop
        className="bg-black/95"
        isOpen
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            onClose();
          }
        }}
        variant="opaque">
        <Modal.Container
          className="p-0 sm:p-0"
          placement="center"
          size="full">
          <Modal.Dialog className="h-dvh min-w-0 bg-[#0a0c0b] p-0 text-white">
            <Modal.CloseTrigger
              aria-label="Закрыть галерею"
              className="top-4 right-4 z-40 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:top-5 sm:right-5"
            />
            <Modal.Header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex-row items-center gap-3 bg-gradient-to-b from-black/80 via-black/35 to-transparent px-4 pt-4 pb-10 pr-16 sm:px-6 sm:pt-5 sm:pb-14 sm:pr-20">
              <Chip
                className="hidden shrink-0 border-white/10 bg-white/10 text-white sm:flex"
                size="sm"
                variant="soft">
                {product.category}
              </Chip>
              <Modal.Heading className="line-clamp-1 min-w-0 text-sm font-medium text-white sm:text-base">
                {product.title}
              </Modal.Heading>
              <span
                aria-live="polite"
                className="ml-auto shrink-0 text-xs font-medium text-white/65 sm:text-sm">
                {gallery.currentIndex + 1} / {gallery.images.length}
              </span>
            </Modal.Header>
            <Modal.Body className="m-0 flex min-w-0 flex-col overflow-hidden p-0 text-white">
              <GalleryStage
                alt={`${product.title}. Фото ${gallery.currentIndex + 1}`}
                hasNavigation={gallery.hasMultipleImages}
                image={gallery.selectedImage}
                onNext={gallery.nextImage}
                onPrevious={gallery.previousImage}
              />
              {gallery.hasMultipleImages && (
                <GalleryThumbnails
                  currentIndex={gallery.currentIndex}
                  images={gallery.images}
                  onSelect={gallery.selectImage}
                />
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default WorkGalleryModal;
