import styled from 'styled-components';
import React from 'react';

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
`;

const ArrowIcon = styled.svg`
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;

  ${ButtonWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const ArrowWrapper = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
  z-index: 10;

  @media (max-width: 768px) {

    transform:  translateY(56px) scale(0.8);
  }
`;

interface ArrowIconProps {
  onClick?: () => void;
  position: 'left' | 'right';
}

export const LeftArrowIcon: React.FC<ArrowIconProps> = ({ onClick, position }) => (
  <ArrowWrapper position={position}>
    <ButtonWrapper onClick={onClick} aria-label="Previous slide">
      <ArrowIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </ArrowIcon>
    </ButtonWrapper>
  </ArrowWrapper>
);

export const RightArrowIcon: React.FC<ArrowIconProps> = ({ onClick, position }) => (
  <ArrowWrapper position={position}>
    <ButtonWrapper onClick={onClick} aria-label="Next slide">
      <ArrowIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </ArrowIcon>
    </ButtonWrapper>
  </ArrowWrapper>
);
