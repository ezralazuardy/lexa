import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex-col items-center justify-center w-full px-8 md:px-0">
      <h1
        className={`text-4xl md:text-6xl font-regular text-[#171717] text-start leading-none ${Open_Sans.className}`}
      >
        Contact Sales
      </h1>
      <p className="text-sm md:text-md font-light text-neutral-600 text-justify leading-snug mt-6 md:mt-8">
        Let’s discuss how LEXA can empower your legal needs. Feel free to ask us
        anything.
      </p>
    </div>
  );
}
