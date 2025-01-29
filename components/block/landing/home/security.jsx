import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Open_Sans from "@/lib/fonts/open-sans";
import ccpaBadge from "@/public/images/badges/ccpa-badge.png";
import gdprBadge from "@/public/images/badges/gdpr-badge.png";
import security1 from "@/public/images/securities/security-1.png";
import Image from "next/image";
import Link from "next/link";

const securities = [
  {
    image: security1,
    title: "Security 1",
  },
];

export default function Security() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32 px-8 md:px-0 md:flex-row">
      <div className="flex-col items-center justify-center w-full md:max-w-screen-lg">
        <div className="flex flex-row w-full">
          <div className="w-1/2 hidden md:block"></div>
          <div className="w-1/2">
            <span className="text-neutral-600 font-regular text-sm">
              Enterprise Grade Security
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-6">
          <div className="hidden md:flex w-full justify-center md:justify-end items-start max-w-lg pt-4 md:pt-0 mt-6 md:mt-0">
            <Carousel
              orientation="horizontal"
              className="w-full md:mr-12 hover:cursor-pointer"
              opts={{
                align: "start",
              }}
            >
              <CarouselContent className="w-full max-h-[300px]">
                {securities.map((security, index) => (
                  <CarouselItem key={index} className="w-full h-auto">
                    <div className="relative flex-col items-center justify-center w-full rounded-lg aspect-video">
                      <Image
                        alt={security.title}
                        src={security.image}
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
          <div className="flex-col w-full">
            <h1
              className={`text-3xl md:text-4xl font-medium text-[#171717] text-left leading-snug ${Open_Sans.className}`}
            >
              Built with Privacy in Mind
            </h1>
            <p className="mt-4 mb-5 text-md md:text-sm font-light text-neutral-600 text-justify">
              We are committed to protect your data and privacy at all times.
              Our platform is compliant with GDPR and CCPA to ensure your data
              is safe and secure.
            </p>
            <Button variant="outline" size="default" asChild>
              <Link href="/security">Learn More</Link>
            </Button>
            <div className="flex space-x-4 mt-7">
              <Image
                src={gdprBadge}
                alt="GDPR"
                draggable="false"
                placeholder="blur"
                className="w-auto h-[75px] select-none -ml-1"
              />
              <Image
                src={ccpaBadge}
                alt="CCPA"
                draggable="false"
                placeholder="blur"
                className="w-auto h-[75px] select-none -ml-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
