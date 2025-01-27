import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Hero from "@/components/block/landing/security/hero";
import Measure from "@/components/block/landing/security/measure";
import Privacy from "@/components/block/landing/security/privacy";
import Standard from "@/components/block/landing/security/standard";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <Hero />
      <Measure />
      <Standard />
      <Privacy />
      <CTA className="mt-24" />
      <Footer />
    </div>
  );
}
