import { defaultLocale, type Locale } from "./config";

function basePathPrefix(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

/** Home URL for the default locale (`/zh/`, or `/{repo}/zh/` on GitHub Pages). */
export function defaultLocaleHome(): string {
  const base = basePathPrefix();
  return `${base}/${defaultLocale}/`;
}

/** Prefix an app path with `/{locale}` (e.g. `/about` → `/zh/about`). */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}/`;
  return `/${locale}${normalized}`;
}

/** Swap locale segment in a pathname from `next/navigation` (includes basePath when set). */
export function switchLocaleInPathname(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return `/${segments.join("/")}/`;
}
