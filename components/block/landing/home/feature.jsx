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
    <div className="z-10 flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm">
          Powerful Features
        </span>
        <div className="flex columns-2 w-full mt-4">
          <div className="flex-col w-full">
            <h1
              className={`text-4xl font-medium text-[#171717] text-left leading-snug max-w-sm ${Open_Sans.className}`}
            >
              Efficient Tools for Modern Legal Work
            </h1>
            <ul className="mt-7 grid grid-cols-2 gap-x-8 gap-y-7">
              {features.map((feature, index) => (
                <li
                  id={`feature-item-${index}`}
                  key={index}
                  className={`flex items-start space-x-4 hover:cursor-pointer transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => handleGoToSlide(index)}
                >
                  <div className="mt-0.5">
                    <feature.icon className="w-5 h-5" strokeWidth={1.5} />
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
          <div className="flex w-full justify-end items-end pt-4 max-w-lg">
            <Carousel
              orientation="vertical"
              className="w-full ml-16 hover:cursor-pointer"
              setApi={setCarouselApi}
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent className="h-[340px]">
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="h-[350px]">
                    <div className="relative flex-col items-center justify-center w-full lg:max-w-screen-lg h-[300px] rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        placeholder="blur"
                        layout="fill"
                        className="fixed z-10 select-none object-cover w-full h-auto rounded-lg"
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
