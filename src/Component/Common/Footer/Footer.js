import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import linkedln from "../../../assets/linkedln.png";
import Instagram from "../../../assets/insta.jpeg";
import github from "../../../assets/github.png";
import Email from "../../../assets/email.png";
import Resume from "../../../assets/resume.png";
import leetcode from "../../../assets/leetcode.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showButton, setShowButton] = useState(true);

  const scrollToTop = () => {
    setShowButton(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>Manish's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br /> Keep Rising 🚀.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          <div className={styles.columnLinks}>
            <button
              onClick={() => scrollToSection("home")}
              className={styles.navItem}
            >
              🔗Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.navItem}
            >
              🔗About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={styles.navItem}
            >
              🔗Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={styles.navItem}
            >
              🔗Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={styles.navItem}
            >
              🔗Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={styles.navItem}
            >
              🔗Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.navItem}
            >
              🔗Contact
            </button>
          </div>
        </div>
        {showButton && (
          <button onClick={scrollToTop} className={styles.upButton}>
            <p>☝️</p>
          </button>
        )}

        <div className={styles.column}>
          <h3>Contact Info </h3>
          <p>
            <i className="fas fa-phone"></i>+91 8955946276
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <a
              href="mailto:cmanishkumar193@gmail.com"
              className={styles.maillink}
            >
              cmanishkumar193@gmail.com
            </a>
          </p>

          <p>
            <i className="fas fa-map-marked-alt"></i>Jodhpur, India-342802
          </p>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/manishkumarchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedln} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Manishkumarchoudhary2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="https://leetcode.com/Manish_193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={leetcode} alt="leetcode" />
            </a>
            <a
              href="https://www.instagram.com/manish_.96/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="mailto:cmanishkumar193@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Email} alt="Email" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1XZuVGEZqr6jbZrKjoheyptJ5uH6YXyrO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Resume} alt="Resume" />
            </a>
          </div>
        </div>
      </footer>
      <div className={styles.designedBy}>
        Designed with ❤️ by Manish Kumar Choudhary
      </div>
    </div>
  );
};

export default Footer;
