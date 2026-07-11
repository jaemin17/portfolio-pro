"use client";

import { useState } from "react";
import styles from "./CopyEmail.module.css";

type CopyEmailProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

export function CopyEmail({ email, copyLabel, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable — leave UI unchanged
    }
  }

  return (
    <button
      type="button"
      className={styles.email}
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : copyLabel}
    >
      <svg
        className={styles.icon}
        width="18"
        height="18"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5.5"
          y="5.5"
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span>{copied ? copiedLabel : email}</span>
    </button>
  );
}
