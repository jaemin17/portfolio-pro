import type { Locale } from "./config";

type HomeSection = {
  label: string;
  empty: string;
};

export type HomeCopy = {
  name: string;
  lead: string;
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
    lead: "我设计、构建并持续打磨值得长期使用的产品，专注于 UI/UX 与产品体验。",
    focus: "最近正在开发 Selfly，并探索 AI 的更多可能。",
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
    lead: "I design, build, and keep refining products worth using for the long term, with a focus on UI/UX and product experience.",
    focus: "I've been building Selfly lately, and exploring more possibilities with AI.",
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
