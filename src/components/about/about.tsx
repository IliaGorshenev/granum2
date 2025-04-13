import { useState } from 'react';
import {
  AboutContainer,
  AboutTitle,
  AdvantageCard,
  CollapseContainer,
  CollapseContent,
  CollapseHeader,
  CollapseIcon,
  CollapseSection,
  HighlightText,
  ImageCaption,
  ImageContainer,
  ShimmerLine,
  StonePattern,
  StoryImage,
  YearsInBusiness,
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
        <div className="years-text">лет опыта в обработке натурального камня и создании уникальных изделий</div>
      </YearsInBusiness>

      <ShimmerLine />

      <CollapseSection>
        <CollapseItem title="Наша история">
          <p>
            Компания <HighlightText>"Гранум"</HighlightText> была основана в 2010 году группой профессионалов с многолетним опытом работы в камнеобрабатывающей отрасли.
            За годы работы мы выросли из небольшой мастерской в современное производство, оснащенное передовым оборудованием.
          </p>
          <p>
            Путь становления был непростым, но благодаря упорству, профессионализму и любви к своему делу, мы смогли занять достойное место на рынке и завоевать доверие
            клиентов.
          </p>
        </CollapseItem>

        <CollapseItem title="Наше производство">
          <p>У нас есть собственный цех с современным итальянским и немецким оборудованием. Мы делаем всё сами: от распила камня до финальной полировки.</p>
          <ImageContainer>
            <StoryImage src="/images/about/production.jpg" alt="Оборудование компании Гранум" />
            <ImageCaption>Наш цех с современным оборудованием</ImageCaption>
          </ImageContainer>
          <p>В нашем цехе есть:</p>
          <ul>
            <li>Станки для распила камня</li>
            <li>Линии для шлифовки и полировки</li>
            <li>Оборудование для фигурной резки</li>
            <li>Печи для термообработки</li>
          </ul>
        </CollapseItem>

        <CollapseItem title="Наши материалы">
          <p>Мы работаем с разными видами камня из России и других стран:</p>
          <ul>
            <li>
              <HighlightText>Гранит</HighlightText> (Карельский, Мансуровский и другие)
            </li>
            <li>
              <HighlightText>Мрамор</HighlightText> (Итальянский, Греческий, Российский)
            </li>
            <li>
              <HighlightText>Травертин</HighlightText> (разных оттенков)
            </li>
            <li>
              <HighlightText>Оникс</HighlightText> (Медовый, Зеленый, Белый)
            </li>
            <li>
              <HighlightText>Кварцит</HighlightText> (Бразильский, Индийский)
            </li>
          </ul>
          <p>Весь камень проверяем на качество.</p>
          <ImageContainer>
            <StoryImage src="/images/about/materials.jpg" alt="Разные виды камня" />
            <ImageCaption>Разнообразие текстур и цветов камня</ImageCaption>
          </ImageContainer>
        </CollapseItem>

        <CollapseItem title="Наши проекты">
          <p>
            За 10+ лет компания <HighlightText>"Гранум"</HighlightText> сделала сотни проектов — от домашних интерьеров до больших общественных зданий.
          </p>
          <ImageContainer>
            <StoryImage src="/images/about/flagship-project.jpg" alt="Проект компании Гранум" />
            <ImageCaption>Оформление входа в Бизнес-центр "Гранит" (2018 г.)</ImageCaption>
          </ImageContainer>
          <p>Каждый проект особенный и учитывает пожелания заказчика. Многие клиенты возвращаются к нам снова и советуют нас друзьям.</p>
          <p>Мы беремся за любые задачи — от простых столешниц до сложных фасадов и интерьеров.</p>
        </CollapseItem>

        <CollapseItem title="Наши преимущества">
          <AdvantageCard>
            <strong>Своё производство</strong>
            <p>Контролируем качество на всех этапах — от выбора камня до готового изделия.</p>
          </AdvantageCard>

          <AdvantageCard>
            <strong>Опытные мастера</strong>
            <p>Наши специалисты знают и любят камень, имеют большой опыт работы.</p>
          </AdvantageCard>

          <AdvantageCard>
            <strong>Индивидуальный подход</strong>
            <p>Создаём решения под ваши задачи, учитывая все пожелания.</p>
          </AdvantageCard>

          <AdvantageCard>
            <strong>Гарантия качества</strong>
            <p>Даём гарантию на все наши работы.</p>
          </AdvantageCard>

          <AdvantageCard>
            <strong>Хорошие цены</strong>
            <p>Работаем без посредников, поэтому цены ниже при высоком качестве.</p>
          </AdvantageCard>
        </CollapseItem>

        <CollapseItem title="Наша команда">
          <p>
            В <HighlightText>"Грануме"</HighlightText> работают настоящие профессионалы — от мастеров-камнерезов до дизайнеров и инженеров.
          </p>
          <p>Многие сотрудники работают с камнем более 15 лет и учат молодых мастеров.</p>
          <p>Мы постоянно учимся новому, чтобы предлагать вам современные и качественные решения.</p>
          <ImageContainer>
            <StoryImage src="/images/about/team.jpg" alt="Команда Гранум" />
            <ImageCaption>Наша команда</ImageCaption>
          </ImageContainer>
        </CollapseItem>
      </CollapseSection>

      <ShimmerLine />
    </AboutContainer>
  );
};

export default AboutCompany;
