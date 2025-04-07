import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const CollapseContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  
  h3 {
    margin: 0;
  }
`;

export const CollapseIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

export const CollapseContent = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '1rem' : '0 1rem'};
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const ImageContainer = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

export const StoryImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageCaption = styled.p`
  font-style: italic;
  text-align: center;
  margin-top: 0.5rem;
  color: #666;
`;

// New styles for the intro section
export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;

export const IntroImage = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const IntroContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const CollapseSection = styled.div`
  margin-top: 2rem;
`;
