import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import {
  usePathname,
  useRouter,
} from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/shared/config';

import {
  HEADER_LOGOS,
  HEADER_SCROLL_THRESHOLD_PX,
} from '../config/navigation';
import {
  closeMobileMenuAtom,
  headerScrolledAtom,
  mobileMenuOpenAtom,
  openMobileMenuAtom,
  setHeaderScrolledAtom,
  setMobileMenuOpenAtom,
  toggleMobileMenuAtom,
} from './header.atoms';

interface UseHeaderOptions {
  initialLogoSrc?: string;
  scrolledLogoSrc?: string;
}

export const useHeader = ({
  initialLogoSrc = HEADER_LOGOS.default,
  scrolledLogoSrc = HEADER_LOGOS.scrolled,
}: UseHeaderOptions) => {
  const router = useRouter();
  const pathname = usePathname();
  const isScrolled = useAtomValue(headerScrolledAtom);
  const isMobileMenuOpen = useAtomValue(mobileMenuOpenAtom);
  const setScrolled = useSetAtom(setHeaderScrolledAtom);
  const setMobileMenuOpen = useSetAtom(setMobileMenuOpenAtom);
  const openMobileMenu = useSetAtom(openMobileMenuAtom);
  const closeMobileMenu = useSetAtom(closeMobileMenuAtom);
  const toggleMobileMenu = useSetAtom(toggleMobileMenuAtom);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD_PX);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      setScrolled(false);
      closeMobileMenu();
    };
  }, [closeMobileMenu, setScrolled]);

  if (pathname === null) {
    throw new Error('Current pathname is unavailable');
  }

  const isOverlay = pathname === ROUTES.home && !isScrolled;

  const navigateToSection = (sectionId: string) => {
    closeMobileMenu();

    if (pathname !== ROUTES.home) {
      router.push(`${ROUTES.home}#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      throw new Error(`Section "${sectionId}" is missing`);
    }

    section.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    closeMobileMenu,
    currentPath: pathname,
    isOverlay,
    isScrolled,
    logoSrc: isOverlay ? initialLogoSrc : scrolledLogoSrc,
    mobileMenu: {
      close: closeMobileMenu,
      isOpen: isMobileMenuOpen,
      open: openMobileMenu,
      setOpen: setMobileMenuOpen,
      toggle: toggleMobileMenu,
    },
    navigateToSection,
  };
};
