import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Feature from "@/components/block/landing/product/feature";
import Hero from "@/components/block/landing/product/hero";
import Jurisdiction from "@/components/block/landing/product/jurisdiction";
import Tagline from "@/components/block/landing/product/tagline";
import UseCase from "@/components/block/landing/product/use-case";

export default function Product() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <Hero />
      <Tagline />
      <Feature />
      <UseCase />
      <Jurisdiction />
      <CTA className="mt-20 md:mt-32" />
      <Footer />
    </div>
  );
}
