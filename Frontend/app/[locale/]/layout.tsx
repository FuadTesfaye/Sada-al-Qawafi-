import type { Metadata, Viewport } from "next";
import { Amiri, Reem_Kufi, Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import ClientLayoutWrapper from "@/app/components/ClientLayoutWrapper";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${amiri.variable} ${reemKufi.variable} ${playfair.variable} ${inter.variable} bg-paper text-ink font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
