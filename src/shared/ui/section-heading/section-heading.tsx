interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
}: SectionHeadingProps) => (
  <header className="mx-auto max-w-2xl text-center">
    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-accent uppercase">
      {eyebrow}
    </p>
    <h2 className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
      {title}
    </h2>
  </header>
);
