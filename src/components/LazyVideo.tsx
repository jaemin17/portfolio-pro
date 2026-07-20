"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LazyVideo.module.css";

type LazyVideoProps = {
  className?: string;
  src: string;
  posterSrc: string;
  label: string;
};

export function LazyVideo({
  className,
  src,
  posterSrc,
  label,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVideoReady(false);
  }, [src]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = globalThis.setTimeout(() => setShouldLoad(true), 0);
      return () => globalThis.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px", threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const mediaClass = [styles.media, className].filter(Boolean).join(" ");

  return (
    <div ref={containerRef} className={styles.shell}>
      <img
        className={`${mediaClass} ${isVideoReady ? styles.posterHidden : ""}`}
        src={posterSrc}
        alt={label}
        loading="lazy"
        decoding="async"
      />
      {shouldLoad ? (
        <video
          className={`${mediaClass} ${isVideoReady ? "" : styles.videoPending}`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
          onCanPlay={() => setIsVideoReady(true)}
        />
      ) : null}
    </div>
  );
}
