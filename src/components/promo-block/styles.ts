import styled, { keyframes } from 'styled-components';

export const PromoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh; /* Ensure full height on mobile */
  }
`;
export const FullPageBackground = styled.div<{ imageSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const SliderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
export const SliderContent = styled.div`
  padding: 3rem;
  border-radius: 15px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;
export const PromoTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PromoSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const pulse = keyframes`
  0%, 100% {
    transform: rotateY(-15deg) scale(1) rotate(-4deg);
    opacity: 1;
  }
  30% {
    transform: rotateY(0deg) scale(1.15) rotate(-2deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(15deg) scale(1.3) rotate(0deg);
    opacity: 1;
  }
  70% {
    transform: rotateY(0deg) scale(1.15) rotate(2deg);
    opacity: 1;
  }
`;

export const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
  animation: ${pulse} 3s ease-in-out infinite;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const PromoButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgb(0, 0, 0, 0.6);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
  }

  &:hover {
    background-color: rgb(0, 0, 0, 1);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    margin-top: 0.75rem;
  }
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    margin: 0 4px;
  }
`;

export const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  left: ${(props) => (props.position === 'left' ? '10px' : 'auto')};
  right: ${(props) => (props.position === 'right' ? '10px' : 'auto')};

  &:hover {
    color: #3b7a57;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;

    ${(props) =>
      props.position === 'left'
        ? `
            transform: rotate(180deg);
          `
        : ''}
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    &:before {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    &:before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedText = styled.div<{ delay?: number }>`
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay || 0}s;
`;

// Add this to your existing styled components
export const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  animation: fadeIn 1s forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  video {
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media (max-width: 768px) {
      width: 130%; /* Slightly wider to ensure coverage on mobile */
    }

    @media (max-width: 480px) {
      width: 150%; /* Even wider for small screens */
    }
  }
`;

// Add this to your existing styled components
export const VideoFallback = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;
