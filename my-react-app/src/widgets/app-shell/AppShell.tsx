import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "./SiteHeader.tsx";
import { SiteFooter } from "./SiteFooter.tsx";

import {
  scrollElementIntoView,
  scrollToElementById,
  scrollToTop,
} from "../../shared/lib/ScrollBehaviour.ts";

import styles from "./AppShell.module.css";

export function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");

    if (hash) {
      const id = decodeURIComponent(hash);

      requestAnimationFrame(() => {
        if (!scrollToElementById(id)) {
          const el = document.getElementById(id);

          if (el) {
            scrollElementIntoView(el);
          }
        }
      });

      return;
    }

    scrollToTop();
  }, [location.pathname, location.search, location.hash]);

  scrollToTop();

  return (
    <div className={styles.shell}>
      <SiteHeader />

      <main className={styles.main}>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
