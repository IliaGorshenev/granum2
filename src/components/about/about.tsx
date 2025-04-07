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
  CollapseSection,
  HighlightText,
  StonePattern,
  ShimmerLine,
  AdvantageCard,
  YearsInBusiness
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
      <StonePattern />
      <AboutTitle>О компании</AboutTitle>
      
      {/* <IntroSection>
        <IntroImage>
          <img src="/images/about/company-workshop.jpg" alt="Производственный цех компании Гранум" />
        </IntroImage>
        <IntroContent>
          <h3>Традиции мастерства и современные технологии</h3>
          <p>
            Компания <HighlightText>"Гранум"</HighlightText> — это команда профессионалов, объединенных любовью к натуральному камню и стремлением создавать изделия высочайшего качества. 
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
      
      <YearsInBusiness>
        <div className="years-number">10</div>
        <div className="years-text">
          лет опыта в обработке натурального камня и создании уникальных изделий
        </div>
      </YearsInBusiness>
      
      <ShimmerLine />
      
      <CollapseSection>
        <CollapseItem title="Наша история">
          <p>
            Компания <HighlightText>"Гранум"</HighlightText> была основана в 2010 году группой профессионалов с многолетним опытом работы в камнеобрабатывающей отрасли. За годы работы мы выросли из
            небольшой мастерской в современное производство, оснащенное передовым оборудованием.
          </p>
          <p>
            Путь становления был непростым, но благодаря упорству, профессионализму и любви к своему делу, мы смогли занять достойное место на рынке и завоевать доверие клиентов.
          </p>
        </CollapseItem>

        <CollapseItem title="Наше производство">
          <p>
            Мы располагаем собственным производственным комплексом, оснащенным современным итальянским и немецким оборудованием. Это позволяет нам выполнять полный цикл
            обработки камня: от распила блоков до финишной полировки и фигурной резки.
          </p>
          <ImageContainer>
            <StoryImage src="/images/about/production.jpg" alt="Современное оборудование компании Гранум" />
            <ImageCaption>Наш производственный цех с современным оборудованием</ImageCaption>
          </ImageContainer>
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
            <li><HighlightText>Гранит</HighlightText> (Карельский, Мансуровский, Дымовский и др.)</li>
            <li><HighlightText>Мрамор</HighlightText> (Итальянский, Греческий, Российский)</li>
            <li><HighlightText>Травертин</HighlightText> (Классический, Серебряный, Золотой)</li>
            <li><HighlightText>Оникс</HighlightText> (Медовый, Зеленый, Белый)</li>
            <li><HighlightText>Кварцит</HighlightText> (Бразильский, Индийский)</li>
          </ul>
          <p>Все материалы проходят строгий контроль качества и соответствуют международным стандартам.</p>
          <ImageContainer>
            <StoryImage src="/images/about/materials.jpg" alt="Разнообразие натуральных камней" />
            <ImageCaption>Богатство текстур и оттенков натурального камня</ImageCaption>
          </ImageContainer>
        </CollapseItem>

        <CollapseItem title="Наши проекты">
          <p>
            За более чем десятилетнюю историю компания <HighlightText>"Гранум"</HighlightText> реализовала сотни проектов различной сложности - от частных интерьеров до масштабных общественных
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
          <AdvantageCard>
            <strong>Собственное производство</strong>
            <p>Полный контроль качества на всех этапах производства, от выбора сырья до финальной обработки изделия.</p>
          </AdvantageCard>
          
          <AdvantageCard>
            <strong>Опытные мастера</strong>
            <p>Команда профессионалов с многолетним стажем, которые относятся к камню с уважением и пониманием его природы.</p>
          </AdvantageCard>
          
          <AdvantageCard>
            <strong>Индивидуальный подход</strong>
            <p>Разработка уникальных решений под ваши задачи, с учетом всех пожеланий и особенностей проекта.</p>
          </AdvantageCard>
          
          <AdvantageCard>
            <strong>Гарантия качества</strong>
            <p>Мы уверены в долговечности наших изделий и предоставляем гарантию на все выполненные работы.</p>
          </AdvantageCard>
          
          <AdvantageCard>
            <strong>Конкурентные цены</strong>
            <p>Работа напрямую без посредников позволяет нам предлагать оптимальные цены при высоком качестве.</p>
          </AdvantageCard>
        </CollapseItem>
        
        <CollapseItem title="Наша команда">
          <p>
            В компании <HighlightText>"Гранум"</HighlightText> работают настоящие профессионалы своего дела — от опытных мастеров-камнерезов до талантливых дизайнеров и инженеров.
          </p>
          <p>
            Многие наши сотрудники имеют более 15 лет опыта работы с камнем и передают свои знания молодому поколению мастеров.
          </p>
          <p>
            Мы постоянно повышаем квалификацию, изучаем новые технологии и материалы, чтобы предлагать нашим клиентам самые современные и качественные решения.
          </p>
          <ImageContainer>
            <StoryImage src="/images/about/team.jpg" alt="Команда компании Гранум" />
            <ImageCaption>Наша команда профессионалов</ImageCaption>
          </ImageContainer>
        </CollapseItem>
      </CollapseSection>
      
      <ShimmerLine />
    </AboutContainer>
  );
};

export default AboutCompany;
