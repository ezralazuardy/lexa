import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Articles from "@/components/block/landing/news/articles";
import Hero from "@/components/block/landing/news/hero";

export default function News() {
  return (
    <>
      <div className="relative h-full w-full">
        <Header />
        <Hero />
        <Articles />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
