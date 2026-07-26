import type { PromoSlide } from '@/entities/promo';
import type { Work } from '@/entities/work';

export const COMPLETED_WORKS: Work[] = [
  {
    id: 1,
    category: 'Плитка',
    title: 'Мощение мансуровским гранитом',
    description: 'Термообработанная плитка 600×300×30 мм.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0.jpg',
  },
  {
    id: 2,
    category: 'Подоконники',
    title: 'Подоконники из Дымовского гранита',
    description: 'Полированные изделия 1200×450×50 мм.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.jpg',
    additionalImages: [
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B83.jpg',
    ],
  },
  {
    id: 3,
    category: 'Входная группа',
    title: 'Входная группа из Южно-Султаевского гранита',
    description: 'Облицовка площадки и ступеней натуральным камнем.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B43.jpg',
    additionalImages: [
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B41.jpg',
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B42.jpg',
    ],
  },
  {
    id: 4,
    category: 'Входная группа',
    title: 'Входная группа из Дымовского гранита',
    description: 'Защитная пропитка с эффектом мокрого камня.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA4.jpg',
    additionalImages: [
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA3.jpg',
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA1.jpg',
    ],
  },
  {
    id: 5,
    category: 'Ступени',
    title: 'Ступени из Дымовского гранита',
    description: 'Облицовка с защитной пропиткой натурального камня.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA5.jpg',
    additionalImages: [
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA6.jpg',
    ],
  },
  {
    id: 6,
    category: 'Входная группа',
    title: 'Входная группа из гранита Балтийский',
    description: 'Натуральный камень из Карелии.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA7.jpg',
  },
];

export const PROMO_SLIDES: PromoSlide[] = [
  {
    title: 'Изделия из гранита собственного производства',
    subtitle:
      'Плиты, ступени, подоконники и фасадные элементы. Замер, изготовление и монтаж.',
    imageSrc: 'https://storage.yandexcloud.net/ilia/first_granum.mp4',
    posterSrc: 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
    type: 'video',
  },
  {
    title: 'Гранит для дома и общественных пространств',
    subtitle:
      'Подбираем материал и обработку под интерьер, фасад или благоустройство.',
    imageSrc: 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
    type: 'image',
  },
  {
    title: 'Точная обработка натурального камня',
    subtitle:
      'Контролируем распил, кромки, полировку и качество готового изделия.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/11258999099890122_543e.jpg',
    type: 'image',
  },
  {
    title: 'Проект от замера до монтажа',
    subtitle:
      'Сопровождаем задачу на каждом этапе и отвечаем за готовый результат.',
    imageSrc:
      'https://storage.yandexcloud.net/ilia/Lez-4599-1-1536x1024.jpg',
    type: 'image',
  },
];
