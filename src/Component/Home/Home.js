// Home.js
import React from "react";
import github from "../../assets/github.png";
import linkedln from "../../assets/linkedln.png";
import Instagram from "../../assets/insta.jpeg";
import Manish from "../../assets/Manish.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.intro}>
        <h1>
          👋 Hi There,
          <br /> I'm Manish Kumar Choudhary
        </h1>
        <p className={styles.introRole}>Java Full Stack Developer 💻</p>
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
          <div className={styles.resumeBtn}>
            <div className={styles.resumeBtn}>
              <a
                href="https://drive.google.com/file/d/1m2OBP_81-09GR8mST30NeRCWqt7j2Cdx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                View Resume <i className="fas fa-file"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={Manish} alt="Manish" />
      </div>
    </div>
  );
};

export default Home;
