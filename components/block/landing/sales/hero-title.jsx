import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 md:px-0">
      <h1
        className={`md:px-2 w-full text-4xl md:text-5xl font-regular text-[#171717] text-start md:max-w-screen-md leading-none ${Open_Sans.className}`}
      >
        Contact Sales
      </h1>
      <p className="md:px-2 w-full text-sm md:text-md font-light text-neutral-600 text-justify md:max-w-screen-md leading-snug mt-6 md:mt-8">
        Let’s discuss how LEXA can empower your legal needs. Feel free to ask us
        anything.
      </p>
    </div>
  );
}
