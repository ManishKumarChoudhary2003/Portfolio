import { useEffect, useRef, useState } from "react";

const DURATION = 1400;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const motionAllowed = () => document.documentElement.classList.contains("motion-ok");

// Counts up to `value` the first time it scrolls into view. Screen readers get the final value only.
const StatCounter = ({ value, suffix, label, className, numberClassName, labelClassName }) => {
  const ref = useRef(null);
  const decimals = (String(value).split(".")[1] || "").length;
  const format = (n) => n.toFixed(decimals);
  const [display, setDisplay] = useState(() => format(motionAllowed() ? 0 : value));

  useEffect(() => {
    if (!motionAllowed()) return undefined;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / DURATION, 1);
          setDisplay(format(easeOut(t) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `format` only depends on `value`
  }, [value]);

  return (
    <div ref={ref} className={className}>
      <dt className={labelClassName}>{label}</dt>
      <dd className={numberClassName}>
        <span aria-hidden="true">
          {display}
          {suffix}
        </span>
        <span className="visually-hidden">
          {value}
          {suffix}
        </span>
      </dd>
    </div>
  );
};

export default StatCounter;
