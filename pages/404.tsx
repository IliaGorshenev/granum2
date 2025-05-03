import Link from 'next/link';
import styled from 'styled-components';
import SEO from '../src/SEO';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0 2rem;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HomeButton = styled.a`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.25);
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(90deg, #346c4d, #5c7a1e);
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(59, 122, 87, 0.25);
  }
`;

export default function Custom404() {
  return (
    <>
      <SEO title="404 - Страница не найдена | Гранум" description="Запрашиваемая страница не найдена. Вернитесь на главную страницу сайта Гранум." />
      <NotFoundContainer>
        <Title>404</Title>
        <Subtitle>Страница не найдена</Subtitle>
        <Description>Извините, но страница, которую вы ищете, не существует или была перемещена. Пожалуйста, вернитесь на главную страницу.</Description>
        <Link href="/" passHref>
          <HomeButton>Вернуться на главную</HomeButton>
        </Link>
      </NotFoundContainer>
    </>
  );
}
