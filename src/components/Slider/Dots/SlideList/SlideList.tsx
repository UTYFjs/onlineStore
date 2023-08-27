import React from 'react';
import styles from './SlideList.module.scss';
import ImgLazy from '../../../ImgLazy/ImgLazy';
interface ISlideListProps {
  slidesSrc: string[];
  currentSlide: number;
}

export default function SlideList({ slidesSrc, currentSlide }: ISlideListProps) {
  return (
    <div
      className={styles['slide-list']}
      style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform .4s' }}
    >
      {slidesSrc.map((slide) => (
        <ImgLazy key={slide} src={slide} />
      ))}
    </div>
  );
}
