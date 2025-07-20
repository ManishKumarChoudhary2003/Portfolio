import React, { useState, useEffect } from "react";
import github from "../../assets/github.png";
import linkedln from "../../assets/linkedln.png";
import Instagram from "../../assets/insta.jpeg";
import Manish from "../../assets/Manish.jpg";
import styles from "./Home.module.css";
import Email from "../../assets/email.png";
import Resume from "../../assets/resume.png";
import leetcode from "../../assets/leetcode.png";

const Home = () => {
    const roles = [
        "Java Backend Developer",
        "Software Engineer",
        "Tech Enthusiast",
        "Spring Boot Developer"
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.homeContainer} id="home">
            <div className={styles.intro}>
                <div className={styles.greeting}>
                    <span className={styles.wave}>👋</span>
                    <span className={styles.greetingText}>Hi There,</span>
                </div>
                <h1 className={styles.name}>
                    <span className={styles.firstName}>I'm Manish</span>
                    {/* <span className={styles.lastName}>Kumar Choudhary</span> */}
                </h1>
                <div className={styles.roleContainer}>
                    <span className={styles.rolePrefix}>I'm a </span>
                    <span className={styles.dynamicRole}>{roles[currentRole]}</span>
                    <span className={styles.cursor}>|</span>
                </div>
                <p className={styles.introPara}>
                    Passionate Java developer with 1+ years at Platform Commons.
                    Building robust backend services with Spring Boot and microservices.
                </p>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                    <button
                        className={styles.primaryButton}
                        onClick={() => scrollToSection('contact')}
                    >
                        <span>Get in Touch</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        className={styles.secondaryButton}
                        onClick={() => scrollToSection('projects')}
                    >
                        <span>View My Work</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>

                <div className={styles.links}>
                    <a
                        href="https://www.linkedin.com/in/manishkumarchoudhary/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="LinkedIn"
                    >
                        <img src={linkedln} alt="LinkedIn" />
                    </a>
                    <a
                        href="https://github.com/Manishkumarchoudhary2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="GitHub"
                    >
                        <img src={github} alt="Github" />
                    </a>
                    <a
                        href="https://leetcode.com/Manish_193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="LeetCode"
                    >
                        <img src={leetcode} alt="leetcode" />
                    </a>
                    <a
                        href="https://www.instagram.com/manish_.96/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="Instagram"
                    >
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a
                        href="mailto:cmanishkumar193@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="Email"
                    >
                        <img src={Email} alt="Email" />
                    </a>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1XZuVGEZqr6jbZrKjoheyptJ5uH6YXyrO"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="Resume"
                    >
                        <img src={Resume} alt="Resume" />
                    </a>
                </div>
            </div>

            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageGlow}></div>
                    <div className={styles.imageBorder}>
                        <img src={Manish} alt="Manish Kumar Choudhary" className={styles.profileImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
