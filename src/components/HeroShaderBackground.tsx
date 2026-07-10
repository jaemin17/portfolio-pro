"use client";

import { Warp } from "@paper-design/shaders-react";
import styles from "./HeroShaderBackground.module.css";

/** Transparent → soft white → dense white, layered over CSS sky. */
const CLOUD_COLORS = ["#ffffff00", "#ffffff55", "#ffffffee", "#ffffff"] as const;

export function HeroShaderBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.sky} />
      <Warp
        className={styles.warpClouds}
        colors={[...CLOUD_COLORS]}
        speed={0.2}
        scale={1}
        rotation={0}
        proportion={0.28}
        softness={0.9}
        distortion={0.16}
        swirl={0.45}
        swirlIterations={10}
        shapeScale={0.08}
        shape="edge"
        fit="cover"
      />
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
