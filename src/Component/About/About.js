// About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <i className="fas fa-user-alt"></i>👤 About <span>Me</span>
        </h2>

        <div className={styles.content}>
          <h1>I'm Manish Kumar Choudhary</h1>
          <span className={styles.tag}>Java Full Stack Developer</span>

          <p>
            <span role="img" aria-label="Hello">
              👋
            </span>
            Hello! I'm a dedicated 3rd-year Computer Science student at JIET
            Group of Institutions, Jodhpur. With a strong foundation in JAVA
            programming, problem-solving, and DSA skills, I'm driven by my
            passion for Machine Learning, Data Science, and Web Development. I'm
            excited to embrace new challenges, learn, and maintain a 9.5+ CGPA.
          </p>

          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <p>
                I enjoy crafting solutions to complex problems through
                programming and logical thinking. Always eager to learn and
                adapt to new technologies.{" "}
                <span role="img" aria-label="Coding">
                  💻
                </span>
              </p>
            </div>
            <div className={styles.box}>
              <p>
                Currently focusing on enhancing my skills in Full Stack
                Development, including front-end and back-end technologies.{" "}
                <span role="img" aria-label="Tech Stack">
                  🚀
                </span>
              </p>
            </div>
          </div>

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
    </section>
  );
};

export default About;
