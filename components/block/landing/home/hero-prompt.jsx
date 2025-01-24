import { TypeAnimation } from "react-type-animation";
import { SendHorizonal } from "lucide-react";

export default function HeroPrompt() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 w-full max-w-lg rounded-lg shadow-lg flex items-center">
      <span className="text-md font-regular text-neutral-600 text-left leading-none flex-grow">
        <TypeAnimation
          sequence={[
            "is this draft comply with Indonesian law?",
            3000,
            "is this contract legally binding?",
            3000,
            "is this legal document enforceable in Singapore region?",
            3000,
            "check this agreement for any legal issues",
            3000,
            "check these business contract for any possible loopholes",
            3000,
            "help me review these legal drafts",
            3000,
          ]}
          speed={60}
          repeat={Infinity}
        />
      </span>
      <SendHorizonal className="ml-3 w-5 h-5 text-neutral-600" />
    </div>
  );
}
