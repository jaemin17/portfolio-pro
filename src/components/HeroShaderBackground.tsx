"use client";

import styles from "./HeroShaderBackground.module.css";

type CloudSpec = {
  id: string;
  variant: "a" | "b" | "c" | "d" | "e";
  left: string;
  top: string;
  scale: number;
};

/** 手工布局，大小参差、形状不规则 */
const CLOUDS: CloudSpec[] = [
  { id: "c1", variant: "a", left: "4%", top: "10%", scale: 1.15 },
  { id: "c2", variant: "b", left: "28%", top: "6%", scale: 0.82 },
  { id: "c3", variant: "c", left: "52%", top: "14%", scale: 1.05 },
  { id: "c4", variant: "d", left: "72%", top: "8%", scale: 0.92 },
  { id: "c5", variant: "e", left: "88%", top: "16%", scale: 0.7 },
  { id: "c6", variant: "b", left: "18%", top: "22%", scale: 0.65 },
  { id: "c7", variant: "d", left: "62%", top: "24%", scale: 0.58 },
];

function Cloud({ variant }: Pick<CloudSpec, "variant">) {
  return (
    <div className={`${styles.cloud} ${styles[`cloud${variant.toUpperCase()}`]}`}>
      <div className={styles.cloudShadow} aria-hidden="true" />
      <div className={styles.cloudBody}>
        <span className={styles.puff} />
        <span className={styles.puff} />
        <span className={styles.puff} />
        <span className={styles.puff} />
        <span className={styles.puff} />
        <span className={styles.puff} />
      </div>
    </div>
  );
}

export function HeroShaderBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.sky} />
      <div className={styles.cloudDrift}>
        <div className={styles.cloudTrack}>
          {CLOUDS.map((cloud) => (
            <div
              key={cloud.id}
              className={styles.cloudSlot}
              style={{
                left: cloud.left,
                top: cloud.top,
                transform: `scale(${cloud.scale})`,
              }}
            >
              <Cloud variant={cloud.variant} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
