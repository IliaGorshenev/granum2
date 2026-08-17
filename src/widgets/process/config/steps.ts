export const PROCESS_STEPS = [
  {
    icon: 'consultation',
    number: '01',
    title: 'Обсуждаем задачу',
    description:
      'Уточняем изделие, размеры, материал и требования к обработке.',
  },
  {
    icon: 'measure',
    number: '02',
    title: 'Делаем замер',
    description:
      'Проверяем размеры и готовим точное техническое решение.',
  },
  {
    icon: 'workshop',
    number: '03',
    title: 'Изготавливаем',
    description:
      'Распиливаем, обрабатываем и проверяем изделие в собственном цехе.',
  },
  {
    icon: 'installation',
    number: '04',
    title: 'Доставляем и монтируем',
    description:
      'Привозим готовое изделие и выполняем профессиональный монтаж.',
  },
] as const;
