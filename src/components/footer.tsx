import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background-color: #4caf50;
  }
`;

const FooterLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.2s ease;

  &:hover {
    color: #4caf50;
  }
`;

const FooterText = styled.p`
  color: #e0e0e0;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #4caf50;
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterNavLink = styled.a`
  color: #a0a0a0;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #4caf50;
  }
`;

interface FooterProps {
  // You can add props here if needed
}

// ... (keep all the styled components as they are)

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>О компании Гранум</FooterTitle>
          <FooterText>
            Гранум Стоун Воркс специализируется на преобразовании высококачественного природного камня в потрясающие элементы для жилых и коммерческих помещений, сочетая
            традиционное мастерство с современными технологиями.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-p"></i>
            </SocialIcon>
            <SocialIcon href="https://houzz.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-houzz"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Быстрые ссылки</FooterTitle>
          <FooterLink href="#home">Главная</FooterLink>
          <FooterLink href="#catalog">Каталог</FooterLink>
          <FooterLink href="#portfolio">Портфолио</FooterLink>
          <FooterLink href="#about">О нас</FooterLink>
          <FooterLink href="#contact">Контакты</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Услуги</FooterTitle>
          <FooterLink href="#countertops">Столешницы</FooterLink>
          <FooterLink href="#flooring">Напольные покрытия</FooterLink>
          <FooterLink href="#walls">Облицовка стен</FooterLink>
          <FooterLink href="#custom">Индивидуальные проекты</FooterLink>
          <FooterLink href="#maintenance">Обслуживание и ремонт</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Свяжитесь с нами</FooterTitle>
          <FooterText>ул. Каменная, 123</FooterText>
          <FooterText>г. Мраморный, 12345</FooterText>
          <FooterText>Телефон: +7 (555) 123-4567</FooterText>
          <FooterText>Email: info@granumstone.ru</FooterText>
          <FooterText>Часы работы: Пн-Пт 9:00-17:00</FooterText>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>© {currentYear} Гранум Стоун Воркс. Все права защищены.</Copyright>
        <FooterNav>
          <FooterNavLink href="/privacy">Политика конфиденциальности</FooterNavLink>
          <FooterNavLink href="/terms">Условия использования</FooterNavLink>
          <FooterNavLink href="/sitemap">Карта сайта</FooterNavLink>
        </FooterNav>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
