import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import styles from "./Intro.module.scss";

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  rotate: number;
};

const createConfettiPieces = (count: number): ConfettiPiece[] => {
  return Array.from({ length: count }, (_, index) => {
    const angle = (Math.PI * 2 * index) / count;
    const radius = 140 + Math.random() * 140;
    const jitter = 30;

    return {
      id: index,
      x: Math.cos(angle) * radius + (Math.random() * jitter - jitter / 2),
      y: Math.sin(angle) * radius + (Math.random() * jitter - jitter / 2),
      size: 6 + Math.random() * 10,
      hue: Math.floor(Math.random() * 360),
      rotate: Math.floor(Math.random() * 360),
    };
  });
};

export function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const confettiPieces = useMemo(() => createConfettiPieces(36), []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const element = introRef.current;

    if (!element) {
      return;
    }

    let rafId = 0;
    let isTicking = false;

    const updateProgress = () => {
      isTicking = false;
      const collapseDistance = Math.max(window.innerHeight * 0.8, 480);
      const progress = Math.min(1, window.scrollY / collapseDistance);

      element.style.setProperty("--scroll-progress", progress.toFixed(3));
    };

    const onScroll = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      className={styles.intro}
      data-loaded={isLoaded}
      ref={introRef}
    >
      <div className={styles.confettiStage} aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className={styles.confettiPiece}
            style={
              {
                "--spread-x": `${piece.x}px`,
                "--spread-y": `${piece.y}px`,
                "--piece-size": `${piece.size}px`,
                "--piece-rotate": `${piece.rotate}deg`,
                "--piece-hue": piece.hue.toString(),
              } as CSSProperties
            }
          />
        ))}
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Intro Animation</p>
          <h1 className={styles.title}>Scroll to pull the confetti inward</h1>
          <p className={styles.subtitle}>
            On load, the confetti expands from the center and holds in place. As
            you scroll, it collapses back toward the center and fades out.
          </p>
          <div className={styles.instructions}>
            Scroll down to see the collapse motion in action.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <p className={styles.sectionText}>
          Each piece of confetti has a unique offset from the center. We animate
          those offsets with a CSS custom property driven by scroll progress.
          The only JavaScript here is updating the progress value on scroll.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Make it yours</h2>
        <p className={styles.sectionText}>
          Swap the shapes, add SVGs, or make the confetti respond to different
          scroll distances. You can also tie the progress to scroll animations
          for other elements on the page.
        </p>
      </section>
    </div>
  );
}
