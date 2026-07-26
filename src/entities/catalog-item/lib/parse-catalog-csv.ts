import type { CatalogItem } from '../model/types';

const CATALOG_COLUMNS = [
  'id',
  'name',
  'origin',
  'color',
  'image',
  'description',
  'size',
  'price',
  'additional',
] as const;

type CatalogColumn = (typeof CATALOG_COLUMNS)[number];

const parseCsvLine = (line: string): string[] => {
  const fields: string[] = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && quoted && nextCharacter === '"') {
      field += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === ',' && !quoted) {
      fields.push(field.trim());
      field = '';
    } else {
      field += character;
    }
  }

  if (quoted) {
    throw new Error('Catalog CSV contains an unclosed quote');
  }

  return [...fields, field.trim()];
};

export const parseCatalogCsv = (csv: string): CatalogItem[] => {
  const [headerLine, ...dataLines] = csv.split(/\r?\n/);

  if (!headerLine) {
    throw new Error('Catalog CSV is empty');
  }

  const headers = parseCsvLine(headerLine);
  const columnIndexes = Object.fromEntries(
    CATALOG_COLUMNS.map((column) => {
      const index = headers.indexOf(column);

      if (index === -1) {
        throw new Error(`Catalog CSV misses "${column}" column`);
      }

      return [column, index];
    })
  ) as Record<CatalogColumn, number>;

  const items = new Map<number, CatalogItem>();

  dataLines.filter((line) => line.trim()).forEach((line) => {
    const fields = parseCsvLine(line);
    const value = (column: CatalogColumn) => fields[columnIndexes[column]].trim();
    const id = Number.parseInt(value('id'), 10);

    if (!Number.isInteger(id)) {
      throw new Error(`Catalog row contains invalid id: "${value('id')}"`);
    }

    const item = items.get(id) ?? {
      id,
      name: value('name'),
      origin: value('origin'),
      color: value('color'),
      image: value('image'),
      description: value('description'),
      prices: [],
    };
    const size = value('size');
    const price = value('price');

    if (size && price) {
      item.prices.push({
        size,
        price,
        additional: value('additional'),
      });
    }

    items.set(id, item);
  });

  return Array.from(items.values());
};
