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
  imageSrc?: string;
  /** Outer frame color behind the media */
  frameColor?: string;
};

export type ToolProjects = {
  label: string;
  items: ToolProjectItem[];
};

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
  footerRole: string;
};

const toolVideos = {
  model: "/videos/tools/model.mp4",
  xrScript: "/videos/tools/xr-script.mp4",
  ppt: "/videos/tools/ppt.mp4",
  syncSpace: "/videos/tools/sync-space.mp4",
} as const;

const toolFrameColors = {
  model: "#f3f3f3",
  xrScript: "#d7e8ff",
  ppt: "#efe6ff",
  syncSpace: "#2f2f2f",
} as const;

const visualMedia = {
  manufacturing: "/videos/visual/immersive.mp4",
  automotive: "/images/visual/desay-sv-hero.png",
  biomedical: "/videos/visual/highmodes.mp4",
  game: "/images/visual/cosmic-blaze-hero.png",
  arAirbnb: "/images/visual/ar-airbnb-scene-1.png",
} as const;

const visualFrameColors = {
  manufacturing: "#f3f3f3",
  automotive: "#eef7f2",
  biomedical: "#dcefff",
  game: "#f3f3f3",
  arAirbnb: "#f3f3f3",
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
          iconSrc: "/selfly-icon.png",
          iconAlt: "Selfly",
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
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR交互剧本设计引擎",
          description: "模型资源浏览与预览",
          videoSrc: toolVideos.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR课件",
          description: "3D 内容播放与课件演示",
          videoSrc: toolVideos.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "多端课堂协同与设备管理",
          videoSrc: toolVideos.syncSpace,
          frameColor: toolFrameColors.syncSpace,
        },
      ],
    },
    visualProjects: {
      label: "视觉类项目",
      items: [
        {
          title: "智能制造 VR",
          description:
            "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
          videoSrc: visualMedia.manufacturing,
          frameColor: visualFrameColors.manufacturing,
        },
        {
          title: "车载UI",
          description:
            "车载娱乐与控制系统界面，包含驾驶、音乐、收音机和车辆设置等功能模块。",
          imageSrc: visualMedia.automotive,
          frameColor: visualFrameColors.automotive,
        },
        {
          title: "生物医疗VR",
          description:
            "动物模型、解剖训练、手术步骤和课程资源相关的 VR 教育软件界面。",
          videoSrc: visualMedia.biomedical,
          frameColor: visualFrameColors.biomedical,
        },
        {
          title: "游戏概念",
          description: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
          imageSrc: visualMedia.game,
          frameColor: visualFrameColors.game,
        },
        {
          title: "AR Airbnb",
          description:
            "AR 增强现实 Airbnb 体验设计，将数字信息融入真实住宿场景。",
          imageSrc: visualMedia.arAirbnb,
          frameColor: visualFrameColors.arAirbnb,
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
          iconSrc: "/selfly-icon.png",
          iconAlt: "Selfly",
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
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR Interactive Script Engine",
          description: "Browse and preview model assets",
          videoSrc: toolVideos.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR Courseware",
          description: "3D content playback and course demos",
          videoSrc: toolVideos.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "Multi-device classroom collaboration and device management",
          videoSrc: toolVideos.syncSpace,
          frameColor: toolFrameColors.syncSpace,
        },
      ],
    },
    visualProjects: {
      label: "Visual Projects",
      items: [
        {
          title: "Smart Manufacturing VR",
          description:
            "Training views and teaching UI for industrial equipment such as transmissions, robots, and injection molds.",
          videoSrc: visualMedia.manufacturing,
          frameColor: visualFrameColors.manufacturing,
        },
        {
          title: "Automotive UI",
          description:
            "In-vehicle entertainment and control interfaces covering driving, music, radio, and vehicle settings.",
          imageSrc: visualMedia.automotive,
          frameColor: visualFrameColors.automotive,
        },
        {
          title: "Biomedical VR",
          description:
            "VR education software for animal models, anatomy training, surgical steps, and course resources.",
          videoSrc: visualMedia.biomedical,
          frameColor: visualFrameColors.biomedical,
        },
        {
          title: "Game Concept",
          description: "UI visual design for a VR/AR desk-device experience game.",
          imageSrc: visualMedia.game,
          frameColor: visualFrameColors.game,
        },
        {
          title: "AR Airbnb",
          description:
            "AR experience design that blends digital information into real lodging spaces.",
          imageSrc: visualMedia.arAirbnb,
          frameColor: visualFrameColors.arAirbnb,
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
    footerRole: "Product Designer · UX/UI · Independent Builder",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}
