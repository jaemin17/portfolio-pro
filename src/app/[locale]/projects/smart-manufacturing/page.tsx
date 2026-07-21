import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { ProjectRedirect } from "../ProjectRedirect";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function SmartManufacturingRedirectPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <ProjectRedirect
      locale={locale}
      to="/projects/vr-education/#smart-manufacturing"
      labelZh="前往 VR 教育与实训界面 →"
      labelEn="Go to VR Education & Training UI →"
    />
  );
}
