import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../slider.png';
import image2 from '../light.jpeg';
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SliderAft() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image1}/></SwiperSlide>

        
        
        
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
}
