import React, { useState } from 'react';
import MainLogo from "../../../assets/manishlogo.png"
import './Navbar.css';

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
      <div className={`logo nameDisplay ${isMenuOpen ? 'hide' : ''}`}><span><img src={MainLogo} alt="Loading..." /></span>
        <h1>Manish</h1></div>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
      <button
          onClick={() => scrollToSection("home")}
          className="navItem"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="navItem"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="navItem"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="navItem"
        >
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
        <button
          onClick={() => scrollToSection("contact")}
          className="navItem"
        >
          Contact
        </button>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open1' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open2' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open3' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;


// // Navbar.js
// import React, { useState } from "react";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close the navigation after clicking a link
//     }
//   };

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div classNameName={`${styles.navigation} ${isOpen ? styles.active : ""}`}>
//       <button
//         classNameName={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
//         onClick={toggleNavbar}
//       >
//         <div classNameName={styles.bar}></div>
//         <div classNameName={`${styles.bar} ${styles.bar2}`}></div>
//         <div classNameName={`${styles.bar} ${styles.bar3}`}></div>
//       </button>

//       <nav classNameName={styles.nav}>
//         <ul classNameName={styles.navItems}>
//           <li classNameName={styles.navItem}>
//             <a href="#home" onClick={() => scrollToSection("home")}>
//               Home
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#about" onClick={() => scrollToSection("about")}>
//               About
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#skills" onClick={() => scrollToSection("skills")}>
//               Skills
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#projects" onClick={() => scrollToSection("projects")}>
//               Projects
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#experience" onClick={() => scrollToSection("experience")}>
//               Experience
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#education" onClick={() => scrollToSection("education")}>
//               Education
//             </a>
//           </li>
//           <li classNameName={styles.navItem}>
//             <a href="#contact" onClick={() => scrollToSection("contact")}>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <label for="check" className="close-menu"><i className="fas fa-times"></i></label>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
