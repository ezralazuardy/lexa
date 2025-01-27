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

export default function Security() {
  const securities = [
    {
      image: security1,
      imageAlt: "Security 1",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-8 md:px-0">
      <div className="flex flex-col md:flex-row w-full items-center justify-center md:max-w-screen-lg">
        <div className="flex w-full justify-end items-start mt-8 md:mt-0">
          <div className="flex-col max-w-lg md:pl-10">
            <span className="text-neutral-600 font-regular text-sm">
              Enterprise Grade Security
            </span>
            <h1
              className={`text-3xl md:text-4xl mt-4 font-medium text-[#171717] text-left leading-snug max-w-lg ${Open_Sans.className}`}
            >
              Built with Privacy and Security in Mind
            </h1>
            <p className="mt-4 mb-6 text-md font-light text-neutral-600 text-justify">
              We are committed to protect your data and privacy at all times.
              Our platform is compliant with GDPR and CCPA to ensure your data
              is safe and secure.
            </p>
            <Button variant="outline" size="default" asChild>
              <Link href="/security">Learn More</Link>
            </Button>
            <div className="flex space-x-4 mt-6">
              <Image
                src={gdprBadge}
                alt="GDPR"
                draggable="false"
                placeholder="blur"
                width={385}
                height={500}
                className="w-auto h-[94px] select-none -ml-1"
              />
              <Image
                src={ccpaBadge}
                alt="CCPA"
                draggable="false"
                placeholder="blur"
                width={385}
                height={500}
                className="w-auto h-[94px] select-none -ml-1"
              />
            </div>
          </div>
        </div>
        <div className="w-full justify-start items-start pt-12 max-w-lg md:order-first hidden md:flex">
          <Carousel
            orientation="vertical"
            className="w-full md:mr-16 mt-0.5 hover:cursor-pointer"
          >
            <CarouselContent className="h-[340px]">
              {securities.map((security, index) => (
                <CarouselItem key={index} className="h-[350px]">
                  <div className="relative flex-col items-center justify-center w-full md:max-w-screen-lg h-[300px] rounded-lg">
                    <Image
                      src={security.image}
                      alt={security.imageAlt}
                      draggable="false"
                      placeholder="blur"
                      className="absolute z-10 select-none object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
