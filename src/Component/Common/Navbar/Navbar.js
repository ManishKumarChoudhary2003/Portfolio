// Navbar.js
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the navigation after clicking a link
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.navigation} ${isOpen ? styles.active : ""}`}>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleNavbar}
      >
        <div className={styles.bar}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </button>

      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a href="#home" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#experience" onClick={() => scrollToSection("experience")}>
              Experience
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#education" onClick={() => scrollToSection("education")}>
              Education
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
