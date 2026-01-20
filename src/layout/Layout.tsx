import type { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styles from "./Layout.module.scss";
// import { Intro } from "../pages/intro/Intro";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {/* <Intro /> */}
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
