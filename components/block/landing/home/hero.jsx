import HeroTitle from "@/components/block/landing/home/hero-title";
import HeroVideo from "@/components/block/landing/home/hero-video";
import { Button } from "@/components/ui/button";
import { TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="z-20 flex items-center justify-center mt-[17vh] md:mt-[20vh] px-8 md:px-0">
        <div className="flex-col items-center justify-center w-full md:max-w-screen-lg">
          <HeroTitle />
          <div className="flex items-center justify-center mt-8 md:mt-10">
            <Link href="/beta" target="_blank" rel="noopener noreferrer">
              <Button id="hero-register-button" size="lg">
                <TestTubeDiagonal />
                Register to Private Beta
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 flex items-center justify-center mt-12 md:mt-16">
        <HeroVideo />
      </div>
    </>
  );
}
