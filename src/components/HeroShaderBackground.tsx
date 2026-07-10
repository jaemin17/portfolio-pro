"use client";

import { SmokeRing } from "@paper-design/shaders-react";
import styles from "./HeroShaderBackground.module.css";

const SKY_BLUE = "#75c1f0";

export function HeroShaderBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.sky} />
      <SmokeRing
        className={styles.clouds}
        colorBack={SKY_BLUE}
        colors={["#ffffff"]}
        radius={0.5}
        thickness={0.65}
        innerShape={0.85}
        noiseScale={3}
        noiseIterations={8}
        scale={2.5}
        speed={0.35}
        fit="cover"
      />
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
