import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ffffff;
  border-top: 5px solid #000000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin-left: 20px;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <LoaderContainer>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
