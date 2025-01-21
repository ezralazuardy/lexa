import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import cta from "@/public/images/cta.png";
import { TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div className="relative flex-col items-center justify-center w-full lg:max-w-screen-lg h-[38vh] bg-black rounded-lg">
        <Image
          alt="CTA"
          src={cta}
          placeholder="blur"
          layout="fill"
          className="fixed z-10 select-none object-cover w-full h-auto rounded-lg opacity-80"
          style={{ userSelect: "none", objectPosition: "center" }}
          draggable="false"
        />
        <div className="absolute z-20 inset-0 flex items-center justify-center">
          <div className="flex-1 items-center justify-center">
            <h1
              className={`text-3xl font-regular text-white text-center leading-none opacity-90 ${Open_Sans.className}`}
            >
              Ready to Boost Your Legal Workflow?
            </h1>
            <div className="flex items-center justify-center mt-8">
              <Link href="/beta">
                <Button id="hero-register-button" variant="secondary" size="lg">
                  REGISTER TO PRIVATE BETA
                  <TestTubeDiagonal className="w-5 h-5" strokeWidth={2} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
