import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getAboutCopy } from "@/i18n/copy";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { RevealOnView } from "@/components/RevealOnView";
import styles from "./about.module.css";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

function renderEmphasis(text: string, styles: Record<string, string>) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className={styles.emphasis}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const copy = getAboutCopy(locale);

  return (
    <main className={styles.page}>
      <div className={styles.heroBand} aria-hidden="true">
        <HeroShaderBackground />
      </div>
      <section className={styles.hero} aria-label="About">
        <div className={styles.heroInner}>
          <h1 className={styles.greeting}>{copy.greeting}</h1>
          <p className={styles.tagline}>{renderEmphasis(copy.tagline, styles)}</p>
          {copy.bio.map((paragraph) => (
            <p key={paragraph} className={styles.bioParagraph}>
              {renderEmphasis(paragraph, styles)}
            </p>
          ))}
        </div>
      </section>

      <div className={styles.content}>
        <RevealOnView className={styles.scrollReveal}>
          <section className={styles.section} aria-label={copy.whatIDo.label}>
            <h2 className={styles.sectionLabel}>{copy.whatIDo.label}</h2>
            <ul className={styles.tagList}>
              {copy.whatIDo.items.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </RevealOnView>

        <RevealOnView className={styles.scrollReveal}>
          <section className={styles.section} aria-label={copy.workExperience.label}>
            <h2 className={styles.sectionLabel}>{copy.workExperience.label}</h2>
            <p className={styles.workSummary}>{copy.workExperience.summary}</p>
            <ul className={styles.workList}>
              {copy.workExperience.items.map((item) => (
                <li key={`${item.company}-${item.period}`} className={styles.workItem}>
                  <span className={styles.workCompany}>{item.company}</span>
                  <span className={styles.workRole}>{item.role}</span>
                  <span className={styles.workPeriod}>{item.period}</span>
                </li>
              ))}
            </ul>
          </section>
        </RevealOnView>

        <RevealOnView className={styles.scrollReveal}>
          <section className={styles.section} aria-label={copy.strengths.label}>
            <h2 className={styles.sectionLabel}>{copy.strengths.label}</h2>
            <div className={styles.strengthList}>
              {copy.strengths.items.map((item) => (
                <div key={item.title} className={styles.strengthItem}>
                  <p className={styles.strengthTitle}>{item.title}</p>
                  <p className={styles.strengthDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnView>

        <RevealOnView className={styles.scrollReveal}>
          <footer className={styles.footer}>
            <p className={styles.closing}>{copy.closing}</p>
          </footer>
        </RevealOnView>
      </div>
    </main>
  );
}
