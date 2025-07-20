import React, { useEffect, useRef, useState } from "react";
import Json from "../../Json/projectJson.json";
import styles from "./Project.module.css";

const Project = () => {
  const projectsRef = useRef(null);

  const projectData = Json;

  useEffect(() => {
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

    const elements = projectsRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className={styles.projectsSection} id="projects" ref={projectsRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
          <span className={styles.sectionLabel}>My Work</span>
          <h2 className={styles.sectionTitle}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.sectionDescription}>
            Showcasing my latest projects with modern technologies and clean design
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={`${styles.projectsGrid} ${styles.animateOnScroll}`}>
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectActions}>
                      <a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                        title="Live Demo"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                        title="Source Code"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M16 22.027V19.13C16.055 18.459 15.925 17.785 15.625 17.172C15.325 16.559 14.866 16.029 14.3 15.635C17.3 15.3 20.4 14.17 20.4 8.935C20.399 7.693 19.949 6.493 19.125 5.546C19.519 4.455 19.484 3.255 19.025 2.189C19.025 2.189 18.025 1.854 15.975 3.189C14.129 2.729 12.2 2.729 10.35 3.189C8.3 1.854 7.3 2.189 7.3 2.189C6.841 3.255 6.806 4.455 7.2 5.546C6.376 6.493 5.926 7.693 5.925 8.935C5.925 14.17 9.025 15.3 12.025 15.635C11.459 16.029 11 16.559 10.7 17.172C10.4 17.785 10.27 18.459 10.325 19.13V22.027" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.dsc.point_1.length > 100
                    ? project.dsc.point_1.substring(0, 100) + "..."
                    : project.dsc.point_1}
                </p>

                {/* Technology Badges */}
                {project.technologies && (
                  <div className={styles.techBadges}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.projectsStats} ${styles.animateOnScroll}`}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>💻</div>
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>{projectData.length}+</h3>
                <p className={styles.statLabel}>Projects</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🛠️</div>
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>15+</h3>
                <p className={styles.statLabel}>Technologies</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
