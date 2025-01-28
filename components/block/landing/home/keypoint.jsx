import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Cog, Scale, Scaling, Shield } from "lucide-react";
import Link from "next/link";

export default function Keypoint() {
  const keypoints = [
    {
      icon: BookOpen,
      title: "Readable",
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

  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg">
        <h1 className="w-full md:max-w-4xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-medium leading-snug md:leading-normal text-transparent dark:from-white dark:to-slate-900/10 px-8 md:px-0">
          The Future of Legal Research
        </h1>
        <div className="grid grid-cols-3 mt-10 md:mt-8 gap-12 md:gap-0">
          {keypoints.map((keypoint, index) => (
            <div
              key={index}
              className={`opacity-70 md:opacity-90 border-neutral-300 md:px-8 md:py-8 transition-colors duration-1000 md:hover:bg-neutral-100 ${index % 3 !== 2 ? "md:border-r" : ""} ${index < 3 ? "md:border-b" : ""} ${index >= 6 ? "hidden md:block" : ""}`}
            >
              <div className="flex flex-col items-center md:items-start">
                <keypoint.icon
                  className="w-6 h-6 mr-0 md:mr-2"
                  strokeWidth={1.2}
                />
                <h2 className="mt-4 text-sm md:text-lg font-light leading-none">
                  {keypoint.title}
                </h2>
              </div>
              <p className="hidden md:block text-xs font-light text-gray-600 leading-snug mt-3 text-center md:text-justify">
                {keypoint.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 md:mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/product">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
