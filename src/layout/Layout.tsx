import type { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
