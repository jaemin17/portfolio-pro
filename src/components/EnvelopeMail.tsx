"use client";

import { useId, useState } from "react";
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

const FLAP_FILL = "#f6e3a7";

function SideFlapFilter({ id }: { id: string }) {
  return (
    <filter
      id={id}
      x="-9.6%"
      y="-8.8%"
      width="119.2%"
      height="117.6%"
      filterUnits="objectBoundingBox"
    >
      <feGaussianBlur stdDeviation="16" in="SourceAlpha" result="blur" />
      <feOffset dy="15" in="blur" result="offset" />
      <feComposite in="offset" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="composite" />
      <feFlood floodColor="rgba(235, 204, 106, 0.75)" result="flood" />
      <feComposite in="flood" in2="composite" operator="in" result="shadow" />
    </filter>
  );
}

function BottomFlapFilter({ id }: { id: string }) {
  return (
    <filter
      id={id}
      x="-4.8%"
      y="-19.2%"
      width="109.6%"
      height="138.4%"
      filterUnits="objectBoundingBox"
    >
      <feGaussianBlur stdDeviation="16" in="SourceAlpha" result="blur" />
      <feOffset dy="15" in="blur" result="offset" />
      <feComposite in="offset" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="composite" />
      <feFlood floodColor="rgba(235, 204, 106, 0.5)" result="flood" />
      <feComposite in="flood" in2="composite" operator="in" result="shadow" />
    </filter>
  );
}

export function EnvelopeMail({ copy }: EnvelopeMailProps) {
  const [copied, setCopied] = useState(false);
  const uid = useId().replace(/:/g, "");
  const sideFilterId = `env-side-${uid}`;
  const sideFilterRightId = `env-side-r-${uid}`;
  const bottomFilterId = `env-bottom-${uid}`;

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
          <div className={styles.body}>
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
          </div>

          <div className={styles.flaps} aria-hidden="true">
            <svg
              className={styles.flapLeft}
              viewBox="0 0 333 532.125"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <defs>
                <SideFlapFilter id={sideFilterId} />
              </defs>
              <path d="M0 0 L0 532.125 L333 288 Z" fill={FLAP_FILL} />
              <path d="M0 0 L0 532.125 L333 288 Z" fill="black" filter={`url(#${sideFilterId})`} />
            </svg>

            <svg
              className={styles.flapRight}
              viewBox="0 0 333.75 532.125"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <defs>
                <SideFlapFilter id={sideFilterRightId} />
              </defs>
              <path d="M333.75 0 L0 288 L333.75 532.125 Z" fill={FLAP_FILL} />
              <path
                d="M333.75 0 L0 288 L333.75 532.125 Z"
                fill="black"
                filter={`url(#${sideFilterRightId})`}
              />
            </svg>

            <svg
              className={styles.flapBottom}
              viewBox="0 0 667.5 244.125"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <defs>
                <BottomFlapFilter id={bottomFilterId} />
              </defs>
              <path
                d="M0 244.125 L311 16 Q333 0 355 16 L667.5 244.125 Z"
                fill={FLAP_FILL}
              />
              <path
                d="M0 244.125 L311 16 Q333 0 355 16 L667.5 244.125 Z"
                fill="black"
                filter={`url(#${bottomFilterId})`}
              />
            </svg>
          </div>

          <div className={styles.flapTopWrap} aria-hidden="true">
            <svg
              className={styles.flapTop}
              viewBox="0 0 579 263.25"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L579 0 L299.592 254.074 C293.87 259.276 285.13 259.276 279.408 254.074 Z"
                fill={FLAP_FILL}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
