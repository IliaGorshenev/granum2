import { Surface } from '@heroui/react';

import type { CatalogItem } from '@/entities/catalog-item';
import { HOME_SECTION_IDS } from '@/shared/config';
import { AboutCompany } from '@/widgets/about';
import { Catalog } from '@/widgets/catalog';
import { Contact } from '@/widgets/contact';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Process } from '@/widgets/process';
import { Promo } from '@/widgets/promo';
import { TrustBar } from '@/widgets/trust-bar';
import { Works } from '@/widgets/works';

import {
  COMPLETED_WORKS,
  PROMO_SLIDES,
} from '../config/content';
import { CompanyInformation } from './company-information';

interface HomePageProps {
  initialCatalogData: CatalogItem[];
}

const HomePage = ({ initialCatalogData }: HomePageProps) => {
  return (
    <Surface className="flex min-h-screen w-full flex-col items-center rounded-none bg-background p-0">
      <Header />
      <Promo
        primaryHref={`#${HOME_SECTION_IDS.contact}`}
        secondaryHref={`#${HOME_SECTION_IDS.catalog}`}
        slides={PROMO_SLIDES}
      />
      <TrustBar />
      <Catalog initialData={initialCatalogData} />
      <Process />
      <Works works={COMPLETED_WORKS} />
      <AboutCompany />
      <CompanyInformation />
      <Contact />
      <Footer />
    </Surface>
  );
};

export default HomePage;
