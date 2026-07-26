import { ABOUT_IMAGES } from '../config/content';
import { AboutImage } from './about-image';
import { AboutSection } from './about-section';

export const AboutProjects = () => (
  <AboutSection id="projects" title="Наши проекты">
    <p>
      За 10+ лет компания «Гранум» сделала сотни проектов — от
      домашних интерьеров до больших общественных зданий.
    </p>
    <AboutImage
      alt="Проект компании Гранум"
      src={ABOUT_IMAGES.projects}
    />
    <p>
      Каждый проект особенный и учитывает пожелания заказчика.
      Многие клиенты возвращаются к нам снова и советуют нас друзьям.
    </p>
    <p>
      Мы беремся за любые задачи — от простых столешниц до сложных
      фасадов и интерьеров.
    </p>
  </AboutSection>
);
