import React, { useState } from 'react';
import styles from './SliderSwiper.module.scss';
import Swiper1 from 'swiper';
import SwiperCore from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/free-mode';
import 'swiper/scss/thumbs';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
  Lazy,
} from 'swiper';
import ImgLazy from '../ImgLazy/ImgLazy';

//import Swiper from 'swiper';
//import { SwiperOptions, Swiper as ISwaper } from 'swiper/types';

interface ISwaperProps {
  images: string[];
}
export default function SliderSwiper({ images }: ISwaperProps) {
  //SwiperCore.use([]);
  //const swiper = useSwiper();
  //const SSwiper = new Swiper1('.swiper');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={
          {
            //'--swiper-theme-color': '#fff',
            //'--swiper-navigation-color': '#fff',
            //'--swiper-pagination-color': '#fff',
          }
        }
        modules={[Lazy, FreeMode, Thumbs, Navigation, Pagination, Keyboard, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        lazy={true}
        keyboard={true}
        //scrollbar={true}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        pagination={{
          clickable: true,

          /*renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" style={{display: block, width: 20px, heights: 20px, backgroundColor: #fff}}>' +
              (index + 1) +
              '</span>'
            );
          },*/
        }}
        //scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        //breakpoints={}
        //cssMode={true}
        //navigation={true}
        //modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        //pagination={{ clickable: true }}
        //mousewheel={true}
        //keyboard={true}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image + 1}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        //onSwiper={setThumbsSwiper}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image + 1}>
            <img src={image} />
          </SwiperSlide>
        ))}
        </Swiper>*/}
    </>
  );
}
