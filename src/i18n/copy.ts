import type { Locale } from "./config";

type HomeSection = {
  label: string;
  empty: string;
};

export type HomeCopy = {
  name: string;
  lead: string;
  body: string;
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
    name: "我是 Jiamin Li。",
    lead: "偏产品型的 UX/UI 设计师，关注独立产品开发与 B2B 工具体验。",
    body: "项目与 case study 正在整理中，稍后更新。",
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
    name: "I'm Jiamin Li.",
    lead: "A product-minded UX/UI designer focused on indie apps and B2B tool experiences.",
    body: "Projects and case studies are being prepared and will be updated soon.",
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
