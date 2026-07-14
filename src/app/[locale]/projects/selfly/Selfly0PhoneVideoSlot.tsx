import { assetPath } from "@/i18n/assets";
import { LazyAutoVideo } from "@/components/LazyAutoVideo";
import styles from "./selfly0.module.css";

type Selfly0PhoneVideoSlotProps = {
  src: string;
  ariaLabel: string;
};

export function Selfly0PhoneVideoSlot({ src, ariaLabel }: Selfly0PhoneVideoSlotProps) {
  return (
    <div className={styles.selfly0PhoneSlotStage}>
      <div className={styles.selfly0PhoneSlotShell}>
        <LazyAutoVideo
          src={assetPath(src)}
          className={styles.selfly0PhoneSlotVideo}
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}
