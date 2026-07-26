import type { PromoSlide } from '@/entities/promo';
import type { Work } from '@/entities/work';
import { mediaUrl } from '@/shared/config';

export const COMPLETED_WORKS: Work[] = [
  {
    id: 1,
    category: 'Плитка',
    title: 'Мощение мансуровским гранитом',
    description: 'Термообработанная плитка 600×300×30 мм.',
    imageSrc: mediaUrl('works/paving.jpg'),
  },
  {
    id: 2,
    category: 'Подоконники',
    title: 'Подоконники из Дымовского гранита',
    description: 'Полированные изделия 1200×450×50 мм.',
    imageSrc: mediaUrl('works/windowsill.jpg'),
    additionalImages: [
      mediaUrl('works/windowsills-3.jpg'),
    ],
  },
  {
    id: 3,
    category: 'Входная группа',
    title: 'Входная группа из Южно-Султаевского гранита',
    description: 'Облицовка площадки и ступеней натуральным камнем.',
    imageSrc: mediaUrl('works/entrance-3.jpg'),
    additionalImages: [
      mediaUrl('works/entrance-1.jpg'),
      mediaUrl('works/entrance-2.jpg'),
    ],
  },
  {
    id: 4,
    category: 'Входная группа',
    title: 'Входная группа из Дымовского гранита',
    description: 'Защитная пропитка с эффектом мокрого камня.',
    imageSrc: mediaUrl('works/joint-4.jpg'),
    additionalImages: [
      mediaUrl('works/joint-3.jpg'),
      mediaUrl('works/joint-1.jpg'),
    ],
  },
  {
    id: 5,
    category: 'Ступени',
    title: 'Ступени из Дымовского гранита',
    description: 'Облицовка с защитной пропиткой натурального камня.',
    imageSrc: mediaUrl('works/joint-5.jpg'),
    additionalImages: [
      mediaUrl('works/joint-6.jpg'),
    ],
  },
  {
    id: 6,
    category: 'Входная группа',
    title: 'Входная группа из гранита Балтийский',
    description: 'Натуральный камень из Карелии.',
    imageSrc: mediaUrl('works/joint-7.jpg'),
  },
];

export const PROMO_SLIDES: PromoSlide[] = [
  {
    title: 'Изделия из гранита собственного производства',
    subtitle:
      'Плиты, ступени, подоконники и фасадные элементы. Замер, изготовление и монтаж.',
    imageSrc: mediaUrl('home/hero.mp4'),
    posterSrc: mediaUrl('home/production.jpg'),
    type: 'video',
  },
  {
    title: 'Гранит для дома и общественных пространств',
    subtitle:
      'Подбираем материал и обработку под интерьер, фасад или благоустройство.',
    imageSrc: mediaUrl('home/production.jpg'),
    type: 'image',
  },
  {
    title: 'Точная обработка натурального камня',
    subtitle:
      'Контролируем распил, кромки, полировку и качество готового изделия.',
    imageSrc: mediaUrl('home/marble.jpg'),
    type: 'image',
  },
  {
    title: 'Проект от замера до монтажа',
    subtitle:
      'Сопровождаем задачу на каждом этапе и отвечаем за готовый результат.',
    imageSrc: mediaUrl('home/workshop.jpg'),
    type: 'image',
  },
];
