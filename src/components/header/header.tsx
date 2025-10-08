import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CloseButton, HeaderContainer, Logo, LogoImage, LogoText, MobileMenu, MobileMenuButton, MobileNavLink, Nav, NavLink, NavLinks, Overlay } from './styles';

// Styled components for the header

interface HeaderProps {
  initialLogoSrc?: string;
  scrolledLogoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({
  initialLogoSrc = 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png',
  scrolledLogoSrc = 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(3).png',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLogoSrc, setCurrentLogoSrc] = useState(initialLogoSrc);
  const router = useRouter();

  // Check if we're on the homepage
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setCurrentLogoSrc(scrolledLogoSrc);
      } else {
        setIsScrolled(false);
        setCurrentLogoSrc(initialLogoSrc);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialLogoSrc, scrolledLogoSrc]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    // If we're not on homepage, navigate there first
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <Logo>
          <Link href="/" passHref legacyBehavior>
            <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <LogoImage src={currentLogoSrc} alt="Granum Stone Works Logo" />
              <LogoText isScrolled={isScrolled}>Гранум</LogoText>
            </a>
          </Link>
        </Logo>

        <Nav>
          <NavLinks>
            <NavLink isScrolled={isScrolled}>
              <a href="#catalog" onClick={(e) => scrollToSection(e, 'catalog')}>
                Каталог
              </a>
            </NavLink>
            <NavLink isScrolled={isScrolled}>
              <a href="#works" onClick={(e) => scrollToSection(e, 'works')}>
                Работы
              </a>
            </NavLink>
            <NavLink isScrolled={isScrolled}>
              <Link href="/articles">Статьи</Link>
            </NavLink>
            <NavLink isScrolled={isScrolled}>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                О нас
              </a>
            </NavLink>
            <NavLink isScrolled={isScrolled}>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Связаться
              </a>
            </NavLink>
          </NavLinks>

          <MobileMenuButton isScrolled={isScrolled} onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
        <MobileNavLink>
          <a href="#catalog" onClick={(e) => scrollToSection(e, 'catalog')}>
            Каталог
          </a>
        </MobileNavLink>
        <MobileNavLink>
          <a href="#works" onClick={(e) => scrollToSection(e, 'works')}>
            Работы
          </a>
        </MobileNavLink>
        <MobileNavLink>
          <Link href="/articles" onClick={toggleMobileMenu}>Статьи</Link>
        </MobileNavLink>
        <MobileNavLink>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
            О нас
          </a>
        </MobileNavLink>
        <MobileNavLink>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            Связаться
          </a>
        </MobileNavLink>
      </MobileMenu>

      <Overlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;
