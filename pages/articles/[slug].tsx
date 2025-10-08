import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../src/components/header/header';
import Footer from '../../src/components/footer';
import { articles, Article } from '../../src/data/articles';

interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
}

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 90px 1rem 2rem;
  }
`;

const Breadcrumbs = styled.nav`
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: #718096;

  a {
    color: #3b7a57;
    transition: color 0.3s ease;

    &:hover {
      color: #2d5d42;
      text-decoration: underline;
    }
  }

  span {
    margin: 0 0.5rem;
  }
`;

const ArticleHeader = styled.header`
  margin-bottom: 3rem;
`;

const ArticleCategory = styled.div`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h1`
  font-size: 3rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 2rem;
  color: #718096;
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeaturedImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
`;

const ShareSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

const ShareButton = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.color};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ReadingProgress = styled.div<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.progress}%;
  height: 4px;
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  z-index: 9999;
  transition: width 0.1s ease;
`;

const ArticleContent = styled.article`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
  line-height: 1.8;
  color: #2d3748;

  h1, h2, h3, h4, h5, h6 {
    color: #2d3748;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    border-bottom: 3px solid #3b7a57;
    padding-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: #3b7a57;

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  h3 {
    font-size: 1.6rem;

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  h4 {
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  strong {
    font-weight: 600;
    color: #1a202c;
  }

  a {
    color: #3b7a57;
    text-decoration: underline;

    &:hover {
      color: #2d5d42;
    }
  }

  blockquote {
    border-left: 4px solid #3b7a57;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #4a5568;
    background: #f7fafc;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;

    th {
      background-color: #f1f5f9;
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: #475569;
      border-bottom: 2px solid #e2e8f0;
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover {
      background-color: #f8fafc;
    }
  }

  code {
    background: #f7fafc;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.95em;
    color: #e53e3e;
  }

  pre {
    background: #1a202c;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;

    code {
      background: none;
      color: inherit;
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  @media print {
    box-shadow: none;
    padding: 0;
  }
`;

const RelatedSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const RelatedCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`;

const RelatedImage = styled.div<{ bgImage: string }>`
  height: 180px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const RelatedContent = styled.div`
  padding: 1.5rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 600;
  transition: color 0.3s ease;

  ${RelatedCard}:hover & {
    color: #3b7a57;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const RelatedExcerpt = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PrintButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(59, 122, 87, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(59, 122, 87, 0.4);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media print {
    display: none;
  }
`;

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, relatedArticles }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Share functions
  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnVK = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);
    window.open(`https://vk.com/share.php?url=${url}&title=${title}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Ссылка скопирована в буфер обмена!');
  };

  const handlePrint = () => {
    window.print();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <PageContainer>
      <Head>
        <title>{article.title} | Гранум</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.publishedDate} />
        <meta property="article:section" content={article.category} />
        <link rel="canonical" href={`https://granum-stone.com/articles/${article.slug}`} />
      </Head>

      <ReadingProgress progress={readingProgress} />
      <Header />

      <MainContent>
        <Breadcrumbs>
          <Link href="/">Главная</Link>
          <span>/</span>
          <Link href="/articles">Статьи</Link>
          <span>/</span>
          <span>{article.title}</span>
        </Breadcrumbs>

        <ArticleHeader>
          <ArticleCategory>{article.category}</ArticleCategory>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleMeta>
            <MetaItem>
              <span>📅</span>
              {formatDate(article.publishedDate)}
            </MetaItem>
            <MetaItem>
              <span>📖</span>
              {article.readTime} минут чтения
            </MetaItem>
          </ArticleMeta>
        </ArticleHeader>

        <FeaturedImage bgImage={article.image} />

        <ShareSection>
          <ShareButton color="#1DA1F2" onClick={shareOnTwitter}>
            <span>🐦</span> Twitter
          </ShareButton>
          <ShareButton color="#4267B2" onClick={shareOnFacebook}>
            <span>📘</span> Facebook
          </ShareButton>
          <ShareButton color="#0077FF" onClick={shareOnVK}>
            <span>🔵</span> VK
          </ShareButton>
          <ShareButton color="#718096" onClick={copyLink}>
            <span>🔗</span> Копировать ссылку
          </ShareButton>
        </ShareSection>

        <ArticleContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </ArticleContent>

        {relatedArticles.length > 0 && (
          <RelatedSection>
            <SectionTitle>Похожие статьи</SectionTitle>
            <RelatedGrid>
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`} passHref legacyBehavior>
                  <RelatedCard>
                    <RelatedImage bgImage={relatedArticle.image} />
                    <RelatedContent>
                      <RelatedTitle>{relatedArticle.title}</RelatedTitle>
                      <RelatedExcerpt>{relatedArticle.excerpt}</RelatedExcerpt>
                    </RelatedContent>
                  </RelatedCard>
                </Link>
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </MainContent>

      <PrintButton onClick={handlePrint} title="Распечатать статью">
        🖨️
      </PrintButton>

      <Footer />
    </PageContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  // Get related articles (same category, excluding current article, max 3)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
};

export default ArticleDetail;
