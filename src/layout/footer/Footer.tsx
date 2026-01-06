import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {currentYear} Made with 🐈‍⬛ by natcace.
        </p>
        <ul className={styles.socialLinks}>
          <li className={styles.socialItem}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              GitHub
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
