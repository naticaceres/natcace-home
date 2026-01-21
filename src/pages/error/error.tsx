import { Link } from "react-router";
import styles from "./error.module.scss";

export function Error() {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.description}>Page not found</h2>
      <Link to="/" className={styles.navLink}>
        Go to home
      </Link>
    </div>
  );
}
