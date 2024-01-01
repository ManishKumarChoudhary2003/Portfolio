// Footer.js
import React from "react";
import styles from "./Footer.module.css";
import linkedln from "../../../assets/linkedln.png"
import Instagram from "../../../assets/insta.jpeg"
import github from "../../../assets/github.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Manish's Portfolio</h3>
        <p>
          Thank you for visiting my personal portfolio website. Connect with me
          over socials. <br /> <br /> Keep Rising 🚀.
        </p>
      </div>

      <div className={styles.column}>
        <h3>quick links</h3>
        <a href="#home">
          <i class="fas fa-chevron-circle-right"></i> home
        </a>
        <a href="#about">
          <i class="fas fa-chevron-circle-right"></i> about
        </a>
      </div>

      <div className={styles.column}>
        <h3>contact info</h3>
        <p>
          <i class="fas fa-phone"></i>+91 8955946276
        </p>
        <p>
          <i class="fas fa-envelope"></i>cmanishkumar193@gmail.com
        </p>
        <p>
          <i class="fas fa-map-marked-alt"></i>Jodhpur, India-342802
        </p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/manishkumarchoudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedln}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/manishkumarchoudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/manishkumarchoudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
