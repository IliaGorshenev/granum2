import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 5rem 2rem 3rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4caf50, #2e7d32, #4caf50);
    background-size: 200% 100%;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  position: relative;
  color: #ffffff;
  letter-spacing: 0.5px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.8rem;
    width: 40px;
    height: 3px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  ${FooterSection}:hover &:after {
    width: 60px;
  }
`;

const FooterLink = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    padding-left: 5px;

    &:before {
      width: 100%;
    }
  }
`;

const FooterText = styled.p`
  color: #b0b0b0;
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #b0b0b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    color: #ffffff;
    background-color: #4caf50;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #808080;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterNavLink = styled.a`
  color: #808080;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.3rem;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: #4caf50;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const NewsletterForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterInput = styled.input`
  padding: 12px 15px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #808080;
  }
`;

const SubscribeButton = styled.button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background-color: #3d8b40;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface FooterProps {
  // You can add props here if needed
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>О компании Гранум</FooterTitle>
          <FooterText>ООО "Гранум" - это качественный и надежный сервис, который помогает людям претворять идеи в реальность.</FooterText>
          {/* <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </SocialIcon>
            <SocialIcon href="https://houzz.com" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
              <i className="fab fa-houzz"></i>
            </SocialIcon>
          </SocialLinks> */}
        </FooterSection>

        <FooterSection>
          <FooterTitle>Быстрые ссылки</FooterTitle>
          <FooterLink href="#catalog">Каталог</FooterLink>
          <FooterLink href="#works">Портфолио</FooterLink>
          <FooterLink href="#about">О нас</FooterLink>
          <FooterLink href="#contact">Контакты</FooterLink>
        </FooterSection>

        {/* <FooterSection>
          <FooterTitle>Услуги</FooterTitle>
          <FooterLink href="#countertops">Столешницы</FooterLink>
          <FooterLink href="#flooring">Напольные покрытия</FooterLink>
          <FooterLink href="#walls">Облицовка стен</FooterLink>
          <FooterLink href="#custom">Индивидуальные проекты</FooterLink>
          <FooterLink href="#maintenance">Обслуживание и ремонт</FooterLink>
        </FooterSection> */}

        <FooterSection>
          <FooterTitle>Свяжитесь с нами</FooterTitle>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            <FooterText>
              456581, Челябинская область, м.р-н Еманжелинский,
              <br />
              г.п. Еманжелинское, г Еманжелинск, ул Советская, дом 11Б
            </FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-phone-alt"></i>
            </ContactIcon>
            <FooterText>+7 912 790 26 95</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <FooterText>Alulianov@yandex.ru</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-clock"></i>
            </ContactIcon>
            <FooterText>Пн-Пт 8:00-19:00</FooterText>
          </ContactItem>

          {/* <NewsletterForm>
    <NewsletterInput type="email" placeholder="Подпишитесь на новости" />
    <SubscribeButton type="submit">Подписаться</SubscribeButton>
  </NewsletterForm> */}
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>© {currentYear} ООО "Гранум". Все права защищены.</Copyright>
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
