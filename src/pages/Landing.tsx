import styles from './Landing.module.scss';

export function Landing() {
  return (
    <div className={styles.landing}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to My Personal Website</h1>
        <p className={styles.subtitle}>
          I'm a developer passionate about creating amazing digital experiences.
        </p>
        <div className={styles.cta}>
          <a href="#about" className={styles.primaryButton}>
            Learn More
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get in Touch
          </a>
        </div>
      </section>

      <section className={styles.section} id="about">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </section>

      <section className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 1</h3>
            <p className={styles.cardText}>
              Description of an amazing project I've worked on.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 2</h3>
            <p className={styles.cardText}>
              Another fantastic project showcasing my skills.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Project 3</h3>
            <p className={styles.cardText}>
              A third project demonstrating my expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
