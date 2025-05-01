import styled, { keyframes } from 'styled-components';

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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const AboutContainer = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const AboutTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  color: #333;
  font-weight: 700;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6a994e);
    border-radius: 2px;
  }
`;

export const CollapseContainer = styled.div`
  border: none;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`;

export const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: white;
  cursor: pointer;
  border-left: 4px solid #3b7a57;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, #3b7a57, transparent);
    opacity: 0.2;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: #f9f9f9;

    h3 {
      color: #3b7a57;
    }
  }
`;

export const CollapseIcon = styled.div<{ isOpen: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOpen ? '#3b7a57' : '#f0f0f0')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => (props.isOpen ? '#346c4d' : '#e0e0e0')};
    transform: scale(1.05);
  }

  .icon-line {
    position: absolute;
    background-color: ${(props) => (props.isOpen ? 'white' : '#333')};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .horizontal {
    width: 14px;
    height: 2px;
  }

  .vertical {
    width: 2px;
    height: 14px;
    transform: ${(props) => (props.isOpen ? 'scaleY(0)' : 'scaleY(1)')};
  }
`;

export const CollapseContent = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '1.8rem 1.8rem' : '0 1.8rem'};
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  opacity: ${props => props.isOpen ? 1 : 0};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.7;
  color: #4a5568;
  background-color: white;

  p {
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.2rem;

    li {
      margin-bottom: 0.7rem;
      position: relative;

      &::before {
        content: '•';
        color: #3b7a57;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }
`;

export const ImageContainer = styled.div`
  margin: 2rem 0;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export const StoryImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const ImageCaption = styled.p`
  font-style: italic;
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: #4a5568;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

// Enhanced styles for the intro section
export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const IntroImage = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));

    @media (min-width: 768px) {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s ease;

    ${IntroSection}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const IntroContent = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #2d3748;
    position: relative;
    padding-bottom: 0.8rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #3b7a57, #6a994e);
      border-radius: 1.5px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #4a5568;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const CollapseSection = styled.div`
  margin-top: 2rem;
`;

// New styled components for enhanced visuals
export const HighlightText = styled.span`
  background: linear-gradient(120deg, rgba(59, 122, 87, 0.2) 0%, rgba(106, 153, 78, 0.2) 100%);
  padding: 0.2em 0.1em;
  border-radius: 3px;
  font-weight: 500;
`;

export const StonePattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url('/images/stone-texture.jpg');
  background-size: cover;
  pointer-events: none;
  z-index: -1;
`;

export const ShimmerLine = styled.div`
  height: 2px;
  width: 100%;
  margin: 3rem 0;
  background: linear-gradient(90deg, transparent, rgba(59, 122, 87, 0.2), rgba(106, 153, 78, 0.2), rgba(59, 122, 87, 0.2), transparent);
  background-size: 200% 100%;
  animation: ${shimmer} 3s infinite linear;
`;

export const AdvantageCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 3px solid #3b7a57;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const YearsInBusiness = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  max-width: 500px;

  .years-number {
    font-size: 5rem;
    font-weight: 700;
    color: #3b7a57;
    line-height: 1;
    margin-right: 1.5rem;
    position: relative;

    &::after {
      content: '+';
      position: absolute;
      top: 0;
      right: -20px;
      font-size: 2.5rem;
      color: #6a994e;
    }
  }

  .years-text {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #4a5568;
  }
`;

// Add this to your existing styled components

export const AdvantagesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #3b7a57; /* Use your theme color */
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    strong {
      display: block;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #2d3748;
    }

    p {
      margin: 0;
      color: #4a5568;
      line-height: 1.5;
    }
  }
`;
