export type VisualShot = {
  title: { zh: string; en: string };
  subtitle: { zh: string; en: string };
  src: string;
  carousel?: readonly string[];
};

export const biomedicalVrHero = "/images/visual/animal-vr/hero.webp";

export const structureModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "犬体结构", en: "Canine body structure" },
    subtitle: { zh: "骨骼 / 肌肉 / 外观", en: "Skeleton / muscle / surface" },
    src: "/images/visual/animal-vr/dog-muscle-highlight.png",
  },
  {
    title: { zh: "小脑结构", en: "Cerebellum structure" },
    subtitle: { zh: "恢复 / 整体移动", en: "Reset / move as whole" },
    src: "/images/visual/animal-vr/brain-exploded-overview.webp",
  },
  {
    title: { zh: "耳朵的结构", en: "Ear structure" },
    subtitle: { zh: "首页展示", en: "Home screen" },
    src: "/images/visual/animal-vr/ear-home.webp",
  },
  {
    title: { zh: "耳蜗结构", en: "Cochlea structure" },
    subtitle: { zh: "结构说明", en: "Structure overview" },
    src: "/images/visual/animal-vr/ear-detail-structure.png",
  },
];

export const anatomyModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "狗解剖", en: "Dog anatomy" },
    subtitle: { zh: "结构教学 / 交互状态", en: "Structure teaching / interaction states" },
    src: "/images/visual/animal-vr/dog-anatomy-scene-1.webp",
  },
  {
    title: { zh: "猫解剖", en: "Cat anatomy" },
    subtitle: { zh: "交互状态", en: "Interaction states" },
    src: "/images/visual/animal-vr/pig-scene-3.webp",
  },
  {
    title: { zh: "猫解剖", en: "Cat anatomy" },
    subtitle: { zh: "结构教学 / 场景概览", en: "Structure teaching / scene overview" },
    src: "/images/visual/animal-vr/cat-skeleton-system.png",
  },
  {
    title: { zh: "补充 UI 界面", en: "Additional UI screens" },
    subtitle: { zh: "课程列表 / 引导弹窗", en: "Course list / onboarding dialogs" },
    src: "/images/visual/animal-vr/pig-guide-1.webp",
    carousel: [
      "/images/visual/animal-vr/pig-guide-1.webp",
      "/images/visual/animal-vr/pig-guide-2.webp",
      "/images/visual/animal-vr/pig-course-list.png",
    ],
  },
];

export const anatomyModuleHero = "/images/visual/animal-vr/dog-anatomy-scene-2.webp";
