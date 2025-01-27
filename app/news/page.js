import CTA from "@/components/block/landing/home/cta";
import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import Articles from "@/components/block/landing/news/articles";
import Hero from "@/components/block/landing/news/hero";
import { getNews } from "@/lib/services/news-service";

export default async function News() {
  const news = await getNews();

  return (
    <div className="relative h-full w-full">
      <Header />
      <div className="flex flex-col w-full h-full min-h-screen">
        <Hero />
        <Articles news={news} />
      </div>
      <CTA className="mt-24" />
      <Footer />
    </div>
  );
}
