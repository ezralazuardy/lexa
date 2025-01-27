"use client";

import Open_Sans from "@/lib/fonts/open-sans";
import { getTypingAnimationSequence } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

export default function Tagline() {
  const words = [
    "extracting key terms",
    "analyzing agreements",
    "comparing letters",
    "drafting contracts",
    "legal research",
    "summarizing documents",
    "compliance risks",
    "organizing case files",
    "tracking communications",
    "reviewing court decisions",
    "customizing templates",
    "team workflows",
    "managing versions",
    "creating memos",
    "automating tasks",
    "assessing risks in policies",
    "multi-language translations",
    "monitoring updates",
    "streamlining e-discovery",
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-16 md:mt-32 px-8 md:px-0">
      <div className="flex flex-col w-full md:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-start">
          Features
        </span>
        <h1
          className={`text-xl md:text-6xl font-light text-[#171717] text-left leading-snug mt-6 ${Open_Sans.className}`}
        >
          Simple legal platform that makes
        </h1>
        <h1
          className={`text-xl md:text-6xl font-regular text-[#171717] text-left leading-snug my-0 md:my-4 ${Open_Sans.className}`}
        >
          <TypeAnimation
            sequence={getTypingAnimationSequence(words)}
            speed={60}
            repeat={Infinity}
          />
        </h1>
        <h1
          className={`text-xl md:text-6xl font-light text-[#171717] text-left leading-snug ${Open_Sans.className}`}
        >
          become so much faster, easier.
        </h1>
      </div>
    </div>
  );
}
