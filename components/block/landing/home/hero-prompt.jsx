"use client";

import { getTypingAnimationSequence } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HeroPrompt() {
  const words = [
    "is this draft comply with Indonesian law?",
    "is this contract legally binding?",
    "is this legal document enforceable in Singapore region?",
    "check this agreement for any legal issues",
    "check these business contract for any possible loopholes",
    "help me review these legal drafts",
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 w-full max-w-lg rounded-lg shadow-lg flex items-center">
      <span className="text-md font-regular text-neutral-600 text-left leading-none flex-grow">
        <TypeAnimation
          sequence={getTypingAnimationSequence(words)}
          speed={60}
          repeat={Infinity}
        />
      </span>
      <SendHorizonal className="ml-3 w-5 h-5 text-neutral-600" />
    </div>
  );
}
