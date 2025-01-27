import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 md:px-0">
      <div className="flex w-full max-w-3xl justify-center">
        <h1
          className={`text-5xl md:text-6xl font-light text-white text-center leading-snug ${Open_Sans.className}`}
        >
          Intelligence Meets Law
        </h1>
      </div>
      <div className="flex w-full max-w-xl justify-center mt-6 md:mt-8">
        <p className="text-md font-extralight text-neutral-200 text-center leading-snug">
          Discover how LEXA simplify your legal work, streamline research, and
          enhance collaboration for professionals and teams.
        </p>
      </div>
    </div>
  );
}
