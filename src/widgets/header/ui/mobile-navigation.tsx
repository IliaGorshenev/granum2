import { Button, Drawer } from '@heroui/react';

import { HOME_SECTION_IDS } from '@/shared/config';
import {
  Goals,
  trackGoal,
} from '@/shared/lib/analytics';

import { HEADER_NAVIGATION } from '../config/navigation';
import { NavigationLink } from './navigation-link';

interface MobileNavigationProps {
  currentPath: string;
  onClose: () => void;
  onSectionNavigate: (sectionId: string) => void;
}

export const MobileNavigation = ({
  currentPath,
  onClose,
  onSectionNavigate,
}: MobileNavigationProps) => (
  <Drawer.Backdrop variant="blur">
    <Drawer.Content
      className="w-[min(88vw,22rem)]"
      placement="right">
      <Drawer.Dialog>
        <Drawer.Header className="flex-row items-center justify-between border-b border-separator">
          <Drawer.Heading className="text-lg font-semibold">
            Меню
          </Drawer.Heading>
          <Button
            aria-label="Закрыть меню"
            isIconOnly
            onPress={onClose}
            size="sm"
            variant="ghost">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24">
              <path
                d="M7 7L17 17M17 7L7 17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </Drawer.Header>
        <Drawer.Body>
          <nav aria-label="Мобильная навигация">
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {HEADER_NAVIGATION.map((item) => (
                <li
                  className="rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-default"
                  key={item.label}>
                  <NavigationLink
                    currentPath={currentPath}
                    item={item}
                    onNavigate={onClose}
                    onSectionNavigate={onSectionNavigate}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className="mt-5 font-bold"
            fullWidth
            onPress={() => {
              trackGoal(Goals.QUOTE_CTA_CLICKED);
              onSectionNavigate(HOME_SECTION_IDS.contact);
            }}
            variant="primary">
            Получить расчёт
          </Button>
        </Drawer.Body>
      </Drawer.Dialog>
    </Drawer.Content>
  </Drawer.Backdrop>
);
