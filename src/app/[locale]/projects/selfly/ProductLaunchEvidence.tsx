import styles from "./selfly0.module.css";
import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { Locale } from "@/i18n/config";

type ProductLaunchEvidenceProps = {
  locale?: Locale;
};

const copy = {
  zh: {
    figureLabel: "Selfly iOS 产品化落地能力",
    imageAlt: "Selfly 自定义 SF Symbol 图标集",
    caption: "自定义 Symbol · 与 Tab / 模块入口语义一致",
    capabilities: [
      { id: "swiftui", title: "SwiftUI 界面", detail: "设计稿到可交互界面" },
      { id: "swiftdata", title: "SwiftData", detail: "本地数据模型与关系" },
      { id: "icloud", title: "iCloud 同步", detail: "多设备记录一致" },
      { id: "storekit", title: "StoreKit 订阅", detail: "付费与恢复购买" },
      { id: "i18n", title: "多语言", detail: "界面与内容承载" },
      { id: "polish", title: "体验边界校准", detail: "长文本、状态与反馈" },
    ],
  },
  en: {
    figureLabel: "Selfly iOS shipping capabilities",
    imageAlt: "Selfly custom SF Symbol icon set",
    caption: "Custom symbols · consistent with tab and module semantics",
    capabilities: [
      { id: "swiftui", title: "SwiftUI interface", detail: "From mockup to interactive UI" },
      { id: "swiftdata", title: "SwiftData", detail: "Local data model & relationships" },
      { id: "icloud", title: "iCloud sync", detail: "Consistent records across devices" },
      { id: "storekit", title: "StoreKit subscriptions", detail: "Payments & restoring purchases" },
      { id: "i18n", title: "Localization", detail: "Interface & content support" },
      { id: "polish", title: "Edge-case calibration", detail: "Long text, states & feedback" },
    ],
  },
} as const;

export function ProductLaunchEvidence({ locale = "zh" }: ProductLaunchEvidenceProps) {
  const c = copy[locale];

  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_launch}`}
      aria-label={c.figureLabel}
    >
      <ul className={styles.productLaunchGrid}>
        {c.capabilities.map((item) => (
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
              alt={c.imageAlt}
              width={1200}
              height={800}
              className={styles.productLaunchSupplementImage}
              sizes="(max-width: 760px) 92vw, 560px"
            />
          </div>
          <figcaption className={styles.productLaunchSupplementCaption}>
            {c.caption}
          </figcaption>
        </figure>
      </div>
    </figure>
  );
}
