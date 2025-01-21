import CTA from "@/components/block/landing/cta";
import Customer from "@/components/block/landing/customer";
import FAQ from "@/components/block/landing/faq";
import Feature from "@/components/block/landing/feature";
import Footer from "@/components/block/landing/footer";
import Header from "@/components/block/landing/header";
import Hero from "@/components/block/landing/hero";
import Keypoint from "@/components/block/landing/keypoint";
import Security from "@/components/block/landing/security";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Header />
        <Hero />
        <Customer />
        <Keypoint />
        <Feature />
        <Security />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
