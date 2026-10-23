import type { Metadata } from "next";
import { dictionaries, pageUrl, type Locale, type Page } from "./content";

export const siteOrigin = "https://caledoninstitute.github.io";
export const githubUrl = "https://github.com/CaledonInstitute";

export function pageMetadata(locale: Locale, page: Page): Metadata {
  const { title, description } = dictionaries[locale].meta[page];
  const url = pageUrl(locale, page);
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: pageUrl("en", page),
        id: pageUrl("id", page),
        "x-default": pageUrl("en", page),
      },
    },
    icons: { icon: "/icon.svg" },
    openGraph: {
      type: "website",
      siteName: "Caledon Institute",
      title,
      description,
      url,
      locale: locale === "en" ? "en_US" : "id_ID",
      alternateLocale: locale === "en" ? "id_ID" : "en_US",
      images: [
        {
          url: "/images/caledon-canopy.jpg",
          width: 460,
          height: 460,
          alt: dictionaries[locale].photoAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/images/caledon-canopy.jpg"],
    },
  };
}
