'use client';

import { Button, ButtonGroup } from '@heroui/react';

import {
  SHARE_TARGETS,
} from '../config/share-targets';
import { useShareArticle } from '../model/use-share-article';

interface ShareArticleProps {
  title: string;
}

export const ShareArticle = ({ title }: ShareArticleProps) => {
  const shareArticle = useShareArticle(title);

  return (
    <ButtonGroup
      className="my-8 flex max-w-full flex-wrap gap-2"
      size="sm">
      {SHARE_TARGETS.map((target) => (
        <Button
          className="min-w-0"
          key={target.label}
          onPress={() => shareArticle.share(target)}
          style={{
            backgroundColor: target.color,
            color: '#ffffff',
          }}>
          {target.label}
        </Button>
      ))}
      <Button
        className="min-w-0"
        onPress={shareArticle.copyLink}
        variant="secondary">
        🔗 Копировать ссылку
      </Button>
    </ButtonGroup>
  );
};
