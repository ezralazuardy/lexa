"use client";

import Logo from "@/components/ui/logo";
import StatusPageWidget from "@/components/ui/status-page-widget";
import { socials } from "@/lib/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/news", label: "News" },
  { href: "/sales", label: "Contact Sales" },
  { href: "/legal", label: "Legal" },
];

export default function Footer() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (!header || !footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.style.transition = "transform 0.5s ease-in-out";
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transition = "transform 0.5s ease-in-out";
          header.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 },
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer
      id="footer"
      className="flex-1 justify-between items-center w-full md:max-w-screen-lg py-12 md:py-16 mx-auto bg-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>
        <div className="grid grid-cols-3 md:flex md:flex-row gap-5 md:gap-7 text-xs md:text-sm font-regular leading-none text-neutral-600 pl-0 md:pl-8 mt-10 md:mt-0">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-center transition-colors duration-500 hover:text-black ${pathname === link.href ? "text-black font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-7 text-neutral-600 mt-10 md:mt-0">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-500 hover:text-black"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-10 md:mt-6 md:mb-0">
        <div className="flex gap-7 text-sm font-light text-neutral-600">
          <Link
            href="https://lazuardy.tech/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-500 hover:text-black"
          >
            © Lazuardy 2025. All rights reserved.
          </Link>
        </div>
        <div className="hidden md:flex gap-7 text-sm font-light text-neutral-600 mt-1 md:mt-0">
          <StatusPageWidget />
        </div>
        <div className="flex gap-7 text-sm font-light text-neutral-600 mt-2 md:mt-0">
          SIM Square, Semarang, ID 50134
        </div>
        <div className="flex md:hidden gap-7 text-sm font-light text-neutral-600 mt-1 md:mt-0">
          <StatusPageWidget />
        </div>
      </div>
    </footer>
  );
}
