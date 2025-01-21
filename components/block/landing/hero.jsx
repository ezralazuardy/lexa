import HeroTitle from "@/components/block/landing/hero-title";
import HeroVideo from "@/components/block/landing/hero-video";
import { Button } from "@/components/ui/button";
import { TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="z-10 flex items-center justify-center mt-[21vh]">
        <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
          <HeroTitle />
          <div className="flex items-center justify-center mt-10">
            <Link href="/beta">
              <Button id="hero-register-button" size="lg">
                REGISTER TO PRIVATE BETA
                <TestTubeDiagonal className="w-5 h-5" strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 flex items-center justify-center mt-20">
        <HeroVideo />
      </div>
    </>
  );
}
