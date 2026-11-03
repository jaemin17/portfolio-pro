import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assetPath } from '@/i18n/assets';
import { isLocale } from '@/i18n/config';
import { localePath } from '@/i18n/paths';
import layout from '../selfly/selfly0.module.css';
import styles from './resourceLibrary.module.css';
import { content } from './content';

// Coordinates refer to the original screenshots; CSS keeps the source files intact.
const crops = [
  { before: [1280, 0, 640, 150], after: [700, 285, 540, 130] },
  { before: [145, 465, 1000, 100], after: [145, 500, 1000, 160] },
  { before: [145, 555, 1620, 860], after: [145, 650, 1630, 700] },
];

function ScreenshotDetail({ version, crop, alt }: { version: 'before' | 'after'; crop: number[]; alt: string }) {
  const [x, y, width, height] = crop;
  const sourceHeight = version === 'before' ? 2048 : 1373;
  return (
    <div className={styles.crop} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={assetPath(`/images/resource-library/${version}.webp`)}
        alt={alt} width={1920} height={sourceHeight}
        sizes={width < 800 ? '100vw' : '(max-width: 980px) 100vw, 940px'}
        style={{ width: `${1920 / width * 100}%`, transform: `translate(${-x / 1920 * 100}%, ${-y / sourceHeight * 100}%)` }}
      />
    </div>
  );
}

export default async function ResourceLibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = content[locale];

  return (
    <div className={`${layout.pagePlain} ${layout.selfly0Page}`}>
      <main className={`${layout.main} ${styles.main}`}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{c.name}</p>
          <h1>{c.title}</h1>
          <p className={styles.subtitle}>{c.subtitle}</p>
          <p className={styles.meta}>{c.label}</p>
          <figure className={styles.heroFigure}>
            <Image src={assetPath('/images/resource-library/after.webp')} alt={c.heroCaption} width={1920} height={1373} sizes="(max-width: 1100px) 100vw, 1040px" preload />
            <figcaption>{c.heroCaption}</figcaption>
          </figure>
        </header>

        <section className={styles.section} aria-labelledby="problem">
          <p className={styles.eyebrow}>{c.problemLabel}</p>
          <h2 id="problem">{c.problemTitle}</h2>
          <p className={styles.body}>{c.problemBody}</p>
          <div className={styles.problems}>{c.problems.map(([title, body]) => (
            <article key={title}><h3>{title}</h3><p>{body}</p></article>
          ))}</div>
        </section>

        <section className={styles.solution} aria-labelledby="solution">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>{c.solutionLabel}</p>
            <h2 id="solution">{c.solutionTitle}</h2>
            <p className={styles.body}>{c.solutionBody}</p>
            <div className={styles.highlights}>{c.highlights.map(([id, title, body], index) => (
              <a href={`#${id}`} key={id} className={styles.highlight}>
                <span className={styles.highlightIndex}>0{index + 1} <span aria-hidden="true">↗</span></span>
                <div className={styles.highlightPreview}><ScreenshotDetail version="after" crop={crops[index].after} alt={title} /></div>
                <h3>{title}</h3><p>{body}</p>
              </a>
            ))}</div>
          </div>
        </section>

        {c.chapters.map((chapter, index) => (
          <section id={chapter.id} key={chapter.id} className={`${styles.section} ${styles.chapter}`} aria-labelledby={`${chapter.id}-title`}>
            <p className={styles.eyebrow}>{c.detailsLabel} / {chapter.number}</p>
            <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
            <p className={styles.body}>{chapter.body}</p>
            <div className={`${styles.comparison} ${index === 0 ? styles.searchComparison : ''}`}>
              {(['before', 'after'] as const).map(version => (
                <figure key={version} className={`${styles.comparisonFigure} ${version === 'after' ? styles.after : ''}`}>
                  <div className={styles.comparisonLabel}>{version === 'before' ? c.beforeLabel : c.afterLabel}</div>
                  <div className={styles.comparisonImage}><ScreenshotDetail version={version} crop={crops[index][version]} alt={chapter[version]} /></div>
                  <figcaption>{chapter[version]}</figcaption>
                </figure>
              ))}
            </div>
            <p className={styles.takeaway}>{chapter.takeaway}</p>
          </section>
        ))}

        <section className={styles.section} aria-labelledby="reflection">
          <p className={styles.eyebrow}>{c.reflectionLabel}</p>
          <h2 id="reflection">{c.reflection}</h2>
          <p className={styles.body}>{c.reflectionBody}</p>
          <aside className={styles.validation}><h3>{c.validation}</h3><p>{c.validationBody}</p></aside>
          <div className={styles.originalLinks}>{(['before', 'after'] as const).map(version => (
            <a key={version} href={assetPath(`/images/resource-library/${version}.webp`)}>{version === 'before' ? c.beforeLabel : c.afterLabel} · {c.fullImage}</a>
          ))}</div>
        </section>

        <footer className={styles.footer}>
          <p>{c.relatedBody}</p>
          <Link href={localePath(locale, '/projects/xr-courseware/')}>{c.related}</Link>
          <Link className={styles.back} href={localePath(locale, '/')}>{c.back}</Link>
        </footer>
      </main>
    </div>
  );
}
