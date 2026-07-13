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
const sequenceRepeats = 4;
const baseDurationSeconds = 42;

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

function MarqueeGroup({
  items,
  ariaHidden,
}: {
  items: SnapshotMarqueeItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div className={styles.group} aria-hidden={ariaHidden}>
      {Array.from({ length: sequenceRepeats }).map((_, repeatIndex) =>
        items.map((item, itemIndex) => {
          const index = repeatIndex * items.length + itemIndex;

          return (
            <MarqueeItem
              key={`${repeatIndex}-${item.alt}`}
              item={item}
              index={index}
            />
          );
        }),
      )}
    </div>
  );
}

export function SnapshotMarquee({ items }: SnapshotMarqueeProps) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Snapshots">
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={
            {
              "--snapshot-marquee-duration": `${baseDurationSeconds * sequenceRepeats}s`,
            } as CSSProperties
          }
        >
          <MarqueeGroup items={items} />
          <MarqueeGroup items={items} ariaHidden />
        </div>
      </div>
    </section>
  );
}
