"use client";

import { useEffect, useRef } from "react";

type LazyAutoVideoProps = {
  src: string;
  className?: string;
  "aria-label"?: string;
};

export function LazyAutoVideo({
  src,
  className,
  "aria-label": ariaLabel,
}: LazyAutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      video.src = src;
      video.load();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.src = src;
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
