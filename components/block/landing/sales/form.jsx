"use client";

import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => setTimeout(() => setLoading(false), 2000);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center mt-2 md:mt-12">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-md px-6 mx-0.5 md:px-0 md:mx-0">
        <hr className="hidden md:block border-neutral-300 w-full mb-4" />
        <div className="relative w-full h-auto">
          {loading ? <FormLoader className="mt-7 px-2" /> : null}
          <iframe
            data-tally-src={process.env.NEXT_PUBLIC_TALLY_CONTACT_SALES}
            loading="lazy"
            width="100%"
            height="100%"
            className={`w-full h-auto transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
          ></iframe>
          <div className="absolute right-0 bottom-0 w-[35vw] h-[8vh] bg-white"></div>
        </div>
        <hr className="hidden md:block border-neutral-300 w-full mt-6 mb-4" />
      </div>
      <div className="hidden md:flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-start mb-4 md:mb-0">
          <p className="text-xs font-light text-neutral-600 leading-normal text-justify md:text-left">
            Your information is safe with us.
            <br />
            Please read our{" "}
            <Link
              href="/legal/privacy-policy"
              className="text-black font-medium hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <Button variant="link" size="md" asChild>
            <Link href="mailto:lexa@lazuardy.tech">
              <Mail /> lexa@lazuardy.tech
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex md:hidden flex-col w-full mt-8 px-8 md:px-0">
        <p className="text-sm md:text-md font-light text-neutral-600 text-justify leading-snug">
          Your information is safe with us. Please read our{" "}
          <Link
            href="/legal/privacy-policy"
            className="text-black font-medium hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>
        <div className="flex w-full mt-4">
          <Button variant="link" size="md" asChild>
            <Link href="mailto:lexa@lazuardy.tech">
              <Mail className="mt-0.5 md:mt-0" /> lexa@lazuardy.tech
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FormLoader({ className }) {
  return (
    <div className={`mx-auto ${className}`}>
      <div className="mb-8">
        <div className="h-6 bg-neutral-300 rounded w-1/3 mb-2 animate-pulse"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse"></div>
      </div>
      <div className="mb-8">
        <div className="h-6 bg-neutral-300 rounded w-1/3 mb-2 animate-pulse"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 bg-neutral-300 rounded animate-pulse mb-2"></div>
      </div>
      <div className="mb-8">
        <div className="h-6 bg-neutral-300 rounded w-1/3 mb-2 animate-pulse"></div>
        <div className="h-20 bg-neutral-300 rounded animate-pulse"></div>
      </div>
      <div className="mb-0">
        <div className="h-10 bg-neutral-300 rounded w-1/4 mb-2 animate-pulse"></div>
      </div>
    </div>
  );
}
