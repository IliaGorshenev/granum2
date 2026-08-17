import { mediaUrl } from '@/shared/config';

export const ABOUT_IMAGES = {
  history: mediaUrl('home/production.jpg'),
  production: mediaUrl('generated/stone-workshop.png'),
  projects: mediaUrl('works/entrance-3.jpg'),
} as const;

export const ABOUT_EQUIPMENT = [
  'Станки для распила камня',
  'Линия шлифовки и полировки',
  'Канатная машина фигурной резки',
  'Участок термообработки камня',
] as const;

export const ABOUT_MATERIALS = [
  'Гранит Южно-Султаевский (Челябинская область)',
  'Гранит Мансуровский (республика Башкортостан)',
  'Гранит Камбулатовский (Челябинская область)',
  'Гранит Томирис II (Куртинский) (Алматинская область)',
  'Гранит Жельтау-2 (Жамбыльская область)',
  'Гранит Авангард (Урал, Челябинская область)',
  'Гранит Исетский (возможно изготовление)',
  'Гранит Габбро Другорецкого (возможно изготовление)',
] as const;

export const ABOUT_HIGHLIGHTS = {
  production: {
    eyebrow: 'Собственный цех',
    icon: 'workshop',
    imageNote: 'Иллюстрация производственного процесса',
    title: 'Своё производство',
    description:
      'Контролируем качество на всех этапах — от выбора камня до готового изделия.',
  },
  masters: {
    eyebrow: 'Команда',
    icon: 'experience',
    metric: '10+',
    metricLabel: 'лет работаем с натуральным камнем',
    title: 'Опытные мастера',
    description:
      'Наши специалисты знают и любят камень, имеют большой опыт работы.',
  },
  personal: {
    eyebrow: 'Индивидуально',
    icon: 'project',
    title: 'Индивидуальный подход',
    description: 'Создаём решения под ваши задачи, учитывая все пожелания.',
  },
  support: {
    eyebrow: 'Полный цикл',
    icon: 'installation',
    title: 'Сопровождение проекта',
    description:
      'Помогаем на всех этапах: от консультации и выбора материала до замеров, изготовления и монтажа.',
    tags: ['Консультация', 'Замер', 'Изготовление', 'Монтаж'],
  },
  warranty: {
    eyebrow: 'Ответственность',
    icon: 'warranty',
    metric: 'Гарантия',
    metricLabel: 'на выполненные работы',
    title: 'Отвечаем за результат',
    description: 'Даём гарантию на все наши работы.',
  },
  estimate: {
    eyebrow: 'Смета',
    icon: 'dimensions',
    title: 'Прозрачный расчёт',
    description:
      'Показываем, как материал, размеры и обработка влияют на стоимость.',
    tags: ['Материал', 'Размеры', 'Обработка'],
  },
} as const;
