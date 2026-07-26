import { ABOUT_IMAGES } from '../config/content';
import { AboutImage } from './about-image';
import { AboutSection } from './about-section';

export const AboutHistory = () => (
  <AboutSection id="history" title="Наша история">
    <p>
      Компания{' '}
      <strong className="font-semibold text-accent">«Гранум»</strong>{' '}
      и ее команда профессионалов имеет многолетний опыт работы в
      камнеобрабатывающей отрасли. За годы работы мы выросли из
      небольшой мастерской в современное производство, оснащенное
      передовым оборудованием.
    </p>
    <AboutImage
      alt="Оборудование компании Гранум"
      src={ABOUT_IMAGES.history}
    />
  </AboutSection>
);
