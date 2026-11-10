import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./CroppedPhonePreview.module.css";

/** Keep the same top-anchored crop and frame proportions at every display size. */
export function CroppedPhonePreview({
  src,
  alt,
  width,
  height,
  visibleFraction = 0.85,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  visibleFraction?: number;
}) {
  const fraction = Math.min(1, Math.max(0.01, visibleFraction));

  return (
    <div className={styles.phone}>
      <div className={styles.frame}>
        <div
          className={styles.crop}
          style={{ "--crop-aspect": `${width} / ${height * fraction}` } as CSSProperties}
        >
          <Image src={src} alt={alt} width={width} height={height} sizes="220px" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
