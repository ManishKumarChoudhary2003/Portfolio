// Skills.js
import React from "react";
import Json from "../../Json/SkillsJson.json";
import styles from "./Skills.module.css"; 

const Skills = () => {
  const skillData = Json;
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>
        <i className="fas fa-laptop-code"></i>💡 Skills & <span>Abilities</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.row}>
          {skillData.map((data) => (
            <div key={data.id} className={styles.bar}>
              <div className={styles.info}>
                <img src={data.image} alt={data.name} />
                <p>{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
