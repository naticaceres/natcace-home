import styles from './SideNav.module.scss';

export function SideNav() {
  return (
    <nav className={styles.sideNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" className={`${styles.navLink} ${styles.active}`}>
            <span>🏠</span>
            <span>Home</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            <span>👤</span>
            <span>About</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>
            <span>💼</span>
            <span>Projects</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink}>
            <span>🛠️</span>
            <span>Skills</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#blog" className={styles.navLink}>
            <span>📝</span>
            <span>Blog</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            <span>📧</span>
            <span>Contact</span>
          </a>
        </li>
      </ul>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Quick Links</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#resume" className={styles.navLink}>
              <span>📄</span>
              <span>Resume</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#github" className={styles.navLink}>
              <span>🔗</span>
              <span>GitHub</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#linkedin" className={styles.navLink}>
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
