import type { ComponentPropsWithoutRef } from "react";
import styles from "./Section.module.css";

export type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={[styles.section, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
