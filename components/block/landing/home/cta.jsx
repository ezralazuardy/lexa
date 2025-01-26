import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import cta from "@/public/images/covers/cta.png";
import { TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function CTA() {
  return (
    <div className="flex items-center justify-center mt-36">
      <div className="relative flex-col items-center justify-center w-full lg:max-w-screen-lg h-[62vh] bg-black rounded-lg">
        <Image
          alt="CTA"
          src={cta}
          placeholder="blur"
          layout="fill"
          className="fixed z-10 select-none object-cover w-full h-auto rounded-lg opacity-60"
          draggable="false"
        />
        <div className="absolute z-20 inset-0 flex items-center justify-center">
          <div className="flex-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <Badge className="text-white font-light" variant="outline">
                Get Started
              </Badge>
            </div>
            <h1
              className={`text-4xl font-light text-white text-center leading-none mt-8 ${Open_Sans.className}`}
            >
              Ready to Boost Your Legal Workflow?
            </h1>
            <p className="text-md font-extralight text-neutral-200 text-center leading-snug mt-6">
              Let LEXA be your trusted partner, and start revolutionize your
              legal work with AI.
            </p>
            <div className="flex items-center justify-center mt-10">
              <Link href="/beta" target="_blank" rel="noopener noreferrer">
                <Button id="hero-register-button" variant="secondary" size="lg">
                  <TestTubeDiagonal />
                  Register to Private Beta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
