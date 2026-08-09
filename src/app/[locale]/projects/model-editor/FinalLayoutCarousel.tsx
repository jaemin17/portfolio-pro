import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./FinalLayoutCarousel.module.css";

type ImageSlide = { src: string; alt: string; label: string; description?: string };
type ContentSlide = { content: ReactNode; label: string; description?: string };
type Slide = ImageSlide | ContentSlide;
type Row = { layout: "row"; slides: Slide[] };
type Entry = Slide | Row;

type FinalLayoutCarouselProps = {
  slides: Entry[];
  caption?: string;
  tone?: "light" | "dark";
};

function isRow(entry: Entry): entry is Row {
  return "layout" in entry && entry.layout === "row";
}

function SlideFigure({ slide }: { slide: Slide }) {
  const hasCaption = Boolean(slide.label || slide.description);

  return (
    <figure className={styles.item}>
      <div className={styles.media}>
        {"content" in slide ? (
          slide.content
        ) : (
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1024}
            height={596}
            className={styles.image}
            sizes="(max-width: 840px) 100vw, 840px"
          />
        )}
      </div>
      {hasCaption ? (
        <figcaption className={styles.caption}>
          {slide.label ? <span className={styles.captionTitle}>{slide.label}</span> : null}
          {slide.description ? (
            <span className={styles.captionDescription}>{slide.description}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function FinalLayoutCarousel({
  slides,
  caption,
  tone = "light",
}: FinalLayoutCarouselProps) {
  return (
    <div className={`${styles.stack} ${tone === "dark" ? styles.stackDark : ""}`}>
      {slides.map((entry, index) =>
        isRow(entry) ? (
          <div key={`row-${index}`} className={styles.row}>
            {entry.slides.map((slide) => (
              <SlideFigure key={slide.label} slide={slide} />
            ))}
          </div>
        ) : (
          <SlideFigure key={entry.label} slide={entry} />
        ),
      )}
      {caption ? <p className={styles.stackCaption}>{caption}</p> : null}
    </div>
  );
}
