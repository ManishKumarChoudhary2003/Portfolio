import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./Approach.module.css";

const principles = [
  {
    title: "Events for side effects",
    text: "Emails, notifications and audit trails are published to Kafka, so the request path stays fast and services stay decoupled.",
    where: "Platform Commons · ClearDocs · Peer Vault",
  },
  {
    title: "Search and caching where they pay",
    text: "MySQL stays the source of truth. Full-text search goes to Elasticsearch and hot reads are served from Redis.",
    where: "Platform Commons",
  },
  {
    title: "Security at the edge",
    text: "Tokens are validated once at the gateway; roles are enforced inside each service with Spring Security.",
    where: "Peer Vault · ClearDocs",
  },
  {
    title: "Jobs that run exactly once",
    text: "Scheduled work is coordinated across instances, so scaling a service out doesn't run the same job twice.",
    where: "Platform Commons scheduler SDK",
  },
];

const Approach = () => (
  <section id="approach" className="section section--alt" aria-labelledby="approach-title">
    <div className="container">
      <SectionHeader
        index="04"
        label="Approach"
        title={
          <>
            How I <em>build</em>
          </>
        }
        titleId="approach-title"
      >
        A few habits that show up in most of what I ship.
      </SectionHeader>

      <ol className={styles.grid}>
        {principles.map((item, i) => (
          <li key={item.title} className={styles.card} data-reveal data-spotlight style={{ "--reveal-delay": `${i * 80}ms` }}>
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.where}>{item.where}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Approach;
