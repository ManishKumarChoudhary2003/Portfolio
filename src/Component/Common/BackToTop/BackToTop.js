import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styles from "./BackToTop.module.css";

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Floating "back to top" control with a ring that fills as the page is read.
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      ringRef.current?.style.setProperty("stroke-dashoffset", String(CIRCUMFERENCE * (1 - progress)));
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : "true"}
    >
      <svg className={styles.ring} viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={RADIUS} className={styles.track} />
        <circle
          ref={ringRef}
          cx="24"
          cy="24"
          r={RADIUS}
          className={styles.progress}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <FiArrowUp aria-hidden="true" className={styles.icon} />
    </a>
  );
};

export default BackToTop;
