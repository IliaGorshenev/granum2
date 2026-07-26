const CATALOG_COLOR_HEX = {
  коричневый: '#8B4513',
  серый: '#808080',
} as const;

const DEFAULT_CATALOG_COLOR_HEX = '#CCCCCC';

export const resolveCatalogColor = (color: string): string =>
  CATALOG_COLOR_HEX[color.toLowerCase() as keyof typeof CATALOG_COLOR_HEX] ??
  DEFAULT_CATALOG_COLOR_HEX;
