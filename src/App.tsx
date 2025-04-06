import styled from 'styled-components';
import './App.css';
import Catalog from './components/catalog';
import FeedbackForm from './components/feedback-form';
import Footer from './components/footer';
import Header from './components/header/header';
import PromoBlock from './components/promo-block/promo-block';
import WorksSlider from './components/works/works';

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

function App() {
  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    // Add your navigation or modal logic here
  };

  // Sample work items for the slider
  const completedWorks = [
    {
      id: 1,
      title: 'Мраморная кухонная столешница',
      description: 'Столешница из мрамора Каррара с водопадным краем по индивидуальному заказу',
      imageSrc: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Гранитная столешница для ванной',
      description: 'Черная гранитная столешница с двойной встроенной раковиной',
      imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Патио из травертина',
      description: 'Натуральные плиты из травертина для открытой зоны отдыха',
      imageSrc: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'Кварцевая стойка ресепшн',
      description: 'Стойка ресепшн из кварцевого агломерата с LED-подсветкой по индивидуальному заказу',
      imageSrc: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Декоративная стена из сланца',
      description: 'Облицовка стены натуральным колотым сланцем для современного интерьера',
      imageSrc: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const slides = [
    {
      title: 'Собственное производство',
      subtitle: 'Качество, которое восхищает',
      imageSrc: ' https://storage.yandexcloud.net/ilia/Stanki.mp4',
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

  return (
    <AppContainer>
      <Header></Header>

      <PromoBlock slides={slides} buttonText="К каталогу" onButtonClick={scrollToCatalog} />
      <Catalog></Catalog>
      {/* <WorkSlider works={completedWorks} /> */}
      <WorksSlider works={completedWorks} />
      <FeedbackForm telegramBotToken="7694051593:AAGBls3mX5vQwvn4s95-gdOZHD9_96aNC7U"></FeedbackForm>
      <Footer></Footer>
    </AppContainer>
  );
}

export default App;
