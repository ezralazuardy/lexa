import Open_Sans from "@/lib/fonts/open-sans";
import { BookOpen, Scale, Scaling } from "lucide-react";

export default function FAQ() {
  return (
    <div className="z-10 flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <h1
          className={`text-3xl font-regular text-[#171717] text-center leading-none ${Open_Sans.className}`}
        >
          The Future of Legal Research
        </h1>
        <div className="flex justify-between mt-14">
          <div className="flex-1 text-left py-4">
            <div className="flex-1 items-center">
              <BookOpen className="mr-2 mb-4" strokeWidth={1.3} />
              <h2 className="text-lg font-light leading-none">
                Human-Readable
              </h2>
            </div>
            <p className="text-sm font-light text-gray-600 leading-snug mt-3 text-justify">
              Transform complex legal documents into clear, actionable insights
              you can trust.
            </p>
          </div>
          <div className="w-px bg-neutral-300 mx-8"></div>
          <div className="flex-1 text-left py-4">
            <div className="flex-1 items-center">
              <Scaling className="mr-2 mb-4" strokeWidth={1.3} />
              <h2 className="text-lg font-light leading-none">Scalable</h2>
            </div>
            <p className="text-sm font-light text-gray-600 leading-snug mt-3 text-justify">
              Powerful platform that grows with your practice, from solo work to
              enterprise teams.
            </p>
          </div>
          <div className="w-px bg-neutral-300 mx-8"></div>
          <div className="flex-1 text-left py-4">
            <div className="flex-1 items-center">
              <Scale className="mr-2 mb-4" strokeWidth={1.3} />
              <h2 className="text-lg font-light leading-none">Customizable</h2>
            </div>
            <p className="text-sm font-light text-gray-600 leading-snug mt-3 text-justify">
              Tailor the experience to your needs with custom templates and
              workflow automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
