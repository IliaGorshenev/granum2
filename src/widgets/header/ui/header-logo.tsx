import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/config';

interface HeaderLogoProps {
  isOverlay: boolean;
  logoSrc: string;
}

export const HeaderLogo = ({
  isOverlay,
  logoSrc,
}: HeaderLogoProps) => (
  <Link
    className="flex min-w-0 items-center gap-2 no-underline"
    href={ROUTES.home}>
    <Image
      alt="Гранум"
      className="size-8 shrink-0 object-contain sm:size-9"
      height={36}
      src={logoSrc}
      width={36}
    />
    <span
      className={`truncate text-lg font-bold tracking-[-0.035em] transition-colors sm:text-xl ${
        isOverlay
          ? 'text-white drop-shadow'
          : 'text-foreground'
      }`}>
      Гранум
    </span>
  </Link>
);
