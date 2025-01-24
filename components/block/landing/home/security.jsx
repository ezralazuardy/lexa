import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Open_Sans from "@/lib/fonts/open-sans";
import ccpaBadge from "@/public/images/ccpa-badge.png";
import gdprBadge from "@/public/images/gdpr-badge.png";
import security1 from "@/public/images/security-1.png";
import Image from "next/image";
import Link from "next/link";

const securities = [
  {
    image: security1,
    imageAlt: "Security 1",
  },
];

export default function Security() {
  return (
    <div className="z-10 flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <div className="flex columns-2 w-full">
          <div className="flex w-full justify-start items-start pt-12 max-w-lg">
            <Carousel
              orientation="vertical"
              className="w-full mr-16 mt-0.5 hover:cursor-pointer"
            >
              <CarouselContent className="h-[340px]">
                {securities.map((security, index) => (
                  <CarouselItem key={index} className="h-[350px]">
                    <div className="relative flex-col items-center justify-center w-full lg:max-w-screen-lg h-[300px] rounded-lg">
                      <Image
                        src={security.image}
                        alt={security.imageAlt}
                        draggable="false"
                        placeholder="blur"
                        layout="fill"
                        className="fixed z-10 select-none object-cover w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex w-full justify-end items-start">
            <div className="flex-col max-w-lg pl-10">
              <span className="text-neutral-600 font-regular text-sm">
                Enterprise Grade Security
              </span>
              <h1
                className={`mt-4 text-4xl font-medium text-[#171717] text-left leading-snug max-w-lg ${Open_Sans.className}`}
              >
                Built with Privacy in Mind
              </h1>
              <p className="mt-4 mb-6 text-md font-light text-neutral-600 text-justify">
                We are committed to protect your data and privacy at all times.
                Our platform is compliant with GDPR and CCPA to ensure your data
                is safe and secure.
              </p>
              <Link href="/security">
                <Button variant="outline" size="default">
                  Learn More
                </Button>
              </Link>
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
        </div>
      </div>
    </div>
  );
}
