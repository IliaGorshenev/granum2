import {
  Surface,
} from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { removeLeadingHeading } from '../lib/remove-leading-heading';
import { articleMarkdownComponents } from './article-markdown-components';

interface ArticleMarkdownProps {
  children: string;
}

export const ArticleMarkdown = ({ children }: ArticleMarkdownProps) => (
  <Surface
    className="mb-14 rounded-2xl border border-border/80 p-5 leading-7 shadow-sm sm:p-8 lg:p-10 print:p-0 print:shadow-none">
    <article>
      <ReactMarkdown
        components={articleMarkdownComponents}
        remarkPlugins={[remarkGfm]}>
        {removeLeadingHeading(children)}
      </ReactMarkdown>
    </article>
  </Surface>
);
