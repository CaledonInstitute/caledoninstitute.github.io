import { notFound } from "next/navigation";
import { RootDocument } from "@/components/root-document";
import { isLocale, locales } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <RootDocument locale={lang}>{children}</RootDocument>;
}
