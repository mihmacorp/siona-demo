import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight, Cabin } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});
const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siona",
  description: "Turn Your Odoo Consulting Business Into a SaaS Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="light"
        className={` ${geistMono.variable} ${cabin.variable} ${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
