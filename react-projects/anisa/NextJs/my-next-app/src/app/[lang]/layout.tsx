import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { StoreProvider } from "@/store/StoreProvider";
import { cn } from "@/lib/utils";
import {
  dirFor,
  getDictionary,
  hasLocale,
  locales,
} from "./dictionaries";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    ),
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      images: [{ url: "/images/soheil.jfif" }],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const dir = dirFor(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        geist.variable,
        geistMono.variable,
        vazirmatn.variable,
        lang === "fa" ? "font-fa" : "font-en"
      )}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <StoreProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              {dict.a11y.skipToContent}
            </a>
            <Header dict={dict} lang={lang} />
            <main id="main" className="flex-grow">
              {children}
            </main>
            <Footer dict={dict} />
            <Toaster position={dir === "rtl" ? "bottom-left" : "bottom-right"} />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
