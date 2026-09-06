import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { ProjectRedirect } from "../ProjectRedirect";

type PersonalToolsRedirectPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PersonalToolsRedirectPage({
  params,
}: PersonalToolsRedirectPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <ProjectRedirect
      locale={locale}
      to="/"
      labelZh="返回首页"
      labelEn="Back to home"
    />
  );
}
