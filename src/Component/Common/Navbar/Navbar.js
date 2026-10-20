import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import BrandMark from "../BrandMark/BrandMark";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

const DESKTOP_QUERY = "(min-width: 900px)";

const readTheme = () => document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(readTheme);
  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
    setTheme(next);
  };

  return (
    <button type="button" className={styles.iconButton} onClick={toggle} aria-label={`Switch to ${next} theme`}>
      {theme === "dark" ? <FiSun aria-hidden="true" size={18} /> : <FiMoon aria-hidden="true" size={18} />}
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTucked, setIsTucked] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const progressRef = useRef(null);

  const closeMenu = useCallback((returnFocus = false) => {
    // Release the scroll lock synchronously so a clicked anchor can scroll before React re-renders.
    document.documentElement.classList.remove("menu-open");
    setMenuOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Solid header after scrolling, plus a reading-progress line driven without re-renders.
  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // Only tuck after real downward movement past the hero; any upward scroll brings it back.
      if (Math.abs(y - lastY) > 6) {
        setIsTucked(y > lastY && y > 320);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("--progress", progress.toFixed(4));
      setIsScrolled(window.scrollY > 8);
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

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const ids = [...navItems.map((item) => item.id), "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when resizing to desktop.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", isMenuOpen);
    if (!isMenuOpen) return undefined;

    menuRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event) => {
      if (event.matches) closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isMenuOpen, closeMenu]);

  // Close the mobile menu when keyboard focus moves outside the header.
  const onHeaderFocus = () => setIsTucked(false);

  const onHeaderBlur = (event) => {
    if (isMenuOpen && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
  };

  const headerClass = [
    styles.header,
    isScrolled || isMenuOpen ? styles.scrolled : "",
    isTucked && !isMenuOpen ? styles.tucked : "",
  ].join(" ");

  return (
    <header className={headerClass} onBlur={onHeaderBlur} onFocus={onHeaderFocus}>
      <div className={`container ${styles.bar}`}>
        <a href="#home" className={styles.brand} onClick={() => closeMenu()}>
          <BrandMark />
          <span className={styles.brandName}>Manish Kumar Choudhary</span>
        </a>

        <nav aria-label="Primary" className={styles.nav}>
          <div
            id="primary-menu"
            ref={menuRef}
            className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
            <ul className={styles.links}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.link}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    onClick={() => closeMenu()}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn btn--primary ${styles.contact}`}
              aria-current={activeSection === "contact" ? "true" : undefined}
              onClick={() => closeMenu()}
            >
              Contact
            </a>
          </div>

          <ThemeToggle />

          <button
            ref={toggleRef}
            type="button"
            className={`${styles.iconButton} ${styles.toggle}`}
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX aria-hidden="true" size={22} /> : <FiMenu aria-hidden="true" size={22} />}
            <span className="visually-hidden">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </nav>
      </div>
      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
      {isMenuOpen && <div className={styles.backdrop} aria-hidden="true" onClick={() => closeMenu()} />}
    </header>
  );
};

export default Navbar;
