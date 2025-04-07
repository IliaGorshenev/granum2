import { useState } from 'react';
import { AboutContainer, AboutTitle, CollapseContainer, CollapseContent, CollapseHeader, CollapseIcon } from './styles';

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
    </AboutContainer>
  );
};

export default AboutCompany;
