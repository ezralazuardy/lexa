"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import ccpaBadge from "@/public/images/badges/ccpa-badge.png";
import gdprBadge from "@/public/images/badges/gdpr-badge.png";
import Image from "next/image";
import Link from "next/link";

const badges = [
  {
    src: gdprBadge,
    alt: "GDPR",
    link: "https://gdpr.eu",
  },
  {
    src: ccpaBadge,
    alt: "CCPA",
    link: "https://oag.ca.gov/privacy/ccpa",
  },
];

export default function Standard() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg">
        <span className="w-full md:max-w-3xl text-neutral-600 font-regular text-sm text-center">
          Standards
        </span>
        <h1 className="w-full md:max-w-4xl mt-4 md:mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-medium leading-snug md:leading-tight text-transparent px-8 md:px-0">
          Industry Standard for Data Privacy
        </h1>
        <p className="w-full md:max-w-4xl text-md font-light text-neutral-600 text-center leading-snug mt-6 md:mt-8 px-8 md:px-0">
          LEXA is certified and compliant with
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-8">
        <div className="flex flex-col items-center justify-center relative w-full py-12">
          <DotPattern className={cn("z-0 absolute inset-0 fill-neutral-400")} />
          <div className="flex md:space-x-12">
            {badges.map((badge, index) => (
              <Link
                key={index}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 transition-all duration-500 hover:scale-110 bg-white p-4"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  draggable="false"
                  placeholder="blur"
                  className="w-auto h-[120px] md:h-[150px] select-none"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="w-full md:max-w-4xl text-justify md:text-center text-md font-light text-neutral-600 leading-snug mt-6 md:mt-8 px-8 md:px-0">
          As our commitment to data privacy, other standards, compliance, and
          certifications will be added in the future.
        </p>
        <p className="w-full md:max-w-xl text-justify md:text-center text-xs font-light text-neutral-600 leading-snug mt-4 md:mt-6 px-8 md:px-0">
          For more information, please read our
          <Link
            href="/legal/privacy-policy"
            className="font-medium text-black hover:underline ml-1"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
