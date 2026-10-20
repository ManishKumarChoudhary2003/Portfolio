import { useEffect } from "react";

// Reveals [data-reveal] elements as they scroll into view. Only active when index.html
// has added the `motion-ok` class (IntersectionObserver available, no reduced-motion preference).
const useReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion-ok")) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pending = Array.from(document.querySelectorAll("[data-reveal]"));

    const reveal = (el) => {
      el.classList.add("is-revealed");
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
        // Anchor jumps can skip elements entirely; reveal anything already above the fold too.
        pending = pending.filter((el) => {
          if (el.classList.contains("is-revealed")) return false;
          if (el.getBoundingClientRect().top < window.innerHeight) {
            reveal(el);
            return false;
          }
          return true;
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    pending.forEach((el) => observer.observe(el));

    // If the user turns on reduced motion mid-visit, show everything immediately.
    const onMotionChange = (event) => {
      if (event.matches) {
        root.classList.remove("motion-ok");
        observer.disconnect();
      }
    };
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);
};

export default useReveal;
