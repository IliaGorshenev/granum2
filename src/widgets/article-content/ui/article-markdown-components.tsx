import { Link } from '@heroui/react';
import type { Components } from 'react-markdown';

export const articleMarkdownComponents: Components = {
  h1: (props) => (
    <h1
      className="mt-8 mb-4 border-b border-separator pb-3 text-3xl font-semibold tracking-[-0.035em] text-foreground"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-8 mb-4 text-2xl font-semibold tracking-[-0.025em] text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-7 mb-3 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-8 mb-4 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-5 text-base leading-7" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-base" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-base" {...props} />
  ),
  a: ({ children, href }) => (
    <Link className="underline" href={href}>
      {children}
    </Link>
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 rounded-r-lg border-l-4 border-accent bg-surface-secondary px-6 py-4 text-muted italic"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-8 max-w-full overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-divider bg-surface-secondary p-3 text-left text-sm font-semibold"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-divider p-3 text-left text-sm" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-surface-secondary px-2 py-1 font-mono text-danger"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-lg bg-neutral-900 p-6 text-neutral-200 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      {...props}
    />
  ),
};
