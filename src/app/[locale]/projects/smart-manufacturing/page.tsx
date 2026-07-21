import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { VisualSceneBlock } from "../biomedical-vr/VisualSceneBlock";
import styles from "../biomedical-vr/biomedicalVr.module.css";
import selflyStyles from "../selfly/selfly0.module.css";
import {
  equipmentModuleShots,
  smartManufacturingHero,
  transmissionModuleShots,
} from "./smartManufacturingAssets";

type SmartManufacturingPageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export default async function SmartManufacturingPage({
  params,
}: SmartManufacturingPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div
      className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`}
      data-page="smart-manufacturing"
    >
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                智能制造{" "}
                <span className={styles.conceptHeadlineEmphasis}>VR 实训界面</span>
              </>,
              <>
                Smart Manufacturing{" "}
                <span className={styles.conceptHeadlineEmphasis}>VR Training UI</span>
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
              "Training views and teaching UI for industrial equipment such as transmissions, robots, and injection molds.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <div className={styles.projectHeroCoverFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                src={assetPath(smartManufacturingHero)}
                alt={tStr(
                  locale,
                  "智能制造 VR 液力自动变速器首页视觉",
                  "Smart Manufacturing VR hydraulic transmission home screen",
                )}
                width={1920}
                height={1080}
                className={`${styles.mediaBorder} ${styles.projectHeroCoverImage}`}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className={selflyStyles.meta}>
              <span className={selflyStyles.metaItem}>2025</span>
              <span className={selflyStyles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={selflyStyles.metaItem}>
                {t(locale, "UI / 视觉设计", "UI / Visual Design")}
              </span>
            </div>
          </div>
        </header>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.positioningSection}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>{t(locale, "项目背景", "Project Background")}</p>
              <div className={styles.positioningGrid}>
                <h2 className={styles.positioningHeading}>
                  <span className={styles.positioningHeadingLight}>
                    {t(locale, "从工业设备 3D 场景，", "From industrial 3D scenes")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(locale, "到可教学的 VR 实训界面", "to teachable VR training UI")}
                  </span>
                </h2>
                <div className={styles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "智能制造 VR 实训软件面向工业设备操作与结构教学，需要在沉浸式 3D 环境中承载设备首页、信息面板、教学说明和操作步骤。",
                      "Smart Manufacturing VR training software supports industrial equipment operation and structure teaching — carrying equipment home screens, info panels, teaching notes, and operation steps inside immersive 3D environments.",
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      <>
                        我负责其中多个设备模块的
                        <strong className={styles.positioningEmphasis}>界面与视觉设计</strong>
                        ，覆盖液力自动变速器、工业机器人与注塑两板式模具等实训流程。
                      </>,
                      <>
                        I led{" "}
                        <strong className={styles.positioningEmphasis}>UI and visual design</strong>{" "}
                        across equipment modules — hydraulic automatic transmission, industrial
                        robots, and two-plate injection molds.
                      </>,
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "变速器实训模块", "Transmission Training Module")}
              </p>
              <div className={styles.sceneStack}>
                {transmissionModuleShots.map((shot) => (
                  <VisualSceneBlock key={shot.src} shot={shot} locale={locale} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "机器人与模具", "Robots & Molds")}
              </p>
              <div className={styles.narrativeGrid}>
                <h2 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从设备首页展示，", "From equipment home screens")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "到教学与操作子页面", "to teaching and operation subpages")}
                  </span>
                </h2>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      "工业机器人与注塑模具模块需要同时呈现首页导览、机构说明和装配操作。界面需在深色 3D 场景中保持信息层级清晰，并区分教学阅读与实操引导。",
                      "Robot and mold modules must present home tours, mechanism notes, and assembly operations together — keeping hierarchy clear on dark 3D scenes while separating teaching reading from hands-on guidance.",
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.sceneStack}>
                {equipmentModuleShots.map((shot) => (
                  <VisualSceneBlock
                    key={`${shot.src}-${shot.subtitle.zh}`}
                    shot={shot}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={selflyStyles.selfly0ContactSection}
          aria-label={tStr(locale, "结语", "Closing")}
        >
          <div className={`${selflyStyles.selfly0ContactInner} ${styles.contactAlign}`}>
            <p className={selflyStyles.selfly0ContactClosing}>
              {t(locale, "感谢你看到这里 :) ✰", "Thanks for reading this far :) ✰")}
            </p>
            <Link className={selflyStyles.selfly0ContactBack} href={localePath(locale, "/")}>
              {t(locale, "← 返回首页", "← Back to home")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
