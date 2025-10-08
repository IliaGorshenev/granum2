import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { LeftArrowIcon, RightArrowIcon } from '../icons/slider-buttons';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    description?: string;
    imageSrc: string;
    additionalImages?: string[];
  };
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${scaleIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: rotate(90deg) scale(1.1);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
`;

const MainImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 60px 40px 20px;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 70%);

  @media (max-width: 1024px) {
    padding: 50px 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 45px 15px 10px;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 82vh;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 1024px) {
    max-height: 75vh;
  }

  @media (max-width: 768px) {
    max-height: 70vh;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    max-height: 65vh;
    border-radius: 4px;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  backdrop-filter: blur(10px);
  overflow-x: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    gap: 8px;
  }
`;

const ThumbnailImage = styled.img<{ isSelected: boolean }>`
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: ${(props) => (props.isSelected ? '3px solid #3b7a57' : '3px solid rgba(255, 255, 255, 0.2)')};
  opacity: ${(props) => (props.isSelected ? 1 : 0.6)};
  box-shadow: ${(props) => (props.isSelected ? '0 8px 16px rgba(59, 122, 87, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.3)')};

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
    opacity: 1;
    border-color: #3b7a57;
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media (max-width: 1024px) {
    width: 85px;
    height: 64px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 53px;
    border-width: 2px;
    border-radius: 6px;

    &:hover {
      transform: translateY(-3px) scale(1.05);
    }
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 45px;
    border-radius: 4px;

    &:hover {
      transform: translateY(-2px) scale(1.03);
    }
  }
`;

const ProductTitle = styled.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: white;
  font-size: 1.75rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(10px);
  padding: 12px 20px;
  border-radius: 12px;
  max-width: 65%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 5;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 10px 18px;
    max-width: 60%;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    top: 16px;
    left: 16px;
    padding: 8px 14px;
    max-width: 55%;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    top: 12px;
    left: 12px;
    padding: 6px 12px;
    max-width: 50%;
    border-radius: 6px;
  }
`;

const NavigationArrow = styled.div`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 1024px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [selectedImage, setSelectedImage] = useState(product.imageSrc);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine main image with additional images for the gallery
  const allImages = [product.imageSrc, ...(product.additionalImages || [])];

  // Set initial index based on the selected image
  useEffect(() => {
    const index = allImages.findIndex((img) => img === selectedImage);
    setCurrentIndex(index >= 0 ? index : 0);
  }, [selectedImage, allImages]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        goToNextImage();
      } else if (event.key === 'ArrowLeft') {
        goToPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, currentIndex]);

  const goToNextImage = () => {
    if (allImages.length > 1) {
      const newIndex = (currentIndex + 1) % allImages.length;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  const goToPrevImage = () => {
    if (allImages.length > 1) {
      const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ProductTitle>{product.title}</ProductTitle>
        <CloseButton onClick={onClose}>×</CloseButton>

        <MainImageContainer>
          <MainImage src={selectedImage} alt={product.title} />

          {allImages.length > 1 && (
            <>
              <NavigationArrow>
                <LeftArrowIcon onClick={goToPrevImage} position="left" />
              </NavigationArrow>
              <NavigationArrow>
                <RightArrowIcon onClick={goToNextImage} position="right" />
              </NavigationArrow>
            </>
          )}
        </MainImageContainer>

        {allImages.length > 1 && (
          <ThumbnailsContainer>
            {allImages.map((image, index) => (
              <ThumbnailImage
                key={index}
                src={image}
                alt={`${product.title} - изображение ${index + 1}`}
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
                isSelected={selectedImage === image}
              />
            ))}
          </ThumbnailsContainer>
        )}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default ProductModal;
