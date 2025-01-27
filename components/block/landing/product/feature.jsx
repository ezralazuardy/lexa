import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Open_Sans from "@/lib/fonts/open-sans";
import { getFeatures } from "@/lib/services/feature-service";
import Image from "next/image";
import Link from "next/link";

export default function Feature() {
  const features = getFeatures();

  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-0">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} inverted={index % 2 !== 0} />
      ))}
    </div>
  );
}

export function FeatureItem({ feature, inverted = false }) {
  return (
    <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg mt-12 md:mt-24">
      <div
        className={`flex flex-col md:flex-row w-full ${inverted ? "md:flex-row-reverse" : ""}`}
      >
        <div className="flex flex-col w-full">
          <div className="flex">
            <feature.icon
              className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3 mt-1"
              strokeWidth={1.4}
            />
            <h1
              className={`text-xl md:text-2xl font-medium text-[#171717] text-left leading-snug max-w-sm ${Open_Sans.className}`}
            >
              {feature.title}
            </h1>
          </div>
          <p
            className="mt-4 md:mt-6 text-xs font-light text-neutral-600 text-justify"
            dangerouslySetInnerHTML={{ __html: feature.long_description }}
          ></p>
          <div className="mt-6 md:mt-10 mb-6 md:mb-0 flex justify-start">
            <ReadUseCaseButton feature={feature} />
          </div>
        </div>
        <div
          className={`flex w-full ${inverted ? "justify-start items-start" : "justify-end items-end"} pt-2 max-w-lg`}
        >
          <Carousel
            orientation="vertical"
            className={`w-full ${inverted ? "md:mr-16" : "md:ml-16"} hover:cursor-pointer`}
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="h-[30vh] md:h-[42vh]">
              <CarouselItem key={0} className="h-[30vh] md:h-[42vh]">
                <div className="relative flex-col items-center justify-center w-full md:max-w-screen-lg rounded-lg h-[28vh] md:h-[40vh]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    placeholder="blur"
                    className="absolute z-10 select-none object-cover w-full h-full rounded-lg"
                    draggable="false"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export function ReadUseCaseButton() {
  return (
    <div className="flex items-center">
      <Button variant="outline" size="sm" disabled>
        <Link href="#">Read Use Cases</Link>
      </Button>
      <span className="ml-4 text-xs font-light text-neutral-600">
        documentation is coming soon.
      </span>
    </div>
  );
}
