import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/config';

import { formatArticleDate } from '../lib/format-article-date';
import type { Article } from '../model/types';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => (
  <Card className="group h-full min-w-0 overflow-hidden border border-border/80 bg-surface p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <Link
      className="flex h-full min-w-0 flex-col"
      href={ROUTES.article(article.slug)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-secondary">
        <Image
          fill
          alt={article.title}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={article.image}
        />
      </div>
      <Card.Header className="min-w-0 items-start px-5 pt-5 pb-0">
        <Chip color="accent" size="sm" variant="soft">
          {article.category}
        </Chip>
      </Card.Header>
      <Card.Content className="flex min-w-0 flex-1 flex-col gap-3 px-5 py-4">
        <Card.Title className="line-clamp-2 text-lg leading-6 font-semibold tracking-[-0.025em] transition-colors group-hover:text-accent">
          {article.title}
        </Card.Title>
        <Card.Description className="line-clamp-3 flex-1 text-sm leading-6">
          {article.excerpt}
        </Card.Description>
      </Card.Content>
      <Card.Footer className="flex min-w-0 flex-wrap justify-between gap-2 border-t border-separator px-5 py-4 text-xs text-muted">
        <span>{formatArticleDate(article.publishedDate)}</span>
        <span>{article.readTime} мин</span>
      </Card.Footer>
    </Link>
  </Card>
);
