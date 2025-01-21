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
        className={`text-6xl font-medium text-[#171717] text-center leading-none ${Open_Sans.className}`}
      >
        Intelligent Legal Assistant for
        <WordRotate words={words} duration="4000" />
      </h1>
      <p className="text-lg font-regular text-neutral-600 text-center leading-none mt-8">
        Streamline your Legal Workflows with Advanced AI-Powered Solutions.
      </p>
    </div>
  );
}
