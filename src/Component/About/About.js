// About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className={styles.content}>
          <h1>I'm Manish Kumar Choudhary</h1>
          <span className={styles.tag}>Java Full Stack Developer</span>

          <p>
            Hello! I'm a dedicated 3rd-year Computer Science student at JIET
            Group of Institutions, Jodhpur. With a strong foundation in JAVA
            programming, problem-solving, and DSA skills, I'm driven by my
            passion for Machine Learning, Data Science, and Web Development. I'm
            excited to embrace new challenges, learn, and maintain a 9.5+ CGPA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
