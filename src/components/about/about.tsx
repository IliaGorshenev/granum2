import { useState } from 'react';
import {
  AboutContainer,
  AboutTitle,
  AdvantagesList,
  CollapseContainer,
  CollapseContent,
  CollapseHeader,
  CollapseIcon,
  CollapseSection,
  HighlightText,
  ImageContainer,
  ShimmerLine,
  StonePattern,
  StoryImage,
  YearsInBusiness,
} from './styles'; // Assuming styles are correctly defined in './styles'

interface CollapseItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseItem: React.FC<CollapseItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <CollapseContainer>
      <CollapseHeader onClick={onClick}>
        <h3>{title}</h3>
        <CollapseIcon isOpen={isOpen}>
          <span className="icon-line horizontal"></span>
          <span className="icon-line vertical"></span>
        </CollapseIcon>
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseContainer>
  );
};

const AboutCompany: React.FC = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <AboutContainer id="about">
      <StonePattern />
      <AboutTitle>О компании</AboutTitle>
      {/* <IntroSection> ... </IntroSection> */} {/* Intro section is commented out as in original */}
      <YearsInBusiness>
        <div className="years-number">10</div>
        <div className="years-text">лет опыта в обработке натурального камня и создании уникальных изделий</div>
      </YearsInBusiness>
      <ShimmerLine />
      <CollapseSection>
        <CollapseItem title="Наша история" isOpen={openItemIndex === 0} onClick={() => handleItemClick(0)}>
          <p>
            Компания <HighlightText>"Гранум"</HighlightText> и ее команда профессионалов имеет многолетний опыт работы в камнеобрабатывающей отрасли. За годы работы мы
            выросли из небольшой мастерской в современное производство, оснащенное передовым оборудованием.
          </p>
          <ImageContainer>
            <StoryImage src="https://granum-stone.s3.regru.cloud/uploads/1746124324853-DSC02321.jpg" alt="Оборудование компании Гранум" />
          </ImageContainer>
        </CollapseItem>

        <CollapseItem title="Наше производство" isOpen={openItemIndex === 1} onClick={() => handleItemClick(1)}>
          {/* Removed "итальянским и немецким" */}
          <p>У нас есть собственный цех с современным оборудованием. Мы делаем всё сами: от распила камня до финальной полировки.</p>
          <ImageContainer>
            <StoryImage src="https://granum-stone.s3.regru.cloud/uploads/1746123736646-DSC02266.jpg" alt="Оборудование компании Гранум" />
          </ImageContainer>

          <p>В нашем цехе есть:</p>
          <ul>
            {/* Updated list */}
            <li>Станки для распила камня</li>
            <li>Линия для шлифовки и полировки</li>
            <li>Канатная машина для фигурной резки</li>
            <li>Участок для термообработки камня</li>
          </ul>
        </CollapseItem>

        <CollapseItem title="Наши материалы" isOpen={openItemIndex === 2} onClick={() => handleItemClick(2)}>
          {/* Updated paragraph to focus on granite examples */}
          <p>
            Мы работаем с различными видами натурального камня, преимущественно с гранитом из разных месторождений России и ближнего зарубежья. Примеры гранита, с которым
            мы работаем:
          </p>
          {/* Updated list based on provided documents */}
          <ul>
            <li>
              <HighlightText>Гранит Южно-Султаевский</HighlightText> (Челябинская область)
            </li>
            <li>
              <HighlightText>Гранит Мансуровский</HighlightText> (республика Башкортостан)
            </li>
            <li>
              <HighlightText>Гранит Камбулатовский</HighlightText> (Челябинская область)
            </li>
            <li>
              <HighlightText>Гранит Томирис II (Куртинский)</HighlightText> (Алматинская область)
            </li>
            <li>
              <HighlightText>Гранит Жельтау-2</HighlightText> (Жамбыльская область)
            </li>
            <li>
              <HighlightText>Гранит Авангард</HighlightText> (Урал, Челябинская область)
            </li>
            <li>
              <HighlightText>Гранит Исетский</HighlightText> (возможно изготовление)
            </li>
            <li>
              <HighlightText>Гранит Габбро Другорецкого</HighlightText> (возможно изготовление)
            </li>
          </ul>
          <p>Весь камень проходит проверку качества и радиационную безопасность.</p>
          {/* <ImageContainer>
            <StoryImage src="/images/about/materials.jpg" alt="Разные виды гранита" />
            <ImageCaption>Разнообразие текстур и цветов гранита</ImageCaption>
          </ImageContainer> */}
        </CollapseItem>

        <CollapseItem title="Наши проекты" isOpen={openItemIndex === 3} onClick={() => handleItemClick(3)}>
          <p>
            За 10+ лет компания <HighlightText>"Гранум"</HighlightText> сделала сотни проектов — от домашних интерьеров до больших общественных зданий.
          </p>
          <ImageContainer>
            <StoryImage src="https://granum-stone.s3.regru.cloud/uploads/1746123747543-DSC02338.jpg" alt="Проект компании Гранум" />
          </ImageContainer>
          <p>Каждый проект особенный и учитывает пожелания заказчика. Многие клиенты возвращаются к нам снова и советуют нас друзьям.</p>
          <p>Мы беремся за любые задачи — от простых столешниц до сложных фасадов и интерьеров.</p>
        </CollapseItem>

        <CollapseItem title="Наши преимущества" isOpen={openItemIndex === 4} onClick={() => handleItemClick(4)}>
          <AdvantagesList>
            <li>
              <strong>Своё производство</strong>
              <p>Контролируем качество на всех этапах — от выбора камня до готового изделия.</p>
            </li>

            <li>
              <strong>Опытные мастера</strong>
              <p>Наши специалисты знают и любят камень, имеют большой опыт работы.</p>
            </li>

            <li>
              <strong>Индивидуальный подход</strong>
              <p>Создаём решения под ваши задачи, учитывая все пожелания.</p>
            </li>

            <li>
              <strong>Сопровождение проекта</strong>
              <p>Помогаем на всех этапах: от консультации и выбора материала до замеров, изготовления и монтажа.</p>
            </li>

            <li>
              <strong>Гарантия качества</strong>
              <p>Даём гарантию на все наши работы.</p>
            </li>

            <li>
              <strong>Хорошие цены</strong>
              <p>Работаем без посредников, поэтому цены ниже при высоком качестве.</p>
            </li>
          </AdvantagesList>
        </CollapseItem>
      </CollapseSection>
      <ShimmerLine />
    </AboutContainer>
  );
};

export default AboutCompany;
