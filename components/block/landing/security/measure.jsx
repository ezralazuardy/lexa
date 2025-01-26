import { KeyRound, Lock, LogIn, VenetianMask } from "lucide-react";
import Link from "next/link";

export default function Measure() {
  const measures = [
    {
      icon: Lock,
      title: "AES-256 Encryption Protocol",
      description:
        "LEXA protects your data with AES-256 encryption, the industry standard for robust and secure data encryption.",
    },
    {
      icon: KeyRound,
      title: "Secure Access Control",
      description:
        "Access is safeguarded with comprehensive user authentication and authorization protocols, role-based controls, and the principle of least privilege.",
    },
    {
      icon: VenetianMask,
      title: "Context-Aware Privacy",
      description:
        "AI that respect privacy, processing data securely and aligning with strict confidentiality standards.",
    },
    {
      icon: LogIn,
      title: "Multi-Factor Authentication",
      description:
        "Extra layers of protection ensure only authorized users can access LEXA, enhancing system security.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-32">
      <div className="flex flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm text-center">
          Security Measures
        </span>
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10">
            It Tooks 13.8 Billion Years
            <br />
            for Hacker to Crack LEXA&apos;s Data*
          </h1>
          <p className="text-md font-light text-neutral-600 text-center leading-snug mt-8 lg:max-w-screen-md px-12">
            LEXA uses AES-256 Encryption Protocol, which used by the U.S.
            government, military, and most of the modern bank you know nowadays
            to protect sensitive information. It&apos;s the industry standard
            for robust and secure data encryption.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            {measures.map((measure, index) => (
              <div
                key={index}
                className={`text-left border-neutral-300 p-8 transition-colors duration-1000 hover:bg-neutral-100 ${index === 0 || index % 2 === 0 ? "md:border-r" : ""} ${index >= 2 ? "" : "md:border-b"}`}
              >
                <div className="flex flex-col items-start">
                  <measure.icon className="mr-2 mb-4" strokeWidth={1.3} />
                  <h2 className="text-lg font-light leading-none">
                    {measure.title}
                  </h2>
                </div>
                <p className="text-xs font-light text-gray-600 leading-snug mt-3 text-justify">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>
          <p className="flex justify-center mt-8 text-sm font-light text-neutral-600 lg:max-w-screen-md">
            For more information, please read our
            <Link
              href="/legal/security-policy"
              className="font-medium text-black hover:underline ml-1"
            >
              Security Policy
            </Link>
            .
          </p>
          <p className="text-xs font-light text-neutral-500 text-center leading-snug mt-4 lg:max-w-screen-md px-12">
            * Assuming the hacker can try 1 trillion encryption key per second,
            they&apos;ll need
            <br />
            10<sup>43</sup> years to crack LEXA&apos;s data. Far exceeding the
            age of the universe.
          </p>
        </div>
      </div>
    </div>
  );
}
