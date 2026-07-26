import { catalog } from '@/entities/catalog-item';
import { HomePage } from '@/pages/home';

const HomeRoute = () => (
  <HomePage initialCatalogData={catalog} />
);

export default HomeRoute;
