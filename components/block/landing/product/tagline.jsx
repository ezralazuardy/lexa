"use client";

import Open_Sans from "@/lib/fonts/open-sans";
import { getTypingAnimationSequence, shuffleArray } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

const words = [
  "extracting key terms",
  "analyzing agreements",
  "comparing letters",
  "drafting contracts",
  "legal research",
  "summarizing documents",
  "compliance risks",
  "organizing case files",
  "generating legal reports",
  "reviewing court decisions",
  "customizing templates",
  "team workflows",
  "managing document versions",
  "creating memos",
  "automating tasks",
  "assessing policy risks",
  "monitoring legal updates",
  "streamlining e-discovery",
  "verifying legal citations",
  "detecting conflicts",
];

export default function Tagline() {
  const shuffledWords = shuffleArray(words);

  return (
    <div className="flex flex-col items-center justify-center mt-16 md:mt-24 px-8 md:px-0">
      <div className="flex flex-col w-full md:max-w-screen-lg text-xl md:text-4xl lg:text-5xl">
        <span className="text-neutral-600 font-regular text-sm text-start">
          Features
        </span>
        <h1
          className={`font-light text-[#171717] text-left leading-snug mt-6 ${Open_Sans.className}`}
        >
          Simple legal platform that makes
        </h1>
        <h1
          className={`font-regular text-[#171717] text-left leading-snug my-2 md:my-2 ${Open_Sans.className}`}
        >
          <TypeAnimation
            sequence={getTypingAnimationSequence(shuffledWords)}
            speed={60}
            repeat={Infinity}
          />
        </h1>
        <h1
          className={`font-light text-[#171717] text-left leading-snug ${Open_Sans.className}`}
        >
          become so much faster, easier.
        </h1>
      </div>
    </div>
  );
}
