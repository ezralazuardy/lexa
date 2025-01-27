"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div className="flex items-center justify-center mt-10 md:mt-12 px-8 md:px-0">
      <div className="flex-col items-center justify-center w-full md:max-w-screen-md">
        <hr className="border-neutral-300 w-full mb-4" />
        <div className="relative w-full min-h-[70vh]">
          <iframe
            data-tally-src={process.env.NEXT_PUBLIC_TALLY_CONTACT_SALES}
            loading="lazy"
            width="100%"
            height="100%"
            className="w-full h-auto"
          ></iframe>
          <div className="absolute right-0 bottom-0 w-[35vw] h-[8vh] bg-white"></div>
        </div>
        <hr className="border-neutral-300 w-full mt-6 mb-4" />
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-start mb-4 md:mb-0">
            <p className="text-xs font-light text-neutral-600 leading-normal text-center md:text-left">
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
      </div>
    </div>
  );
}
