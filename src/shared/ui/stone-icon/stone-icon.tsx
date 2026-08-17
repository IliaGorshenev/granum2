import {
  STONE_ICON_PATHS,
  type StoneIconName,
} from './stone-icon-paths';

const ICON_SIZES = {
  lg: 'size-14 rounded-2xl [&_svg]:size-7',
  md: 'size-11 rounded-xl [&_svg]:size-5',
  sm: 'size-8 rounded-lg [&_svg]:size-4',
} as const;

const ICON_TONES = {
  accent: {
    color: 'text-accent',
    frame: 'bg-accent/10 ring-accent/15',
  },
  inverse: {
    color: 'text-white',
    frame: 'bg-white/12 ring-white/15',
  },
  stone: {
    color: 'text-foreground',
    frame: 'bg-surface-secondary ring-border/80',
  },
  warm: {
    color: 'text-amber-900',
    frame: 'bg-amber-100 ring-amber-200/80',
  },
} as const;

const ICON_VARIANTS = {
  framed: 'overflow-hidden ring-1',
  plain: '',
} as const;

interface StoneIconProps {
  className?: string;
  name: StoneIconName;
  size?: keyof typeof ICON_SIZES;
  tone?: keyof typeof ICON_TONES;
  variant?: keyof typeof ICON_VARIANTS;
}

export const StoneIcon = ({
  className = '',
  name,
  size = 'md',
  tone = 'accent',
  variant = 'framed',
}: StoneIconProps) => {
  const toneStyles = ICON_TONES[tone];

  return (
    <span
      aria-hidden="true"
      className={`relative isolate inline-grid shrink-0 place-items-center ${ICON_SIZES[size]} ${toneStyles.color} ${ICON_VARIANTS[variant]} ${variant === 'framed' ? toneStyles.frame : ''} ${className}`}>
      {variant === 'framed' && (
        <span className="absolute -top-3 -right-3 size-7 rotate-45 rounded-sm bg-current opacity-[0.07]" />
      )}
      <svg
        className="relative z-10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
        viewBox="0 0 24 24">
        {STONE_ICON_PATHS[name].map((path) => (
          <path d={path} key={path} />
        ))}
      </svg>
    </span>
  );
};
