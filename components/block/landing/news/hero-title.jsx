import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex-col items-center justify-center w-full">
      <h1
        className={`text-5xl font-medium text-[#171717] text-left leading-none -ml-1 ${Open_Sans.className}`}
      >
        News
      </h1>
    </div>
  );
}
