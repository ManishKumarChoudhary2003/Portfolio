import React, { useState, useEffect, useRef } from "react";
import Json from "../../Json/EducationJson.json";
import styles from "./Education.module.css";

const Education = () => {
  const educationRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const educationData = Json;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            setVisibleItems(prev => [...new Set([...prev, itemId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = educationRef.current?.querySelectorAll('[data-item-id]');
    items?.forEach(item => observer.observe(item));

    return () => {
      items?.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section className={styles.education} id="education" ref={educationRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Education</h2>
          <p className={styles.subtitle}>
            Academic journey and qualifications that built my foundation
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {educationData && educationData.length > 0 ? (
            educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right} ${visibleItems.includes(index.toString()) ? styles.visible : ''}`}
                data-item-id={index.toString()}
              >
                <div className={styles.timelineDot}></div>

                <div className={styles.educationCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.yearBadge}>
                      Class of {edu.passing_year}
                    </div>
                    <div className={styles.levelBadge}>
                      {edu.id === 1 ? 'Bachelor\'s Degree' : edu.id === 2 ? 'Higher Secondary' : 'Secondary School'}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.degree}>{edu.title}</h3>
                    <h4 className={styles.institution}>🏫 {edu.location}</h4>

                    <div className={styles.gradeInfo}>
                      <div className={styles.grade}>
                        <span className={styles.gradeLabel}>Grade:</span>
                        <span className={styles.gradeValue}>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noEducation}>
              <h3>Education Information Coming Soon</h3>
              <p>Academic details will be updated shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
