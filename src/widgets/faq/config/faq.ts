import { mediaUrl } from '@/shared/config';

export const FAQ_ITEMS = [
  {
    id: 'price',
    question: 'От чего зависит стоимость?',
    answer:
      'От вида гранита, размеров, толщины, обработки, кромок, вырезов и монтажа. После уточнения задачи подготовим расчёт.',
    image: mediaUrl('generated/granite-varieties.png'),
    imageAlt: 'Образцы гранита разных цветов и фактур',
  },
  {
    id: 'measurement',
    question: 'Можно заказать замер?',
    answer:
      'Да. Согласуем задачу, приедем на объект и подготовим размеры для производства.',
    image: mediaUrl('generated/project-measurement.png'),
    imageAlt: 'Замер основания будущего изделия',
  },
  {
    id: 'production',
    question: 'Где изготавливаются изделия?',
    answer:
      'Изделия производятся в собственном цехе. Мы контролируем распил, обработку, полировку и качество.',
    image: mediaUrl('generated/granite-cutting.png'),
    imageAlt: 'Распил гранитной плиты на производстве',
  },
  {
    id: 'installation',
    question: 'Вы выполняете монтаж?',
    answer:
      'Да. Можно заказать полный цикл: консультацию, замер, изготовление, доставку и монтаж.',
    image: mediaUrl('works/entrance-3.jpg'),
    imageAlt: 'Готовая входная группа из гранита',
  },
  {
    id: 'request',
    question: 'Что нужно для предварительного расчёта?',
    answer:
      'Отправьте примерные размеры, фотографию объекта, желаемый материал и вид обработки.',
    image: mediaUrl('generated/granite-finishes.png'),
    imageAlt: 'Полированная и термообработанная поверхности гранита',
  },
] as const;
