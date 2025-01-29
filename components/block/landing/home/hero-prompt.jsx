"use client";

import { getTypingAnimationSequence, shuffleArray } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const words = [
  "does this draft comply with indonesian law?",
  "is this contract legally binding?",
  "is this document enforceable in singapore?",
  "check this agreement for legal issues",
  "check this contract for possible loopholes",
  "help me review these legal drafts",
  "does this contract follow international law?",
  "identify ambiguous clauses in this agreement",
  "analyze this nda for potential risks",
  "summarize this legal document simply",
  "suggest improvements for this contract",
  "check if this contract meets regulations",
  "compare this agreement with industry standards",
  "highlight compliance risks in this document",
  "identify unfair terms in this contract",
  "does this job contract follow labor laws?",
  "review this shareholder agreement",
  "check if this privacy policy follows gdpr",
  "is this contract fair for both parties?",
  "analyze the liability clauses in this deal",
];

export default function HeroPrompt() {
  const shuffledWords = shuffleArray(words);

  return (
    <div className="z-20 flex items-center bg-white px-5 py-3 w-full max-w-lg rounded-lg shadow-lg">
      <span className="text-sm font-regular text-neutral-600 text-left leading-snug flex-grow truncate lowercase">
        <TypeAnimation
          sequence={getTypingAnimationSequence(shuffledWords)}
          speed={60}
          repeat={Infinity}
        />
      </span>
      <SendHorizonal className="ml-3 w-5 h-5 text-neutral-600" />
    </div>
  );
}
