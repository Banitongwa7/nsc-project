"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
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

  const steps = [
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-red-800 bg-red-100 relative">
          Step 1
        </span>
      ),
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      thumbnail: "/assets/icons/steps/step-1.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-indigo-800 bg-indigo-100 relative">
          Step 2
        </span>
      ),
      title: "Add to bag",
      description: "Easily select the correct items and add them to the cart",
      thumbnail: "/assets/icons/steps/step-2.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-yellow-800 bg-yellow-100 relative">
          Step 3
        </span>
      ),
      title: "Fast Shipping",
      description: "The carrier will confirm and ship quickly to you",
      thumbnail: "/assets/icons/steps/step-3.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-purple-800 bg-purple-100 relative">
          Step 4
        </span>
      ),
      title: "Enjoy the product",
      description: "Have fun and enjoy your 5-star quality products",
      thumbnail: "/assets/icons/steps/step-4.png",
    },
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

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
          <picture className="hidden md:block absolute inset-x-0 top-5">
            <source srcSet="/assets/home/steps/step-bg.svg" type="image/svg" />
            <img src="/assets/home/steps/step-bg.svg" alt="vector" />
          </picture>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-y-8 items-center max-w-xs mx-auto"
            >
              <div className="max-w-[100px] mx-auto">
                <Image
                  src={step.thumbnail}
                  alt={step.title}
                  height={100}
                  width={100}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-y-4 items-center justify-center">
                {step.badge}
                <h2 className="text-base">{step.title}</h2>
                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 text-center">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
