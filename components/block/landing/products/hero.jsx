import HeroTitle from "@/components/block/landing/products/hero-title";
import HeroVideo from "@/components/block/landing/products/hero-video";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center justify-center mt-[20vh]">
      <HeroVideo>
        <div className="z-20 flex-col items-center justify-center w-full lg:max-w-screen-lg pb-4">
          <div className="flex items-center justify-center">
            <Badge className="text-white font-light" variant="outline">
              Products
            </Badge>
          </div>
          <div className="flex items-center justify-center mt-8">
            <HeroTitle />
          </div>
          <div className="flex space-x-6 items-center justify-center mt-10">
            <Link href="/sales">
              <Button id="hero-register-button" size="lg" variant="secondary">
                Contact Sales
              </Button>
            </Link>
            <Link href="/beta" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <TestTubeDiagonal />
                Register to Private Beta
              </Button>
            </Link>
          </div>
        </div>
      </HeroVideo>
    </div>
  );
}
