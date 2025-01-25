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
    <>
      <div className="flex items-center justify-center mt-12">
        <div className="flex-col items-center justify-center w-full lg:max-w-screen-md">
          <hr className="border-neutral-400 w-full mb-4" />
          <iframe
            data-tally-src={process.env.NEXT_PUBLIC_TALLY_CONTACT_SALES}
            loading="lazy"
            width="100%"
            height="100%"
            className="min-h-[70vh]"
          ></iframe>
          <hr className="border-neutral-400 w-full mt-6 mb-4" />
          <div className="flex w-full">
            <div className="w-1/2 flex justify-start items-start">
              <p className="text-xs font-light text-neutral-600 leading-snug">
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
            <div className="w-1/2 flex justify-end items-start">
              <Button variant="link" size="md" asChild>
                <Link href="mailto:lexa@lazuardy.tech">
                  <Mail /> lexa@lazuardy.tech
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
