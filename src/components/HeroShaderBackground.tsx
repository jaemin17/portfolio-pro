"use client";

import { Warp } from "@paper-design/shaders-react";
import styles from "./HeroShaderBackground.module.css";

const SHADER_COLORS = ["#ffffff", "#75c1f0", "#ffffff"] as const;

export function HeroShaderBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.shaderFlip}>
        <Warp
          className={styles.shader}
          colors={[...SHADER_COLORS]}
          speed={0.2}
          scale={1}
          rotation={0}
          proportion={0.35}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shapeScale={0.1}
          shape="checks"
        />
      </div>
      <div className={styles.topFade} aria-hidden="true" />
      <div className={styles.bottomFade} aria-hidden="true" />
    </div>
  );
}
