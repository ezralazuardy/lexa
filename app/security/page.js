import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Hero from "@/components/block/landing/security/hero";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <Hero />
      <CTA />
      <Footer />
    </div>
  );
}
