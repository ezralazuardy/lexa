"use client";

import CTA from "@/components/block/landing/home/cta";
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
        <Header />
        <Hero />
        <Form />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
