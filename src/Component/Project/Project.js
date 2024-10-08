import React from "react";
import Json from "../../Json/projectJson.json";
import styles from "./Project.module.css";

const Project = () => {
  const projectData = Json;
  return (
    <div id="projects" className={styles.projectContainer}>
      <h2 className={styles.heading}>🎯 Projects</h2>
      <div className={styles.project}>
        {projectData.map((data) => (
          <div
            key={data.id}
            className={styles.card}
            style={{ cursor: "pointer" }}
          >
            <img
              src={data.image}
              alt={data.title}
              onClick={() => window.open(data.links.view, "_blank")}
            />
            <div className={styles["card-content"]}>
              <p className={styles.title}>{data.title}</p>
              <p>👉 {data.dsc.point_1}</p>
              <p>👉 {data.dsc.point_2}</p>
              <div className={styles.links}>
                <a
                  href={data.links.view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <i className="fas fa-code"></i>
                </a>
                <a
                  href={data.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
