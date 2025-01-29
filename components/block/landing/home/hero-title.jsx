import WordRotate from "@/components/ui/word-rotate";
import Open_Sans from "@/lib/fonts/open-sans";

const words = [
  "A Brilliant Lawyer",
  "The In-House Counsel",
  "A Startup Founder",
  "An Investigative Expert",
  "An Ambitious Founder",
  "The Modern Law Firms",
  "The Business Owners",
  "Corporate Legal Divisions",
  "Dispute Resolution Pros",
  "The General Counsels",
  "The In-House Counsel",
  "Litigation Experts",
  "The M&A Lawyers",
  "Regulatory Advisors",
  "Solo Practitioners",
  "Law Practice Groups",
  "Law Practitioners",
  "Legal Consultants",
  "The Legal Innovators",
  "Legal Professionals",
];

const longWords = [
  "A Brilliant Lawyer",
  "The In-House Counsel",
  "A Startup Founder",
  "An Investigative Expert",
  "An Ambitious Founder",
  "The Modern Law Firms",
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
];

export default function HeroTitle() {
  return (
    <div className="flex-col items-center justify-center w-full">
      <h1
        className={`home-hero-title md:text-6xl font-medium text-[#171717] text-center leading-snug ${Open_Sans.className}`}
      >
        <span className="md:mr-4">Intelligent Legal</span>
        <br className="md:hidden" />
        Assistant for
        <WordRotate
          words={words}
          duration="4000"
          className="block md:hidden -mt-2 pt-0.5 px-4 min-h-[13vh]"
        />
        <WordRotate
          words={longWords}
          duration="4000"
          className="hidden md:block"
        />
      </h1>
      <p className="w-full text-sm md:text-lg font-light text-neutral-600 text-center leading-snug px-6 md:mt-8">
        Streamline your Legal Workflows with Advanced AI-Powered Solutions.
      </p>
    </div>
  );
}
