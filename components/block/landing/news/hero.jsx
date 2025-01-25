import HeroTitle from "@/components/block/landing/news/hero-title";

export default function Hero() {
  return (
    <div className="z-10 flex items-center justify-center mt-[20vh]">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <HeroTitle />
      </div>
    </div>
  );
}
