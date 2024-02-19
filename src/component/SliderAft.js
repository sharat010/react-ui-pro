import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/slider.png";
import image2 from "../images/light.jpeg";
import { Pagination, Navigation } from "swiper/modules";

export default function SliderAft() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
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
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider-img" src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image2} alt="Slide 2" />
        </SwiperSlide>
      </Swiper>

      <div class="img-wrapper">
    <img class="inner-img" src="https://source.unsplash.com/random/401x401" width="400px" height="400px" />
</div>
    </>
  );
}
