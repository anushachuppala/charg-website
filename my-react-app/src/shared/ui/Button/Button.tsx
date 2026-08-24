import styles from "./Button.module.css";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary" | "Tertiary" | "outline";
  className?: string;
};

function Button({ children, variant, className = "" }: ButtonProps) {
  return (
    <button className={`${styles[variant]} ${className}`}>{children}</button>
  );
}

export default Button;
