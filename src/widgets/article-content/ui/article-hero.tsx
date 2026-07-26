import {
  Breadcrumbs,
  Card,
  Chip,
  Surface,
} from '@heroui/react';
import Image from 'next/image';

import { formatArticleDate, type Article } from '@/entities/article';
import { ROUTES } from '@/shared/config';

interface ArticleHeroProps {
  article: Article;
}

export const ArticleHero = ({ article }: ArticleHeroProps) => (
  <>
    <Breadcrumbs className="mb-7 max-w-full overflow-hidden text-sm">
      <Breadcrumbs.Item href={ROUTES.home}>Главная</Breadcrumbs.Item>
      <Breadcrumbs.Item href={ROUTES.articles}>Статьи</Breadcrumbs.Item>
      <Breadcrumbs.Item>{article.title}</Breadcrumbs.Item>
    </Breadcrumbs>
    <Surface className="mb-9 min-w-0" variant="transparent">
      <Chip className="mb-5" color="accent" size="sm" variant="soft">
        {article.category}
      </Chip>
      <h1 className="mb-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-foreground">
        {article.title}
      </h1>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span>{formatArticleDate(article.publishedDate)}</span>
        <span>{article.readTime} минут чтения</span>
      </div>
    </Surface>
    <Card className="relative mb-10 aspect-[16/8] overflow-hidden border border-border/80 shadow-lg max-sm:aspect-[4/3]">
      <Image
        fill
        alt={article.title}
        className="object-cover"
        sizes="(max-width: 1200px) 100vw, 1200px"
        src={article.image}
      />
    </Card>
  </>
);
