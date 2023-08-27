import React from 'react';
import styles from './Dots.module.scss';
import Dot from './Dot/Dot';

interface IDotsProps {
  slides: string[];
  handleSlide: (number: number) => void;
}

export default function Dots({ slides, handleSlide }: IDotsProps) {
  return (
    <div className={styles.dots}>
      {slides.map((slide, index) => (
        <Dot key={slide + 'Dot'} indexSlide={index} onClick={handleSlide} />
      ))}
    </div>
  );
}
