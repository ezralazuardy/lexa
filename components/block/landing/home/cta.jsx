import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import cta from "@/public/images/covers/cta.png";
import { TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative flex-col items-center justify-center w-full md:max-w-screen-lg h-[58vh] md:h-[62vh] bg-black rounded-none md:rounded-lg">
        <Image
          alt="CTA"
          src={cta}
          placeholder="blur"
          className="absolute z-10 select-none object-cover w-full h-full rounded-none md:rounded-lg opacity-60"
          draggable="false"
        />
        <div className="absolute z-20 inset-0 flex items-center justify-center px-8">
          <div className="flex-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <Badge className="text-white font-light" variant="outline">
                Get Started
              </Badge>
            </div>
            <h1
              className={`text-3xl md:text-4xl font-light text-white text-center leading-snug mt-8 ${Open_Sans.className}`}
            >
              Ready to Boost Your Legal Workflow?
            </h1>
            <p className="hidden md:block text-sm md:text-md font-extralight text-neutral-200 text-center leading-snug mt-6">
              Let LEXA be your trusted partner, and start revolutionize your
              legal work with AI.
            </p>
            <div className="flex items-center justify-center mt-10">
              <Button
                id="hero-register-button"
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/beta" target="_blank" rel="noopener noreferrer">
                  <TestTubeDiagonal />
                  Register to Private Beta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
