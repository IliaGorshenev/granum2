export interface CatalogPrice {
  size: string;
  price: string;
  additional: string;
}

export interface CatalogItem {
  id: number;
  name: string;
  description: string;
  origin: string;
  color: string;
  image: string;
  prices: CatalogPrice[];
}
