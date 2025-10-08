import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SliderContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1450px;
  margin: 5rem auto;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    margin: 4rem auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 3rem auto;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 2.5rem auto;
    padding: 0 0.75rem;
  }
`;

export const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @media (max-width: 1024px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

export const SliderTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  letter-spacing: -0.75px;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: -0.5px;

    &::after {
      width: 70px;
      bottom: -10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.85rem;
    letter-spacing: -0.3px;

    &::after {
      width: 50px;
      bottom: -6px;
    }
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1450px;
  padding: 0 20px;

  .swiper {
    padding-bottom: 60px;
  }

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #c5c5c5;
    opacity: 0.5;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(135deg, #3b7a57, #6b8e23);
    opacity: 1;
    width: 14px;
    height: 14px;
    box-shadow: 0 2px 8px rgba(59, 122, 87, 0.4);
  }

  @media (max-width: 1024px) {
    padding: 0 16px;

    .swiper {
      padding-bottom: 55px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 12px;

    .swiper {
      padding-bottom: 50px;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }

    .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 8px;

    .swiper {
      padding-bottom: 45px;
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }

    .swiper-pagination-bullet-active {
      width: 10px;
      height: 10px;
    }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1024px) {
    height: 320px;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    height: 280px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 240px;
    border-radius: 10px;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
  border-radius: 16px;
  opacity: 0.8;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1024px) {
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  color: white;
  z-index: 2;
  transform: translateY(10px);
  opacity: 0.9;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 0 0 16px 16px;
  backdrop-filter: blur(4px);

  div:hover & {
    transform: translateY(0);
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
    border-radius: 0 0 14px 14px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 0 0 12px 12px;
    transform: translateY(0);
    opacity: 1;
  }

  @media (max-width: 480px) {
    padding: 0.85rem;
    border-radius: 0 0 10px 10px;
  }
`;

export const SlideTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  letter-spacing: -0.3px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.05rem;
    letter-spacing: -0.2px;
    margin-bottom: 0.3rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.95;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.35;
  }
`;

export const NavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  padding: 0 -10px;

  & > * {
    pointer-events: auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 1024px) {
    padding: 0 -5px;
  }

  @media (max-width: 768px) {
    padding: 0;

    & > * {
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 480px) {
    & > * svg {
      width: 32px;
      height: 32px;
    }
  }
`;
