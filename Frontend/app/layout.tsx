import type { Metadata, Viewport } from "next";
import { Amiri, Reem_Kufi } from "next/font/google";
import "./globals.css";
import PWARegister from "./components/PWARegister";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-reem",
});

export const viewport: Viewport = {
  themeColor: "#F5E6C4",
};

export const metadata: Metadata = {
  title: "صدى القوافي | Sada al-Qawafi",
  description: "Where Ink Meets Eternity - An Arabic Poetry Experience",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sada al-Qawafi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${amiri.variable} ${reemKufi.variable} bg-paper text-ink font-sans`}
      >
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
