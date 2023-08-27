import React, { useState } from 'react';
import styles from './Slider.module.scss';
import SlideList from './Dots/SlideList/SlideList';
import Dots from './Dots/Dots';
import Arrows from './Arrows/Arrows';

interface ISliderProps {
  slides: string[];
  autoPlay?: boolean;
  autoPlayTime?: number;
  width?: string;
  height?: string;
}

export default function Slider({ slides, autoPlay, autoPlayTime, width, height }: ISliderProps) {
  const [currentSlide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleLeft = () => {
    if (currentSlide !== 0) setSlide((prev) => --prev);
  };
  const handleRight = () => {
    if (currentSlide !== slides.length - 1) setSlide((prev) => ++prev);
  };
  const changeSlide = (number: number) => {
    if (number >= 0 && number < slides.length) setSlide(number);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    console.log('direction', direction);
    if (direction > 10) {
      changeSlide(currentSlide + 1);
    }
    if (direction < -10) {
      changeSlide(currentSlide - 1);
    }
    setTouchPosition(null);
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={(e) => {
        console.log('touchStart', e.touches[0].clientX);
        //console.log(e);
        handleTouchStart(e);
      }}
      onTouchMove={(e) => {
        console.log('touchMove');
        handleTouchMove(e);
      }}
    >
      {slides.length !== 1 && <Arrows handleLeft={handleLeft} handleRight={handleRight} />}
      <SlideList slidesSrc={slides} currentSlide={currentSlide} />
      {slides.length !== 1 && <Dots slides={slides} handleSlide={changeSlide} />}
    </div>
  );
}
