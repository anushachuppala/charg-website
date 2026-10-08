export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getAppHeaderOffset(extra = 12): number {
  if (typeof document === "undefined") return 0;

  const rootStyles = window.getComputedStyle(document.documentElement);

  const appHeader =
    Number.parseFloat(rootStyles.getPropertyValue("--app-header-height")) || 0;

  return appHeader + extra;
}

export type ScrollWindowToOptions = {
  top: number;
  left?: number;
  immediate?: boolean;
};

export function scrollWindowTo({
  top,
  left = 0,
  immediate = false,
}: ScrollWindowToOptions): void {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top,
    left,
    behavior: immediate || prefersReducedMotion() ? "auto" : "smooth",
  });
}

export function scrollToTop(options?: { immediate?: boolean }): void {
  scrollWindowTo({
    top: 0,
    left: 0,
    immediate: options?.immediate ?? true,
  });
}

export function scrollElementIntoView(
  el: Element,
  options?: {
    offset?: number;
    immediate?: boolean;
  },
): void {
  if (typeof window === "undefined") return;

  const offset = options?.offset ?? -getAppHeaderOffset();

  const immediate = options?.immediate ?? false;

  const top = el.getBoundingClientRect().top + window.scrollY + offset;

  scrollWindowTo({
    top: Math.max(0, top),
    immediate,
  });
}

export function scrollToElementById(id: string): boolean {
  const el = document.getElementById(id);

  if (!el) return false;

  scrollElementIntoView(el);

  return true;
}
