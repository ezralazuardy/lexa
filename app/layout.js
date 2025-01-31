import ComponentProvider from "@/components/provider/component-provider";
import CookieProvider from "@/components/provider/cookie-provider";
import GoogleProvider from "@/components/provider/google-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import Inter from "@/lib/fonts/inter";
import dynamic from "next/dynamic";
import "./globals.css";

const CrispProvider = dynamic(
  () => import("@/components/provider/crisp-provider"),
);

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: "LEXA",
  description:
    "Empowering Legal Professional throug Cutting-edge AI Solutions.",
  generator: "Next.js",
  applicationName: "LEXA",
  referrer: "strict-origin-when-cross-origin",
  creator: "Lazuardy",
  publisher: "Lazuardy",
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  category:
    "legal tech, artificial intelligence, law, technology, innovation, legal solutions, saas, legal platform, business, generative ai",
  keywords: [
    "lexa",
    "law",
    "legal",
    "research",
    "legal tech",
    "ai legal assistant",
    "law and regulation",
    "legal research",
    "case analysis",
    "contract review",
    "artificial intelligence",
    "voice-enabled assistant",
    "indonesian law",
    "legal solutions",
    "legal platform",
    "law portal",
    "legal innovation",
    "generative ai",
    "saas",
  ],
  authors: [{ name: "Lazuardy", url: process.env.NEXT_PUBLIC_APP_URL }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [{ color: "#171717" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Inter.className}`}>
        {children}
        <ComponentProvider />
        <CookieProvider />
        <CrispProvider />
        <VercelProvider />
      </body>
      <GoogleProvider />
    </html>
  );
}
