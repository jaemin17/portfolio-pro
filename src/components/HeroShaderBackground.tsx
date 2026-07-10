"use client";

import styles from "./HeroShaderBackground.module.css";

type CloudSpec = {
  id: string;
  variant: "a" | "b" | "c" | "d" | "e";
  left: string;
  top: string;
  scale: number;
  warp: "a" | "b" | "c";
};

/** 手工布局，大小参差、形状不规则 */
const CLOUDS: CloudSpec[] = [
  { id: "c1", variant: "a", left: "4%", top: "10%", scale: 1.15, warp: "a" },
  { id: "c2", variant: "b", left: "28%", top: "6%", scale: 0.82, warp: "b" },
  { id: "c3", variant: "c", left: "52%", top: "14%", scale: 1.05, warp: "c" },
  { id: "c4", variant: "d", left: "72%", top: "8%", scale: 0.92, warp: "a" },
  { id: "c5", variant: "e", left: "88%", top: "16%", scale: 0.7, warp: "b" },
  { id: "c6", variant: "b", left: "18%", top: "22%", scale: 0.65, warp: "c" },
  { id: "c7", variant: "d", left: "62%", top: "24%", scale: 0.58, warp: "b" },
];

function CloudFilters() {
  return (
    <svg className={styles.cloudFilters} aria-hidden="true">
      <defs>
        <filter id="cloud-warp-a" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.005"
            numOctaves="2"
            seed="4"
            result="noise"
          >
            <animate
              attributeName="seed"
              dur="140s"
              values="4;28;11;36;4"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="cloud-warp-b" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.009"
            numOctaves="2"
            seed="17"
            result="noise"
          >
            <animate
              attributeName="seed"
              dur="165s"
              values="17;42;23;51;17"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="cloud-warp-c" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.007 0.004"
            numOctaves="3"
            seed="31"
            result="noise"
          >
            <animate
              attributeName="seed"
              dur="120s"
              values="31;8;44;19;31"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

function Cloud({ variant, warp }: Pick<CloudSpec, "variant" | "warp">) {
  const warpClass =
    warp === "a" ? styles.cloudWarpA : warp === "b" ? styles.cloudWarpB : styles.cloudWarpC;

  return (
    <div className={`${styles.cloud} ${styles[`cloud${variant.toUpperCase()}`]}`}>
      <div className={styles.cloudShadow} aria-hidden="true" />
      <div className={`${styles.cloudBody} ${warpClass}`}>
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
      <CloudFilters />
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
              <Cloud variant={cloud.variant} warp={cloud.warp} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
