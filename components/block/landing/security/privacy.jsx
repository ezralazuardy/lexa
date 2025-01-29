import { Brain, Equal, Heart, Lock, Plus } from "lucide-react";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Data Privacy
        </span>
        <h1 className="w-full md:max-w-3xl mt-4 md:mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-medium leading-snug md:leading-tight text-transparent dark:from-white dark:to-slate-900/10 px-8 md:px-0">
          AI that Understand Your Privacy
        </h1>
        <div className="flex justify-center items-center py-10 md:py-12 opacity-60">
          <Brain
            className="w-14 h-14 md:w-22 md:h-22 text-black transition-transform duration-500 hover:scale-110"
            strokeWidth={0.4}
          />
          <Plus
            className="w-10 h-10 md:w-14 md:h-14 text-black transition-transform duration-500 hover:scale-110 mx-3 md:mx-5"
            strokeWidth={0.4}
          />
          <Lock
            className="w-14 h-14 md:w-22 md:h-22 text-black transition-transform duration-500 hover:scale-110"
            strokeWidth={0.4}
          />
          <Equal
            className="w-10 h-10 md:w-14 md:h-14 text-black transition-transform duration-500 hover:scale-110 mx-3 md:mx-5"
            strokeWidth={0.4}
          />
          <Heart
            className="w-14 h-14 md:w-22 md:h-22 transition-transform duration-500 hover:scale-110"
            fill="red"
            strokeWidth={0.1}
          />
        </div>
        <p className="w-full md:max-w-4xl text-justify md:text-center text-sm md:text-md font-light text-neutral-600 leading-snug px-8 md:px-0">
          LEXA is designed to respect your privacy and confidentiality. Any data
          supplied to us are processed and used only on your behalf. The
          inteligence level that have been trained with your organization data
          will not be shared with other organizations.
        </p>
        <p className="w-full md:max-w-4xl text-justify md:text-center text-sm md:text-md font-light text-neutral-600 leading-snug mt-4 px-8 md:px-0">
          We ensure that the confidentials will remain confidential.
        </p>
        <p className="w-full md:max-w-xl text-justify md:text-center text-xs font-light text-neutral-600 leading-snug mt-4 md:mt-6 px-8 md:px-0">
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
  );
}
