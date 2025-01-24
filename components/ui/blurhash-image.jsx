"use client";

import Image from "next/image";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

export default function BlurHashImage({ blurhash, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{ width: props.width, height: props.height }}
    >
      <Blurhash
        hash={blurhash}
        width={props.width}
        height={props.height}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100 delay-1000" : "opacity-0"}`}
      >
        <Image
          {...props}
          onLoadingComplete={() => setIsLoaded(true)}
          className="select-none object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
