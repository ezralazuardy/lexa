import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex w-full max-w-3xl justify-center">
        <h1
          className={`text-6xl font-light text-white text-center leading-none ${Open_Sans.className}`}
        >
          Enterprise Grade Security
        </h1>
      </div>
      <div className="flex w-full max-w-xl justify-center">
        <p className="text-md font-extralight text-neutral-200 text-center leading-snug mt-8">
          Built with robust encryption and advanced safeguards to protect your
          data and ensure compliance at every level.
        </p>
      </div>
    </div>
  );
}
