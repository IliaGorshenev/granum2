import { AccordionStack } from '@/shared/ui/accordion-panel';

import { AboutHistory } from './about-history';
import { AboutMaterials } from './about-materials';
import { AboutProjects } from './about-projects';

export const AboutDetails = () => (
  <AccordionStack>
    <AboutHistory />
    <AboutMaterials />
    <AboutProjects />
  </AccordionStack>
);
