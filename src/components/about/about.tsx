import { useState } from 'react';
import { 
  AboutContainer, 
  AboutTitle, 
  CollapseContainer, 
  CollapseContent, 
  CollapseHeader, 
  CollapseIcon, 
  ImageCaption, 
  ImageContainer, 
  StoryImage,
  IntroSection,
  IntroImage,
  IntroContent,
  CollapseSection
} from './styles';

interface CollapseItemProps {
  title: string;
  children: React.ReactNode;
}

const CollapseItem: React.FC<CollapseItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseContainer>
      <CollapseHeader onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <CollapseIcon isOpen={isOpen}>+</CollapseIcon>
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseContainer>
  );
};

const AboutCompany: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>О компании</AboutTitle>
      
      {/* <IntroSection>
        <IntroImage>
          <img src="/images/about/company-workshop.jpg" alt="Производственный цех компании Гранум" />
        </IntroImage>
        <IntroContent>
          <h3>Традиции мастерства и современные технологии</h3>
          <p>
            Компания "Гранум" — это команда профессионалов, объединенных любовью к натуральному камню и стремлением создавать изделия высочайшего качества. 
            Мы специализируемся на обработке природного камня и создании уникальных изделий для частных и коммерческих объектов.
          </p>
          <p>
            Наша миссия — раскрыть природную красоту камня и воплотить ваши идеи в долговечных и эстетичных решениях. 
            Мы сочетаем вековые традиции камнеобработки с современными технологиями, что позволяет нам создавать изделия любой сложности.
          </p>
          <p>
            Более 10 лет мы успешно работаем на рынке и гордимся тем, что большинство клиентов приходят к нам по рекомендации.
          </p>
        </IntroContent>
      </IntroSection> */}
      
      <CollapseSection>
        <CollapseItem title="Наша история">
          <p>
            Компания "Гранум" была основана в 2010 году группой профессионалов с многолетним опытом работы в камнеобрабатывающей отрасли. За годы работы мы выросли из
            небольшой мастерской в современное производство, оснащенное передовым оборудованием.
          </p>
        </CollapseItem>

        <CollapseItem title="Наше производство">
          <p>
            Мы располагаем собственным производственным комплексом, оснащенным современным итальянским и немецким оборудованием. Это позволяет нам выполнять полный цикл
            обработки камня: от распила блоков до финишной полировки и фигурной резки.
          </p>
          <p>Наши производственные мощности включают:</p>
          <ul>
            <li>Многодисковые распиловочные станки</li>
            <li>Шлифовально-полировальные линии</li>
            <li>Оборудование для фигурной резки и фрезеровки</li>
            <li>Термообработку камня</li>
          </ul>
        </CollapseItem>

        <CollapseItem title="Наши материалы">
          <p>Мы работаем с широким спектром натуральных камней из России и со всего мира:</p>
          <ul>
            <li>Гранит (Карельский, Мансуровский, Дымовский и др.)</li>
            <li>Мрамор</li>
            <li>Травертин</li>
            <li>Оникс</li>
            <li>Кварцит</li>
          </ul>
          <p>Все материалы проходят строгий контроль качества и соответствуют международным стандартам.</p>
        </CollapseItem>

        <CollapseItem title="Наши проекты">
          <p>
            За более чем десятилетнюю историю компания "Гранум" реализовала сотни проектов различной сложности - от частных интерьеров до масштабных общественных
            пространств.
          </p>
          <ImageContainer>
            <StoryImage src="/images/about/flagship-project.jpg" alt="Флагманский проект компании Гранум" />
            <ImageCaption>Оформление входной группы Бизнес-центра "Гранит" (2018 г.)</ImageCaption>
          </ImageContainer>
          <p>
            Каждый наш проект уникален и отражает индивидуальные потребности заказчика. Мы гордимся тем, что многие клиенты возвращаются к нам с новыми задачами и
            рекомендуют нас своим партнерам и друзьям.
          </p>
          <p>Наша команда готова взяться за проекты любой сложности - от изготовления простых столешниц до комплексного оформления фасадов и интерьеров.</p>
        </CollapseItem>

        <CollapseItem title="Наши преимущества">
          <ul>
            <li>
              <strong>Собственное производство</strong> - контроль качества на всех этапах
            </li>
            <li>
              <strong>Опытные мастера</strong> - команда профессионалов с многолетним стажем
            </li>
            <li>
              <strong>Индивидуальный подход</strong> - разработка уникальных решений под ваши задачи
            </li>
            <li>
              <strong>Гарантия качества</strong> - мы уверены в долговечности наших изделий
            </li>
            <li>
              <strong>Конкурентные цены</strong> - работа напрямую без посредников
            </li>
          </ul>
        </CollapseItem>
      </CollapseSection>
    </AboutContainer>
  );
};

export default AboutCompany;
