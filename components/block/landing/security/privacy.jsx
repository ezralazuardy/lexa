import Link from "next/link";
import { Brain, Lock, Heart, Plus, Equal } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-32">
      <div className="flex flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Data Privacy
        </span>
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10">
            AI that Understands Your Privacy
          </h1>
          <p className="text-md font-light text-neutral-600 text-center leading-snug mt-8 lg:max-w-screen-md px-12">
            LEXA is designed to respect your privacy and confidentiality. Any
            data supplied to us are processed and used only on your behalf. The
            inteligence level that have been trained with your organization data
            will not be shared with other organizations.
          </p>
          <div className="flex justify-center items-center py-14 opacity-60">
            <Brain
              className="w-24 h-24 text-black transition-transform duration-500 hover:scale-110"
              strokeWidth={0.4}
            />
            <Plus
              className="w-16 h-16 text-black transition-transform duration-500 hover:scale-110 mx-6"
              strokeWidth={0.6}
            />
            <Lock
              className="w-24 h-24 text-black transition-transform duration-500 hover:scale-110"
              strokeWidth={0.4}
            />
            <Equal
              className="w-16 h-16 text-black transition-transform duration-500 hover:scale-110 mx-6"
              strokeWidth={0.6}
            />
            <Heart
              className="w-24 h-24 transition-transform duration-500 hover:scale-110"
              fill="red"
              strokeWidth={0.1}
            />
          </div>
          <p className="text-md font-light text-neutral-600 text-center leading-snug lg:max-w-screen-md px-12">
            We ensure that the confidentials will remain confidential.
          </p>
          <p className="flex justify-center text-sm font-light text-neutral-600 mt-8">
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
