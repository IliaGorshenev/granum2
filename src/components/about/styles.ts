import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #4caf50;
  }
`;

export const CollapseContainer = styled.div`
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CollapseIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
`;

export const CollapseContent = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  
  p {
    margin-top: 0;
    line-height: 1.6;
    color: #555;
  }
  
  ul {
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
      color: #555;
    }
  }
`;
