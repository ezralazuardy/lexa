import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Hero from "@/components/block/landing/news/hero";
import Items from "@/components/block/landing/news/items";

export default function Legal() {
  return (
    <>
      <div className="relative h-full w-full">
        <Header />
        <Hero />
        <Items />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
