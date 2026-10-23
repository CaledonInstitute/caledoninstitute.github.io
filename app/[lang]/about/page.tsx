import { notFound } from "next/navigation";
import { AboutPage } from "@/components/pages";
import { isLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, "about");
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <AboutPage locale={lang} />;
}
