"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/i18n/assets";
import styles from "./xrCourseware.module.css";

export function CreationDemo({ label, caption, playLabel, pauseLabel }: {
  label: string; caption: string; playLabel: string; pauseLabel: string;
}) {
  const [playing, setPlaying] = useState(false);
  return <figure className={styles.figure}>
    <div className={styles.demoFrame}>
      <Image src={assetPath(`/images/xr-courseware/${playing ? "creation-demo.gif" : "editor.webp"}`)} alt={label} width={1440} height={800} sizes="(max-width: 768px) 100vw, 880px" unoptimized />
    </div>
    <div className={styles.demoFooter}>
      <figcaption>{caption}</figcaption>
      <button type="button" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? pauseLabel : playLabel}</button>
    </div>
  </figure>;
}
