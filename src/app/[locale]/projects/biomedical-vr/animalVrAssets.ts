export type VisualShot = {
  title: { zh: string; en: string };
  subtitle: { zh: string; en: string };
  src: string;
  carousel?: readonly string[];
};

export const biomedicalVrHero = "/images/visual/animal-vr/hero.png";

export const structureModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "犬体结构", en: "Canine body structure" },
    subtitle: { zh: "骨骼 / 肌肉 / 外观", en: "Skeleton / muscle / surface" },
    src: "/images/visual/animal-vr/dog-layer-overview.webp",
    carousel: [
      "/images/visual/animal-vr/dog-layer-overview.webp",
      "/images/visual/animal-vr/dog-muscle-detail.webp",
    ],
  },
  {
    title: { zh: "大脑的秘密", en: "Secrets of the brain" },
    subtitle: { zh: "首页展示", en: "Home screen" },
    src: "/images/visual/animal-vr/brain-home.webp",
  },
  {
    title: { zh: "小脑结构", en: "Cerebellum structure" },
    subtitle: { zh: "恢复 / 整体移动", en: "Reset / move as whole" },
    src: "/images/visual/animal-vr/brain-detail-1.webp",
    carousel: [
      "/images/visual/animal-vr/brain-detail-1.webp",
      "/images/visual/animal-vr/brain-exploded-overview.webp",
    ],
  },
  {
    title: { zh: "耳朵的结构", en: "Ear structure" },
    subtitle: { zh: "首页展示", en: "Home screen" },
    src: "/images/visual/animal-vr/ear-home.png",
  },
  {
    title: { zh: "耳蜗结构", en: "Cochlea structure" },
    subtitle: { zh: "结构说明", en: "Structure overview" },
    src: "/images/visual/animal-vr/ear-detail-1.png",
  },
];

export const anatomyModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "狗解剖", en: "Dog anatomy" },
    subtitle: { zh: "结构教学 / 交互状态", en: "Structure teaching / interaction states" },
    src: "/images/visual/animal-vr/dog-anatomy-scene-1.webp",
    carousel: [
      "/images/visual/animal-vr/dog-anatomy-scene-1.webp",
      "/images/visual/animal-vr/dog-anatomy-scene-3.webp",
    ],
  },
  {
    title: { zh: "猪解剖", en: "Pig anatomy" },
    subtitle: { zh: "交互状态", en: "Interaction states" },
    src: "/images/visual/animal-vr/pig-scene-3.png",
  },
  {
    title: { zh: "猪解剖", en: "Pig anatomy" },
    subtitle: { zh: "结构教学 / 场景概览", en: "Structure teaching / scene overview" },
    src: "/images/visual/animal-vr/pig-scene-2.png",
    carousel: [
      "/images/visual/animal-vr/pig-scene-2.png",
      "/images/visual/animal-vr/pig-scene-1.png",
    ],
  },
  {
    title: { zh: "猪解剖", en: "Pig anatomy" },
    subtitle: { zh: "课程列表 / 引导弹窗", en: "Course list / onboarding dialogs" },
    src: "/images/visual/animal-vr/pig-course-list.png",
    carousel: [
      "/images/visual/animal-vr/pig-course-list.png",
      "/images/visual/animal-vr/pig-guide-1.png",
      "/images/visual/animal-vr/pig-guide-2.png",
    ],
  },
  {
    title: { zh: "牛解剖", en: "Cattle anatomy" },
    subtitle: { zh: "交互状态", en: "Interaction states" },
    src: "/images/visual/animal-vr/cow-scene-2.webp",
  },
  {
    title: { zh: "牛解剖", en: "Cattle anatomy" },
    subtitle: { zh: "结构教学 / 新手指引", en: "Structure teaching / onboarding" },
    src: "/images/visual/animal-vr/cow-scene-1.webp",
    carousel: [
      "/images/visual/animal-vr/cow-scene-1.webp",
      "/images/visual/animal-vr/cow-guide-1.webp",
    ],
  },
];

export const anatomyModuleHero = "/images/visual/animal-vr/dog-anatomy-scene-2.webp";
