"use client";

import MenuSheet from "@/components/block/landing/home/menu-sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const registerButton = useRef(null);
  const pathname = usePathname();

  const links = [
    { href: "/product", label: "Product" },
    { href: "/security", label: "Security" },
    { href: "/news", label: "News" },
    { href: "/sales", label: "Contact Sales" },
  ];

  useEffect(() => {
    const r = registerButton?.current;
    const heroRegisterButton = document.getElementById("hero-register-button");

    if (!r) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRegister(false);
          r.classList.remove("opacity-100");
        } else {
          setShowRegister(true);
          r.classList.add("opacity-100");
        }
      },
      { threshold: 0.1 },
    );

    if (heroRegisterButton) {
      observer.observe(heroRegisterButton);
    }

    return () => {
      if (heroRegisterButton) {
        observer.unobserve(heroRegisterButton);
      }
    };
  });

  return (
    <div id="header" className="fixed top-0 left-0 right-0 flex-col z-50">
      <div className="flex bg-white justify-between items-center w-full px-8 lg:px-0">
        <div className="flex justify-between items-center w-full lg:max-w-screen-lg py-4 mx-auto">
          <div className="mt-4 lg:mt-8">
            <Link href="/">
              <Logo className="text-3xl lg:text-2xl" />
            </Link>
          </div>
          <div className="mt-2 lg:hidden">
            <MenuSheet pathname={pathname} links={links} />
          </div>
          <div className="relative hidden lg:flex text-sm font-regular text-neutral-600">
            <div
              className={`z-10 transition-all ease-out ${showRegister ? "transform -translate-x-28" : "transform translate-x-0"}`}
            >
              <div className="flex flex-col lg:flex-row gap-7">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-500 hover:text-black mt-8 lg:mt-0 ${pathname === link.href ? "text-black font-semibold" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              ref={registerButton}
              href="/beta"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute lg:relative z-0 top-0 right-0 mt-7 lg:mt-0 transition-all ease-out opacity-0 lg:opacity-100"
            >
              <Button size="sm">REGISTER</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-gradient-to-b from-white to-transparent w-full pt-4 h-[8vh]"></div>
    </div>
  );
}
