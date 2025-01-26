export default function Jurisdiction() {
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

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Regional Focus
        </span>
        <h1 className="mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Fine Tuned for <br />
          Southeast Asian Jurisdiction
        </h1>
        <p className="text-md font-light text-neutral-600 text-center leading-snug mt-10 lg:max-w-screen-lg px-12">
          While being a global platform, LEXA is fine-tuned by our engineers for
          Southeast Asian jurisdictions, providing accurate and relevant tools
          for legal professionals across the region and supporting 16+
          languages.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 lg:max-w-screen-lg">
          {southeastAsianCountries.map((country, index) => (
            <div key={index} className="flex flex-col items-start">
              <span
                className={`text-md font-regular text-neutral-600 leading-snug ${country.supported ? "opacity-100" : "opacity-50"}`}
              >
                {country.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm font-light text-neutral-600 opacity-80 text-center leading-snug mt-12 lg:max-w-screen-lg px-12">
          more countries support is coming soon.
        </p>
      </div>
    </div>
  );
}
