
import React from "react";
import Json from "../../Json/ExperienceJson.json";
import styles from "./Experience.module.css";

const Experience = () => {
  const experienceData = Json;
  return (
    <div id="experience" className={styles.experienceContainer}>
      <h2 className={styles.heading}>💫 Experience</h2>

      <div className={styles.experience}>
        {experienceData.map((data) => (
          <div key={data.id} className={styles.card}>
            <div className={styles["card-content"]}>
              <h1>{data.title} 📜</h1>
              <h2>{data.role} 👩‍💻</h2>
              <h4>{data.startDate} - {data.endDate}</h4>
              <h3>{data.location} 📍</h3>
              <div className={styles.additionalPoints}>
                <p className={styles.point}>👉 {data.point_1}</p>
                <p className={styles.point}>👉 {data.point_2}</p>
              </div>
              <hr />
              
              <div className={styles.skills}>
                <strong>Skills: </strong>
                {data.skills.split(", ").map((skill, index) => (
                  <span key={index}>{skill} 💡</span>
                ))}
              </div> 
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

