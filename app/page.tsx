"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
};

export default function Home() {
  const sliders: Slide[] = [
    { id: 1, image: "https://picsum.photos/800/300?random=1" },
    { id: 2, image: "https://picsum.photos/800/300?random=2" },
    { id: 3, image: "https://picsum.photos/800/300?random=3" },
    { id: 4, image: "https://picsum.photos/800/300?random=4" },
    { id: 5, image: "https://picsum.photos/800/300?random=5" },
    { id: 6, image: "https://picsum.photos/800/300?random=6" },
    { id: 7, image: "https://picsum.photos/800/300?random=7" },
    { id: 8, image: "https://picsum.photos/800/300?random=8" },
    { id: 9, image: "https://picsum.photos/800/300?random=9" },
  ];

  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto mt-6">
      <Swiper
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt="background"
              width={800}
              height={300}
              className="object-cover w-full h-full rounded-2xl"
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
