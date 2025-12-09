import styles from './Header.module.scss';

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
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects" className={styles.navLink}>
                Projects
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#blog" className={styles.navLink}>
                Blog
              </a>
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
