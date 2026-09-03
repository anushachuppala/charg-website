import { Fragment, type ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  titleTone?: "primary" | "white";
  subtitleTone?: "default" | "white";
  align?: "center" | "start";
  as?: "header" | "div" | "fragment";
  titleId?: string;
  className?: string;
  innerClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  trailingSpacing?: "default" | "none";
  headingLevel?: "h1" | "h2";
  /**
   * When true (inside AnimatedSection), adds data-gsap markers for scroll
   * entrance animations. Typography classes are unchanged.
   */
  animated?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleTone = "primary",
  subtitleTone = "default",
  align = "center",
  as = "header",
  titleId,
  className,
  innerClassName,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  trailingSpacing = "default",
  headingLevel = "h2",
  animated = false,
}: SectionHeaderProps) {
  const headingClass =
    headingLevel === "h1"
      ? titleTone === "white"
        ? "h1-white"
        : "h1-primary"
      : titleTone === "white"
        ? "h2-white"
        : "h2-primary";

  const subtitleBaseClass =
    subtitleTone === "white" ? "18-white" : "neutral-600";
  const HeadingTag = headingLevel;

  const innerClass = [
    styles.inner,
    align === "start" ? styles.innerStart : null,
    trailingSpacing === "none" ? styles.innerNoTrailMargin : null,
    innerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const showEyebrow = Boolean(eyebrow?.trim());
  const showTitle =
    title != null &&
    title !== "" &&
    (typeof title !== "string" || Boolean(title.trim()));
  const showSubtitle = subtitle != null && subtitle !== "";

  const titleClass = `${headingClass} ${styles.title}${
    titleClassName ? ` ${titleClassName}` : ""
  }`;

  const inner = (
    <div className={innerClass}>
      {showEyebrow ? (
        <p
          {...(animated ? { "data-gsap": "eyebrow" } : {})}
          className={`16-secondary ${styles.eyebrow}${
            eyebrowClassName ? ` ${eyebrowClassName}` : ""
          }`}
        >
          {eyebrow?.trim()}
        </p>
      ) : null}

      {showTitle ? (
        <HeadingTag
          id={titleId}
          className={titleClass}
          {...(animated ? { "data-gsap": "title" } : {})}
        >
          {title}
        </HeadingTag>
      ) : null}

      {showSubtitle ? (
        <p
          {...(animated ? { "data-gsap": "subtitle" } : {})}
          className={`${subtitleBaseClass} ${styles.subtitle}${
            subtitleClassName ? ` ${subtitleClassName}` : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );

  if (as === "fragment") return <Fragment>{inner}</Fragment>;

  const Tag = as;
  return <Tag className={className}>{inner}</Tag>;
}
