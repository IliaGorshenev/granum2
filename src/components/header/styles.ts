import { styled } from "styled-components";

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.isScrolled ? '0.8rem 2rem' : '1.2rem 2rem'};
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  box-sizing: border-box;
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const LogoText = styled.h1<{ isScrolled: boolean }>`
  font-size: ${props => props.isScrolled ? '1.5rem' : '1.8rem'};
  font-weight: 700;
  color: ${props => props.isScrolled ? '#333' : '#fff'};
  margin: 0;
  transition: all 0.3s ease;
  text-shadow: ${props => props.isScrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li<{ isScrolled: boolean }>`
  margin-left: 2rem;
  
  a {
    color: ${props => props.isScrolled ? '#333' : '#fff'};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    text-shadow: ${props => props.isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'};
    
    &:hover {
      color: ${props => props.isScrolled ? '#4caf50' : '#e0e0e0'};
    }
  }
`;

export const MobileMenuButton = styled.button<{ isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.isScrolled ? '#333' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;

`;

export const MobileNavLink = styled.li`
  margin-bottom: 1.5rem;
  
  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    
    &:hover {
      color: #4caf50;
    }
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 999;
`;


