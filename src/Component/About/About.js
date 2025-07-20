import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('resize', checkMobile);
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const achievements = [
    { icon: "☕", label: "Experience", value: "1+ Yrs", color: "#667eea" },
    { icon: "��", label: "Company", value: "Platform Commons", color: "#f093fb" },
    { icon: "🚀", label: "Projects", value: "8+", color: "#4facfe" },
    { icon: "⚡", label: "Technologies", value: "15+", color: "#f5576c" }
  ];

  return (
    <section className={styles.aboutSection} id="about" ref={aboutRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
        {!isMobile && (
          <>
            <div className={styles.floatingShape1}></div>
            <div className={styles.floatingShape2}></div>
            <div className={styles.particle1}></div>
            <div className={styles.particle2}></div>
            <div className={styles.particle3}></div>
          </>
        )}
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
          <span className={styles.sectionLabel}>Get to know me</span>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.highlight}>Me</span>
          </h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.aboutContent}>
          {/* Main Story Section */}
          <div className={`${styles.storySection} ${styles.animateOnScroll}`}>
            <div className={styles.storyCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileImage}>
                  <span className={styles.profileEmoji}>👨‍💻</span>
                </div>
                <div className={styles.profileInfo}>
                  <h3 className={styles.name}>
                    Hi, I'm <span className={styles.highlight}>Manish Kumar Choudhary</span>
                  </h3>
                  <p className={styles.role}>Java Software Engineer at Platform Commons</p>
                </div>
              </div>

              <div className={styles.storyContent}>
                <p className={styles.storyText}>
                  I'm a passionate Java developer with <span className={styles.highlight}>1+ years of professional experience </span>
                  at Platform Commons. I specialize in building robust backend services using Spring Boot and microservices architecture.
                </p>

                <p className={styles.storyText}>
                  My experience includes working with <span className={styles.highlight}>Java, Spring Boot, Linux, Kafka, Elasticsearch,
                    MySQL, Docker, and Git</span>. I focus on writing clean, efficient code and building scalable applications.
                </p>

                <p className={styles.storyText}>
                  As a Java Software Engineer, I'm passionate about creating reliable backend solutions and
                  continuously learning new technologies to solve real-world problems.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className={styles.achievementsGrid}>
                {achievements.map((achievement, index) => (
                  <div key={index} className={styles.achievementItem} style={{ '--accent-color': achievement.color }}>
                    <div className={styles.achievementIcon}>{achievement.icon}</div>
                    <div className={styles.achievementData}>
                      <span className={styles.achievementValue}>{achievement.value}</span>
                      <span className={styles.achievementLabel}>{achievement.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Qualities Section */}
          <div className={`${styles.skillsSection} ${styles.animateOnScroll}`}>

            <div className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h4 className={styles.ctaTitle}>Ready to collaborate?</h4>
                <p className={styles.ctaText}>
                  Let's work together! I'm always excited to contribute to meaningful projects and solve challenging problems.
                </p>
              </div>
              <div className={styles.ctaButtons}>
                <a
                  href="https://drive.google.com/uc?export=download&id=1XZuVGEZqr6jbZrKjoheyptJ5uH6YXyrO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resumeButton}
                >
                  <span>Download Resume</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button className={styles.contactButton} onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
