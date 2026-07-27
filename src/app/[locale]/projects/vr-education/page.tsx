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

const cattleBackgroundProcessImages = [
  {
    src: "/images/visual/vr-education/process/barn-exploration.png",
    step: "01",
    label: { zh: "主题定位", en: "Subject cue" },
    caption: { zh: "牛解剖对应牧场与牛舍", en: "Cattle anatomy mapped to barn-like spaces" },
  },
  {
    src: "/images/visual/vr-education/process/barn-clean-space.png",
    step: "02",
    label: { zh: "空间筛选", en: "Spatial selection" },
    caption: { zh: "保留纵深，减少写实杂物", en: "Keeping depth while reducing literal clutter" },
  },
  {
    src: "/images/visual/vr-education/process/cattle-background-final.png",
    step: "03",
    label: { zh: "调色清理", en: "Color refinement" },
    caption: { zh: "统一蓝色调，降低背景存在感", en: "Unifying the blue tone and lowering background presence" },
  },
  {
    src: "/images/visual/vr-education/process/cattle-interface-final.png",
    step: "04",
    label: { zh: "界面应用", en: "Interface application" },
    caption: { zh: "背景退后，模型和入口信息前置", en: "Background recedes while model and entry points lead" },
  },
] as const;

const backgroundTransferImages = [
  {
    src: "/images/visual/vr-education/process/tunnel-background.png",
    label: { zh: "汽车传动背景", en: "Automotive transmission background" },
    caption: { zh: "用隧道建立机械与交通联想", en: "A tunnel cue suggests mechanics and mobility" },
  },
  {
    src: "/images/visual/vr-education/process/cochlea-background.png",
    label: { zh: "耳部结构背景", en: "Ear anatomy background" },
    caption: { zh: "将耳蜗结构转译为空间轮廓", en: "Cochlea forms translated into spatial contours" },
  },
] as const;

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
                    {t(locale, "让 3D 模型，", "Making 3D models")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(
                      locale,
                      "在清晰的教学界面中被理解",
                      "understandable through clear teaching interfaces",
                    )}
                  </span>
                </h2>
                <div className={styles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "我参与了一系列面向职业教育的 VR 仿真软件设计，覆盖智能制造、生物医疗等多个教学场景。",
                      "I worked on a series of VR simulation products for vocational education, spanning smart manufacturing, biomedical learning, and other teaching scenarios.",
                    )}
                  </p>
                  <div className={styles.designPoints}>
                    <h4>
                      {t(
                        locale,
                        "从教学对象提取空间隐喻",
                        "Extracting spatial metaphors from learning subjects",
                      )}
                    </h4>
                    <p>
                      {t(
                        locale,
                        "我没有把背景当作装饰图处理，而是根据不同实训内容提取对应的空间隐喻：牛解剖对应牧场与牛舍，汽车传动结构对应隧道空间，耳部结构则转译为类似耳蜗的弧形场景。",
                        "Instead of treating backgrounds as decoration, I translated each training subject into a restrained spatial metaphor: a barn-like space for cattle anatomy, a tunnel-like scene for automotive transmission, and cochlea-inspired curves for ear anatomy.",
                      )}
                    </p>
                    <p>
                      {t(
                        locale,
                        "经过 AI 关键词探索和 Figma 后期调色，我保留主题联想与空间纵深，同时压低细节、对比和材质干扰，让 3D 模型和教学信息始终成为界面的视觉重点。",
                        "Through AI prompt exploration and Figma color refinement, I kept the thematic association and depth while reducing detail, contrast, and texture noise, so the 3D model and learning content remained visually dominant.",
                      )}
                    </p>
                    <ul className={styles.processTagList}>
                      <li className={styles.processTag}>
                        {t(locale, "从对象提取空间隐喻", "Spatial metaphors from subjects")}
                      </li>
                      <li className={styles.processTag}>
                        {t(locale, "主题相关但不直白堆叠", "Relevant without literal clutter")}
                      </li>
                      <li className={styles.processTag}>
                        {t(locale, "低干扰地承托模型", "Low-noise support for models")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <section className={styles.promptStrategyBlock}>
                <div>
                  <p className={styles.promptStrategyKicker}>
                    {t(locale, "主题词选择", "Prompt Strategy")}
                  </p>
                  <h3 className={styles.promptStrategyHeading}>
                    {t(
                      locale,
                      "用关键词约束背景方向",
                      "Using prompts to guide background direction",
                    )}
                  </h3>
                  <p className={styles.promptStrategyLead}>
                    {t(
                      locale,
                      "在 AI 探索阶段，我将关键词拆成五类：主题线索决定背景与课程对象的关系；空间构图为 3D 模型预留展示位置；空间抽象减少写实杂物；界面适配控制信息层级；色彩与光影统一整体氛围。",
                      "During AI exploration, I grouped prompts into five categories: subject cues define the relationship to the course topic; composition reserves space for the 3D model; spatial abstraction reduces literal clutter; interface fit controls information hierarchy; color and lighting unify the overall mood.",
                    )}
                  </p>
                </div>
                <div className={styles.promptKeywordGrid}>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "主题线索", "Subject Cue")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "作用：让背景与课程对象建立关联。",
                        "Role: connect the background to the course subject.",
                      )}
                    </p>
                    <p className={styles.promptKeywordExamples}>
                      farm / pig house / laboratory / animal habitat / futuristic space
                    </p>
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "空间构图", "Composition")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "作用：为 3D 模型预留展示位置。",
                        "Role: reserve display space for the 3D model.",
                      )}
                    </p>
                    <p className={styles.promptKeywordExamples}>
                      empty space / large negative space / stage-like environment / frontal perspective
                    </p>
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "空间抽象", "Spatial Abstraction")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "作用：减少写实杂物，保留空间轮廓。",
                        "Role: reduce literal clutter while keeping spatial contours.",
                      )}
                    </p>
                    <p className={styles.promptKeywordExamples}>
                      flattened perspective / simplified spatial structure / graphic 3D composition
                    </p>
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "界面适配", "Interface Fit")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "作用：让背景退后，保持信息层级清晰。",
                        "Role: push the background back and keep hierarchy clear.",
                      )}
                    </p>
                    <p className={styles.promptKeywordExamples}>
                      sparse backgrounds / clean background / subdued minimalism / restrained aesthetic
                    </p>
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "色彩与光影", "Color & Lighting")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "作用：统一视觉氛围，降低对比刺激。",
                        "Role: unify the mood and reduce contrast intensity.",
                      )}
                    </p>
                    <p className={styles.promptKeywordExamples}>
                      soft cyan tones / muted colors / subtle color variations / diffused lighting
                    </p>
                  </div>
                </div>
              </section>
              <figure className={styles.processImagePlaceholder}>
                <h3 className={styles.backgroundProcessHeading}>
                  {t(
                    locale,
                    "牛解剖背景探索流程",
                    "Cattle Anatomy Background Exploration",
                  )}
                </h3>
                <div className={styles.backgroundProcessGrid}>
                  {cattleBackgroundProcessImages.map((image) => (
                    <div className={styles.backgroundProcessCard} key={image.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                      <img
                        src={assetPath(image.src)}
                        alt={tStr(locale, image.caption.zh, image.caption.en)}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={styles.backgroundProcessOverlay}>
                        <div className={styles.backgroundProcessStep}>
                          <span className={styles.backgroundProcessNumber}>
                            {image.step}
                          </span>
                          <span className={styles.backgroundProcessTitle}>
                            {t(locale, image.label.zh, image.label.en)}
                          </span>
                        </div>
                        <p>{t(locale, image.caption.zh, image.caption.en)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.backgroundTransferBlock}>
                  <p className={styles.backgroundTransferIntro}>
                    {t(
                      locale,
                      "同一方法也延展到其他课程模块：",
                      "The same method was extended to other course modules:",
                    )}
                  </p>
                  <div className={styles.backgroundTransferGrid}>
                    {backgroundTransferImages.map((image) => (
                      <div className={styles.backgroundProcessCard} key={image.src}>
                        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                        <img
                          src={assetPath(image.src)}
                          alt={tStr(locale, image.caption.zh, image.caption.en)}
                          width={1920}
                          height={1080}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className={styles.backgroundProcessOverlay}>
                          <span>{t(locale, image.label.zh, image.label.en)}</span>
                          <p>{t(locale, image.caption.zh, image.caption.en)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption className={styles.processImagePlaceholderCaption}>
                  {t(
                    locale,
                    "主线展示牛解剖背景从主题定位到界面应用的闭环；补充图说明同一背景方法可迁移到汽车传动与耳部结构模块。",
                    "The main sequence shows the cattle anatomy background from subject cue to interface application; supporting examples show how the same method transfers to automotive transmission and ear anatomy modules.",
                  )}
                </figcaption>
              </figure>
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
