import { keyframes, styled } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
  border-radius: 12px;
`;

export const SliderContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0rem auto;
  margin-bottom: 3rem;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export const SliderHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const SliderTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SliderSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 100%;
  color: white;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: 2;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

export const Slide = styled.div<{ width: string }>`
  min-width: ${(props) => props.width};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${SlideImage} {
    transform: scale(1.05);
  }

  &:hover ${SlideContent} {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

// Update the SliderTrack to add padding
export const SliderTrack = styled.div<{ transform: string }>`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${(props) => props.transform};
  height: 500px;
  padding: 0 10px;
  gap: 30px;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

// Update the SliderWrapper to ensure buttons are outside the overflow area
export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin: 0 40px;
  padding: 2rem;

  @media (max-width: 768px) {
    margin: 0 30px;
  }

  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;
export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0) 60%);
  border-radius: 12px;
  z-index: 1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 15px;
`;

// Add this new component for navigation buttons container
export const NavigationButtons = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;

  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const SlideTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.8rem;
`;

export const Indicator = styled.button<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? '2.5rem' : '1rem')};
  height: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => (props.isActive ? 'linear-gradient(90deg, #3b7a57, #6b8e23)' : '#ddd')};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.isActive ? 'linear-gradient(90deg, #3b7a57, #6b8e23)' : '#bbb')};
  }
`;

export const ViewAllButton = styled.button`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 3rem auto 0;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 122, 87, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
