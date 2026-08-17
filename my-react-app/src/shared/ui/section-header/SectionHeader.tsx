import { Fragment, type ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  /** Omitted when empty or not set — only the title (and optional subtitle) render. */
  eyebrow?: string;
  title: ReactNode;
  /** Optional line below the title; omitted entirely when not set. */
  subtitle?: ReactNode;
  /**
   * `primary` — `h2-primary` (default). `white` — `h2-white` for dark backgrounds.
   */
  titleTone?: "primary" | "white";
  /**
   * `center` — stacked, max-width block (homepage sections).
   * `start` — left-aligned block (e.g. beside copy in a split layout).
   */
  align?: "center" | "start";
  /**
   * Wrapping element: defaults to `"header"`.
   * Use `"div"` for a neutral wrapper, or `"fragment"` to render children
   * without any wrapper element (useful inside flex/grid parents where
   * the eyebrow and title must remain direct children).
   */
  as?: "header" | "div" | "fragment";
  titleId?: string;
  className?: string;
  /** Merged onto the inner flex column (layout width, spacing overrides). */
  innerClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  /**
   * `default` — space below the header block (stacked homepage sections).
   * `none` — no extra margin (e.g. split layouts where the parent uses `gap`).
   */
  trailingSpacing?: "default" | "none";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleTone = "primary",
  align = "center",
  as = "header",
  titleId,
  className,
  innerClassName,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  trailingSpacing = "default",
}: SectionHeaderProps) {
  const headingClass = titleTone === "white" ? "h2-white" : "h2-primary";
  const subtitleToneClass = titleTone === "white" ? "18-white" : "neutral-600";

  const innerClass = [
    styles.inner,
    align === "start" ? styles.innerStart : null,
    trailingSpacing === "none" ? styles.innerNoTrailMargin : null,
    innerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const showEyebrow = Boolean(eyebrow?.trim());

  const inner = (
    <div className={innerClass}>
      {showEyebrow ? (
        <p
          className={`16-secondary ${styles.eyebrow}${
            eyebrowClassName ? ` ${eyebrowClassName}` : ""
          }`}
        >
          {eyebrow?.trim()}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={`${headingClass} ${styles.title}${
          titleClassName ? ` ${titleClassName}` : ""
        }`}
      >
        {title}
      </h2>
      {subtitle != null && subtitle !== "" ? (
        <p
          className={`${subtitleToneClass} ${styles.subtitle}${
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
