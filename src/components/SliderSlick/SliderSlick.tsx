import React from 'react';
import styles from './SliderSlick.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgLazy from '../ImgLazy/ImgLazy';

interface ISliderSlickProps {
  slides: string[];
}

export default function SliderSlick({ slides }: ISliderSlickProps) {
  console.log('slides', slides);
  const sliderSettings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость прокрутки
    slidesToShow: 1, // Количество слайдов, отображаемых за раз
    slidesToScroll: 1, // Количество слайдов, прокручиваемых за раз
    //autoplay: true, // Автоматическая прокрутка
    //autoplaySpeed: 3000, // Скорость автоматической прокрутки
  };
  return (
    <div className={styles['slider-slick']}>
      <Slider {...sliderSettings}>
        {/*<div className={styles.item}>
          Первый Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perferendis amet ab,
          dolore rerum aliquam ipsum, sed dicta sunt doloribus consequatur rem! Reprehenderit
          architecto adipisci error nihil accusamus soluta accusantium saepe consectetur laudantium
          veritatis quo sapiente nam animi, debitis eius consequuntur quam illum non. Necessitatibus
          nisi atque doloremque alias veniam!
        </div>
        <div className={styles.item}>222222222222222</div>
        <div className={styles.item}>3333333333333333333</div>
        <div className={styles.item}>444444444444444444</div>
        <div className={styles.item}>5555555555555555555</div>*/}
        {slides.map((slide) => (
          <div className={styles.item} key={slide}>
            . <img src={slide} alt={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
