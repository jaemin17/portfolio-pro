import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./FinalLayoutCarousel.module.css";

type ImageSlide = { src: string; alt: string; label: string; description?: string };
type ContentSlide = { content: ReactNode; label: string; description?: string };
type Slide = ImageSlide | ContentSlide;

type FinalLayoutCarouselProps = {
  slides: Slide[];
  caption?: string;
};

export function FinalLayoutCarousel({ slides, caption }: FinalLayoutCarouselProps) {
  return (
    <div className={styles.stack}>
      {slides.map((slide) => (
        <figure key={slide.label} className={styles.item}>
          <div className={styles.media}>
            {"content" in slide ? (
              slide.content
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1440}
                height={778}
                className={styles.image}
                sizes="(max-width: 840px) 100vw, 840px"
              />
            )}
          </div>
          <figcaption className={styles.caption}>
            {slide.description ?? slide.label}
          </figcaption>
        </figure>
      ))}
      {caption ? <p className={styles.stackCaption}>{caption}</p> : null}
    </div>
  );
}
