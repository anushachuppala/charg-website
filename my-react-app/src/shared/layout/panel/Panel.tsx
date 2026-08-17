import type { ComponentPropsWithoutRef } from "react";
import styles from "./Panel.module.css";

export type PanelProps = ComponentPropsWithoutRef<"div">;

export function Panel({ children, className, ...props }: PanelProps) {
  return (
    <div
      className={[styles.panel, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
