import Inter from "@/lib/fonts/inter";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import "./globals.css";

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

const Crisp = dynamic(() => import("@/components/crisp"));

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
        />
      )}
      <body className={`${Inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position="bottom-left" />
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics mode="production" />
            <SpeedInsights />
          </>
        )}
        <Crisp />
      </body>
    </html>
  );
}
