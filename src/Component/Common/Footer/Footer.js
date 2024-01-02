// Footer.js
import React from "react";
import styles from "./Footer.module.css";
import linkedln from "../../../assets/linkedln.png";
import Instagram from "../../../assets/insta.jpeg";
import github from "../../../assets/github.png";

const Footer = () => {
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
            <a href="#home">
              <i className="fas fa-chevron-circle-right"></i>🔗 Home
            </a>
            <a href="#home">
              <i className="fas fa-chevron-circle-right"></i>🔗 About
            </a>
            <a href="#home">
              <i className="fas fa-chevron-circle-right"></i>🔗 Skills
            </a>
            <a href="#projects">
              <i className="fas fa-chevron-circle-right"></i>🔗 projects
            </a>
            <a href="#projects">
              <i className="fas fa-chevron-circle-right"></i>🔗 Experience
            </a>
            <a href="#about">
              <i className="fas fa-chevron-circle-right"></i>🔗 Education
            </a>

            <a href="#contact">
              <i className="fas fa-chevron-circle-right"></i>🔗 contact
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Contact Info</h3>
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
              href="https://www.linkedin.com/in/manishkumarchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/manishkumarchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
       <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt eius id velit rem, reiciendis recusandae excepturi quod fugiat at nam, odio, tempora dolor quae sapiente! Cupiditate quas laboriosam modi.
       </div>
    </div>
  );
};

export default Footer;
