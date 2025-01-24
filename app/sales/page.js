"use client";

import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Form from "@/components/block/landing/sales/form";
import Hero from "@/components/block/landing/sales/hero";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="relative h-full w-full">
        <DotPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(760px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="z-10 relative h-full w-full">
          <Header />
          <Hero />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  );
}
