import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer';
import { articles, Article } from '../src/data/articles';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 90px 1rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#3b7a57' : '#e2e8f0'};
  background-color: ${props => props.active ? '#3b7a57' : 'white'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#346c4d' : '#f7fafc'};
    border-color: #3b7a57;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    &:active {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    &:active:before {
      transform: scaleX(1);
    }
  }
`;

const ArticleImage = styled.div<{ bgImage: string }>`
  height: 240px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 1s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 100%);
  }

  ${ArticleCard}:hover & {
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ArticleContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ArticleCategory = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  width: fit-content;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${ArticleCard}:hover & {
    color: #3b7a57;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.9rem;
  color: #718096;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ReadTime = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '📖';
  }
`;

const PublishedDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '📅';
  }
`;

const ArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  // Get unique categories
  const categories = ['Все', ...Array.from(new Set(articles.map(article => article.category)))];

  // Filter articles by category
  const filteredArticles = selectedCategory === 'Все'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <PageContainer>
      <Head>
        <title>Статьи и советы о граните | Гранум</title>
        <meta name="description" content="Полезные статьи и экспертные советы о выборе, уходе и использовании гранита для вашего дома. Узнайте больше о натуральном камне от профессионалов." />
        <meta name="keywords" content="статьи о граните, советы по граниту, уход за гранитом, выбор гранита, гранитные изделия" />
        <meta property="og:title" content="Статьи и советы о граните | Гранум" />
        <meta property="og:description" content="Полезные статьи и экспертные советы о выборе, уходе и использовании гранита для вашего дома." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://granum-stone.com/articles" />
      </Head>

      <Header />

      <MainContent>
        <PageTitle>Статьи и советы о граните</PageTitle>
        <PageSubtitle>
          Экспертные советы, полезные руководства и последние новости о работе с натуральным камнем
        </PageSubtitle>

        <FilterSection>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterSection>

        <ArticlesGrid>
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} passHref legacyBehavior>
              <ArticleCard>
                <ArticleImage bgImage={article.image} />
                <ArticleContent>
                  <ArticleCategory>{article.category}</ArticleCategory>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ArticleMeta>
                    <PublishedDate>{formatDate(article.publishedDate)}</PublishedDate>
                    <ReadTime>{article.readTime} мин</ReadTime>
                  </ArticleMeta>
                </ArticleContent>
              </ArticleCard>
            </Link>
          ))}
        </ArticlesGrid>
      </MainContent>

      <Footer />
    </PageContainer>
  );
};

export default ArticlesPage;
