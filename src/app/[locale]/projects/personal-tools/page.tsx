import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/i18n/assets";
import { isLocale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "./personalTools.module.css";

type PersonalToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PersonalToolsPage({
  params,
}: PersonalToolsPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam;
  const zh = locale === "zh";
  const tools = [
    {
      name: "Sticky Notes",
      description: zh ? "随手放下临时信息和想法" : "A place for temporary notes and ideas",
      href: "https://jaemin17.github.io/sticky-notes/",
      image: "/images/tools/personal-tools-cover.png",
      width: 1407,
      height: 786,
    },
    {
      name: "Next",
      description: zh ? "把想法摊开，重新排列" : "Lay out thoughts and rearrange them",
      href: "https://jaemin17.github.io/plan/",
      image: "/images/tools/next-cover.png",
      width: 1024,
      height: 617,
    },
    {
      name: "T-Day",
      description: zh ? "围绕截止日期安排任务" : "Plan tasks around a deadline",
      href: "https://jaemin17.github.io/t-day/",
      image: "/images/tools/tday-cover.png",
      width: 1024,
      height: 684,
    },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1>{zh ? "个人工具" : "Personal Tools"}</h1>
        <p>{zh
          ? "为自己的日常需要，做了一些简单、顺手的小工具。"
          : "A few simple tools I built for my own everyday needs."}</p>
      </header>
      <section className={styles.grid} aria-label={zh ? "工具体验入口" : "Try the tools"}>
        {tools.map((tool) => (
          <a
            key={tool.name}
            className={styles.card}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${tool.name} — ${zh ? "打开体验（新标签页）" : "Try it (opens in a new tab)"}`}
          >
            <div className={styles.preview}>
              <Image
                src={assetPath(tool.image)}
                alt={zh ? `${tool.name} 界面预览` : `${tool.name} interface preview`}
                width={tool.width}
                height={tool.height}
                sizes="(max-width: 767px) 100vw, 33vw"
              />
            </div>
            <div className={styles.caption}>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <span className={styles.open}>{zh ? "打开体验" : "Try it"} <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </section>
      <Link className={styles.back} href={localePath(locale, "/")}>
        {zh ? "← 返回首页" : "← Back to home"}
      </Link>
    </main>
  );
}
