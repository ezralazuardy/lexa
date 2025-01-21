"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Open_Sans from "@/lib/fonts/open-sans";
import Autoplay from "embla-carousel-autoplay";

export default function Feature() {
  return (
    <div className="z-10 flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <h1
          className={`text-3xl font-regular text-[#171717] text-left leading-none ${Open_Sans.className}`}
        >
          Powerful Tools for Modern Legal Work
        </h1>
        <div className="flex mt-8">
          <div className="w-1/3 pr-4">
            <p className="text-lg text-[#171717]">
              Our platform offers a suite of powerful tools designed to
              streamline modern legal work.
            </p>
          </div>
          <div className="w-2/3 pl-4 flex justify-end">
            <FeatureCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full ml-16 hover:cursor-pointer"
    >
      <CarouselContent className="h-[360px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-[350px]">
            <div className="p-1">
              <Card className="h-[300px] w-full">
                <CardContent className="flex items-center justify-center p-6 w-full h-full">
                  <span className="text-3xl font-semibold text-center">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
