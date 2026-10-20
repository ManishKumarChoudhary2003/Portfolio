import styles from "./BrandMark.module.css";

// The site mark (also the favicon): an "M" drawn as a small service graph with one active node.
const BrandMark = ({ className = "" }) => (
  <svg className={`${styles.mark} ${className}`} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="15" className={styles.tile} />
    <polyline points="16,46 16,19 32,36 48,19 48,46" className={styles.line} />
    {[[16, 46], [16, 19], [48, 19], [48, 46]].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.6" className={styles.node} />
    ))}
    <circle cx="32" cy="36" r="6.6" className={styles.active} />
  </svg>
);

export default BrandMark;
