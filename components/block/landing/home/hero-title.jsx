import WordRotate from "@/components/ui/word-rotate";
import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  const words = [
    "The Modern Law Firms",
    "A Smart Lawyer",
    "An Ambitious Founder",
    "The Business Owners",
    "The Corporate Legal Divisions",
    "An Investigative Expert",
    "The Law Practice Groups",
    "The Legal Professionals",
    "The Law Practitioners",
  ];
  return (
    <div className="flex-col items-center justify-center w-full">
      <h1
        className={`text-4xl md:text-6xl font-medium text-[#171717] text-center leading-snug ${Open_Sans.className}`}
      >
        <span className="md:mr-4">Intelligence Legal</span>
        <br className="md:hidden" />
        Assistant for
        <WordRotate
          words={words}
          duration="4000"
          className="-mt-2 pt-0.5 md:mt-2 md:pt-0 min-h-[13vh] md:min-h-max"
        />
      </h1>
      <p className="text-sm md:text-lg font-light text-neutral-600 text-center leading-snug mt-2 md:mt-8">
        Streamline your Legal Workflows with Advanced AI-Powered Solutions.
      </p>
    </div>
  );
}
