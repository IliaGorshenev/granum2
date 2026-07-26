import {
  fetchCatalog,
} from '@/entities/catalog-item';
import { HomePage } from '@/pages/home';

export const revalidate = 3600;

const HomeRoute = async () => (
  <HomePage initialCatalogData={await fetchCatalog()} />
);

export default HomeRoute;
