import {
  Button,
  Card,
  Chip,
} from '@heroui/react';
import Image from 'next/image';

import type { Work } from '@/entities/work';

interface WorkCardProps {
  onSelect: (work: Work) => void;
  work: Work;
}

export const WorkCard = ({
  onSelect,
  work,
}: WorkCardProps) => (
  <Card className="group flex h-full min-w-0 flex-col overflow-hidden border border-border/80 bg-surface p-0 shadow-sm">
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary">
      <Image
        fill
        alt={work.title}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
        src={work.imageSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
    </div>
    <Card.Content className="min-w-0 flex-1 px-5 pt-5 pb-4">
      <Chip className="mb-3" color="accent" size="sm" variant="soft">
        {work.category}
      </Chip>
      <Card.Title className="line-clamp-2 text-base leading-6 font-semibold tracking-[-0.02em]">
        {work.title}
      </Card.Title>
      <Card.Description className="mt-2 line-clamp-2 text-sm">
        {work.description}
      </Card.Description>
    </Card.Content>
    <Card.Footer className="mt-auto min-w-0 px-5 pt-0 pb-5">
      <Button
        className="max-w-full min-w-0 text-sm font-bold"
        fullWidth
        onPress={() => onSelect(work)}
        size="sm"
        variant="secondary">
        <span className="truncate">Открыть проект</span>
      </Button>
    </Card.Footer>
  </Card>
);
