import Image from "next/image";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import shared from "../selfly/selfly0.module.css";
import layout from "../model-editor/modelEditor.module.css";
import styles from "./xrCourseware.module.css";
import { content } from "./content";
import { CreationDemo } from "./CreationDemo";

function Media({ name, alt, width = 2000, height = 1125, caption, dark = false }: {
  name: string; alt: string; width?: number; height?: number; caption: string; dark?: boolean;
}) {
  return <figure className={styles.figure}>
    <div className={`${styles.mediaFrame} ${dark ? styles.darkFrame : ""}`}>
      <Image src={assetPath(`/images/xr-courseware/${name}.webp`)} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw, 880px" />
    </div>
    <figcaption>{caption}</figcaption>
  </figure>;
}

function Narrative({ label, title, body, children }: {
  label: string; title: readonly [string, string]; body: string; children?: ReactNode;
}) {
  return <div className={layout.narrativeSection}>
    <div className={layout.narrativeInner}>
      <p className={styles.kicker}>{label}</p>
      <div className={layout.narrativeGrid}>
        <h2 className={layout.narrativeHeadline}>
          <span className={layout.narrativeHeadlineLight}>{title[0]}</span><br />
          <span className={layout.narrativeHeadlineDark}>{title[1]}</span>
        </h2>
        <div className={layout.narrativeBody}><p>{body}</p></div>
      </div>
      {children}
    </div>
  </div>;
}

function Comparison({ type, locale, caption }: { type: "resources" | "focus"; locale: string; caption: string }) {
  const labels = locale === "zh" ? ["调整前", "调整后"] : ["Before", "After"];
  const descriptions = type === "resources"
    ? (locale === "zh" ? ["资源弹窗遮挡课件", "资源与课件并排，可拖动调整"] : ["The resource dialog covers the lesson", "Resources sit beside the lesson and can be resized"])
    : (locale === "zh" ? ["反复选择、隐藏其他部件", "双击聚焦，复位回到整体"] : ["Repeatedly select and hide other parts", "Double-click to focus, reset to return"]);
  return <figure className={styles.figure}>
    <div className={styles.comparison}>{["before", "after"].map((state, i) => <div key={state}>
      <p className={styles.comparisonLabel}><span>{labels[i]}</span>{descriptions[i]}</p>
      <div className={styles.comparisonImage}>
        <Image src={assetPath(`/images/xr-courseware/${type}-${state}.webp`)} alt={`${labels[i]}: ${descriptions[i]}`} width={type === "resources" ? 1102 : i === 0 ? 930 : 1248} height={type === "resources" ? 612 : i === 0 ? 690 : 742} sizes="(max-width: 768px) 100vw, 420px" />
      </div>
    </div>)}</div>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default async function XRCoursewarePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = content[locale];
  const ids = ["context", "challenge", "direction", "solution", "use", "reflection"];
  const sectionClass = `${shared.caseSection} ${shared.selfly0CaseSection}`;
  const keyDesign = (n: string) => locale === "zh" ? `关键设计 ${n}` : `Key design ${n}`;
  return <div className={`${shared.pagePlain} ${shared.selfly0Page} ${styles.page}`} data-page="xr-courseware">
    <main className={shared.main}>
      <header className={`${shared.featuredHero} ${shared.projectOneHero} ${styles.hero}`}>
        <h1 className={`${shared.title} ${styles.title}`}>{c.title[0]}<br /><span>{c.title[1]}</span></h1>
        <p className={shared.subtitle}>{c.subtitle}</p>
        <div className={`${shared.headerCta} ${styles.heroMedia}`}>
          <Image src={assetPath("/images/xr-courseware/cover.webp")} alt={locale === "zh" ? "XR课件封面：笔记本电脑上的3D课件编辑器" : "XR Courseware cover: the 3D lesson editor on a laptop"} width={1920} height={1063} sizes="(max-width: 980px) 100vw, 940px" preload />
        </div>
      </header>
      <CaseStudyLayout
        sections={ids.map((id, i) => ({ id, label: c.nav[i] }))}
        ariaLabel={locale === "zh" ? "案例章节导航" : "Case study sections"}
      >
          <section id="context" className={sectionClass}>
            <div className={layout.positioningSection}><div className={layout.positioningInner}>
              <p className={styles.kicker}>{c.nav[0]}</p>
              <h2 className={layout.caseOpeningHeading}>{c.overview}</h2>
              <div className={styles.metaGrid}>{c.meta.map(([label, value]) => <div key={label}><p>{label}</p><span>{value}</span></div>)}</div>
              <p className={styles.intro}>{c.intro}</p>
              <p className={styles.contribution}>{c.contribution}</p>
              <ol className={styles.ecosystem}>{c.ecosystem.map((name, i) => <li key={name} className={i === 1 ? styles.current : undefined}><span className={styles.stepIndex}>0{i + 1}</span><strong>{name}</strong><span>{c.ecosystemNotes[i]}</span></li>)}</ol>
            </div></div>
          </section>
          <section id="challenge" className={sectionClass}>
            <Narrative label={c.nav[1]} title={c.challenge} body={c.challengeBody}>
              <div className={styles.insights}>{c.insights.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
              <div className={styles.legacyIntro}>
                <p className={styles.kicker}>{c.legacyLabel}</p>
                <h3>{c.legacyTitle}</h3>
                <p>{c.legacyBody}</p>
              </div>
              <Media name="legacy-editor" width={1600} height={905} alt={c.legacyCaption} caption={c.legacyCaption} />
            </Narrative>
          </section>
          <section id="direction" className={sectionClass}>
            <Narrative label={c.referenceLabel} title={c.direction} body={c.directionBody}>
              <div className={styles.referenceCards}>
                {c.references.map(([image, name]) => <article className={styles.referenceCard} key={name}>
                  <div className={styles.referenceImage}>
                    <Image src={assetPath(`/images/xr-courseware/${image}.webp`)} alt={locale === "zh" ? `${name} 当时的界面参考` : `${name} interface reference from the original project`} width={788} height={471} sizes="(max-width: 768px) 100vw, 420px" />
                  </div>
                  <div className={styles.referenceContent}>
                    <h3>{name}</h3>
                  </div>
                </article>)}
              </div>
              <p className={styles.referenceConclusion}>{c.referenceConclusion}</p>
            </Narrative>
          </section>
          <section id="creation" className={sectionClass} aria-label={c.demoAlt}>
            <Narrative label={locale === "zh" ? "课件创作" : "Lesson creation"} title={c.demoTitle} body={c.demoBody}>
              <CreationDemo label={c.demoAlt} caption={c.demoCaption} playLabel={c.playDemo} pauseLabel={c.stopDemo} />
            </Narrative>
          </section>
          <section id="solution" className={sectionClass}>
            <Narrative label={keyDesign("01")} title={c.resources} body={c.resourcesBody}>
              <div className={styles.flows}>{c.flows.map(([label, ...steps]) => <div key={label}><p>{label}</p><ol>{steps.map(step => <li key={step}>{step}</li>)}</ol></div>)}</div>
              <Media name="resources" width={1440} height={810} alt={c.resourceCaption} caption={c.resourceCaption} dark />
              <div className={styles.detailGrid}>{c.resourceDetails.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
            </Narrative>
          </section>
          <section className={sectionClass} aria-label={keyDesign("02")}>
            <Narrative label={keyDesign("02")} title={c.layout} body={c.layoutBody}>
              <div className={styles.decisions}><h3>{c.decision}</h3><ul>{c.layoutPoints.map(p => <li key={p}>{p}</li>)}</ul></div>
              <Comparison type="resources" locale={locale} caption={c.layoutCaption} />
            </Narrative>
          </section>
          <section className={sectionClass} aria-label={keyDesign("03")}>
            <Narrative label={keyDesign("03")} title={c.focus} body={c.focusBody}>
              <div className={styles.decisions}><h3>{c.decision}</h3><ul>{c.focusPoints.map(p => <li key={p}>{p}</li>)}</ul></div>
              <Comparison type="focus" locale={locale} caption={c.focusCaption} />
            </Narrative>
          </section>
          <section id="model-explanation" className={sectionClass} aria-label={c.presetsLabel}>
            <Narrative label={c.presetsLabel} title={c.presetsTitle} body={c.presetsBody}>
              <Media name="model-teaching" alt={c.presetsCaption} caption={c.presetsCaption} dark />
              <div className={styles.detailGrid}>{c.presetsPoints.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
              <p className={styles.note}>{c.presetsNote}</p>
              <aside className={styles.related}><p>{c.modelNote}</p><Link href={localePath(locale, "/projects/model-editor/")}>{c.modelLink}</Link></aside>
            </Narrative>
          </section>
          <section id="use" className={sectionClass}>
            <Narrative label={c.nav[4]} title={c.use} body={c.useBody}>
              <Media name="devices" alt={c.useCaption} caption={c.useCaption} dark />
              <p className={styles.note}>{c.useNote}</p>
            </Narrative>
          </section>
          <section id="reflection" className={sectionClass}>
            <Narrative label={c.nav[5]} title={c.reflection} body={c.reflectionBody}>
              <p className={styles.next}>{c.next}</p>
            </Narrative>
          </section>
      </CaseStudyLayout>
      <section className={shared.selfly0ContactSection} aria-label={locale === "zh" ? "页面导航" : "Page navigation"}>
        <div className={`${shared.selfly0ContactInner} ${layout.contactAlign}`}>
          <Link className={shared.selfly0ContactBack} href={localePath(locale, "/")}>{c.back}</Link>
        </div>
      </section>
    </main>
  </div>;
}
