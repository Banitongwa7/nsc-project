"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
};

export default function Home() {
  const sliders: Slide[] = [
    { id: 1, image: "/assets/img/firstpage/image1.png" },
    { id: 2, image: "/assets/img/firstpage/image2.jpg" },
    { id: 3, image: "/assets/img/firstpage/image3.png" },
    { id: 4, image: "/assets/img/firstpage/image4.jpg" },
  ];

  return (
    <div className="relative text-white text-[20px] w-full mx-auto my-10">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        loop={true}
        speed={4000}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt="background"
              width={800}
              height={300}
              className="object-cover w-full h-[700px]"
              priority
            />
            <div className="px-[8px] md:px-[40px] py-[8px] md:py-[25px] font-oswald bg-[#F02D34] absolute bottom-[15px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Button {slide.id}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
