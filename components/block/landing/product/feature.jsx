import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import { getFeatures } from "@/lib/services/feature-service";
import Image from "next/image";
import Link from "next/link";

const features = getFeatures();

export default function Feature() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-8 px-8 md:px-0">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          index={index}
          feature={feature}
          inverted={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

export function FeatureItem({ index, feature, inverted = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full md:max-w-screen-lg mt-12 ${index > 0 ? "md:mt-24" : ""}`}
    >
      <div className={`flex flex-col md:flex-row w-full md:gap-16`}>
        <div className="flex flex-col w-full">
          <div className="flex">
            <feature.icon
              className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 mt-1 md:mt-0"
              strokeWidth={1.4}
            />
            <h1
              className={`text-xl font-regular text-[#171717] text-left leading-snug max-w-sm ${Open_Sans.className}`}
            >
              {feature.title}
            </h1>
          </div>
          <p
            className="mt-4 text-xs md:text-sm font-light text-neutral-600 text-justify"
            dangerouslySetInnerHTML={{ __html: feature.long_description }}
          ></p>
          <div className="mt-6 md:mt-7 mb-6 md:mb-0 flex justify-start">
            <ReadUseCaseButton feature={feature} />
          </div>
        </div>
        <div
          className={`flex flex-col w-full ${inverted ? "md:order-first" : ""}`}
        >
          <div className="relative flex-col items-center justify-center w-full rounded-lg aspect-video">
            <Image
              alt={feature.title}
              src={feature.image}
              className="select-none object-cover w-full h-full rounded-lg"
              placeholder="blur"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReadUseCaseButton() {
  return (
    <div className="flex items-center">
      <Button variant="outline" size="sm" disabled>
        <Link href="#">Read Use Cases</Link>
      </Button>
      <span className="ml-4 text-xs font-light text-neutral-600">
        documentation is coming soon.
      </span>
    </div>
  );
}
