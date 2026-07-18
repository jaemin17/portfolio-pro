import type { Locale } from "./config";

type HomeSection = {
  label: string;
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
  href?: string;
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  /** Optional narrower variants for responsive loading, e.g. [{ src, width }] */
  imageVariants?: { src: string; width: number }[];
  /** Outer frame color behind the media */
  frameColor?: string;
  /** When false, media sits flush with no colored frame */
  framed?: boolean;
};

export type ToolProjects = {
  label: string;
  loadMore?: string;
  items: ToolProjectItem[];
};

export type SnapshotItem = {
  alt: string;
  imageSrc?: string;
};

export type Snapshots = {
  label: string;
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
  snapshots: Snapshots;
  envelopeMail: {
    label: string;
    cta: string;
    copied: string;
  };
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
  biomedical: "/videos/visual/highmodes.mp4",
  game: "/images/visual/cosmic-blaze-hero.webp",
  arAirbnb: "/images/visual/ar-airbnb-scene-1.webp",
} as const;

/* Home cards render at ≤416 CSS px (--content-max), so the 832w variant
   covers 2x displays; the 1440w original is only needed beyond that. */
const visualImageVariants = {
  game: [
    { src: "/images/visual/cosmic-blaze-hero-832w.webp", width: 832 },
    { src: "/images/visual/cosmic-blaze-hero.webp", width: 1440 },
  ],
  arAirbnb: [
    { src: "/images/visual/ar-airbnb-scene-1-832w.webp", width: 832 },
    { src: "/images/visual/ar-airbnb-scene-1.webp", width: 1440 },
  ],
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
      label: "Side Projects",
      items: [
        {
          title: "Selfly",
          description: "记录、回看与自我探索",
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
      label: "Designed to Use",
      loadMore: "加载更多",
      items: [
        {
          title: "Model Editor",
          description: "材质、颜色和模型结构编辑",
          href: "/projects/model-editor",
          videoSrc: toolVideos.model,
          posterSrc: toolPosters.model,
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR Interactive Script Engine",
          description: "模型资源浏览与预览",
          videoSrc: toolVideos.xrScript,
          posterSrc: toolPosters.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR Courseware",
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
      label: "Visual Works",
      loadMore: "加载更多",
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
          title: "游戏概念",
          description: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
          imageSrc: visualMedia.game,
          imageVariants: [...visualImageVariants.game],
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR 增强现实 Airbnb 体验设计，将数字信息融入真实住宿场景。",
          imageSrc: visualMedia.arAirbnb,
          imageVariants: [...visualImageVariants.arAirbnb],
          framed: false,
        },
      ],
    },
    caseStudies: {
      label: "Case Studies",
    },
    snapshots: {
      label: "Snapshots",
      items: snapshotPlaceholders,
    },
    envelopeMail: {
      label: "Let's work together",
      cta: "给我写信",
      copied: "已复制！",
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
      label: "Designed to Use",
      loadMore: "Load more",
      items: [
        {
          title: "Model Editor",
          description: "Edit materials, colors, and model structure",
          href: "/projects/model-editor",
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
      label: "Visual Works",
      loadMore: "Load more",
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
          title: "Game Concept",
          description: "UI visual design for a VR/AR desk-device experience game.",
          imageSrc: visualMedia.game,
          imageVariants: [...visualImageVariants.game],
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR experience design that blends digital information into real lodging spaces.",
          imageSrc: visualMedia.arAirbnb,
          imageVariants: [...visualImageVariants.arAirbnb],
          framed: false,
        },
      ],
    },
    caseStudies: {
      label: "Case Studies",
    },
    snapshots: {
      label: "Snapshots",
      items: snapshotPlaceholders,
    },
    envelopeMail: {
      label: "Let's work together",
      cta: "write me a mail",
      copied: "mail copied!",
    },
    footerRole: "Product Designer · UX/UI · Independent Builder",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}

export type AboutStrengthItem = {
  title: string;
  description: string;
};

export type AboutWorkItem = {
  company: string;
  role: string;
  period: string;
};

export type AboutCopy = {
  greeting: string;
  tagline: string;
  bio: string[];
  whatIDo: {
    label: string;
    items: string[];
  };
  strengths: {
    label: string;
    items: AboutStrengthItem[];
  };
  workExperience: {
    label: string;
    summary: string;
    items: AboutWorkItem[];
  };
  closing: string;
};

const aboutCopy: Record<Locale, AboutCopy> = {
  zh: {
    greeting: "About",
    tagline: "我是一个喜欢**从真实问题出发**做产品的 UI/UX 设计师。",
    bio: [
      "我喜欢**先把东西做出来**，**在真实体验中寻找答案**。我喜欢尝试不同的解决方案。每次设计对我来说，都是一次重新理解用户和产品的过程。我希望做出的产品**让人感到自然和舒服**。我喜欢和别人讨论想法，在交流中发现新的可能。",
      "在日常生活中，我喜欢**亲手制作喜欢的东西、探索不同材质**，把脑海中的想法一点点变成真实的作品。",
    ],
    whatIDo: {
      label: "我做什么",
      items: [
        "产品体验设计",
        "UI / UX 设计",
        "设计系统搭建",
        "Web & App Design",
        "视觉与创意表达",
      ],
    },
    strengths: {
      label: "我擅长",
      items: [
        {
          title: "长期视角",
          description: "我更关注产品为什么能被持续使用，而不只是短暂吸引用户。",
        },
        {
          title: "简化复杂",
          description: "我喜欢整理混乱的信息与想法，把复杂的问题变成清晰自然的体验。",
        },
        {
          title: "自驱落地",
          description: "我享受从 0 开始打磨产品，并持续迭代直到真正上线。",
        },
      ],
    },
    workExperience: {
      label: "工作经历",
      summary:
        "我曾为中国移动、海尔、德赛西威、美国通用家电 GE Appliance 等品牌设计产品，也主导过 VR 教育平台与软件设计。",
      items: [
        { company: "深圳希夷微象科技", role: "产品体验设计师", period: "2023 – 2025" },
        { company: "KMAX 科骏-深圳", role: "产品体验设计师", period: "2019 – 2023" },
        { company: "VIA 广州威纳", role: "UI 设计师", period: "2017 – 2019" },
        { company: "ISAR 伊飒尔-广州", role: "UIUE 实验室设计师", period: "2016 – 2017" },
      ],
    },
    closing: "很高兴认识你 :) ✰",
  },
  en: {
    greeting: "About",
    tagline: "I'm a UI/UX designer who **starts from real problems**.",
    bio: [
      "I like to **build things first** and **find answers through real experience**. I enjoy trying different solutions — every design is a chance to re-understand users and the product. I want what I make to **feel natural and comfortable**. I like discussing ideas with others and finding new possibilities through conversation.",
      "In everyday life, I like **making things with my hands and exploring different materials**, slowly turning ideas in my head into real objects.",
    ],
    whatIDo: {
      label: "What I do",
      items: [
        "Product experience design",
        "UI / UX design",
        "Design systems",
        "Web & App design",
        "Visual & creative expression",
      ],
    },
    strengths: {
      label: "What I'm good at",
      items: [
        {
          title: "Long-term thinking",
          description: "I care more about why a product keeps getting used than a brief moment of attention.",
        },
        {
          title: "Simplifying complexity",
          description: "I like untangling messy information and ideas into a clear, natural experience.",
        },
        {
          title: "Self-driven execution",
          description: "I enjoy building products from zero and iterating until they truly ship.",
        },
      ],
    },
    workExperience: {
      label: "Work experience",
      summary:
        "I've designed products for brands like China Mobile, Haier, Desay SV, and GE Appliances, and led VR education platform and software design.",
      items: [
        { company: "Shenzhen Xiyi Micro-Elephant Tech", role: "Product Experience Designer", period: "2023 – 2025" },
        { company: "KMAX — Shenzhen", role: "Product Experience Designer", period: "2019 – 2023" },
        { company: "VIA — Guangzhou", role: "UI Designer", period: "2017 – 2019" },
        { company: "ISAR — Guangzhou", role: "UIUE Lab Designer", period: "2016 – 2017" },
      ],
    },
    closing: "Nice to meet you :) ✰",
  },
};

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
