import { Chip } from '@heroui/react';

import { ABOUT_MATERIALS } from '../config/content';
import { AboutSection } from './about-section';

export const AboutMaterials = () => (
  <AboutSection id="materials" title="Наши материалы">
    <p>
      Мы работаем с натуральным гранитом из проверенных
      месторождений:
    </p>
    <div className="flex flex-wrap gap-2">
      {ABOUT_MATERIALS.map((material) => (
        <Chip color="accent" key={material} variant="soft">
          {material}
        </Chip>
      ))}
    </div>
    <p>
      Весь камень проходит проверку качества и радиационную
      безопасность.
    </p>
  </AboutSection>
);
