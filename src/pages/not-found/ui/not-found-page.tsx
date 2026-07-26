import {
  Card,
  Link,
  Surface,
} from '@heroui/react';

import { ROUTES } from '@/shared/config';

export default function Custom404() {
  return (
    <Surface
      className="flex min-h-screen items-center justify-center rounded-none p-8 text-center"
      variant="secondary">
        <Card className="max-w-2xl items-center p-10">
          <Card.Title className="bg-gradient-to-r from-accent to-lime-700 bg-clip-text text-7xl leading-none font-semibold text-transparent sm:text-8xl">
            404
          </Card.Title>
          <Card.Content className="items-center text-center">
            <h1 className="mt-4 mb-8 text-3xl font-semibold text-foreground max-sm:text-2xl">
              Страница не найдена
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted max-sm:text-base">
              Извините, но страница, которую вы ищете, не существует или была
              перемещена. Пожалуйста, вернитесь на главную страницу.
            </p>
            <Link
              className="rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg"
              href={ROUTES.home}>
              Вернуться на главную
            </Link>
          </Card.Content>
        </Card>
    </Surface>
  );
}
