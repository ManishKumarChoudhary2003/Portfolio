

import React from "react";
import styles from "./Navigation.module.css";
import MainLogo from "../../../assets/manishlogo.png";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.nameDisplay}>
        <span><img src={MainLogo} alt="Loading..." /></span>
        <h1>Manish</h1>
      </div>
      <div className={styles.navItems}>
        <button
          onClick={() => scrollToSection("home")}
          className={styles.navItem}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={styles.navItem}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className={styles.navItem}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={styles.navItem}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={styles.navItem}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className={styles.navItem}
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={styles.navItem}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
