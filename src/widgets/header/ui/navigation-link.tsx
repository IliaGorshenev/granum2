import Link from 'next/link';
import type { MouseEvent } from 'react';

import type { HeaderNavigationItem } from '../config/navigation';

interface NavigationLinkProps {
  currentPath: string;
  item: HeaderNavigationItem;
  onNavigate: () => void;
  onSectionNavigate: (sectionId: string) => void;
}

export const NavigationLink = ({
  currentPath,
  item,
  onNavigate,
  onSectionNavigate,
}: NavigationLinkProps) => {
  if ('href' in item) {
    return (
      <Link
        aria-current={
          currentPath === item.href ? 'page' : undefined
        }
        className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        href={item.href}
        onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onSectionNavigate(item.sectionId);
  };

  return (
    <a
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      href={`#${item.sectionId}`}
      onClick={handleClick}>
      {item.label}
    </a>
  );
};
