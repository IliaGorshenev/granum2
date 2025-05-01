import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SliderContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`;

export const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const SliderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
  
  .swiper {
    padding-bottom: 50px; /* Space for pagination dots */
  }
  
  .swiper-pagination {
    bottom: 0;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ccc;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    width: 12px;
    height: 12px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1.0rem;
  color: white;
  z-index: 2;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  
  div:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SlideTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`;

export const SlideDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  padding: 0 10px;
  
  /* This ensures the buttons themselves can be clicked */
  & > * {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;
