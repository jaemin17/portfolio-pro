"use client";

import Link from "next/link";
import { useState } from "react";
import { LazyVideo } from "@/components/LazyVideo";
import type { Locale } from "@/i18n/config";
import type { ToolProjectItem } from "@/i18n/copy";
import { localePath } from "@/i18n/paths";
import styles from "./page.module.css";

function assetSrc(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

function ToolProjectCard({
  item,
  locale,
  className,
  showCaption = true,
}: {
  item: ToolProjectItem;
  locale: Locale;
  className?: string;
  showCaption?: boolean;
}) {
  const classes = [styles.toolCard, className].filter(Boolean).join(" ");
  const framed = item.framed !== false;
  const frameClass = framed
    ? styles.toolFrame
    : `${styles.toolFrame} ${styles.toolFrameBare}`;

  const media =
    item.videoSrc && item.posterSrc ? (
      <LazyVideo
        className={styles.toolVideo}
        src={assetSrc(item.videoSrc)}
        posterSrc={assetSrc(item.posterSrc)}
        label={item.title}
      />
    ) : item.imageSrc ? (
      <img
        className={styles.toolVideo}
        src={assetSrc(item.imageSrc)}
        srcSet={item.imageVariants
          ?.map((variant) => `${assetSrc(variant.src)} ${variant.width}w`)
          .join(", ")}
        sizes={item.imageVariants ? "(max-width: 480px) 100vw, 416px" : undefined}
        alt={item.title}
        loading="lazy"
        decoding="async"
      />
    ) : null;

  const cardBody = (
    <div
      className={frameClass}
      style={
        framed && item.frameColor
          ? { backgroundColor: item.frameColor }
          : undefined
      }
    >
      {media}
    </div>
  );

  return (
    <article className={classes}>
      {item.href?.startsWith("/") ? (
        <Link href={localePath(locale, item.href)} className={styles.toolCardLink}>
          {cardBody}
        </Link>
      ) : item.href ? (
        <a
          className={styles.toolCardLink}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardBody}
        </a>
      ) : (
        cardBody
      )}
      {showCaption ? (
        <div className={styles.toolCaption}>
          <p className={styles.toolTitle}>{item.title}</p>
        </div>
      ) : null}
    </article>
  );
}

type ToolProjectListProps = {
  items: ToolProjectItem[];
  locale: Locale;
  loadMoreLabel?: string;
  initialCount?: number;
  showCaption?: boolean;
  className?: string;
  itemClassName?: (index: number) => string | undefined;
};

export function ToolProjectList({
  items,
  locale,
  loadMoreLabel,
  initialCount = 2,
  showCaption = true,
  className,
  itemClassName,
}: ToolProjectListProps) {
  const [expanded, setExpanded] = useState(false);
  const needsCollapse = Boolean(loadMoreLabel) && items.length > initialCount;
  const visibleItems =
    expanded || !needsCollapse ? items : items.slice(0, initialCount);

  return (
    <div className={className}>
      {visibleItems.map((item, index) => (
        <ToolProjectCard
          key={item.title}
          item={item}
          locale={locale}
          showCaption={showCaption}
          className={itemClassName?.(index)}
        />
      ))}
      {needsCollapse && !expanded ? (
        <button
          type="button"
          className={styles.loadMore}
          onClick={() => setExpanded(true)}
        >
          {loadMoreLabel}
        </button>
      ) : null}
    </div>
  );
}
