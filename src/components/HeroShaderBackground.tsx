"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./HeroShaderBackground.module.css";

const HeroWarpClouds = dynamic(
  () =>
    import("./HeroWarpClouds").then((module) => module.HeroWarpClouds),
  { ssr: false },
);

function canUseHeroShader(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;
  if (connection?.saveData) {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

export function HeroShaderBackground() {
  const [enableShader, setEnableShader] = useState(false);

  useEffect(() => {
    setEnableShader(canUseHeroShader());
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.sky} />
      {enableShader ? <HeroWarpClouds /> : null}
      <div className={styles.skyLighten} aria-hidden="true" />
    </div>
  );
}
