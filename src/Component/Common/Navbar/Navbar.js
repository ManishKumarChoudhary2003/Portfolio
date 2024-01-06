import React, { useState } from "react";
import MainLogo from "../../../assets/manishlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`logo nameDisplay ${isMenuOpen ? "hide" : ""}`}>
        <span>
          <img src={MainLogo} alt="Loading..." />
        </span>
        <h1>Manish</h1>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <button onClick={() => scrollToSection("home")} className="navItem">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="navItem">
          About
        </button>
        <button onClick={() => scrollToSection("skills")} className="navItem">
          Skills
        </button>
        <button onClick={() => scrollToSection("projects")} className="navItem">
          Projects
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="navItem"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className="navItem"
        >
          Education
        </button>
        <button onClick={() => scrollToSection("contact")} className="navItem">
          Contact
        </button>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open1" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open2" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open3" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
