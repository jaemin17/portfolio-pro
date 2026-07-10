import type { Locale } from "./config";

type HomeCopy = {
  siteTitle: string;
  placeholder: string;
  subtitle: string;
};

const copy: Record<Locale, HomeCopy> = {
  zh: {
    siteTitle: "Jiamin Li",
    placeholder: "作品集 Pro",
    subtitle: "内容建设中，稍后更新。",
  },
  en: {
    siteTitle: "Jiamin Li",
    placeholder: "Portfolio Pro",
    subtitle: "Coming soon.",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}
