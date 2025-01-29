import WordRotate from "@/components/ui/word-rotate";
import Open_Sans from "@/lib/fonts/open-sans";
import { shuffleArray } from "@/lib/utils";

const words = [
  "A Brilliant Lawyer",
  "A Startup Founder",
  "An Ambitious Founder",
  "An Investigative Expert",
  "The Business Owners",
  "The Corporate Legal Divisions",
  "The Dispute Resolution Experts",
  "The General Counsels",
  "The In-House Counsel",
  "The Intellectual Property Attorneys",
  "The Litigation Experts",
  "The M&A Lawyers",
  "The Regulatory Advisors",
  "The Solo Practitioners",
  "The Law Practice Groups",
  "The Law Practitioners",
  "The Legal Consultants",
  "The Legal Innovators",
  "The Legal Professionals",
  "The Modern Law Firms",
];

export default function HeroTitle() {
  const shuffledWords = shuffleArray(words);

  return (
    <div className="flex-col items-center justify-center w-full">
      <h1
        className={`text-4xl md:text-6xl font-medium text-[#171717] text-center leading-snug ${Open_Sans.className}`}
      >
        <span className="md:mr-4">Intelligent Legal</span>
        <br className="md:hidden" />
        Assistant for
        <WordRotate
          words={shuffledWords}
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
