import SectionHeader from "../Common/SectionHeader/SectionHeader";
import groups from "../../Json/SkillsJson.json";
import styles from "./Skills.module.css";

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="container">
      <SectionHeader
        index="05"
        label="Skills"
        title={
          <>
            My <em>toolkit</em>
          </>
        }
        titleId="skills-title"
      >
        Grouped by where each tool sits in a system. No ratings; the work above shows how they're used.
      </SectionHeader>

      <dl className={styles.grid}>
        {groups.map((group, i) => (
          <div key={group.group} className={styles.group} data-reveal style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}>
            <dt className={styles.name}>{group.group}</dt>
            <dd>
              <ul className={`chip-list ${styles.chips}`}>
                {group.items.map((item, j) => (
                  <li key={item} className="chip" style={{ "--ci": j }}>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <p className={styles.also} data-reveal>
        <span>Also</span> React, Redux and JavaScript for frontends; Python, pandas and scikit-learn for data work.
      </p>
    </div>
  </section>
);

export default Skills;
