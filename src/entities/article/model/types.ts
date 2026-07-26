export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  keywords: string[];
  publishedDate: string;
  readTime: number;
}
