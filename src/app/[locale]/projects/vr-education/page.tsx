import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import {
  anatomyModuleHero,
  anatomyModuleShots,
  biomedicalVrHero,
  structureModuleShots,
} from "../biomedical-vr/animalVrAssets";
import styles from "../biomedical-vr/biomedicalVr.module.css";
import { VisualSceneBlock } from "../biomedical-vr/VisualSceneBlock";
import selflyStyles from "../selfly/selfly0.module.css";
import {
  equipmentModuleShots,
  smartManufacturingHero,
  transmissionModuleShots,
} from "../smart-manufacturing/smartManufacturingAssets";

type VrEducationPageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export default async function VrEducationPage({ params }: VrEducationPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div
      className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`}
      data-page="vr-education"
    >
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                VR 教育与{" "}
                <span className={styles.conceptHeadlineEmphasis}>实训界面</span>
              </>,
              <>
                VR Education &{" "}
                <span className={styles.conceptHeadlineEmphasis}>Training UI</span>
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "工业设备实训与生物医疗解剖等 VR 仿真软件的界面与视觉设计。",
              "UI and visual design for VR simulation software across industrial training and biomedical anatomy.",
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
                    {t(locale, "从沉浸式 3D 场景，", "From immersive 3D scenes")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(locale, "到可教学的 VR 界面系统", "to teachable VR interface systems")}
                  </span>
                </h2>
                <div className={styles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "这两类 VR 软件都面向职业教育实训：需要在沉浸式 3D 环境中承载课程导航、结构说明、交互反馈与步骤引导，并让信息在深色场景里保持清晰可读。",
                      "Both VR products serve vocational training — carrying course navigation, structure notes, interaction feedback, and step guidance inside immersive 3D environments, while keeping information readable on dark scenes.",
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      <>
                        我负责其中多个模块的
                        <strong className={styles.positioningEmphasis}>界面与视觉设计</strong>
                        ，覆盖智能制造设备实训与生物医疗解剖教学两套领域。
                      </>,
                      <>
                        I led{" "}
                        <strong className={styles.positioningEmphasis}>UI and visual design</strong>{" "}
                        across modules spanning smart-manufacturing equipment training and biomedical
                        anatomy teaching.
                      </>,
                    )}
                  </p>
                  <nav aria-label={tStr(locale, "章节导航", "Chapter navigation")}>
                    <ul className={styles.chapterNav}>
                      <li>
                        <a className={styles.chapterNavLink} href="#smart-manufacturing">
                          {t(locale, "智能制造 VR", "Smart Manufacturing VR")}
                        </a>
                      </li>
                      <li>
                        <a className={styles.chapterNavLink} href="#biomedical">
                          {t(locale, "生物医疗 VR", "Biomedical VR")}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="smart-manufacturing"
          className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection} ${styles.chapterAnchor}`}
          aria-label={tStr(locale, "智能制造 VR", "Smart Manufacturing VR")}
        >
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "章节 01", "Chapter 01")}
              </p>
              <h2 className={styles.chapterHeading}>
                {t(locale, "智能制造 VR", "Smart Manufacturing VR")}
              </h2>
              <p className={styles.chapterLead}>
                {t(
                  locale,
                  "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
                  "Training views and teaching UI for industrial equipment such as transmissions, robots, and injection molds.",
                )}
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(smartManufacturingHero)}
                alt={tStr(
                  locale,
                  "智能制造 VR 液力自动变速器首页视觉",
                  "Smart Manufacturing VR hydraulic transmission home screen",
                )}
                loading="lazy"
                decoding="async"
              />

              <div className={styles.sceneStack}>
                {transmissionModuleShots.map((shot) => (
                  <VisualSceneBlock key={shot.src} shot={shot} locale={locale} />
                ))}
              </div>
            </div>
          </div>

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
          id="biomedical"
          className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection} ${styles.chapterAnchor}`}
          aria-label={tStr(locale, "生物医疗 VR", "Biomedical VR")}
        >
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "章节 02", "Chapter 02")}
              </p>
              <h2 className={styles.chapterHeading}>
                {t(locale, "生物医疗 VR", "Biomedical VR")}
              </h2>
              <p className={styles.chapterLead}>
                {t(
                  locale,
                  "动物模型、解剖训练、手术步骤和课程资源相关的 VR 仿真软件界面。",
                  "UI design for VR simulation software covering animal models, anatomy training, surgical steps, and course resources.",
                )}
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(biomedicalVrHero)}
                alt={tStr(locale, "生物医疗 VR 首页视觉", "Biomedical VR home screen")}
                loading="lazy"
                decoding="async"
              />

              <p className={styles.positioningLabel} style={{ marginTop: 48 }}>
                {t(locale, "结构训练模块", "Structure Training Modules")}
              </p>
              <div className={styles.sceneStack}>
                {structureModuleShots.map((shot) => (
                  <VisualSceneBlock key={shot.src} shot={shot} locale={locale} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "动物解剖 VR", "Animal Anatomy VR")}
              </p>
              <div className={styles.narrativeGrid}>
                <h2 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从单一结构展示，", "From single-structure views")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "到完整解剖教学流程", "to full anatomy teaching flows")}
                  </span>
                </h2>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      "动物解剖模块需要同时呈现结构教学、交互状态、课程列表与新手指引。界面需在深色 3D 场景中保持信息层级清晰，并区分不同动物与不同学习阶段。",
                      "Animal anatomy modules must present structure teaching, interaction states, course lists, and onboarding together — keeping hierarchy clear on dark 3D scenes while distinguishing animals and learning stages.",
                    )}
                  </p>
                </div>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(anatomyModuleHero)}
                alt={tStr(locale, "动物解剖 VR 场景概览", "Animal anatomy VR scene overview")}
                loading="lazy"
                decoding="async"
              />

              <div className={styles.sceneStack}>
                {anatomyModuleShots.map((shot) => (
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
