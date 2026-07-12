import type { Locale } from "./config";

type HomeSection = {
  label: string;
  empty: string;
};

export type HomeCopy = {
  name: string;
  lead: string;
  body: string;
  focus: string;
  email: string;
  copyEmail: string;
  copiedEmail: string;
  selectedWork: HomeSection;
  caseStudies: HomeSection;
  about: HomeSection;
  footerRole: string;
};

const copy: Record<Locale, HomeCopy> = {
  zh: {
    name: "Hi，我是 Jiamin。",
    lead: "一名专注于 UI/UX 与产品体验的设计师。",
    body: "我设计、开发，并持续打磨真正有人愿意长期使用的产品。",
    focus: "最近正在独立开发 Selfly，同时探索 AI 工作流和 Web 交互体验。",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "复制邮箱",
    copiedEmail: "已复制",
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
    name: "Hi, I'm Jiamin.",
    lead: "A designer focused on UI/UX and product experience.",
    body: "I design, build, and keep refining products that people actually want to use for the long term.",
    focus: "I've been independently building Selfly lately, while exploring AI workflows and web interaction experiences.",
    email: "lijiaemin1993@gmail.com",
    copyEmail: "Copy email",
    copiedEmail: "Copied",
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
