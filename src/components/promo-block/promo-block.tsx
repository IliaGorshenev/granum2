import React, { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from '../icons/slider-buttons';
import {
  AnimatedText,
  ButtonImage,
  ContentWrapper,
  Dot,
  FullPageBackground,
  PromoButton,
  PromoContainer,
  PromoSubtitle,
  PromoTitle,
  SliderContainer,
  SliderContent,
  SliderDots,
  VideoBackground,
} from './styles';

interface PromoSlide {
  title: string;
  subtitle: string;
  imageSrc: string;
  type?: 'image' | 'video';
}

interface PromoBlockProps {
  slides: PromoSlide[];
  buttonText: string;
  onButtonClick: () => void;
}
const PromoBlock: React.FC<PromoBlockProps> = ({ slides, buttonText, onButtonClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const renderBackground = () => {
    const slide = slides[currentSlide];
    const slideType = slide.type || 'image';

    if (slideType === 'video') {
      return (
        <VideoBackground>
          <video autoPlay muted loop playsInline poster={slide.imageSrc} onError={(e) => console.error('Video loading error:', e)}>
            <source src={slide.imageSrc} type="video/mp4" />
          </video>
        </VideoBackground>
      );
    }

    return <FullPageBackground imageSrc={slide.imageSrc} />;
  };

  return (
    <PromoContainer>
      {renderBackground()}

      <SliderContainer>
        <ContentWrapper>
          <SliderContent>
            <AnimatedText>
              <PromoTitle>{slides[currentSlide].title}</PromoTitle>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <PromoSubtitle>{slides[currentSlide].subtitle}</PromoSubtitle>
            </AnimatedText>
            <AnimatedText delay={0.6}>
              <PromoButton onClick={onButtonClick}>
                <ButtonImage src="https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png" alt="Button icon" />
                {buttonText}
              </PromoButton>
            </AnimatedText>
          </SliderContent>
        </ContentWrapper>
        <SliderDots>
          {slides.map((_, index) => (
            <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
          ))}
        </SliderDots>

        <LeftArrowIcon onClick={goToPrevSlide} position="left" />
        <RightArrowIcon onClick={goToNextSlide} position="right" />
      </SliderContainer>
    </PromoContainer>
  );
};

export default PromoBlock;
