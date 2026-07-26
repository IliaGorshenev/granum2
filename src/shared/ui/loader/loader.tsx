import { Spinner, Surface } from '@heroui/react';

interface LoaderProps {
  text?: string;
}

const Loader = ({ text = 'Загрузка...' }: LoaderProps) => (
  <Surface
    className="flex min-h-screen items-center justify-center gap-4"
    variant="transparent">
    <Spinner aria-label={text} size="lg" />
    <span className="text-lg font-semibold">{text}</span>
  </Surface>
);

export default Loader;
