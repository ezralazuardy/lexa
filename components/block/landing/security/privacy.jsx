import Link from "next/link";
import { Brain, Lock, Heart, Plus, Equal } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Data Privacy
        </span>
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-6xl font-medium leading-snug text-transparent dark:from-white dark:to-slate-900/10 px-8 md:px-0">
            AI that Understand Your Privacy
          </h1>
          <p className="text-sm md:text-md font-light text-neutral-600 text-justify md:text-center leading-snug mt-6 md:mt-8 md:max-w-screen-md px-8 md:px-12">
            LEXA is designed to respect your privacy and confidentiality. Any
            data supplied to us are processed and used only on your behalf. The
            inteligence level that have been trained with your organization data
            will not be shared with other organizations.
          </p>
          <div className="flex justify-center items-center py-8 md:py-14 opacity-60">
            <Brain
              className="w-14 h-14 md:w-24 md:h-24 text-black transition-transform duration-500 hover:scale-110"
              strokeWidth={0.4}
            />
            <Plus
              className="w-10 h-10 md:w-16 md:h-16 text-black transition-transform duration-500 hover:scale-110 mx-3 md:mx-6"
              strokeWidth={0.6}
            />
            <Lock
              className="w-14 h-14 md:w-24 md:h-24 text-black transition-transform duration-500 hover:scale-110"
              strokeWidth={0.4}
            />
            <Equal
              className="w-10 h-10 md:w-16 md:h-16 text-black transition-transform duration-500 hover:scale-110 mx-3 md:mx-6"
              strokeWidth={0.6}
            />
            <Heart
              className="w-14 h-14 md:w-24 md:h-24 transition-transform duration-500 hover:scale-110"
              fill="red"
              strokeWidth={0.1}
            />
          </div>
          <p className="text-sm md:text-md font-light text-neutral-600 text-justify md:text-center leading-snug md:max-w-screen-md px-8 md:px-12">
            We ensure that the confidentials will remain confidential.
          </p>
          <p className="w-full text-justify md:text-center text-xs md:text-sm font-light text-neutral-600 mt-6 md:mt-8 px-8 md:px-12">
            For more information, please read our
            <Link
              href="/legal/data-processing-agreement"
              className="font-medium text-black hover:underline ml-1"
            >
              Data Processing Agreement
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
