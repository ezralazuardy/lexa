import HeroTitle from "@/components/block/landing/legal/hero-title";

export default function Hero() {
  return (
    <div className="flex items-center justify-center mt-[17vh] md:mt-[20vh]">
      <div className="flex-col items-center justify-center w-full md:max-w-screen-lg">
        <HeroTitle />
      </div>
    </div>
  );
}
