"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import AllArticles from "@/data/AllArticles";
import CardArticle from "@/components/card/CardArticle";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Slide = {
  id: number;
  image: string;
};

export default function Home() {
  const [visibleItems, setVisibleItems] = useState<number>(6);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setVisibleItems((prev) => Math.min(prev + 6, AllArticles.length));
    }
  }, [inView, AllArticles.length]);

  const sliders: Slide[] = [
    { id: 1, image: "/assets/img/firstpage/image1.png" },
    { id: 2, image: "/assets/img/firstpage/image2.png" },
    { id: 3, image: "/assets/img/firstpage/image3.png" },
    { id: 4, image: "/assets/img/firstpage/image4.png" },
  ];

  const steps = [
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-red-800 bg-red-100 relative">
          Étape 1
        </span>
      ),
      title: "Choisissez votre produit",
      description: "Choisissez parmi une variété de produits de qualité",
      thumbnail: "/assets/icons/steps/step-1.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-indigo-800 bg-indigo-100 relative">
          Étape 2
        </span>
      ),
      title: "Remplissez le formulaire",
      description:
        "Remplissez le formulaire de commande et payez 50% du montant pour confirmer",
      thumbnail: "/assets/icons/steps/step-2.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-yellow-800 bg-yellow-100 relative">
          Étape 3
        </span>
      ),
      title: "Confirmation et expédition",
      description: "Nous confirmerons votre commande et expédierons le produit",
      thumbnail: "/assets/icons/steps/step-3.png",
    },
    {
      badge: (
        <span className="inline-flex px-2.5 py-1 rounded-secondary text-xs text-purple-800 bg-purple-100 relative">
          Étape 4
        </span>
      ),
      title: "Profitez de votre produit",
      description: "Profitez de votre produit et payez le reste du montant",
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
        className="w-[80%] mx-auto rounded-2xl"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt="background"
              width={1280}
              height={720}
              className="object-fill w-full h-[200px] sm:h-[400px] md:h-[700px]"
              priority
            />
            <div className="px-[8px] md:px-[40px] py-[8px] md:py-[25px] bg-[var(--palette-3)] absolute bottom-[15px] md:bottom-[75px] left-0 text-white text-[10px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-r-2xl">
              Voir plus
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-7xl mx-auto px-4 w-full my-40">
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
          <picture className="hidden md:block absolute inset-x-0 top-5">
            <source srcSet="/assets/home/steps/step-bg.svg" type="image/svg" />
            <img src="/assets/icons/steps/step-bg.svg" alt="vector" />
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
                <h2 className="text-base text-[var(--palette-1)]">
                  {step.title}
                </h2>
                <span className="block text-slate-600 text-sm leading-6 text-center">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full my-10">
        <div className="text-center space-y-5">
          <h2 className="font-extrabold text-[--palette-1] text-5xl">
            Tous nos produits
          </h2>
          <p className="text-md text-gray-600 font-medium">
            Consultez tous nos produits Nyota Skincare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 lg:px-8 md:px-8 px-8">
          {AllArticles.slice(0, visibleItems).map((item) => (
            <CardArticle key={item.id} item={item} />
          ))}
        </div>
        <div ref={ref} className="text-center py-4">
          {visibleItems < AllArticles.length && <span>Loading ...</span>}
        </div>
      </div>
    </div>
  );
}
