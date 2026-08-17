import {
  StoneIcon,
  type StoneIconName,
} from '@/shared/ui/stone-icon';

const HEADING_ALIGNMENTS = {
  center: {
    header: 'mx-auto text-center',
    eyebrow: 'justify-center',
  },
  start: {
    header: 'text-left',
    eyebrow: 'justify-start',
  },
} as const;

interface SectionHeadingProps {
  align?: keyof typeof HEADING_ALIGNMENTS;
  eyebrow: string;
  icon?: StoneIconName;
  title: string;
}

export const SectionHeading = ({
  align = 'center',
  eyebrow,
  icon,
  title,
}: SectionHeadingProps) => {
  const alignment = HEADING_ALIGNMENTS[align];

  return (
    <header className={`max-w-2xl ${alignment.header}`}>
      <div
        className={`mb-3 flex items-center gap-2.5 ${alignment.eyebrow}`}>
        {icon && <StoneIcon name={icon} size="sm" />}
        <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
        {title}
      </h2>
    </header>
  );
};
