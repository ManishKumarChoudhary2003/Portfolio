import React, { useEffect, useRef, useState, useMemo } from "react";
import Json from "../../Json/SkillsJson.json";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillData = Json;

  const categories = useMemo(() => ({
    all: skillData,
    backend: skillData.filter(skill =>
      ["Java", "Spring", "Spring boot", "Microservices", "Spring Security", "Spring Cloud", "Hibernate", "JPA", "Maven", "Apache Kafka", "Apache Solr", "Elastic Search", "Python"].includes(skill.name)
    ),
    frontend: skillData.filter(skill =>
      ["React", "JavaScript", "Redux", "HTML5", "CSS3"].includes(skill.name)
    ),
    database: skillData.filter(skill =>
      ["MySql", "Firebase", "Redis"].includes(skill.name)
    ),
    tools: skillData.filter(skill =>
      ["Docker", "Git", "Github", "Intellij", "Netlify", "Linux"].includes(skill.name)
    )
  }), [skillData]);

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

    const elements = skillsRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    setVisibleSkills([]);
    const timer = setTimeout(() => {
      setVisibleSkills(categories[activeCategory]);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, categories]);

  const categoryLabels = {
    all: { name: "All Skills", icon: "🚀", count: categories.all.length },
    backend: { name: "Backend", icon: "⚙️", count: categories.backend.length },
    frontend: { name: "Frontend", icon: "🎨", count: categories.frontend.length },
    database: { name: "Database", icon: "🗄️", count: categories.database.length },
    tools: { name: "Tools", icon: "🛠️", count: categories.tools.length }
  };

  return (
    <section className={styles.skillsSection} id="skills" ref={skillsRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
          <span className={styles.sectionLabel}>What I know</span>
          <h2 className={styles.sectionTitle}>
            Skills & <span className={styles.highlight}>Technologies</span>
          </h2>
          <p className={styles.sectionDescription}>
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={`${styles.categoryFilter} ${styles.animateOnScroll}`}>
          {Object.entries(categoryLabels).map(([key, category]) => (
            <button
              key={key}
              className={`${styles.categoryButton} ${activeCategory === key ? styles.active : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.categoryCount}>{category.count}</span>
            </button>
          ))}
        </div>

        <div className={`${styles.skillsGrid} ${styles.animateOnScroll}`}>
          <div className={styles.skillsContainer}>
            {visibleSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={styles.skillCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skillIcon}>
                  <img src={skill.image} alt={skill.name} />
                </div>
                <div className={styles.skillInfo}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
