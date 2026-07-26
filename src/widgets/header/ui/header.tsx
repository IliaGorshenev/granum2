'use client';

import {
  Button,
  Drawer,
  Surface,
} from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

import {
  HEADER_LOGOS,
} from '../config/navigation';
import { useHeader } from '../model/use-header';
import { DesktopNavigation } from './desktop-navigation';
import { HeaderLogo } from './header-logo';
import { MobileNavigation } from './mobile-navigation';

interface HeaderProps {
  initialLogoSrc?: string;
  scrolledLogoSrc?: string;
}

const Header = ({
  initialLogoSrc = HEADER_LOGOS.default,
  scrolledLogoSrc = HEADER_LOGOS.scrolled,
}: HeaderProps) => {
  const header = useHeader({ initialLogoSrc, scrolledLogoSrc });

  return (
    <Drawer state={header.mobileMenu}>
      <header
        className={`fixed inset-x-0 z-50 transition-[top,padding] duration-500 ease-out motion-reduce:transition-none ${
          header.isScrolled
            ? 'top-3 px-3 sm:top-4 sm:px-4'
            : 'top-0 px-0'
        }`}>
        <Surface
          className={`mx-auto flex min-h-14 w-full items-center justify-between border px-4 transition-[max-width,border-radius,background-color,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none sm:min-h-16 sm:px-6 ${
            header.isScrolled
              ? 'max-w-7xl rounded-2xl'
              : 'max-w-full rounded-none border-x-0 border-t-0'
          } ${
            header.isOverlay
              ? 'border-white/15 bg-black/15 shadow-none backdrop-blur-md'
              : 'border-border/80 bg-surface/95 shadow-md backdrop-blur-md'
          }`}
          variant="transparent">
          <HeaderLogo
            isOverlay={header.isOverlay}
            logoSrc={header.logoSrc}
          />
          <DesktopNavigation
            currentPath={header.currentPath}
            isOverlay={header.isOverlay}
            onNavigate={header.closeMobileMenu}
            onSectionNavigate={header.navigateToSection}
          />
          <Button
            className="hidden shrink-0 px-4 text-sm font-bold lg:flex"
            onPress={() => {
              trackGoal(Goals.QUOTE_CTA_CLICKED);
              header.navigateToSection(HOME_SECTION_IDS.contact);
            }}
            size="sm"
            variant="primary">
            Получить расчёт
          </Button>
          <Button
            aria-expanded={header.mobileMenu.isOpen}
            aria-label="Открыть меню"
            className={`hidden [--button-bg:transparent] max-lg:flex ${
              header.isOverlay
                ? '[--button-bg-hover:rgb(0_0_0_/_0.28)] [--button-bg-pressed:rgb(0_0_0_/_0.38)] [--button-fg:white]'
                : '[--button-bg-hover:var(--default)] [--button-bg-pressed:var(--default)] [--button-fg:var(--foreground)]'
            }`}
            isIconOnly
            onPress={header.mobileMenu.open}
            size="sm"
            variant="ghost">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 8H19M5 12H19M5 16H19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </Surface>
      </header>
      <MobileNavigation
        currentPath={header.currentPath}
        onClose={header.closeMobileMenu}
        onSectionNavigate={header.navigateToSection}
      />
    </Drawer>
  );
};

export default Header;
