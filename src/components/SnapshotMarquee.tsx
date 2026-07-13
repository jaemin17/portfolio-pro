import type { CSSProperties } from "react";
import styles from "./SnapshotMarquee.module.css";

export type SnapshotMarqueeItem = {
  alt: string;
  imageSrc?: string;
};

type SnapshotMarqueeProps = {
  items: SnapshotMarqueeItem[];
};

const rotations = [-3, 2, -4, 3, -2, 4] as const;

function assetSrc(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

function MarqueeItem({
  item,
  index,
}: {
  item: SnapshotMarqueeItem;
  index: number;
}) {
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={styles.item}
      style={{ "--item-rotate": `${rotation}deg` } as CSSProperties}
    >
      {item.imageSrc ? (
        <img
          className={styles.image}
          src={assetSrc(item.imageSrc)}
          alt={item.alt}
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}
    </div>
  );
}

export function SnapshotMarquee({ items }: SnapshotMarqueeProps) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Snapshots">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <div className={styles.group}>
            {items.map((item, index) => (
              <MarqueeItem key={`a-${item.alt}`} item={item} index={index} />
            ))}
          </div>
          <div className={styles.group} aria-hidden="true">
            {items.map((item, index) => (
              <MarqueeItem key={`b-${item.alt}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
