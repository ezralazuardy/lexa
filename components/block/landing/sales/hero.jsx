import HeroTitle from "@/components/block/landing/sales/hero-title";

export default function Hero() {
  return (
    <div className="flex items-center justify-center mt-[15vh] md:mt-[20vh]">
      <div className="flex-col items-center justify-center w-full md:max-w-screen-lg">
        <HeroTitle />
      </div>
    </div>
  );
}
