import { NavLink, Link } from "react-router";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logoTipo}>
          <img
            src="/natcace-home/catghost.svg"
            alt="cat ghost logo"
            className={styles.logoImage}
          />
          <Link to="/" className={styles.logo}>
            natcace
          </Link>
        </div>

        <nav>
          <ul className={styles.nav}>
            {/* <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                About
              </NavLink>
            </li> */}
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                Blog
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/contact" className={styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
