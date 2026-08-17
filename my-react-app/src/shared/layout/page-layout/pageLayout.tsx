import type { PropsWithChildren, ReactNode } from "react";
import styles from "./PageLayout.module.css";

export type PageLayoutProps = PropsWithChildren<{
  title: ReactNode;
  description?: ReactNode;
  rightSlot?: ReactNode;
}>;

export function PageLayout({
  title,
  description,
  rightSlot,
  children,
}: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          {description ? (
            <div className={styles.subTitle}>{description}</div>
          ) : null}
        </div>
        {rightSlot ? <div>{rightSlot}</div> : null}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
