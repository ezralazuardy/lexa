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
        "Access is safeguarded with comprehensive user authentication, role-based controls, and the principle of least privilege.",
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
    <div className="flex flex-col items-center justify-center mt-16 md:mt-24">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="w-full md:max-w-3xl text-neutral-600 font-regular text-sm text-center">
          Security Measures
        </span>
        <h1 className="w-full md:max-w-3xl mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-medium leading-snug md:leading-tight text-transparent dark:from-white dark:to-slate-900/10 px-8 md:px-0">
          It Tooks 13.8 Billion Years for Hacker to Crack LEXA&apos;s Data*
        </h1>
        <p className="w-full md:max-w-4xl text-justify md:text-center text-md font-light text-neutral-600 leading-snug mt-6 md:mt-8 px-8 md:px-0">
          LEXA uses AES-256 Encryption Protocol, which used by the U.S.
          government, military, and most of the modern bank you know nowadays to
          protect sensitive information. It&apos;s the industry standard for
          robust and secure data encryption.
        </p>
        <div className="w-full md:max-w-4xl grid grid-cols-2 md:grid-cols-2 mt-4 md:mt-8 px-4 md:px-0">
          {measures.map((measure, index) => (
            <div
              key={index}
              className={`w-full text-left border-neutral-300 p-4 md:p-8 transition-colors duration-1000 md:hover:bg-neutral-100 ${index === 0 || index % 2 === 0 ? "md:border-r" : ""} ${index >= 2 ? "" : "md:border-b"}`}
            >
              <div className="flex flex-col items-center md:items-start">
                <measure.icon className="mr-2 mb-4" strokeWidth={1.3} />
                <h2 className="text-sm md:text-md font-light text-center md:text-start leading-snug px-2 md:px-0">
                  {measure.title}
                </h2>
              </div>
              <p className="hidden md:block text-xs font-light text-gray-600 leading-snug mt-2 text-justify">
                {measure.description}
              </p>
            </div>
          ))}
        </div>
        <p className="w-full md:max-w-xl text-justify md:text-center text-xs font-light text-neutral-600 leading-snug mt-6 md:mt-8 px-8 md:px-0">
          For more information, please read our
          <Link
            href="/legal/security-policy"
            className="font-medium text-black hover:underline ml-1"
          >
            Security Policy
          </Link>
          .
        </p>
        <p className="w-full md:max-w-xl text-justify md:text-center text-xs font-light text-neutral-500 leading-snug mt-2 md:mt-4 px-8 md:px-0">
          * Assuming the hacker can try 1 trillion encryption key per second,
          they&apos;ll need 10<sup>43</sup> years to crack LEXA&apos;s data. Far
          exceeding the age of the universe.
        </p>
      </div>
    </div>
  );
}
