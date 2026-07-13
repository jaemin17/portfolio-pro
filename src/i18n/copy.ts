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
  videoSrc: string;
  /** Outer frame color behind the video */
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
