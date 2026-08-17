import type { ComponentPropsWithoutRef } from "react";
import styles from "./container.module.css";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={[styles.container, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
