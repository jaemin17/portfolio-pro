"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    function handleMouseMove(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-hide-cursor-dot]",
      );
      dot!.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      dot!.style.opacity = interactive ? "0" : "1";
    }

    function handleMouseLeave() {
      dot!.style.opacity = "0";
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <div ref={dotRef} className={styles.dot} aria-hidden="true" />;
}
