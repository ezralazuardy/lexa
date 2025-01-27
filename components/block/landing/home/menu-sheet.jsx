import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { TestTubeDiagonal } from "lucide-react";

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
              <h1 className="text-2xl font-regular text-[#171717] leading-none">
                Menu
              </h1>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-10 mt-14 pr-1 text-center">
              {links.map((link) => (
                <Link
                  key={link.href}
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
              <p className="text-xs font-light text-neutral-600 leading-snug">
                <Link
                  href="https://lazuardy.tech/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-black"
                >
                  © Lazuardy 2025. All rights reserved.
                </Link>
              </p>
              <p className="flex gap-2 justify-center text-xs font-light text-neutral-600 leading-snug">
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
              </p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
