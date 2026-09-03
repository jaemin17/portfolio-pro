import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import modelStyles from "../model-editor/modelEditor.module.css";
import selflyStyles from "../selfly/selfly0.module.css";
import { syncSpaceAssets } from "./syncSpaceAssets";
import styles from "./syncSpace.module.css";

type SyncSpacePageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

function CaseImage({
  src,
  alt,
  portrait = false,
  className,
}: {
  src: string;
  alt: string;
  portrait?: boolean;
  className?: string;
}) {
  const imageClass = [styles.flowImage, portrait ? styles.flowImagePortrait : undefined, className]
    .filter(Boolean)
    .join(" ");

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export asset
    <img src={assetPath(src)} alt={alt} className={imageClass} loading="lazy" decoding="async" />
  );
}

export default async function SyncSpacePage({ params }: SyncSpacePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  notFound();

  const platformRoles = [
    {
      tag: tStr(locale, "头盔", "Headset"),
      role: tStr(locale, "沉浸学习", "Immersive learning"),
      desc: tStr(
        locale,
        "在 3D 空间内选择资源、播放内容与完成实训。",
        "Select resources, play content, and complete training inside a 3D space.",
      ),
    },
    {
      tag: tStr(locale, "平板", "Tablet"),
      role: tStr(locale, "控场管理", "Classroom control"),
      desc: tStr(
        locale,
        "创建空间、管理用户与小组、维护课堂资源。",
        "Create spaces, manage users and groups, and maintain classroom resources.",
      ),
    },
    {
      tag: tStr(locale, "网页", "Web"),
      role: tStr(locale, "文件中枢", "Resource hub"),
      desc: tStr(
        locale,
        "上传、下载、传输与后台登录，承担内容入库。",
        "Upload, download, transfer, and admin login — the content intake layer.",
      ),
    },
    {
      tag: tStr(locale, "手机", "Mobile"),
      role: tStr(locale, "个人伴侣", "Personal companion"),
      desc: tStr(
        locale,
        "登录码配对、任务、学习记录与个人设置。",
        "Login-code pairing, tasks, learning records, and personal settings.",
      ),
    },
  ] as const;

  const flowSteps = [
    {
      title: tStr(locale, "平板创建空间", "Create a space on tablet"),
      body: tStr(
        locale,
        "选择场景、命名空间、邀请用户，点击「创建并开始」进入课堂。",
        "Pick a scene, name the space, invite users, then tap Create and Start.",
      ),
      src: syncSpaceAssets.flow.tabletCreate,
      alt: tStr(locale, "平板端创建交流空间", "Tablet create communication space"),
      portrait: false,
    },
    {
      title: tStr(locale, "头盔显示登录码", "Headset shows a login code"),
      body: tStr(
        locale,
        "头显不适合输入账号密码，因此改为 4 位登录码授权。",
        "Headsets are poor at typing credentials, so authorization uses a 4-digit code.",
      ),
      src: syncSpaceAssets.flow.helmetLogin,
      alt: tStr(locale, "头盔端登录码界面", "Headset login code screen"),
      portrait: false,
    },
    {
      title: tStr(locale, "手机输入登录码", "Mobile enters the code"),
      body: tStr(
        locale,
        "学生在手机上完成配对，快速进入协同空间。",
        "Students pair on mobile and enter the collaborative space quickly.",
      ),
      src: syncSpaceAssets.flow.mobileSpace,
      alt: tStr(locale, "手机端协同空间", "Mobile collaborative space"),
      portrait: true,
    },
    {
      title: tStr(locale, "资源进入课堂", "Resources enter the class"),
      body: tStr(
        locale,
        "网页上传资源，平板管理文件，头盔内播放与实训。",
        "Upload on web, manage on tablet, play and train in headset.",
      ),
      src: syncSpaceAssets.flow.helmetResources,
      alt: tStr(locale, "头盔端资源列表", "Headset resource list"),
      portrait: false,
    },
    {
      title: tStr(locale, "手机查看学习记录", "Review on mobile"),
      body: tStr(
        locale,
        "课后记录留在手机端，学习不终止于头显内。",
        "Post-class records live on mobile — learning does not stop in-headset.",
      ),
      src: syncSpaceAssets.flow.mobileLearning,
      alt: tStr(locale, "手机端学习记录", "Mobile learning records"),
      portrait: true,
    },
  ] as const;

  return (
    <div className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`} data-page="sync-space">
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                Sync Space：把 VR 课堂做成
                <span className={styles.conceptHeadlineEmphasis}> 可协同的多端系统</span>
              </>,
              <>
                Sync Space: A{" "}
                <span className={styles.conceptHeadlineEmphasis}>cross-platform system</span> for VR
                classroom collaboration
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "我作为主设计，负责四端核心交互与全部视觉，与工程、3D 和教研团队协作落地。",
              "As lead designer, I owned core cross-platform interaction and the full visual system, shipping with engineering, 3D, and curriculum teams.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <div
              className={styles.heroPlaceholder}
              aria-label={tStr(locale, "Hero 主视觉占位", "Hero visual placeholder")}
            >
              <p className={styles.heroPlaceholderLabel}>
                {t(locale, "Hero · 待补充", "Hero · Coming soon")}
              </p>
            </div>
            <div className={selflyStyles.meta}>
              <span className={selflyStyles.metaItem}>2024–2025</span>
              <span className={selflyStyles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={selflyStyles.metaItem}>
                {t(locale, "主设计 · 交互 & 视觉", "Lead Designer · Interaction & Visual")}
              </span>
            </div>
          </div>
        </header>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>{t(locale, "项目背景", "Project Background")}</p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "从单机头显体验，", "From a standalone headset experience")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "到可开课的多端课堂", "to a classroom you can actually run")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "VR 实训软件常见问题是：头显里能学，但课前准备、资源上传、设备登录、课后记录都散落在不同工具里。",
                      "The usual gap in VR training: learning works in-headset, but prep, uploads, device login, and post-class records live in separate tools.",
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      "Sync Space 的目标，是把「开课 → 配对 → 传资源 → 沉浸学习 → 课后回看」收成一条链路，让老师、学生和管理端都能各就其位。",
                      "Sync Space connects open class → pair devices → move resources in → learn in VR → review afterward — so teachers, students, and admins each have a clear role.",
                    )}
                  </p>
                  <p className={modelStyles.roleLabel}>{t(locale, "我的角色", "My Role")}</p>
                  <p>
                    {t(
                      locale,
                      "主设计 · 四端核心交互与全部视觉 · 与工程 / 3D / 教研协作落地",
                      "Lead designer · Core cross-platform interaction and full visual design · Shipped with engineering, 3D, and curriculum teams",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>
                {t(locale, "四端分工", "Platform Roles")}
              </p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "四端不是缩放，", "Four platforms, four roles")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "而是分工", "not four resized layouts")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "我没有把平板 UI 缩到头显，也没有让手机假装 VR。每端保留同一套品牌与空间语言，但交互层级随设备能力变化。",
                      "I did not shrink tablet UI onto headset, or make mobile pretend to be VR. One brand and spatial language, with interaction depth tuned to each device.",
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.platformGrid}>
                {platformRoles.map((item) => (
                  <article key={item.tag} className={styles.platformCard}>
                    <span className={styles.platformCardTag}>{item.tag}</span>
                    <h3 className={styles.platformCardRole}>{item.role}</h3>
                    <p className={styles.platformCardDesc}>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>
                {t(locale, "一堂课五步", "One Class, Five Steps")}
              </p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "一堂课，", "How one class")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "怎么在四端跑通", "runs across four platforms")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "案例页只保留一条主链路，其余状态收到页面末尾的系统覆盖区，避免把作品集做成说明书。",
                      "This page keeps one main path; other states are summarized at the end so the case reads as a system story, not a spec sheet.",
                    )}
                  </p>
                </div>
              </div>
              <ol className={styles.flowList}>
                {flowSteps.map((step, index) => (
                  <li key={step.title} className={styles.flowItem}>
                    <div className={styles.flowCopy}>
                      <span className={styles.flowStep} aria-hidden="true">
                        {index + 1}
                      </span>
                      <h3 className={styles.flowTitle}>{step.title}</h3>
                      <p className={styles.flowBody}>{step.body}</p>
                    </div>
                    <div className={styles.flowMedia}>
                      <CaseImage src={step.src} alt={step.alt} portrait={step.portrait} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>
                {t(locale, "XR 交互", "XR Interaction")}
              </p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "在真实约束下，", "Under real constraints,")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "定义可落地的交互规则", "define interaction that ships")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "交互规则与状态由我定义；工程实现链路，3D 负责空间与模型表现。",
                      "I defined interaction rules and states; engineering implemented the flows, and 3D handled spatial and model presentation.",
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.xrStack}>
                <article className={styles.xrBlock}>
                  <div className={styles.xrCopy}>
                    <h3 className={styles.xrTitle}>{t(locale, "登录码配对", "Login-code pairing")}</h3>
                    <ul className={styles.xrList}>
                      <li>
                        <strong>{t(locale, "约束", "Constraint")}:</strong>{" "}
                        {t(
                          locale,
                          "头显输入成本高，账号密码体验差。",
                          "Headset input is costly; account/password flows feel wrong.",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "方案", "Approach")}:</strong>{" "}
                        {t(
                          locale,
                          "头盔显示 4 位码，手机输入完成授权。",
                          "Headset shows a 4-digit code; mobile completes authorization.",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "价值", "Outcome")}:</strong>{" "}
                        {t(
                          locale,
                          "降低登录摩擦，打通个人设备与沉浸设备。",
                          "Lower login friction and connect personal devices to immersive hardware.",
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className={styles.xrMedia}>
                    <CaseImage
                      src={syncSpaceAssets.xr.helmetLogin}
                      alt={tStr(locale, "头盔端登录码", "Headset login code")}
                    />
                  </div>
                </article>

                <article className={styles.xrBlock}>
                  <div className={styles.xrCopy}>
                    <h3 className={styles.xrTitle}>
                      {t(locale, "空间内 3D 菜单", "Spatial 3D menu")}
                    </h3>
                    <ul className={styles.xrList}>
                      <li>
                        <strong>{t(locale, "约束", "Constraint")}:</strong>{" "}
                        {t(
                          locale,
                          "沉浸场景里传统 2D 面板打断感强。",
                          "Traditional 2D panels break immersion.",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "方案", "Approach")}:</strong>{" "}
                        {t(
                          locale,
                          "最近、模型、文档、视频等以空间物体呈现。",
                          "Recent, models, documents, and video appear as spatial objects.",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "价值", "Outcome")}:</strong>{" "}
                        {t(
                          locale,
                          "保持沉浸，同时让资源入口可发现、可记忆。",
                          "Stay immersive while keeping resource entry points discoverable and memorable.",
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className={styles.xrMedia}>
                    <CaseImage
                      src={syncSpaceAssets.xr.helmetHome}
                      alt={tStr(locale, "头盔端 3D 空间菜单", "Headset spatial 3D menu")}
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>
                {t(locale, "视觉系统", "Visual System")}
              </p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "统一空间语言，", "One spatial language,")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "按端收束表达", "tuned per platform")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "我负责全部视觉输出：场景、组件、图标、状态与空态，保证系统完整可运营。",
                      "I owned the full visual output — scenes, components, icons, and states — so the system feels complete and operable.",
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.visualPoints}>
                <p className={styles.visualPoint}>
                  {t(
                    locale,
                    "头盔 / 登录：共享 3D 空间背景，建立品牌与沉浸感。",
                    "Headset / login: shared 3D spatial backgrounds for brand and immersion.",
                  )}
                </p>
                <p className={styles.visualPoint}>
                  {t(
                    locale,
                    "平板 / 网页：收成管理工具界面，强调信息密度与操作效率。",
                    "Tablet / web: management-tool UI with information density and operational efficiency.",
                  )}
                </p>
                <p className={styles.visualPoint}>
                  {t(
                    locale,
                    "手机：轻量卡片与底部导航，服务配对、任务与个人中心。",
                    "Mobile: lightweight cards and bottom navigation for pairing, tasks, and profile.",
                  )}
                </p>
              </div>

              <div className={styles.visualCompare}>
                <figure className={styles.visualCompareItem}>
                  <CaseImage
                    src={syncSpaceAssets.visual.helmetHome}
                    alt={tStr(locale, "头盔端空间菜单", "Headset spatial menu")}
                    className={styles.visualCompareImage}
                  />
                  <figcaption className={styles.visualCompareLabel}>
                    {t(locale, "头盔 · 沉浸", "Headset · Immersive")}
                  </figcaption>
                </figure>
                <figure className={`${styles.visualCompareItem} ${styles.visualComparePortrait}`}>
                  <CaseImage
                    src={syncSpaceAssets.visual.mobileSpace}
                    alt={tStr(locale, "手机端协同空间", "Mobile collaborative space")}
                    className={styles.visualCompareImage}
                  />
                  <figcaption className={styles.visualCompareLabel}>
                    {t(locale, "手机 · 伴侣", "Mobile · Companion")}
                  </figcaption>
                </figure>
                <figure className={styles.visualCompareItem}>
                  <CaseImage
                    src={syncSpaceAssets.visual.webResources}
                    alt={tStr(locale, "网页端资源库", "Web resource library")}
                    className={styles.visualCompareImage}
                  />
                  <figcaption className={styles.visualCompareLabel}>
                    {t(locale, "网页 · 管理", "Web · Management")}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection}>
            <div className={modelStyles.positioningInner}>
              <p className={modelStyles.positioningLabel}>
                {t(locale, "系统覆盖与协作", "System Coverage & Collaboration")}
              </p>
              <div className={modelStyles.positioningGrid}>
                <h2 className={modelStyles.positioningHeading}>
                  <span className={modelStyles.positioningHeadingLight}>
                    {t(locale, "完整可运营，", "Complete and operable,")}
                  </span>
                  <br />
                  <span className={modelStyles.positioningHeadingDark}>
                    {t(locale, "但不是本页重点", "but not the main story here")}
                  </span>
                </h2>
                <div className={modelStyles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "用户 / 小组、资源传输、换脸换装、空态与错误反馈等模块，保证系统能真正落地使用。",
                      "Users/groups, transfers, avatar customization, empty states, and error feedback keep the system shippable in real use.",
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.coverageGrid}>
                {syncSpaceAssets.coverage.map((item) => (
                  <figure key={item.src} className={styles.coverageItem}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetPath(item.src)}
                      alt={tStr(locale, item.label.zh, item.label.en)}
                      className={styles.coverageImage}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className={styles.coverageLabel}>
                      {t(locale, item.label.zh, item.label.en)}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className={styles.coverageNote}>
                {t(
                  locale,
                  "Sync Space 体现的不是「画了很多端」，而是：在复杂约束下，把 VR 课堂收成可协同、可管理、可回看的系统。",
                  "Sync Space is not about drawing many screens — it is about turning a VR classroom into a collaborative, manageable, reviewable system under real constraints.",
                )}
              </p>

              <table className={styles.collabTable}>
                <tbody>
                  <tr>
                    <th scope="row">{t(locale, "我负责", "I owned")}</th>
                    <td>
                      {t(
                        locale,
                        "四端 IA、核心流程、主要交互、全部视觉与 UI、状态 / 空态 / 错误反馈",
                        "Cross-platform IA, core flows, primary interaction, full visual/UI, and state/empty/error patterns",
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t(locale, "协作方负责", "Collaborators owned")}</th>
                    <td>
                      {t(
                        locale,
                        "前端 / 客户端实现、3D 场景与模型、教研内容与业务规则",
                        "Frontend/client implementation, 3D scenes and models, curriculum content and business rules",
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={selflyStyles.selfly0ContactSection} aria-label={tStr(locale, "结语", "Closing")}>
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
