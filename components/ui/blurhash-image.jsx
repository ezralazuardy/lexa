"use client";

import Image from "next/image";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

export default function BlurHashImage({ blurhash, rounded = false, ...props }) {
  if (typeof rounded === "string") rounded = rounded === "true";

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-auto aspect-video overflow-hidden ${rounded ? "rounded-lg" : ""}`}
    >
      <Blurhash
        hash={blurhash}
        width="100%"
        height="auto"
        resolutionX={32}
        resolutionY={32}
        punch={1}
        className={`absolute top-0 left-0 z-10 w-full h-auto aspect-video ${rounded ? "rounded-lg" : ""}`}
      />
      <div
        className={`absolute top-0 left-0 z-20 w-full h-auto aspect-video transition-opacity duration-1000 ${isLoaded ? "opacity-100 delay-1000" : "opacity-0"} ${rounded ? "rounded-lg" : ""}`}
      >
        <Image
          onLoadingComplete={() => setIsLoaded(true)}
          width={500}
          height={280}
          className={`absolute top-0 left-0 select-none object-cover w-full h-auto aspect-video ${rounded ? "rounded-lg" : ""}`}
          draggable="false"
          {...props}
        />
      </div>
    </div>
  );
}
