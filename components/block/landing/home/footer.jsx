"use client";

import Logo from "@/components/ui/logo";
import { socials } from "@/lib/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (!header || !footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (pathname === "/news" || pathname === "/sales") return;

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
      className="flex-1 justify-between items-center w-full lg:max-w-screen-lg py-16 mx-auto bg-white"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>
        <div className="flex gap-7 text-sm font-regular leading-none text-neutral-600 pl-8">
          <Link
            href="/products"
            className={`transition-colors duration-500 hover:text-black ${pathname === "/products" ? "text-black font-semibold" : ""}`}
          >
            Products
          </Link>
          <Link
            href="/security"
            className={`transition-colors duration-500 hover:text-black ${pathname === "/security" ? "text-black font-semibold" : ""}`}
          >
            Security
          </Link>
          <Link
            href="/news"
            className={`transition-colors duration-500 hover:text-black ${pathname === "/news" ? "text-black font-semibold" : ""}`}
          >
            News
          </Link>
          <Link
            href="/sales"
            className={`transition-colors duration-500 hover:text-black ${pathname === "/sales" ? "text-black font-semibold" : ""}`}
          >
            Contact Sales
          </Link>
          <Link
            href="/legal"
            className={`transition-colors duration-500 hover:text-black ${pathname === "/legal" ? "text-black font-semibold" : ""}`}
          >
            Legal
          </Link>
        </div>
        <div className="flex gap-7 text-neutral-600">
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
      <div className="flex justify-between items-center mt-6">
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
        <div className="flex gap-7 text-sm font-light text-neutral-600"></div>
        <div className="flex gap-7 text-sm font-light text-neutral-600">
          SIM Square, Semarang, ID 50134
        </div>
      </div>
    </footer>
  );
}
