# Гранум

Сайт камнеобрабатывающей компании.

## Стек

- Next.js 16 App Router
- React 19
- TypeScript
- HeroUI 3
- Jotai 2
- Tailwind CSS 4
- Feature-Sliced Design

## Запуск

```bash
npm install
npm run dev
```

Проверки:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local`.

```dotenv
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Переменные используются серверным обработчиком обратной связи.

## Архитектура

```text
src/
  app/                 тонкие адаптеры App Router
  application/         провайдеры и глобальные стили
  pages/               FSD-композиция страниц
  widgets/             самостоятельные блоки страниц
  features/            пользовательские сценарии
  entities/            бизнес-сущности
  shared/              общие конфиги, библиотеки, UI
```

Адаптеры маршрутов имеют суффикс `.route.tsx`.
Импорты между слайсами выполняются через `index.ts`.

Состояние слайса хранится внутри `model/*.atoms.ts`.
UI получает состояние через локальные model-хуки.
