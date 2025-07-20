import React, { useEffect, useRef, useState } from "react";
import Json from "../../Json/ExperienceJson.json";
import styles from "./Experience.module.css";

const Experience = () => {
    const experienceRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState([]);

    const experienceData = Json;

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

        const items = experienceRef.current?.querySelectorAll('[data-item-id]');
        items?.forEach(item => observer.observe(item));

        return () => {
            items?.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <section className={styles.experience} id="experience" ref={experienceRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>My Experience</h2>
                    <p className={styles.subtitle}>
                        Professional journey and key milestones that shaped my career
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>

                    {experienceData && experienceData.length > 0 ? (
                        experienceData.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right} ${visibleItems.includes(index.toString()) ? styles.visible : ''}`}
                                data-item-id={index.toString()}
                            >
                                <div className={styles.timelineDot}></div>

                                <div className={styles.experienceCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.dateRange}>
                                            {exp.startDate} - {exp.endDate}
                                        </div>
                                        <div className={styles.location}>
                                            📍 {exp.location}
                                        </div>
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <h4 className={styles.company}>{exp.title}</h4>

                                        <div className={styles.description}>
                                            {exp.point_1 && (
                                                <p className={styles.descriptionItem}>
                                                    • {exp.point_1}
                                                </p>
                                            )}
                                            {exp.point_2 && (
                                                <p className={styles.descriptionItem}>
                                                    • {exp.point_2}
                                                </p>
                                            )}
                                            {exp.point_3 && (
                                                <p className={styles.descriptionItem}>
                                                    • {exp.point_3}
                                                </p>
                                            )}
                                        </div>

                                        {exp.skills && (
                                            <div className={styles.technologies}>
                                                {exp.skills.split(', ').map((tech, techIndex) => (
                                                    <span key={techIndex} className={styles.tech}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noExperience}>
                            <h3>Professional Experience Coming Soon</h3>
                            <p>Currently gaining experience through internships and personal projects.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
