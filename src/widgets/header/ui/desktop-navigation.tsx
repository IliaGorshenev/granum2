import { HEADER_NAVIGATION } from '../config/navigation';
import { NavigationLink } from './navigation-link';

interface DesktopNavigationProps {
  currentPath: string;
  isOverlay: boolean;
  onNavigate: () => void;
  onSectionNavigate: (sectionId: string) => void;
}

export const DesktopNavigation = ({
  currentPath,
  isOverlay,
  onNavigate,
  onSectionNavigate,
}: DesktopNavigationProps) => (
  <nav aria-label="Основная навигация">
    <ul className="m-0 flex list-none items-center gap-5 p-0 max-lg:hidden">
      {HEADER_NAVIGATION.map((item) => (
        <li
          className={`text-sm font-semibold transition-colors ${
            isOverlay
              ? 'text-white drop-shadow hover:text-white/70'
              : 'text-foreground hover:text-accent'
          }`}
          key={item.label}>
          <NavigationLink
            currentPath={currentPath}
            item={item}
            onNavigate={onNavigate}
            onSectionNavigate={onSectionNavigate}
          />
        </li>
      ))}
    </ul>
  </nav>
);
