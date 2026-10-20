import SectionHeader from "../Common/SectionHeader/SectionHeader";
import experience from "../../Json/ExperienceJson.json";
import styles from "./Experience.module.css";

// Renders **text** segments from the JSON as <strong>.
const withEmphasis = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );

const Experience = () => (
  <section id="experience" className="section section--alt" aria-labelledby="experience-title">
    <div className="container">
      <SectionHeader
        index="02"
        label="Experience"
        title={
          <>
            Where I've <em>shipped</em>
          </>
        }
        titleId="experience-title"
      />

      <ol className={styles.timeline}>
        {experience.map((job, index) => (
          <li
            key={job.id}
            className={`${styles.job} ${index === 0 ? styles.current : ""}`}
            data-reveal
          >
            <div className={styles.when}>
              <p className={styles.dates}>
                {job.startDate} – {job.endDate}
              </p>
              <p className={styles.place}>{job.location}</p>
            </div>

            <span className={styles.marker} aria-hidden="true" />

            <div className={styles.what} data-spotlight>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.role}>{job.role}</p>
              <ul className={styles.points}>
                {job.points.map((point, i) => (
                  <li key={point} style={{ "--pi": i }}>
                    {withEmphasis(point)}
                  </li>
                ))}
              </ul>
              <ul className="chip-list" aria-label={`Technologies used at ${job.company}`}>
                {job.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
