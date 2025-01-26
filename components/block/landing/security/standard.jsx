"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import ccpaBadge from "@/public/images/badges/ccpa-badge.png";
import gdprBadge from "@/public/images/badges/gdpr-badge.png";
import Image from "next/image";
import Link from "next/link";

export default function Standard() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-32">
      <div className="flex flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Standards
        </span>
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Industry Standard for Data Privacy
          </h1>
          <p className="text-md font-light text-neutral-600 text-center leading-snug mt-8 lg:max-w-screen-md px-12">
            LEXA is certified and compliant with
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center relative w-full mt-8 py-16">
          <DotPattern className={cn("z-0 absolute inset-0 fill-neutral-400")} />
          <div className="flex space-x-12">
            <Link
              href="https://gdpr.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 transition-all duration-500 hover:scale-110 bg-white p-4"
            >
              <Image
                src={gdprBadge}
                alt="GDPR"
                draggable="false"
                placeholder="blur"
                width={385}
                height={500}
                className="w-auto h-[180px] select-none"
              />
            </Link>
            <Link
              href="https://oag.ca.gov/privacy/ccpa"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 transition-all duration-500 hover:scale-110 bg-white p-4"
            >
              <Image
                src={ccpaBadge}
                alt="CCPA"
                draggable="false"
                placeholder="blur"
                width={385}
                height={500}
                className="z-10 w-auto h-[180px] select-none"
              />
            </Link>
          </div>
        </div>
        <p className="text-md font-light text-neutral-600 text-center leading-snug mt-8 lg:max-w-screen-md px-12">
          As our commitment to data privacy, other standards, compliance,
          <br />
          and certifications will be added in the future.
        </p>
        <p className="flex justify-center mt-8 text-sm font-light text-neutral-600 lg:max-w-screen-md">
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
