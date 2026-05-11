import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Shahzad — Senior Software Engineer",
  description:
    "Senior .NET Full-Stack Engineer building scalable enterprise platforms. 6+ years across recreation, transit, retail and eSports. Based in Lahore, Pakistan.",
  metadataBase: new URL("https://talhashahzad.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
