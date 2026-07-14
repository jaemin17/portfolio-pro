import { assetPath } from "@/i18n/assets";
import styles from "./selfly0.module.css";
import { Selfly0ImageSlot } from "./Selfly0ImageSlot";
import { Selfly0PhoneVideoSlot } from "./Selfly0PhoneVideoSlot";
import { DiaryInputFlowDiagram } from "./DiaryInputFlowDiagram";

const positioningArrow = (
  <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138"
      stroke="#FFA84A"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export function DiaryEmojiPickerCompare() {
  return (
    <figure
      className={`${styles.positioningDiagram} ${styles.diaryEmojiEvidence}`}
      aria-label="日记表情选择：内联展开条与 Sheet 网格对比"
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造前</span>
          <span className={styles.positioningDiagramCaption}>内联横向展开条</span>
          <span className={styles.positioningDiagramDescription}>输入框上方展开，选项变多后难以扫完</span>
          <Selfly0PhoneVideoSlot
            src={assetPath("/videos/selfly0/diary-emoji-01-inline-strip.mp4")}
            ariaLabel="旧版日记输入：点击 emoji 后在输入框上方展开横向滚动条"
          />
        </div>
        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {positioningArrow}
        </div>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造后</span>
          <span className={styles.positioningDiagramCaption}>半屏 Sheet 网格</span>
          <span className={styles.positioningDiagramDescription}>与模块 emoji 选择交互一致，层级更清晰</span>
          <Selfly0PhoneVideoSlot
            src={assetPath("/videos/selfly0/diary-emoji-02-sheet-grid.mp4")}
            ariaLabel="新版日记输入：半屏 Sheet 网格选择器"
          />
        </div>
      </div>
    </figure>
  );
}

export function DiaryEmojiCategoryPicker() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_diary}`}
      aria-label="日记表情选择：分类信息架构"
    >
      <p className={styles.selfly0EvidenceTitle}>选项分类</p>
      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>决策 02</span>
        <span>palette 规模化后，用分组 IA 替代扁平网格</span>
      </figcaption>
      <Selfly0ImageSlot
        src="/images/selfly0/diary-emoji-03-sheet-categories.webp"
        alt="表情 Sheet 分组：表情、爱心、天气、自然等分类"
        brief="分类 Sheet：选项扩至 40+ 后，按表情/爱心/天气/自然等分组展示"
      />
    </figure>
  );
}

export function DiaryEmojiQuickEdit() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_diary}`}
      aria-label="日记条目 emoji 快捷修改"
    >
      <p className={styles.selfly0EvidenceTitle}>快捷改 mood</p>
      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>决策 03</span>
        <span>从「选 emoji」延伸到「改 mood」，无需进入完整编辑页</span>
      </figcaption>
      <Selfly0ImageSlot
        src="/images/selfly0/diary-emoji-04-quick-edit.webp"
        alt="点击已发布日记条目左侧 emoji，无需进入编辑页即可更换"
        brief="快捷改 mood：点击列表条目左侧 emoji，轻量更换已发布内容的情绪标记"
      />
    </figure>
  );
}

export function DiaryEmojiInputPolish() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_diary} ${styles.selfly0EvidenceCard_diaryPolish}`}
      aria-label="日记输入：选完表情后自动聚焦文本输入"
    >
      <p className={styles.selfly0EvidenceTitle}>输入连贯性</p>
      <p className={styles.diaryFlowJumpLabel}>改造后：① 选完表情后自动聚焦 → 直接进入 ③</p>

      <div className={styles.diaryInputPolishLayout}>
        <DiaryInputFlowDiagram />
      </div>
    </figure>
  );
}
