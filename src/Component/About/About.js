import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./About.module.css";

const facts = [
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Currently", value: "Software Engineer, Platform Commons" },
  { label: "Focus", value: "Java, Spring Boot, Kafka, Elasticsearch, Redis" },
  { label: "Studied", value: "B.Tech CSE, JIET Jodhpur (2025)" },
];

const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className={`container ${styles.layout}`}>
      <div>
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              I like the parts of a system <em>nobody sees</em>.
            </>
          }
          titleId="about-title"
        />
        <div className={styles.prose} data-reveal>
          <p>
            I'm a software engineer with 2.5+ years of building production backends. At Platform Commons I develop
            and maintain Java and Spring Boot microservices for a volunteer management platform: API design, query tuning,
            caching, search and the event-driven plumbing between services.
          </p>
          <p>
            Outside work I build systems end to end to understand the pieces I don't touch every day: document
            verification, a microservices file-sharing platform and a form builder. I graduated in Computer Science
            from JIET Jodhpur in 2025 and was the B.Tech CSE year topper in 2023.
          </p>
        </div>
      </div>

      <dl className={styles.facts} data-reveal style={{ "--reveal-delay": "120ms" }}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default About;
