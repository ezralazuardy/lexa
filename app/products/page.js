import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Feature from "@/components/block/landing/products/feature";
import Hero from "@/components/block/landing/products/hero";

export default function Products() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <Hero />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
}
