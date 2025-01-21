"use client";

import Logo from "@/components/ui/logo";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
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
      className="flex-1 justify-between items-center w-full lg:max-w-screen-lg py-16 mx-auto bg-white"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>
        <div className="flex gap-7 text-sm font-regular leading-none text-neutral-600 pl-8">
          <Link
            href="/products"
            className="transition-colors duration-500 hover:text-black"
          >
            Products
          </Link>
          <Link
            href="/news"
            className="transition-colors duration-500 hover:text-black"
          >
            News
          </Link>
          <Link
            href="/security"
            className="transition-colors duration-500 hover:text-black"
          >
            Security
          </Link>
          <Link
            href="/sales"
            className="transition-colors duration-500 hover:text-black"
          >
            Contact Sales
          </Link>
          <Link
            href="/legal"
            className="transition-colors duration-500 hover:text-black"
          >
            Legal
          </Link>
        </div>
        <div className="flex gap-7 text-neutral-600">
          <Link
            href="https://github.com/lazuardytech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-500 hover:text-black"
          >
            <Github className="w-5 h-5" strokeWidth={1.3} />
          </Link>
          <Link
            href="https://instagram.com/lazuardy.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-500 hover:text-black"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.3} />
          </Link>
          <Link
            href="https://linkedin.com/company/lazuardy/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-500 hover:text-black"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.3} />
          </Link>
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
