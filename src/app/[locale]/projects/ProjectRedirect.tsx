"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";

type ProjectRedirectProps = {
  locale: Locale;
  to: string;
  labelZh: string;
  labelEn: string;
};

export function ProjectRedirect({
  locale,
  to,
  labelZh,
  labelEn,
}: ProjectRedirectProps) {
  const router = useRouter();
  const href = localePath(locale, to);
  const label = locale === "en" ? labelEn : labelZh;

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <main style={{ padding: "48px 24px", textAlign: "center" }}>
      <p style={{ marginBottom: 16 }}>
        {locale === "en" ? "Redirecting…" : "正在跳转…"}
      </p>
      <Link href={href}>{label}</Link>
    </main>
  );
}
