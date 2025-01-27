import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex-col items-center justify-center w-full">
      <h1
        className={`text-4xl md:text-5xl font-regular text-[#171717] text-center leading-none ${Open_Sans.className}`}
      >
        Contact Sales
      </h1>
      <p className="text-sm md:text-md font-light text-neutral-600 text-center leading-snug mt-8">
        Let’s discuss how LEXA can empower your legal needs.
      </p>
    </div>
  );
}
