const southeastAsianCountries = [
  { name: "🇸🇬 Singapore", supported: false },
  { name: "🇲🇾 Malaysia", supported: false },
  { name: "🇧🇳 Brunei", supported: false },
  { name: "🇰🇭 Cambodia", supported: false },
  { name: "🇮🇩 Indonesia", supported: true },
  { name: "🇱🇦 Laos", supported: false },
  { name: "🇵🇭 Philippines", supported: false },
  { name: "🇹🇭 Thailand", supported: false },
  { name: "🇻🇳 Vietnam", supported: false },
  { name: "🇲🇲 Myanmar", supported: false },
  { name: "🇹🇱 East Timor", supported: false },
].sort((a, b) => b.supported - a.supported);

export default function Jurisdiction() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32 px-8 md:px-0">
      <div className="flex flex-col items-center justify-center w-full md:max-w-screen-lg">
        <span className="w-full md:max-w-xl text-neutral-600 font-regular text-sm text-center">
          Regional Focus
        </span>
        <h1 className="w-full md:max-w-xl mt-4 md:mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-medium leading-snug md:leading-tight text-transparent px-8 md:px-0">
          Fine Tuned for Southeast Asian Jurisdiction
        </h1>
        <p className="w-full md:max-w-4xl text-md font-light text-neutral-600 text-justify md:text-center leading-snug mt-6 md:mt-8 md:px-0">
          While being a global platform, LEXA is fine-tuned by our engineers for
          Southeast Asian jurisdictions, providing accurate and relevant tools
          for legal professionals across the region and supporting 16+
          languages.
        </p>
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8 md:mt-12 md:max-w-screen-lg">
          {southeastAsianCountries.map((country, index) => (
            <div
              key={index}
              className={`flex flex-col items-start ${index > 5 ? "hidden md:block" : ""}`}
            >
              <span
                className={`text-sm md:text-md font-regular text-neutral-600 leading-snug ${country.supported ? "opacity-100" : "opacity-50"}`}
              >
                {country.name}
              </span>
            </div>
          ))}
          <div className="absolute w-full h-full bg-gradient-to-t from-white to-transparent opacity-70"></div>
        </div>
        <p className="text-md font-light text-neutral-600 opacity-80 text-center leading-snug mt-8 md:mt-12 md:max-w-screen-lg px-12">
          More countries support is coming soon.
        </p>
      </div>
    </div>
  );
}
