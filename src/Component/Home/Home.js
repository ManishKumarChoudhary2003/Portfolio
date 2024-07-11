import React from "react";
import github from "../../assets/github.png";
import linkedln from "../../assets/linkedln.png";
import Instagram from "../../assets/insta.jpeg";
import Manish from "../../assets/Manish.jpg";
import styles from "./Home.module.css";
import Email from "../../assets/email.png";
import Resume from "../../assets/resume.png";
import leetcode from "../../assets/leetcode.png";

const Home = () => {
  return (
    <div className={styles.homeContainer} id="home">
      <div className={styles.intro}>
        <h1>
          Hi There👋,
          <br /> I'm Manish Kumar Choudhary
        </h1>
        <p className={styles.introRole}>Java Backend Developer ♨️</p>
        <p className={styles.introPara}>
          I focus on developing user-friendly web applications that meet the
          client's requirements, with attention to detail, scalability, and
          performance.
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

          {/* Google Drive Link-- > https://drive.google.com/file/d/15EyRiv0h1TkLRfSPpS7ntz3CIpmyqrHl/view?usp=drive_link */}
        </div>
      </div>
      <div className={styles.image}>
        <img src={Manish} alt="Manish" />
      </div>
    </div>
  );
};

export default Home;
