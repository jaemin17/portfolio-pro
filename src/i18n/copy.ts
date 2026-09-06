import type { Locale } from "./config";

type HomeSection = {
  label: string;
};

export type CurrentlyBuildingItem = {
  title: string;
  description: string;
  meta?: string;
  tags?: string[];
  categoryIds?: string[];
  href?: string;
  imageSrc?: string;
  imageVariants?: { src: string; width: number }[];
  frameColor?: string;
  framed?: boolean;
  preserveImageRatio?: boolean;
};

export type CurrentlyBuilding = {
  label: string;
  items: CurrentlyBuildingItem[];
};

export type ToolProjectItem = {
  title: string;
  description: string;
  meta?: string;
  tags?: string[];
  categoryIds?: string[];
  href?: string;
  availability?: "comingSoon";
  statusLabel?: string;
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  /** Optional narrower variants for responsive loading, e.g. [{ src, width }] */
  imageVariants?: { src: string; width: number }[];
  /** Outer frame color behind the media */
  frameColor?: string;
  /** When false, media sits flush with no colored frame */
  framed?: boolean;
  /** When true, image cards keep the source image ratio instead of being cropped */
  preserveImageRatio?: boolean;
};

export type ToolProjects = {
  label: string;
  loadMore?: string;
  items: ToolProjectItem[];
};

export type WorkIndexProject = {
  title: string;
  description: string;
  href?: string;
};

export type WorkIndexItem = {
  id: string;
  label: string;
  summary: string;
  projects: WorkIndexProject[];
};

export type WorkIndex = {
  label: string;
  items: WorkIndexItem[];
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
    alt: "Portrait in orange flowers",
    imageSrc: "/images/snapshots/snapshot-08.webp",
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
  {
    alt: "Canal view with a passing boat",
    imageSrc: "/images/snapshots/snapshot-14.webp",
  },
  {
    alt: "Sunset road by the sea",
    imageSrc: "/images/snapshots/snapshot-15.webp",
  },
  {
    alt: "Pink flowers beside a garden pond",
    imageSrc: "/images/snapshots/snapshot-16.webp",
  },
];

export type HomeCopy = {
  greetingHi: string;
  name: string;
  lead: string;
  focus: string;
  email: string;
  copyEmail: string;
  copiedEmail: string;
  workIndex: WorkIndex;
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
  manufacturing: "/videos/visual/home-vr-education.mp4",
  newVisualWork: "/images/visual/new-visual-work-home-en.png",
  vectorTo3dIcons: "/images/visual/vector-to-3d-icons.webp",
  cloudPlatform: "/images/visual/cloud-platform.webp",
  game: "/images/visual/cosmic-blaze-hero.webp",
  arAirbnb: "/images/visual/ar-airbnb-scene-1.webp",
} as const;

/* Home cards render at ≤416 CSS px (--content-max), so the 832w variant
   covers 2x displays; the 1440w original is only needed beyond that. */
const visualImageVariants = {
  vectorTo3dIcons: [
    { src: "/images/visual/vector-to-3d-icons-832w.webp", width: 832 },
    { src: "/images/visual/vector-to-3d-icons.webp", width: 1440 },
  ],
  cloudPlatform: [
    { src: "/images/visual/cloud-platform-832w.webp", width: 832 },
    { src: "/images/visual/cloud-platform.webp", width: 1024 },
  ],
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
} as const;

const buildingMedia = {
  selfly: "/images/selfly0/hero-750w.webp",
  stickyNotes: "/images/tools/personal-tools-cover.png",
  next: "/images/tools/next-cover.png",
  tday: "/images/tools/tday-cover.png",
} as const;

const copy: Record<Locale, HomeCopy> = {
  zh: {
    greetingHi: "Hi,",
    name: "I'm Jiamin!",
    lead: "我是产品体验设计师，也独立把产品做出来。曾服务海尔、GE 等品牌，最近在做 Selfly。",
    focus: "最近在做 Selfly。",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "复制邮箱",
    copiedEmail: "已复制",
    workIndex: {
      label: "作品索引",
      items: [
        {
          id: "all",
          label: "全部",
          summary: "所有精选项目。",
          projects: [],
        },
        {
          id: "zero-to-one",
          label: "0→1 产品",
          summary: "从真实需求出发，定义产品结构、核心路径与长期使用体验。",
          projects: [
            {
              title: "Selfly",
              description: "独立开发中的个人记录与反思产品。",
              href: "/projects/selfly",
            },
            {
              title: "Sticky Notes",
              description: "先放下临时信息、想法和片段。",
              href: "https://jaemin17.github.io/sticky-notes/",
            },
            {
              title: "Next",
              description: "把想法摊开到空间画布上。",
              href: "https://jaemin17.github.io/plan/",
            },
            {
              title: "T-Day",
              description: "在截止日期前把任务安排好。",
              href: "https://jaemin17.github.io/t-day/",
            },
          ],
        },
        {
          id: "product-systems",
          label: "产品系统",
          summary: "偏工具、平台与设计系统的项目，强调可用性和持续迭代。",
          projects: [
            {
              title: "Model Editor",
              description: "材质、颜色和模型结构编辑体验。",
              href: "/projects/model-editor",
            },
            {
              title: "Sticky Notes",
              description: "轻量便签，用来接住临时想法。",
              href: "https://jaemin17.github.io/sticky-notes/",
            },
            {
              title: "Next",
              description: "空间画布上的思考与整理。",
              href: "https://jaemin17.github.io/plan/",
            },
            {
              title: "T-Day",
              description: "面向截止日期的任务安排。",
              href: "https://jaemin17.github.io/t-day/",
            },
            {
              title: "Sync Space",
              description: "头显、平板与网页之间的跨端课堂协同。",
            },
          ],
        },
        {
          id: "xr-3d",
          label: "XR / 3D",
          summary: "3D 内容、VR 训练和多端沉浸式学习体验。",
          projects: [
            {
              title: "VR 教育与实训",
              description: "工业设备与动物医学方向的 VR 训练体验。",
              href: "/projects/vr-education",
            },
            {
              title: "Model Editor",
              description: "服务 3D 课件生产的模型编辑工具。",
              href: "/projects/model-editor",
            },
            {
              title: "Sync Space",
              description: "跨端 VR 课堂协同方案。",
            },
          ],
        },
        {
          id: "visual-systems",
          label: "视觉系统",
          summary: "图标、视觉系统和面向复杂内容的界面表达。",
          projects: [
            {
              title: "3D Engine App Icon Design",
              description: "将复杂发动机模型转译为软件入口图标。",
              href: "/projects/engine-icon",
            },
            {
              title: "云平台",
              description: "面向 VR 与 3D 教学资源的云端资源库界面。",
            },
            {
              title: "New Visual Work",
              description: "新增视觉作品预览与表达探索。",
              href: "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
            },
          ],
        },
      ],
    },
    currentlyBuilding: {
      label: "0→1 独立开发",
      items: [
        {
          title: "Selfly",
          description: "记录、回看与自我探索",
          meta: "独立产品 · iOS",
          tags: ["0→1 产品", "iOS UX", "交互设计"],
          categoryIds: ["zero-to-one"],
          href: "/projects/selfly",
          imageSrc: buildingMedia.selfly,
          frameColor: "#fff8ec",
        },
        {
          title: "Sticky Notes",
          description: "先放下临时信息、想法和片段",
          meta: "便签 · Web",
          tags: ["Web 工具", "工作流设计", "产品系统"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/sticky-notes/",
          imageSrc: buildingMedia.stickyNotes,
          frameColor: "#fff8ec",
        },
        {
          title: "Next",
          description: "把想法摊开到空间画布上",
          meta: "空间画布 · Web",
          tags: ["Web 工具", "工作流设计", "产品系统"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/plan/",
          imageSrc: buildingMedia.next,
          frameColor: "#fff8ec",
        },
        {
          title: "T-Day",
          description: "在截止日期前把任务安排好",
          meta: "倒计时 · Web",
          tags: ["Web 工具", "工作流设计", "产品系统"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/t-day/",
          imageSrc: buildingMedia.tday,
          frameColor: "#f7f8fc",
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
          meta: "3D 课件工具 · Web",
          tags: ["Product Design", "3D Tools", "Design Systems"],
          categoryIds: ["product-systems", "xr-3d"],
          href: "/projects/model-editor",
          videoSrc: toolVideos.model,
          posterSrc: toolPosters.model,
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR Interactive Script Engine",
          description: "模型资源浏览与预览",
          meta: "XR 工具 · Web",
          tags: ["Asset Browser", "XR Workflow", "Interaction"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
          videoSrc: toolVideos.xrScript,
          posterSrc: toolPosters.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR Courseware",
          description: "3D 内容播放与课件演示",
          meta: "课程工具 · XR",
          tags: ["Courseware", "3D Playback", "Teaching"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
          videoSrc: toolVideos.ppt,
          posterSrc: toolPosters.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "跨端 VR 课堂协同：头显学习、平板控场、网页管资源",
          meta: "多端协同 · XR",
          tags: ["Cross-device", "VR Classroom", "Product System"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
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
          title: "VR 教育与实训",
          description:
            "工业设备实训与生物医疗解剖等 VR 仿真软件的界面与视觉设计。",
          meta: "VR 仿真 · XR",
          tags: ["VR Simulation", "Training UX", "Visual System"],
          categoryIds: ["xr-3d", "visual-systems"],
          href: "/projects/vr-education",
          videoSrc: visualMedia.manufacturing,
          posterSrc: visualPosters.manufacturing,
          framed: false,
        },
        {
          title: "New Visual Work",
          description: "临时新增的视觉作品预览。",
          meta: "视觉探索 · Prototype",
          tags: ["Visual Design", "Prototype", "Interface"],
          categoryIds: ["visual-systems"],
          href: "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
          imageSrc: visualMedia.newVisualWork,
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "3D Engine App Icon Design",
          description: "将复杂发动机模型转译为可识别的软件入口图标。",
          meta: "图标系统 · 3D",
          tags: ["Icon Design", "3D Rendering", "Visual System"],
          categoryIds: ["visual-systems", "xr-3d"],
          href: "/projects/engine-icon",
          imageSrc: visualMedia.vectorTo3dIcons,
          imageVariants: [...visualImageVariants.vectorTo3dIcons],
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "云平台",
          description: "面向 VR 与 3D 教学资源的云端资源库界面。",
          meta: "资源平台 · Web",
          tags: ["Cloud Platform", "Resource Library", "UI System"],
          categoryIds: ["product-systems", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
          imageSrc: visualMedia.cloudPlatform,
          imageVariants: [...visualImageVariants.cloudPlatform],
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "游戏概念",
          description: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
          meta: "游戏概念 · AR/VR",
          tags: ["Game UI", "Spatial UX", "Concept"],
          categoryIds: ["xr-3d", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
          imageSrc: visualMedia.game,
          imageVariants: [...visualImageVariants.game],
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR 增强现实 Airbnb 体验设计，将数字信息融入真实住宿场景。",
          meta: "住宿体验 · AR",
          tags: ["AR UX", "Travel", "Spatial Interface"],
          categoryIds: ["xr-3d", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "暂不开放",
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
      cta: "给我写信吧",
      copied: "邮箱已复制",
    },
    footerRole: "Product Designer · UX/UI · Independent Builder",
  },
  en: {
    greetingHi: "Hi,",
    name: "I'm Jiamin!",
    lead: "A product experience designer who also builds products — I've designed for brands like Haier and GE, and I'm currently building Selfly.",
    focus: "I'm currently building Selfly.",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "Copy email",
    copiedEmail: "Copied",
    workIndex: {
      label: "Work Index",
      items: [
        {
          id: "all",
          label: "All",
          summary: "All selected projects.",
          projects: [],
        },
        {
          id: "zero-to-one",
          label: "0→1 Products",
          summary:
            "Product structures, core flows, and long-term use patterns built from real needs.",
          projects: [
            {
              title: "Selfly",
              description: "An independently built product for reflection and self-discovery.",
              href: "/projects/selfly",
            },
            {
              title: "Sticky Notes",
              description: "A place to park temporary notes and fragments.",
              href: "https://jaemin17.github.io/sticky-notes/",
            },
            {
              title: "Next",
              description: "A spatial canvas for laying thoughts out.",
              href: "https://jaemin17.github.io/plan/",
            },
            {
              title: "T-Day",
              description: "A countdown for lining up tasks before a deadline.",
              href: "https://jaemin17.github.io/t-day/",
            },
          ],
        },
        {
          id: "product-systems",
          label: "Product Systems",
          summary:
            "Tool, platform, and design-system-oriented work focused on usability and iteration.",
          projects: [
            {
              title: "Model Editor",
              description: "Editing materials, colors, and model structure for 3D assets.",
              href: "/projects/model-editor",
            },
            {
              title: "Sticky Notes",
              description: "Lightweight notes for catching temporary ideas.",
              href: "https://jaemin17.github.io/sticky-notes/",
            },
            {
              title: "Next",
              description: "Thinking and arranging on a spatial canvas.",
              href: "https://jaemin17.github.io/plan/",
            },
            {
              title: "T-Day",
              description: "Task planning against a deadline.",
              href: "https://jaemin17.github.io/t-day/",
            },
            {
              title: "Sync Space",
              description:
                "Cross-platform classroom collaboration across headset, tablet, and web.",
            },
          ],
        },
        {
          id: "xr-3d",
          label: "XR / 3D",
          summary: "3D content, VR training, and multi-device immersive learning experiences.",
          projects: [
            {
              title: "VR Education & Training",
              description: "VR training for industrial equipment and animal medicine scenarios.",
              href: "/projects/vr-education",
            },
            {
              title: "Model Editor",
              description: "A model-editing tool for 3D courseware production.",
              href: "/projects/model-editor",
            },
            {
              title: "Sync Space",
              description: "A cross-platform VR classroom collaboration concept.",
            },
          ],
        },
        {
          id: "visual-systems",
          label: "Visual Systems",
          summary:
            "Icons, visual systems, and interface expression for complex product content.",
          projects: [
            {
              title: "3D Engine App Icon Design",
              description: "Translating a complex engine model into a software entry icon.",
              href: "/projects/engine-icon",
            },
            {
              title: "Cloud Platform",
              description: "Cloud resource library UI for VR and 3D training assets.",
            },
            {
              title: "New Visual Work",
              description: "A visual work preview and expression study.",
              href: "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
            },
          ],
        },
      ],
    },
    currentlyBuilding: {
      label: "0→1 Builds",
      items: [
        {
          title: "Selfly",
          description: "A journal for reflection and self-discovery",
          meta: "Independent Product · iOS",
          tags: ["0→1 Product", "iOS UX", "Interaction Design"],
          categoryIds: ["zero-to-one"],
          href: "/projects/selfly",
          imageSrc: buildingMedia.selfly,
          frameColor: "#fff8ec",
        },
        {
          title: "Sticky Notes",
          description: "Park temporary notes and fragments",
          meta: "Notes · Web",
          tags: ["Web Tools", "Workflow Design", "Product Systems"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/sticky-notes/",
          imageSrc: buildingMedia.stickyNotes,
          frameColor: "#fff8ec",
        },
        {
          title: "Next",
          description: "Lay thoughts out on a spatial canvas",
          meta: "Spatial canvas · Web",
          tags: ["Web Tools", "Workflow Design", "Product Systems"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/plan/",
          imageSrc: buildingMedia.next,
          frameColor: "#fff8ec",
        },
        {
          title: "T-Day",
          description: "Line up tasks before a deadline",
          meta: "Countdown · Web",
          tags: ["Web Tools", "Workflow Design", "Product Systems"],
          categoryIds: ["zero-to-one", "product-systems"],
          href: "https://jaemin17.github.io/t-day/",
          imageSrc: buildingMedia.tday,
          frameColor: "#f7f8fc",
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
          meta: "3D Courseware Tool · Web",
          tags: ["Product Design", "3D Tools", "Design Systems"],
          categoryIds: ["product-systems", "xr-3d"],
          href: "/projects/model-editor",
          videoSrc: toolVideos.model,
          posterSrc: toolPosters.model,
          frameColor: toolFrameColors.model,
        },
        {
          title: "XR Interactive Script Engine",
          description: "Browse and preview model assets",
          meta: "XR Tool · Web",
          tags: ["Asset Browser", "XR Workflow", "Interaction"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
          videoSrc: toolVideos.xrScript,
          posterSrc: toolPosters.xrScript,
          frameColor: toolFrameColors.xrScript,
        },
        {
          title: "XR Courseware",
          description: "3D content playback and course demos",
          meta: "Course Tool · XR",
          tags: ["Courseware", "3D Playback", "Teaching"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
          videoSrc: toolVideos.ppt,
          posterSrc: toolPosters.ppt,
          frameColor: toolFrameColors.ppt,
        },
        {
          title: "Sync Space",
          description: "Cross-platform VR classroom: headset learning, tablet control, web resource hub",
          meta: "Cross-device System · XR",
          tags: ["Cross-device", "VR Classroom", "Product System"],
          categoryIds: ["product-systems", "xr-3d"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
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
          title: "VR Education & Training",
          description:
            "UI and visual design for VR simulation software across industrial training and biomedical anatomy.",
          meta: "VR Simulation · XR",
          tags: ["VR Simulation", "Training UX", "Visual System"],
          categoryIds: ["xr-3d", "visual-systems"],
          href: "/projects/vr-education",
          videoSrc: visualMedia.manufacturing,
          posterSrc: visualPosters.manufacturing,
          framed: false,
        },
        {
          title: "New Visual Work",
          description: "Temporary visual work preview.",
          meta: "Visual Exploration · Prototype",
          tags: ["Visual Design", "Prototype", "Interface"],
          categoryIds: ["visual-systems"],
          href: "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
          imageSrc: visualMedia.newVisualWork,
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "3D Engine App Icon Design",
          description: "Translating a complex engine model into a recognizable app icon.",
          meta: "Icon System · 3D",
          tags: ["Icon Design", "3D Rendering", "Visual System"],
          categoryIds: ["visual-systems", "xr-3d"],
          href: "/projects/engine-icon",
          imageSrc: visualMedia.vectorTo3dIcons,
          imageVariants: [...visualImageVariants.vectorTo3dIcons],
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "Cloud Platform",
          description: "Cloud resource library UI for VR and 3D training assets.",
          meta: "Resource Platform · Web",
          tags: ["Cloud Platform", "Resource Library", "UI System"],
          categoryIds: ["product-systems", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
          imageSrc: visualMedia.cloudPlatform,
          imageVariants: [...visualImageVariants.cloudPlatform],
          framed: false,
          preserveImageRatio: true,
        },
        {
          title: "Game Concept",
          description: "UI visual design for a VR/AR desk-device experience game.",
          meta: "Game Concept · AR/VR",
          tags: ["Game UI", "Spatial UX", "Concept"],
          categoryIds: ["xr-3d", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
          imageSrc: visualMedia.game,
          imageVariants: [...visualImageVariants.game],
          framed: false,
        },
        {
          title: "AR Airbnb",
          description:
            "AR experience design that blends digital information into real lodging spaces.",
          meta: "Lodging Experience · AR",
          tags: ["AR UX", "Travel", "Spatial Interface"],
          categoryIds: ["xr-3d", "visual-systems"],
          availability: "comingSoon",
          statusLabel: "Coming soon",
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
      cta: "write me a letter",
      copied: "email copied",
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
