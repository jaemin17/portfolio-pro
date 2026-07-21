import type { VisualShot } from "../biomedical-vr/animalVrAssets";

export const smartManufacturingHero =
  "/images/visual/smart-manufacturing/transmission-home.png";

export const transmissionModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "变速器结构说明", en: "Transmission structure" },
    subtitle: { zh: "信息面板", en: "Info panel" },
    src: "/images/visual/smart-manufacturing/transmission-detail.png",
    carousel: [
      "/images/visual/smart-manufacturing/transmission-detail.png",
      "/images/visual/smart-manufacturing/transmission-exploded.png",
    ],
  },
];

export const equipmentModuleShots: readonly VisualShot[] = [
  {
    title: { zh: "工业机器人", en: "Industrial robot" },
    subtitle: { zh: "首页展示", en: "Home screen" },
    src: "/images/visual/smart-manufacturing/robot-home.png",
  },
  {
    title: { zh: "机器人机构说明", en: "Robot mechanism" },
    subtitle: { zh: "教学子页面", en: "Teaching subpage" },
    src: "/images/visual/smart-manufacturing/robot-detail.png",
  },
  {
    title: { zh: "注塑两板式模具", en: "Two-plate injection mold" },
    subtitle: { zh: "首页展示", en: "Home screen" },
    src: "/images/visual/smart-manufacturing/molding-home.png",
  },
  {
    title: { zh: "注塑模具装配", en: "Injection mold assembly" },
    subtitle: { zh: "操作子页面", en: "Operation subpage" },
    src: "/images/visual/smart-manufacturing/molding-detail.png",
  },
];
