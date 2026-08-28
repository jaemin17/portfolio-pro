import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { ProjectRedirect } from "../ProjectRedirect";

type OfficeToolsRedirectPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OfficeToolsRedirectPage({
  params,
}: OfficeToolsRedirectPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <ProjectRedirect
      locale={locale}
      to="/projects/personal-tools"
      labelZh="前往 Personal Tools"
      labelEn="Go to Personal Tools"
    />
  );
}
