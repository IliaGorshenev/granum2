import {
  Card,
  Chip,
} from '@heroui/react';
import Image from 'next/image';

import {
  ABOUT_EQUIPMENT,
  ABOUT_HIGHLIGHTS,
  ABOUT_IMAGES,
} from '../config/content';

export const AboutProductionCard = () => {
  const production = ABOUT_HIGHLIGHTS.production;

  return (
    <Card className="group relative min-h-[30rem] overflow-hidden border-0 p-0 shadow-xl md:col-span-2 md:min-h-[32rem] lg:col-span-7 lg:row-span-2">
      <Image
        fill
        alt="Камнеобрабатывающее производство Гранум"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 58vw"
        src={ABOUT_IMAGES.production}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
      <Card.Content className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <Chip
          className="w-fit bg-white/12 text-white backdrop-blur-sm"
          size="sm"
          variant="soft">
          {production.eyebrow}
        </Chip>
        <div className="max-w-2xl">
          <Card.Title className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            Контроль внутри одного производства
          </Card.Title>
          <Card.Description className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            {production.description}
          </Card.Description>
          <div className="mt-6 flex flex-wrap gap-2">
            {ABOUT_EQUIPMENT.map((item) => (
              <Chip
                className="border-white/15 bg-black/25 text-white backdrop-blur-sm"
                key={item}
                size="sm"
                variant="soft">
                {item}
              </Chip>
            ))}
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
