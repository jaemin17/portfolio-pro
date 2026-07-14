"use client";

import { useEffect, useRef, useState } from "react";

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
      { rootMargin: "700px 0px", threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <video
          className={className}
          src={src}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
        />
      ) : (
        <img
          className={className}
          src={posterSrc}
          alt={label}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
