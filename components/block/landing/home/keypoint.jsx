import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import { BookOpen, Brain, Cog, Scale, Scaling, Shield } from "lucide-react";
import Link from "next/link";

const keypoints = [
  {
    icon: BookOpen,
    title: "Human-Readable",
    description:
      "Transform complex legal documents into clear, actionable insights you can trust.",
  },
  {
    icon: Scaling,
    title: "Scalable",
    description:
      "Powerful platform that grows with your practice, from solo work to enterprise teams.",
  },
  {
    icon: Cog,
    title: "Customizable",
    description:
      "Tailor the experience to your needs with custom templates and workflow automation.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description:
      "Enterprise-grade security ensures your data and workflows are always protected.",
  },
  {
    icon: Brain,
    title: "Actionable",
    description:
      "AI-driven insights deliver real-time recommendations to support decisions.",
  },
  {
    icon: Scale,
    title: "Adaptable",
    description:
      "Integrates easily with your current legal tools and workflows for a seamless experience.",
  },
];

export default function Keypoint() {
  return (
    <div className="z-10 flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <h1
          className={`text-3xl font-regular text-[#171717] text-center leading-none ${Open_Sans.className}`}
        >
          The Future of Legal Research
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {keypoints.map((keypoint, index) => (
            <div
              key={index}
              className={`text-left border-neutral-200 p-8 transition-colors duration-1000 hover:bg-neutral-100 ${index % 3 !== 2 ? "md:border-r" : ""} ${index >= 3 ? "" : "md:border-b"}`}
            >
              <div className="flex flex-col items-start">
                <keypoint.icon className="mr-2 mb-4" strokeWidth={1.3} />
                <h2 className="text-lg font-light leading-none">
                  {keypoint.title}
                </h2>
              </div>
              <p className="text-xs font-light text-gray-600 leading-snug mt-3 text-justify">
                {keypoint.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg">
            <Link href="/products">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
