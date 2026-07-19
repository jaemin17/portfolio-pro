"use client";

import { Warp } from "@paper-design/shaders-react";
import styles from "./HeroShaderBackground.module.css";

/** Transparent → soft white → dense white, layered over CSS sky. */
const CLOUD_COLORS = [
  "#ffffff00",
  "#ffffff00",
  "#ffffff40",
  "#ffffffcc",
  "#ffffff",
  "#ffffff",
] as const;

/** Isolated so `@paper-design/shaders-react` loads in its own client chunk. */
export function HeroWarpClouds() {
  return (
    <Warp
      className={styles.warpClouds}
      colors={[...CLOUD_COLORS]}
      speed={1.4}
      scale={1}
      rotation={0}
      proportion={0.3}
      softness={0.9}
      distortion={0.16}
      swirl={0.45}
      swirlIterations={5}
      shapeScale={0.08}
      shape="edge"
      fit="cover"
    />
  );
}
