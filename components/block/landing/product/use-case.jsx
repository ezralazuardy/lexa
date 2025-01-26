import Open_Sans from "@/lib/fonts/open-sans";
import { Bookmark, Database, Languages, Text } from "lucide-react";

export default function UseCase() {
  const usecases = [
    {
      icon: Languages,
      title: "Translate into Multiple Languages",
      description:
        "Seamlessly translate legal documents and contracts into 16+ languages, ensuring clarity and precision across diverse jurisdictions and cultural contexts.",
    },
    {
      icon: Bookmark,
      title: "Automatically Source a Citation",
      description:
        "Save time and effort by automatically sourcing accurate citations for case laws, regulations, or legal precedents directly from trusted databases.",
    },
    {
      icon: Database,
      title: "Transfers Data Anywhere",
      description:
        "Effortlessly move your data between systems or platforms (Google Drive, DropBox, and more) with secure integrations.",
    },
    {
      icon: Text,
      title: "Summarize Instantly",
      description:
        "Quickly generate clear and concise summaries from lengthy legal documents, making it easier to identify critical information and key points at a glance.",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-24 mb-32">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Use Cases
        </span>
        <div className="flex flex-col w-full mt-2">
          <h1
            className={`text-4xl font-medium text-[#171717] text-center leading-snug ${Open_Sans.className}`}
          >
            We turn Lawyer into Super-Lawyer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            {usecases.map((usecase, index) => (
              <div
                key={index}
                className={`text-left border-neutral-300 p-8 transition-colors duration-1000 hover:bg-neutral-100 ${index === 0 || index % 2 === 0 ? "md:border-r" : ""} ${index >= 2 ? "" : "md:border-b"}`}
              >
                <div className="flex flex-col items-start">
                  <usecase.icon className="mr-2 mb-4" strokeWidth={1.3} />
                  <h2 className="text-lg font-light leading-none">
                    {usecase.title}
                  </h2>
                </div>
                <p className="text-xs font-light text-gray-600 leading-snug mt-3 text-justify">
                  {usecase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
