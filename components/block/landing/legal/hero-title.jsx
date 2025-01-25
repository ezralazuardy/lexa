import Open_Sans from "@/lib/fonts/open-sans";

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1
        className={`text-5xl font-regular text-[#171717] text-center leading-none ${Open_Sans.className}`}
      >
        Legal
      </h1>
      <p className="text-sm font-light text-neutral-600 text-center leading-snug mt-8 md:max-w-xl">
        At LEXA, we aim to empower legal professionals with cutting-edge AI
        solutions. This page provides access to essential resources and
        documents that outline our services, updated regularly to ensure clarity
        and to better support our users.
      </p>
    </div>
  );
}
