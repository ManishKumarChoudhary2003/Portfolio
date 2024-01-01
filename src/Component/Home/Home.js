// Home.js
import React from "react";
import github from "../../assets/github.png"
import linkedln from "../../assets/linkedln.png"
import Instagram from "../../assets/insta.jpeg"
import Manish from "../../assets/Manish.jpg"
import styles from "./Home.module.css"; 

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.intro}>
        <h2>
          Hi There,
          <br /> I'm Manish Kumar Choudhary
        </h2>
        <p>Java Full Stack Developer</p>
        <p>
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
      <div className={styles.image}>
        <img
          src={Manish}
          alt="Your Name"
        />
      </div>
    </div>
  );
};

export default Home;
