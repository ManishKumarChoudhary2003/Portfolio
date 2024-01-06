import React from "react";
import Json from "../../Json/EducationJson.json";
import styles from "./Education.module.css";

const Education = () => {
  const educationData = Json;
  return (
    <div className={styles.education} id="education">
      <div>
        <h1 className={styles.heading}> 🎓 My Education</h1>
        <p className={styles.line}>
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>

      {educationData.map((data) => (
        <div key={data.id} className={styles.card}>
          <div className={styles["card-content"]}>
            <h1>{data.title} 📚</h1>
            <h2>{data.location} 🏫</h2>
            <h3>{data.passing_year} 📅</h3>
            <div className={styles.grade}>
              <strong>Grade:</strong> {data.grade} 🌟
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
