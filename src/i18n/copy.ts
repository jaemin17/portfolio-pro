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

export type HomeCopy = {
  name: string;
  lead: string;
  focus: string;
  email: string;
  copyEmail: string;
  copiedEmail: string;
  currentlyBuilding: CurrentlyBuilding;
  selectedWork: HomeSection;
  caseStudies: HomeSection;
  about: HomeSection;
  footerRole: string;
};

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
    selectedWork: {
      label: "精选项目",
      empty: "暂无项目，稍后更新。",
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
    selectedWork: {
      label: "Selected Work",
      empty: "No projects yet. Coming soon.",
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
