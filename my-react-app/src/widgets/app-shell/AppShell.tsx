import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader.tsx";
import { SiteFooter } from "./SiteFooter.tsx";

import styles from "./AppShell.module.css";

export function AppShell() {
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
