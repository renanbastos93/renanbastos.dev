import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { dictionaries } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--ff-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--ff-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--ff-mono", display: "swap" });

const { meta } = dictionaries.en;

export const metadata: Metadata = {
  metadataBase: new URL("https://renanbastos.dev"),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: meta.title,
    description: meta.description,
    siteName: "renanbastos.dev",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1015" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
