import React, { useState, useEffect } from "react";
import MainLogo from "../../../assets/manishlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      document.body.style.overflow = 'unset';
      setActiveSection(sectionId);
    }
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setMenuOpen(newMenuState);

    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.burger-menu')) {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👤" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className={`navbar-brand ${isMenuOpen ? "hide" : ""}`}>
          <div className="logo-container" onClick={() => scrollToSection('home')}>
            <img src={MainLogo} alt="Manish Kumar Choudhary" className="brand-logo" />
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                aria-label={`Navigate to ${item.label}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
                <div className="nav-indicator"></div>
              </button>
            </li>
          ))}
        </ul>

        <div
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          <div className="burger-line line1"></div>
          <div className="burger-line line2"></div>
          <div className="burger-line line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
