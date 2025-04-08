import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`;

const MainImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    max-height: 75vh;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding: 10px 5px;
    gap: 6px;
  }
`;

const ThumbnailImage = styled.img<{ isSelected: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  border: ${(props) => (props.isSelected ? '3px solid #3b7a57' : '3px solid transparent')};
  opacity: ${(props) => (props.isSelected ? 1 : 0.7)};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
    border-width: 2px;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProductTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 4px;
  max-width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    top: 10px;
    left: 10px;
    padding: 6px 10px;
    max-width: 60%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 50%;
  }
`;

// Add this after the ProductTitle styled component
const NavigationArrow = styled.div`
  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
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

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
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
    </ModalOverlay>
  );
};

export default ProductModal;
