import localFont from "next/font/local";
import type { Locale } from "@/lib/content";
import "@/app/globals.css";

const manrope = localFont({
  src: "../app/fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
