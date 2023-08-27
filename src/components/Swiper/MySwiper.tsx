import React from 'react';
import styles from './Swiper.module.scss';
import Swiper1 from 'swiper';
import SwiperCore from 'swiper';
import { SwiperSlide, Swiper, SwiperRef, SwiperProps, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y } from 'swiper/modules';
import ImgLazy from '../ImgLazy/ImgLazy';

//import Swiper from 'swiper';
//import { SwiperOptions, Swiper as ISwaper } from 'swiper/types';

interface ISwaperProps {
  images: string[];
}
export default function MySwiper({ images }: ISwaperProps) {
  SwiperCore.use([]);
  //const swiper = useSwiper();
  const SSwiper = new Swiper1('.swiper');

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        //breakpoints={}
        //cssMode={true}
        //navigation={true}
        //modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        //pagination={{ clickable: true }}
        //mousewheel={true}
        //keyboard={true}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ImgLazy src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
