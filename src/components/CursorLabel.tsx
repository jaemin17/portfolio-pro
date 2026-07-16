"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import styles from "./CursorLabel.module.css";

type CursorLabelProps = {
  label: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function CursorLabel({ label, children, className, style }: CursorLabelProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  const classes = [styles.wrapper, className].filter(Boolean).join(" ");

  return (
    <div
      ref={wrapperRef}
      className={classes}
      style={style}
      data-hide-cursor-dot
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <span
        className={styles.pill}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${visible ? "scale(1)" : "scale(0.7)"}`,
          opacity: visible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {label}
      </span>
    </div>
  );
}
