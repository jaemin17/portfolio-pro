import styles from "./selfly0.module.css";
import { Selfly0ImageSlot } from "./Selfly0ImageSlot";

const steps = [
  { id: "connect", label: "App Store Connect", detail: "应用信息、版本与构建" },
  { id: "review", label: "审核材料", detail: "描述、截图与演示账号" },
  { id: "privacy", label: "隐私与订阅", detail: "权限说明、订阅条款" },
  { id: "release", label: "提审与发布", detail: "反馈处理与版本上线" },
] as const;

export function AppStoreShowcase() {
  return (
    <figure className={styles.selfly0EvidenceCard} aria-label="Selfly App Store 上线流程">
      <p className={styles.selfly0EvidenceTitle}>上架路径</p>

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>App Store 上线</span>
        <span>在 App Store Connect 完成 1.0.8 版本截屏与预览配置</span>
      </figcaption>

      <Selfly0ImageSlot
        src="/images/selfly0/app-store-connect.webp"
        alt="App Store Connect 中 Selfly Journal 1.0.8 版本的 iPhone 预览与截屏配置"
        brief="App Store Connect 预览与截屏配置页"
        variant="wide"
      />

      <ol className={styles.appStorePipeline}>
        {steps.map((step) => (
          <li key={step.id} className={styles.appStorePipelineStep}>
            <strong>{step.label}</strong>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
