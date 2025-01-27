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
    <div className="z-20 flex items-center bg-white px-5 py-3 w-full max-w-lg rounded-lg shadow-lg">
      <span className="text-sm font-regular text-neutral-600 text-left leading-snug flex-grow truncate">
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
