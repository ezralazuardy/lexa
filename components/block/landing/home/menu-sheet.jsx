import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

export default function MenuSheet({ pathname, links }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="sm">
          <Menu size={26} strokeWidth={1.2} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-col pt-3 pr-1 text-center">
              <Link href="/">
                <Logo className="text-2xl" />
              </Link>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-14 pr-1 text-center">
          <Link
            href="/"
            className={`text-lg font-regular text-neutral-600 transition-colors duration-500 hover:text-black leading-none ${pathname === "/" ? "text-black font-semibold" : ""}`}
          >
            Home
          </Link>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-lg font-regular text-neutral-600 transition-colors duration-500 hover:text-black leading-none ${pathname === link.href ? "text-black font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="lg" asChild>
            <Link href="/beta" target="_blank" rel="noopener noreferrer">
              <TestTubeDiagonal />
              Register to Private Beta
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 mt-16 pr-1 text-center">
          <div className="text-xs font-light text-neutral-600 leading-snug">
            <Link
              href="https://lazuardy.tech/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-500 hover:text-black"
            >
              © Lazuardy 2025. All rights reserved.
            </Link>
          </div>
          <div className="flex gap-2 justify-center text-xs font-light text-neutral-600 leading-snug">
            <Link
              href="/legal/privacy-policy"
              className="transition-colors duration-500 hover:text-black"
            >
              Privacy Policy
            </Link>
            <span className="opacity-80">&bull;</span>
            <Link
              href="/legal/terms-and-conditions"
              className="transition-colors duration-500 hover:text-black"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
