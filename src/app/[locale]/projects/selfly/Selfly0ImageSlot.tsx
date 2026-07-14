import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import styles from "./selfly0.module.css";

type Selfly0ImageSlotProps = {
  src: string;
  alt: string;
  brief: string;
  width?: number;
  height?: number;
  variant?: "phone" | "wide";
};

function publicFileExists(src: string) {
  const relative = src.startsWith("/") ? src.slice(1) : src;
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export function Selfly0ImageSlot({
  src,
  alt,
  brief,
  width = 470,
  height = 1024,
  variant = "phone",
}: Selfly0ImageSlotProps) {
  const hasImage = publicFileExists(src);
  const fileHint = src.replace("/images/selfly0/", "");

  if (variant === "wide") {
    return (
      <div className={styles.selfly0WideSlot}>
        {hasImage ? (
          <Image
            src={assetPath(src)}
            alt={alt}
            width={1200}
            height={675}
            className={styles.selfly0WideSlotImage}
            sizes="(max-width: 760px) 92vw, 880px"
          />
        ) : (
          <div className={styles.selfly0ImagePendingWide} role="status">
            <span>待替换配图</span>
            <p>{brief}</p>
            <code>public/images/selfly0/{fileHint}</code>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.selfly0PhoneSlotStage}>
      <div className={styles.selfly0PhoneSlotShell}>
        <span className={styles.positioningDynamicIsland} aria-hidden="true" />
        {hasImage ? (
          <Image
            src={assetPath(src)}
            alt={alt}
            width={width}
            height={height}
            className={styles.selfly0PhoneSlotImage}
            sizes="(max-width: 760px) 58vw, 300px"
          />
        ) : (
          <div className={styles.selfly0ImagePendingPhone} role="status">
            <span>待替换截图</span>
            <p>{brief}</p>
            <code>public/images/selfly0/{fileHint}</code>
          </div>
        )}
      </div>
    </div>
  );
}
