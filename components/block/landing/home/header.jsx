"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const registerButton = useRef(null);
  const pathname = usePathname();

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
      <div className="flex bg-white justify-between items-center w-full">
        <div className="flex justify-between items-center w-full lg:max-w-screen-lg py-4 mx-auto">
          <div className="mt-8">
            <Link href="/">
              <Logo className="text-2xl" />
            </Link>
          </div>
          <div className="relative flex text-sm font-regular text-neutral-600">
            <div
              className={`z-10 transition-all ease-out ${showRegister ? "transform -translate-x-28" : "transform translate-x-0"}`}
            >
              <div className="flex gap-7">
                <Link
                  href="/products"
                  className={`transition-colors duration-500 hover:text-black mt-8 ${pathname === "/products" ? "text-black font-semibold" : ""}`}
                >
                  Products
                </Link>
                <Link
                  href="/security"
                  className={`transition-colors duration-500 hover:text-black mt-8 ${pathname === "/security" ? "text-black font-semibold" : ""}`}
                >
                  Security
                </Link>
                <Link
                  href="/news"
                  className={`transition-colors duration-500 hover:text-black mt-8 ${pathname === "/news" ? "text-black font-semibold" : ""}`}
                >
                  News
                </Link>
                <Link
                  href="/sales"
                  className={`transition-colors duration-500 hover:text-black mt-8 ${pathname === "/sales" ? "text-black font-semibold" : ""}`}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <Link
              ref={registerButton}
              href="/beta"
              className="absolute z-0 top-0 right-0 mt-7 transition-all ease-out opacity-0"
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
