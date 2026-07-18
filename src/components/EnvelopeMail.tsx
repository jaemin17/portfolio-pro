"use client";

import { useState } from "react";
import styles from "./EnvelopeMail.module.css";

export type EnvelopeMailCopy = {
  label: string;
  cta: string;
  copied: string;
  email: string;
};

type EnvelopeMailProps = {
  copy: EnvelopeMailCopy;
};

export function EnvelopeMail({ copy }: EnvelopeMailProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copy.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  return (
    <section className={styles.section} aria-label={copy.label}>
      <p className={styles.label}>{copy.label}</p>

      <div className={styles.stage}>
        <div className={styles.envelope} tabIndex={0}>
          <div className={styles.letter}>
            <div className={styles.letterLines} aria-hidden="true" />
            <button
              type="button"
              className={styles.cta}
              onClick={handleCopy}
              aria-label={`${copy.cta}: ${copy.email}`}
            >
              <span className={copied ? styles.ctaHidden : undefined}>{copy.cta}</span>
              <span
                className={`${styles.ctaCopied} ${copied ? styles.ctaCopiedVisible : ""}`}
                aria-live="polite"
              >
                {copy.copied}
              </span>
            </button>
          </div>

          {/* Flaps match abhishekbariya.com geometry; soft same-hue edge shading */}
          <div className={styles.flaps} aria-hidden="true">
            <svg className={styles.flapLeft} viewBox="0 0 333 532" preserveAspectRatio="none">
              <defs>
                <linearGradient id="envGradL" x1="0" y1="0" x2="1" y2="0.55">
                  <stop offset="0%" stopColor="#f3d98a" />
                  <stop offset="55%" stopColor="#efd070" />
                  <stop offset="100%" stopColor="#e5c45c" />
                </linearGradient>
              </defs>
              <path d="M0 0 L0 532 L333 288 Z" fill="url(#envGradL)" />
              <path
                d="M0 0 L333 288 L0 532"
                fill="none"
                stroke="rgba(210,170,55,0.35)"
                strokeWidth="2"
              />
            </svg>

            <svg className={styles.flapRight} viewBox="0 0 334 532" preserveAspectRatio="none">
              <defs>
                <linearGradient id="envGradR" x1="1" y1="0" x2="0" y2="0.55">
                  <stop offset="0%" stopColor="#f3d98a" />
                  <stop offset="55%" stopColor="#efd070" />
                  <stop offset="100%" stopColor="#e5c45c" />
                </linearGradient>
              </defs>
              <path d="M334 0 L0 288 L334 532 Z" fill="url(#envGradR)" />
              <path
                d="M334 0 L0 288 L334 532"
                fill="none"
                stroke="rgba(210,170,55,0.35)"
                strokeWidth="2"
              />
            </svg>

            <svg className={styles.flapBottom} viewBox="0 0 668 244" preserveAspectRatio="none">
              <defs>
                <linearGradient id="envGradB" x1="0.5" y1="1" x2="0.5" y2="0">
                  <stop offset="0%" stopColor="#f1d47c" />
                  <stop offset="100%" stopColor="#e8c968" />
                </linearGradient>
              </defs>
              <path d="M0 244 L334 0 L668 244 Z" fill="url(#envGradB)" />
              <path
                d="M0 244 L334 0 L668 244"
                fill="none"
                stroke="rgba(210,170,55,0.28)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
