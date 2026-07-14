import type { Locale } from "./config";

type HomeSection = {
  label: string;
  empty: string;
};

export type CurrentlyBuildingItem = {
  title: string;
  description: string;
  meta: string;
  iconSrc: string;
  iconAlt: string;
  href?: string;
};

export type CurrentlyBuilding = {
  label: string;
  items: CurrentlyBuildingItem[];
};

export type ToolProjectItem = {
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  /** Outer frame color behind the media */
  frameColor?: string;
  /** When false, media sits flush with no colored frame */
  framed?: boolean;
};

export type ToolProjects = {
  label: string;
  items: ToolProjectItem[];
};

export type SnapshotItem = {
  alt: string;
  imageSrc?: string;
};

export type Snapshots = {
  items: SnapshotItem[];
};

const snapshotPlaceholders: SnapshotItem[] = [
  {
    alt: "Photo with flowers",
    imageSrc: "/images/snapshots/snapshot-06.webp",
  },
  {
    alt: "Illustrated portrait with smile pin",
    imageSrc: "/images/snapshots/snapshot-07.webp",
  },
  {
    alt: "Portrait in orange flowers",
    imageSrc: "/images/snapshots/snapshot-08.webp",
  },
  {
    alt: "Beaded flower bracelets",
    imageSrc: "/images/snapshots/snapshot-09.webp",
  },
  {
    alt: "Cat portrait",
    imageSrc: "/images/snapshots/snapshot-10.webp",
  },
  {
    alt: "Forest garden path",
    imageSrc: "/images/snapshots/snapshot-11.webp",
  },
  {
    alt: "Temple ruins portrait",
    imageSrc: "/images/snapshots/snapshot-12.webp",
  },
];

export type HomeCopy = {
  name: string;
  lead: string;
  focus: string;
  email: string;
  copyEmail: string;
  copiedEmail: string;
  currentlyBuilding: CurrentlyBuilding;
  toolProjects: ToolProjects;
  visualProjects: ToolProjects;
  caseStudies: HomeSection;
  about: HomeSection;
  snapshots: Snapshots;
  footerRole: string;
};

const toolVideos = {
  model: "/videos/tools/model.mp4",
  xrScript: "/videos/tools/xr-script.mp4",
  ppt: "/videos/tools/ppt.mp4",
  syncSpace: "/videos/tools/sync-space.mp4",
} as const;

const toolPosters = {
  model: "/images/posters/tools/model.webp",
  xrScript: "/images/posters/tools/xr-script.webp",
  ppt: "/images/posters/tools/ppt.webp",
  syncSpace: "/images/posters/tools/sync-space.webp",
} as const;

const toolFrameColors = {
  model: "#f8f8f8",
  xrScript: "#d7e8ff",
  ppt: "#efe6ff",
  syncSpace: "#2f2f2f",
} as const;

const visualMedia = {
  manufacturing: "/videos/visual/immersive.mp4",
  automotive: "/images/visual/desay-sv-hero.webp",
  biomedical: "/videos/visual/highmodes.mp4",
  game: "/images/visual/cosmic-blaze-hero.webp",
  arAirbnb: "/images/visual/ar-airbnb-scene-1.webp",
} as const;

const visualPosters = {
  manufacturing: "/images/posters/visual/immersive.webp",
  biomedical: "/images/posters/visual/highmodes.webp",
} as const;

const copy: Record<Locale, HomeCopy> = {
  zh: {
    name: "Hey visitor，我是 Jiamin Li。",
    lead: "我设计并持续打磨值得长期使用的产品，专注于 UI/UX 与产品体验。",
    focus: "最近正在开发 Selfly，并探索 AI 的更多可能。",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "复制邮箱",
    copiedEmail: "已复制",
    currentlyBuilding: {
      label: "正在构建",
      items: [
        {
          title: "Selfly",
          description: "正在开发中的产品",
          meta: "iOS",
          iconSrc: "/selfly-icon.webp",
          iconAlt: "Selfly",
          href: "/projects/selfly",
        },
        {
          title: "Sticky Notes",
          description: "实验性的便签网站",
          meta: "Web",
          iconSrc: "/sticky-notes-icon.svg",
          iconAlt: "Sticky Notes",
          href: "https://jaemin17.github.io/sticky-notes/",
        },
      ],
    },
    toolProjects: {
      label: "工具类项目",
      items: [
        {
          title: "模型编辑器",
          description: "材质、颜色和模型结构编辑",
          videoSrc: toolVideos.model,
          posterSrc: toolPosters.model,
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR交互剧本设计引擎",
          description: "模型资源浏览与预览",
          videoSrc: toolVideos.xrScript,
          posterSrc: toolPosters.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR课件",
          description: "3D 内容播放与课件演示",
          videoSrc: toolVideos.ppt,
          posterSrc: toolPosters.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "多端课堂协同与设备管理",
          videoSrc: toolVideos.syncSpace,
          posterSrc: toolPosters.syncSpace,
          frameColor: toolFrameColors.syncSpace,
        },
      ],
    },
    visualProjects: {
      label: "视觉类项目",
      items: [
        {
          title: "生物医疗VR",
          description:
            "动物模型、解剖训练、手术步骤和课程资源相关的 VR 教育软件界面。",
          videoSrc: visualMedia.biomedical,
          posterSrc: visualPosters.biomedical,
          framed: false,
        },
        {
          title: "智能制造 VR",
          description:
            "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
          videoSrc: visualMedia.manufacturing,
          posterSrc: visualPosters.manufacturing,
          framed: false,
        },
        {
          title: "车载UI",
          description:
            "车载娱乐与控制系统界面，包含驾驶、音乐、收音机和车辆设置等功能模块。",
          imageSrc: visualMedia.automotive,
          framed: false,
        },
        {
          title: "游戏概念",
          description: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
          imageSrc: visualMedia.game,
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR 增强现实 Airbnb 体验设计，将数字信息融入真实住宿场景。",
          imageSrc: visualMedia.arAirbnb,
          framed: false,
        },
      ],
    },
    caseStudies: {
      label: "Case Studies",
      empty: "暂无 case study，稍后更新。",
    },
    about: {
      label: "About",
      empty: "个人介绍稍后更新。",
    },
    snapshots: {
      items: snapshotPlaceholders,
    },
    footerRole: "Product Designer · UX/UI · Independent Builder",
  },
  en: {
    name: "Hey visitor, I'm Jiamin Li.",
    lead: "I design and keep refining products worth using for the long term, with a focus on UI/UX and product experience.",
    focus: "I've been building Selfly lately, and exploring more possibilities with AI.",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "Copy email",
    copiedEmail: "Copied",
    currentlyBuilding: {
      label: "Currently building",
      items: [
        {
          title: "Selfly",
          description: "Product in progress",
          meta: "iOS",
          iconSrc: "/selfly-icon.webp",
          iconAlt: "Selfly",
          href: "/projects/selfly",
        },
        {
          title: "Sticky Notes",
          description: "An experimental sticky-notes site",
          meta: "Web",
          iconSrc: "/sticky-notes-icon.svg",
          iconAlt: "Sticky Notes",
          href: "https://jaemin17.github.io/sticky-notes/",
        },
      ],
    },
    toolProjects: {
      label: "Tool Projects",
      items: [
        {
          title: "Model Editor",
          description: "Edit materials, colors, and model structure",
          videoSrc: toolVideos.model,
          posterSrc: toolPosters.model,
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR Interactive Script Engine",
          description: "Browse and preview model assets",
          videoSrc: toolVideos.xrScript,
          posterSrc: toolPosters.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR Courseware",
          description: "3D content playback and course demos",
          videoSrc: toolVideos.ppt,
          posterSrc: toolPosters.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "Multi-device classroom collaboration and device management",
          videoSrc: toolVideos.syncSpace,
          posterSrc: toolPosters.syncSpace,
          frameColor: toolFrameColors.syncSpace,
        },
      ],
    },
    visualProjects: {
      label: "Visual Projects",
      items: [
        {
          title: "Biomedical VR",
          description:
            "VR education software for animal models, anatomy training, surgical steps, and course resources.",
          videoSrc: visualMedia.biomedical,
          posterSrc: visualPosters.biomedical,
          framed: false,
        },
        {
          title: "Smart Manufacturing VR",
          description:
            "Training views and teaching UI for industrial equipment such as transmissions, robots, and injection molds.",
          videoSrc: visualMedia.manufacturing,
          posterSrc: visualPosters.manufacturing,
          framed: false,
        },
        {
          title: "Automotive UI",
          description:
            "In-vehicle entertainment and control interfaces covering driving, music, radio, and vehicle settings.",
          imageSrc: visualMedia.automotive,
          framed: false,
        },
        {
          title: "Game Concept",
          description: "UI visual design for a VR/AR desk-device experience game.",
          imageSrc: visualMedia.game,
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR experience design that blends digital information into real lodging spaces.",
          imageSrc: visualMedia.arAirbnb,
          framed: false,
        },
      ],
    },
    caseStudies: {
      label: "Case Studies",
      empty: "No case studies yet. Coming soon.",
    },
    about: {
      label: "About",
      empty: "Bio coming soon.",
    },
    snapshots: {
      items: snapshotPlaceholders,
    },
    footerRole: "Product Designer · UX/UI · Independent Builder",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}
