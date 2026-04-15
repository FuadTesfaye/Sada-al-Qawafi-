import type { Metadata } from "next";
import { Amiri, Reem_Kufi } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "صدى القوافي | Sada al-Qawafi",
  description: "Where Ink Meets Eternity - An Arabic Poetry Experience",
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
        {children}
      </body>
    </html>
  );
}
