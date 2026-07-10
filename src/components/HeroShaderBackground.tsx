"use client";

import { SmokeRing } from "@paper-design/shaders-react";
import styles from "./HeroShaderBackground.module.css";

const SKY_BLUE = "#75c1f0";

export function HeroShaderBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.sky} />
      <div className={styles.cloudsWrap}>
        <SmokeRing
          className={styles.clouds}
          colorBack={SKY_BLUE}
          colors={["#ffffff"]}
          radius={0.48}
          thickness={0.82}
          innerShape={0.74}
          noiseScale={2.3}
          noiseIterations={8}
          scale={2.35}
          speed={0.35}
          originY={0.36}
          fit="cover"
        />
        <SmokeRing
          className={styles.cloudsSecondary}
          colorBack={SKY_BLUE}
          colors={["#ffffff"]}
          radius={0.44}
          thickness={0.58}
          innerShape={0.68}
          noiseScale={2.6}
          noiseIterations={8}
          scale={2.5}
          speed={0.22}
          originY={0.36}
          fit="cover"
        />
      </div>
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
