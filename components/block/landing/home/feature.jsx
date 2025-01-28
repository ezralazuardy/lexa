"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Open_Sans from "@/lib/fonts/open-sans";
import { getFeatures } from "@/lib/services/feature-service";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Feature() {
  const features = getFeatures();
  const [carouselApi, setCarouselApi] = useState(null);
  let carouselAutoplayThrottleTimer;

  const handleGoToSlide = (index) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  const activateFeatureItem = (index) => {
    const item = document.getElementById(`feature-item-${index}`);
    if (!item) return;
    item.classList.remove("opacity-50");
    item.classList.add("opacity-100");
    for (let i = 0; i < features.length; i++) {
      if (i !== index) deactivateFeatureItem(i);
    }
    clearTimeout(carouselAutoplayThrottleTimer);
    carouselApi.plugins().autoplay.stop();
    carouselAutoplayThrottleTimer = setTimeout(() => {
      carouselApi.plugins().autoplay.play();
    }, 4000);
  };

  const deactivateFeatureItem = (index) => {
    const item = document.getElementById(`feature-item-${index}`);
    if (!item) return;
    item.classList.remove("opacity-100");
    item.classList.add("opacity-50");
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      activateFeatureItem(carouselApi.selectedScrollSnap());
    });

    return () => {
      clearTimeout(carouselAutoplayThrottleTimer);
    };
  }, [carouselApi]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32 px-8 md:px-0 md:flex-row">
      <div className="flex-col items-center justify-center w-full md:max-w-screen-lg">
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <span className="text-neutral-600 font-regular text-sm">
              Powerful Features
            </span>
          </div>
          <div className="w-1/2 hidden md:block"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-6">
          <div className="flex-col w-full">
            <h1
              className={`text-3xl md:text-4xl font-medium text-[#171717] text-left leading-snug ${Open_Sans.className}`}
            >
              Built for Modern Legal Work
            </h1>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-6 mt-7 md:mt-8">
              {features.map((feature, index) => (
                <li
                  id={`feature-item-${index}`}
                  key={index}
                  className={`flex items-start space-x-4 md:space-x-3 hover:cursor-pointer transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => handleGoToSlide(index)}
                >
                  <div className="mt-1">
                    <feature.icon className="w-5 h-5" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h2 className="text-md font-regular font-neutral-800">
                      {feature.title}
                    </h2>
                    <p className="text-xs font-light text-neutral-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-center md:justify-end items-start max-w-lg pt-4 md:pt-0 mt-6 md:mt-0">
            <Carousel
              orientation="vertical"
              className="w-full md:ml-16 hover:cursor-pointer"
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              setApi={setCarouselApi}
            >
              <CarouselContent className="w-full max-h-[310px] md:max-h-[280px]">
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="w-full h-auto">
                    <div className="relative flex-col items-center justify-center w-full rounded-lg aspect-video">
                      <Image
                        alt={feature.title}
                        src={feature.image}
                        className="select-none object-cover w-full h-full rounded-lg"
                        placeholder="blur"
                        draggable="false"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
