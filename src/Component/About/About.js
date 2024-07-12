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
          <span className={styles.tag}>Java Backend Developer</span>

          <p>
            <span role="img" aria-label="Hello">
              👋
            </span>
            Welcome to my digital space!👨‍💻 I am a passionate final-year Computer
            Science student at JIET Group of Institutions, Jodhpur, fueled by a
            love for technology and problem-solving. Having completed a valuable
            internship at Zeetron Networks, Currently, I am interning at
            Platform Commons in Java Backend Development, where I build RESTful
            APIs and manage databases. With a CGPA of 9.84, I excel in Java,
            Spring Boot, Spring Security, ReactJS, and basics of Docker and
            Kafka.
          </p>

          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <p>
                🚀 In this portfolio, you'll discover the projects and
                experiences that showcase my dedication, creativity, and
                adaptability. From Java programming to crafting seamless web
                experiences with React.js. 💻
              </p>
            </div>
            <div className={styles.box}>
              <p>
                I am ready to take on new challenges and contribute to
                cutting-edge solutions. 📚 Join me on this journey of
                exploration and innovation. Let's build something amazing
                together! 🚀
              </p>
            </div>
          </div>

          <div className={styles.resumeBtn}>
            <div className={styles.resumeBtn}>
              <a
                href="https://drive.google.com/uc?export=download&id=1XZuVGEZqr6jbZrKjoheyptJ5uH6YXyrO"
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
