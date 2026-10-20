import { useEffect } from "react";

// Feeds the pointer position into [data-spotlight] cards (--mx/--my) for a soft glow that follows the cursor.
// Desktop pointers only; touch devices and reduced-motion visitors never pay for the listener.
const useSpotlight = () => {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || !document.documentElement.classList.contains("motion-ok")) return undefined;

    let frame = 0;
    let lastEvent = null;
    const update = () => {
      frame = 0;
      const target = lastEvent.target.closest?.("[data-spotlight]");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${lastEvent.clientX - rect.left}px`);
      target.style.setProperty("--my", `${lastEvent.clientY - rect.top}px`);
    };
    const onMove = (event) => {
      lastEvent = event;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
};

export default useSpotlight;
