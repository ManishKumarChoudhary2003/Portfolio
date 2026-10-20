import { useRef, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import projects from "../../Json/projectJson.json";
import visuals from "./ProjectVisuals";
import styles from "./Project.module.css";

const INITIAL_MORE = 3;

const ExternalLink = ({ href, children, className = "text-link" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
    <FiArrowUpRight className="arrow-ne" aria-hidden="true" />
    <span className="visually-hidden">(opens in a new tab)</span>
  </a>
);

const Showcase = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const tabRefs = useRef([]);
  const { featured } = projects;

  // Panels slide in from the side the visitor is moving towards.
  const select = (next, dir = next > active ? 1 : -1) => {
    if (next === active) return;
    setDirection(dir);
    setActive(next);
  };

  // Arrow keys move between tabs (WAI-ARIA tabs pattern with automatic activation).
  const onKeyDown = (event) => {
    const last = featured.length - 1;
    const keys = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: last };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + featured.length) % featured.length;
    const dir = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : undefined;
    select(next, dir);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={styles.showcase} data-reveal data-spotlight>
      <div className={styles.tabs} role="tablist" aria-label="Featured projects" onKeyDown={onKeyDown}>
        {featured.map((project, i) => (
          <button
            key={project.id}
            ref={(el) => (tabRefs.current[i] = el)}
            id={`tab-${project.id}`}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls={`panel-${project.id}`}
            tabIndex={active === i ? 0 : -1}
            className={styles.tab}
            onClick={() => select(i)}
          >
            <span className={styles.tabNumber}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.tabText}>
              <span className={styles.tabTitle}>{project.title}</span>
              <span className={styles.tabKind}>{project.kind}</span>
            </span>
          </button>
        ))}
      </div>

      {featured.map((project, i) => {
        const Visual = visuals[project.id];
        return (
          <div
            key={project.id}
            id={`panel-${project.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}`}
            tabIndex={0}
            hidden={active !== i}
            className={styles.panel}
            style={{ "--dir": direction }}
          >
            <div className={styles.info}>
              <p className={styles.meta}>
                <span>{project.kind}</span>
                <span aria-hidden="true">·</span>
                <span>{project.dates}</span>
              </p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>

              <ul className={styles.highlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <ul className="chip-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className={styles.links}>
                {project.links.map((link, index) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className={index === 0 ? "btn btn--primary" : "btn btn--ghost"}
                  >
                    {index === 0 && <FiGithub aria-hidden="true" />}
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </div>

            <figure className={styles.visual}>
              <Visual />
              <figcaption className={styles.caption}>
                How it works — an illustration of the codebase, not a screenshot.
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

const MoreBuilds = () => {
  const [expanded, setExpanded] = useState(false);
  const items = expanded ? projects.more : projects.more.slice(0, INITIAL_MORE);
  const hiddenCount = projects.more.length - INITIAL_MORE;

  return (
    <div className={styles.more}>
      <div className={styles.moreHead} data-reveal>
        <h3 className={styles.moreTitle}>More builds</h3>
        <p className={styles.moreIntro}>Smaller projects from along the way.</p>
      </div>

      <ul id="more-builds" className={styles.moreGrid}>
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`${styles.card} ${i >= INITIAL_MORE ? styles.cardNew : ""}`}
            data-spotlight
            // Cards added by "Show more" mount after the reveal observer runs, so they animate on their own.
            data-reveal={i < INITIAL_MORE ? "" : undefined}
            style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}
          >
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.cardSummary}>{item.summary}</p>
            <p className={styles.cardStack}>{item.stack.join(" · ")}</p>
            <div className={styles.cardLinks}>
              {item.links.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label}
                  <span className="visually-hidden">: {item.title}</span>
                </ExternalLink>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          className={`btn btn--ghost ${styles.moreToggle}`}
          aria-expanded={expanded}
          aria-controls="more-builds"
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Show fewer" : `Show ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
};

const Project = () => (
  <section id="projects" className="section" aria-labelledby="projects-title">
    <div className="container">
      <SectionHeader
        index="03"
        label="Projects"
        title={
          <>
            Things I've <em>built</em>
          </>
        }
        titleId="projects-title"
      >
        Three systems I designed end to end. Pick one to see what it does and how it fits together.
      </SectionHeader>

      <Showcase />
      <MoreBuilds />
    </div>
  </section>
);

export default Project;
