import React, { CSSProperties } from 'react';
import styles from './CustomSlider.module.scss';

import { useState } from 'react';
import ImgLazy from '../ImgLazy/ImgLazy';

const slideStyles = {
  width: '30vw',
  height: '55vh',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#000',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#000',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
};

const dotsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
};
interface ISlidesProps {
  slides: string[];
}
export default function CustomSlider({ slides }: ISlidesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    //backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles as CSSProperties}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles as CSSProperties}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles as CSSProperties}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <ImgLazy src={slides[currentIndex]} />
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <ImgLazy src={slide} /> ●
          </div>
        ))}
      </div>
    </div>
  );
}
