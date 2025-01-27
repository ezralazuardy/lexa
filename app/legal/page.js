import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Articles from "@/components/block/landing/legal/articles";
import Hero from "@/components/block/landing/legal/hero";
import {
  getLegalLatestUpdateDate,
  getLegals,
} from "@/lib/services/legal-service";

export default async function Legal() {
  const legals = await getLegals();
  const latestUpdateDate = await getLegalLatestUpdateDate();

  return (
    <div className="relative h-full w-full">
      <Header />
      <div className="flex flex-col w-full h-full min-h-screen">
        <Hero />
        <Articles legals={legals} latestUpdateDate={latestUpdateDate} />
      </div>
      <CTA className="mt-24" />
      <Footer />
    </div>
  );
}
