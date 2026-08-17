import {
  Card,
  Chip,
} from '@heroui/react';

import {
  StoneIcon,
  type StoneIconName,
} from '@/shared/ui/stone-icon';

const CARD_TONES = {
  accent:
    'border-accent bg-accent text-accent-foreground shadow-lg',
  light:
    'border-border/70 bg-background text-foreground shadow-none',
  warm:
    'border-amber-200/70 bg-amber-50 text-foreground shadow-none',
} as const;

interface AboutFeatureCardProps {
  className: string;
  description: string;
  eyebrow: string;
  icon: StoneIconName;
  metric?: string;
  metricLabel?: string;
  tags?: readonly string[];
  title: string;
  tone?: keyof typeof CARD_TONES;
}

export const AboutFeatureCard = ({
  className,
  description,
  eyebrow,
  icon,
  metric,
  metricLabel,
  tags,
  title,
  tone = 'light',
}: AboutFeatureCardProps) => {
  const isAccent = tone === 'accent';
  const iconTone =
    tone === 'accent'
      ? 'inverse'
      : tone === 'warm'
        ? 'warm'
        : 'accent';

  return (
    <Card
      className={`min-w-0 overflow-hidden border p-0 ${CARD_TONES[tone]} ${className}`}
      variant="secondary">
      <Card.Content className="flex h-full flex-col justify-between gap-8 p-6 sm:p-7">
        <div>
          <div className="flex items-center justify-between gap-4">
            <Chip
              className={
                isAccent
                  ? 'bg-white/12 text-white'
                  : 'bg-accent/10 text-accent'
              }
              size="sm"
              variant="soft">
              {eyebrow}
            </Chip>
            <StoneIcon name={icon} tone={iconTone} />
          </div>
          <Card.Title
            className={`mt-5 text-2xl leading-tight font-semibold tracking-[-0.035em] ${
              isAccent ? 'text-white' : 'text-foreground'
            }`}>
            {title}
          </Card.Title>
          <Card.Description
            className={`mt-3 text-sm leading-6 ${
              isAccent ? 'text-white/75' : 'text-muted'
            }`}>
            {description}
          </Card.Description>
        </div>
        {metric && metricLabel && (
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-4">
            <strong className="max-w-full text-[clamp(2.5rem,10vw,3rem)] leading-none font-semibold tracking-[-0.06em]">
              {metric}
            </strong>
            <span
              className={`max-w-44 pb-1 text-sm leading-5 ${
                isAccent ? 'text-white/70' : 'text-muted'
              }`}>
              {metricLabel}
            </span>
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip
                className={
                  isAccent
                    ? 'bg-white/12 text-white'
                    : 'bg-accent/10 text-accent'
                }
                key={tag}
                size="sm"
                variant="soft">
                {tag}
              </Chip>
            ))}
          </div>
        )}
      </Card.Content>
    </Card>
  );
};
