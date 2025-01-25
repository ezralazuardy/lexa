"use client";

import { Loader } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Beta() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    iframe.addEventListener("load", handleLoad);
    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  });

  return (
    <div className="relative h-full w-full min-h-screen overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Loader className="animate-spin h-12 w-12 text-gray-900" />
        </div>
      )}
      <div className="flex z-10 absolute right-0 md:right-2 bottom-0 w-full md:w-[20vw] h-[8vh] md:h-[40vh] bg-white pointer-events-none overflow-hidden"></div>
      <iframe
        data-tally-src={process.env.NEXT_PUBLIC_TALLY_PRIVATE_BETA}
        width="100%"
        height="100%"
        className={`z-0 border-0 m-0 w-full h-full min-h-screen transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
      ></iframe>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
