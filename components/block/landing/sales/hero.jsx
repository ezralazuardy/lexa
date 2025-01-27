import HeroTitle from "@/components/block/landing/sales/hero-title";

export default function Hero() {
  return (
    <div className="flex items-center justify-center mt-[20vh] px-8 lg:px-0">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <HeroTitle />
      </div>
    </div>
  );
}
