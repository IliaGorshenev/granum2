import { useState } from 'react';
import styled from 'styled-components';

import AboutCompany from './components/about/about';
import Catalog, { CatalogItem } from './components/catalog';
import FeedbackForm from './components/feedback-form';
import Footer from './components/footer';
import Header from './components/header/header';
import ProductModal from './components/productModal/product';
import PromoBlock from './components/promo-block/promo-block';
import WorksSlider from './components/works/works';
import SEO from './SEO';

// Creating styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  margin: 2rem 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

interface WorkItem {
  id: number;
  title: string;
  description?: string;
  imageSrc: string;
  additionalImages?: string[];
}

interface AppProps {
  initialCatalogData?: CatalogItem[];
}
function App({ initialCatalogData = [] }: AppProps) {
  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    // Add your navigation or modal logic here
  };

  // Sample work items for the slider
  const completedWorks = [
    {
      id: 1,
      title: 'Плита терм. гр.Мансуровский 600х300х30',
      imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0.jpg',
      // additionalImages: [
      //   'https://images.unsplash.com/photo-1556909114-44e3e9699e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      //   'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      // ],
    },
    {
      id: 2,
      title: 'Подоконники полированные гр.Дымовский 1200х450х50.',
      // description:
      //   'Черная гранитная столешница с двойной встроенной раковиной. Гранит - один из самых прочных природных камней, устойчивый к влаге и механическим повреждениям, что делает его идеальным выбором для ванных комнат. Глубокий черный цвет с мелкими вкраплениями создает элегантный и современный вид.',
      imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.jpg',
      additionalImages: [
        'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B83.jpg',
      ],
    },
    {
      id: 3,
      title: 'Входная группа: Южно-Султаевский гранит',
      // description:
      //   'Натуральные плиты из травертина для открытой зоны отдыха. Травертин - это пористый известняк с уникальной текстурой, который создает теплую и уютную атмосферу. Этот материал отлично подходит для наружного применения благодаря своей устойчивости к погодным условиям и способности оставаться прохладным даже в жаркие дни.',
      imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B43.jpg',
      additionalImages: [
        'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B41.jpg',
        'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B42.jpg',
      ],
    },
    {
      id: 4,
      title: 'Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)',
      // description:
      //   'Стойка ресепшн из кварцевого агломерата с LED-подсветкой по индивидуальному заказу. Кварцевый агломерат - это инженерный камень, состоящий из кварца (более 90%) и полимерных смол. Он обладает высокой прочностью, устойчивостью к пятнам и не требует специального ухода. Встроенная LED-подсветка создает эффектное свечение, подчеркивающее современный дизайн стойки.',
      imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA4.jpg',
      additionalImages: [
        'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA3.jpg',
        'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA1.jpg',
      ],
    },

    {
      id: 5,
      title: 'Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)',
      // description:
      //   'Облицовка стены натуральным колотым сланцем для современного интерьера. Сланец - это метаморфическая горная порода с естественным расслоением, которая создает уникальную текстуру на поверхности. Каждый камень имеет свой неповторимый рисунок и оттенок, что делает облицовку по-настоящему уникальной. Такая отделка добавляет природную элегантность и тактильный интерес в интерьер.',
      imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA5.jpg',
      additionalImages: ['https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA6.jpg'],
    },
    {
      id: 5,
      title: 'Входная группа: Балтийский (Карелия)',
      // description:
      //   'Облицовка стены натуральным колотым сланцем для современного интерьера. Сланец - это метаморфическая горная порода с естественным расслоением, которая создает уникальную текстуру на поверхности. Каждый камень имеет свой неповторимый рисунок и оттенок, что делает облицовку по-настоящему уникальной. Такая отделка добавляет природную элегантность и тактильный интерес в интерьер.',
      imageSrc: ' https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA7.jpg',
    },
  ];

  const slides = [
    {
      title: 'Собственное производство',
      subtitle: 'Качество, котороCе восхищает',
      imageSrc: Math.random() < 0.5 ? 'https://storage.yandexcloud.net/ilia/first_granum.mp4' : 'https://storage.yandexcloud.net/ilia/second_granum.mp4',
      type: 'video' as 'video',
    },
    {
      title: 'Премиальные решения с камнем',
      subtitle: 'Создайте пространство, которое восхищает',
      imageSrc: 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
    },
    {
      title: 'Искусное мастерство',
      subtitle: 'Неподвластное времени очарование и стиль',
      imageSrc: 'https://storage.yandexcloud.net/ilia/11258999099890122_543e.jpg',
    },
    {
      title: 'Беспрецедентное качество',
      subtitle: 'Природная изящность, которая впечатляет',
      imageSrc: 'https://storage.yandexcloud.net/ilia/Lez-4599-1-1536x1024.jpg',
    },
  ];

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle work item click
  const handleWorkClick = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  return (
    <AppContainer>
      <SEO />
      <Header></Header>

      <PromoBlock slides={slides} buttonText="К каталогу" onButtonClick={scrollToCatalog} />
      <Catalog initialData={initialCatalogData}></Catalog>
      {/* <WorkSlider works={completedWorks} /> */}

      <WorksSlider works={completedWorks} onWorkClick={handleWorkClick} />
      {isModalOpen && selectedWork && <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedWork} />}
      <AboutCompany />
      <FeedbackForm telegramBotToken="7694051593:AAGBls3mX5vQwvn4s95-gdOZHD9_96aNC7U"></FeedbackForm>

      <Footer></Footer>
    </AppContainer>
  );
}

export default App;
