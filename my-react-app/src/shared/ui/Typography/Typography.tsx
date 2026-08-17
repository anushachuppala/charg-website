import React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "p" | "body" | "caption";
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ variant, children, className = "" }: TypographyProps) => {
  const Tag = variant === "body" || variant === "caption" ? "p" : variant;

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;
