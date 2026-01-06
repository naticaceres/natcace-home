import { NavLink } from "react-router";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href="/" className={styles.logo}>
          natcace
        </a>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/blog" className={styles.navLink}>
                Blog
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
