"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";

// import required modules

export default function CircularCarousel({ children }: { children: any[] }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      loop={true}
      mousewheel={true}
      modules={[Mousewheel]}
    >
      {children.map((child, index) => {
        return (
          <SwiperSlide key={index} style={{ width: "min-content" }}>
            {child}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
