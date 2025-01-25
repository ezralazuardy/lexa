import CTA from "@/components/block/landing/home/cta";
import Customer from "@/components/block/landing/home/customer";
import FAQ from "@/components/block/landing/home/faq";
import Feature from "@/components/block/landing/home/feature";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Hero from "@/components/block/landing/home/hero";
import Keypoint from "@/components/block/landing/home/keypoint";
import Security from "@/components/block/landing/home/security";

export default function Home() {
  return (
    <div className="relative h-full w-full">
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
  );
}
