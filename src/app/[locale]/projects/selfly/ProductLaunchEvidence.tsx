import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";
import { Selfly0PhoneVideoSlot } from "./Selfly0PhoneVideoSlot";

const capabilities = [
  {
    id: "swiftui",
    title: "SwiftUI 界面",
    detail: "设计稿到可交互界面",
  },
  {
    id: "swiftdata",
    title: "SwiftData",
    detail: "本地数据模型与关系",
  },
  {
    id: "icloud",
    title: "iCloud 同步",
    detail: "多设备记录一致",
  },
  {
    id: "storekit",
    title: "StoreKit 订阅",
    detail: "付费与恢复购买",
  },
  {
    id: "i18n",
    title: "多语言",
    detail: "界面与内容承载",
  },
  {
    id: "polish",
    title: "体验边界校准",
    detail: "长文本、状态与反馈",
  },
] as const;

export function ProductLaunchEvidence() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_launch}`}
      aria-label="Selfly iOS 产品化落地能力"
    >
      <p className={styles.selfly0EvidenceTitle}>从设计到可运行产品</p>

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>产品化落地</span>
        <span>订阅、同步与多语言在真机设置中可用</span>
      </figcaption>

      <ul className={styles.productLaunchGrid}>
        {capabilities.map((item) => (
          <li key={item.id} className={styles.productLaunchCard}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>

      <div className={styles.productLaunchLayout}>
        <figure className={styles.productLaunchSupplement}>
          <div className={styles.productLaunchSupplementFrame}>
            <Image
              src={assetPath("/images/selfly0/launch-custom-symbols.webp")}
              alt="Selfly 自定义 SF Symbol 图标集"
              width={1200}
              height={800}
              className={styles.productLaunchSupplementImage}
              sizes="(max-width: 760px) 92vw, 420px"
            />
          </div>
          <figcaption className={styles.productLaunchSupplementCaption}>
            自定义 Symbol · 与 Tab / 模块入口语义一致
          </figcaption>
        </figure>

        <div className={styles.productLaunchDemo}>
          <Selfly0PhoneVideoSlot
            src={assetPath("/videos/selfly0/launch-implementation.mp4")}
            ariaLabel="Selfly 设置页：订阅、iCloud 同步与多语言切换演示"
          />
        </div>
      </div>
    </figure>
  );
}
