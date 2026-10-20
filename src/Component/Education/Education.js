import { FiAward } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import data from "../../Json/EducationJson.json";
import styles from "./Education.module.css";

const Education = () => (
  <section id="education" className="section section--alt" aria-labelledby="education-title">
    <div className="container">
      <SectionHeader
        index="06"
        label="Education"
        title={
          <>
            Education & <em>certifications</em>
          </>
        }
        titleId="education-title"
      />

      <div className={styles.layout}>
        <ol className={styles.list}>
          {data.education.map((item) => (
            <li key={item.id} className={styles.item} data-reveal>
              <p className={styles.year}>{item.year}</p>
              <div>
                <h3 className={styles.degree}>{item.title}</h3>
                <p className={styles.school}>{item.school}</p>
              </div>
              <p className={styles.grade}>{item.grade}</p>
            </li>
          ))}
        </ol>

        <div className={styles.certs} data-reveal style={{ "--reveal-delay": "120ms" }}>
          <h3 className={styles.certsTitle}>Certifications & recognition</h3>
          <ul>
            {data.certifications.map((cert) => (
              <li key={cert.title} className={styles.cert}>
                <FiAward aria-hidden="true" className={styles.certIcon} />
                <span>{cert.title}</span>
                {cert.year && <span className={styles.certYear}>{cert.year}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
