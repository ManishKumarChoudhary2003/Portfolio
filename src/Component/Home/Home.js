import { Fragment, useEffect, useRef } from "react";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import profile from "../../Json/profile.json";
import portraitJpg from "../../assets/portrait-560.jpg";
import portraitWebp from "../../assets/portrait-560.webp";
import StatCounter from "./StatCounter";
import styles from "./Home.module.css";

const RESUME_FILENAME = "Manish_Kumar_Choudhary_Resume.pdf";
const resumeHref = `${process.env.PUBLIC_URL}${profile.resumeUrl}`;

const headline = ["Engineering", "reliable", "backend", "systems", "that"];

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: FiGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FiLinkedin },
  { label: "LeetCode", href: profile.links.leetcode, Icon: SiLeetcode },
];

// The photo drifts a little slower than the page while the hero scrolls away.
const useParallax = (ref) => {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion-ok")) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight);
      ref.current?.style.setProperty("--py", (y * 0.08).toFixed(1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref]);
};

const Home = () => {
  const portraitRef = useRef(null);
  useParallax(portraitRef);

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.metaRow}>
            <span className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Available for new opportunities
            </span>
            <span className={styles.location}>{profile.location}</span>
          </div>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.name}>
              {profile.name}, {profile.title}
            </span>
            <span className={styles.headline}>
              {headline.map((word, i) => (
                <Fragment key={word}>
                  <span className={styles.mask}>
                    <span className={styles.word} style={{ "--i": i }}>
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
              <span className={styles.mask}>
                <em className={styles.word} style={{ "--i": headline.length }}>
                  scale.
                </em>
              </span>
            </span>
          </h1>

          <p className={styles.lead}>
            I build production backend systems in Java and Spring Boot: REST APIs, Kafka-driven services,
            Elasticsearch search and Redis caching. Currently at Platform Commons, where I own microservices on a live
            platform.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btn--primary">
              View my work
              <FiArrowDown className="arrow-down" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <span className={styles.resume}>
                <a href={resumeHref} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  <FiFileText aria-hidden="true" />
                  View resume
                  <span className="visually-hidden">(PDF, opens in a new tab)</span>
                </a>
                <a href={resumeHref} className={`btn btn--ghost ${styles.download}`}
                  download={RESUME_FILENAME}
                  title="Download resume (PDF)"
                >
                  <FiDownload aria-hidden="true" />
                  <span className="visually-hidden">Download resume (PDF)</span>
                </a>
              </span>
            )}
          </div>

          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.social}>
                  <Icon aria-hidden="true" />
                  {label}
                  <FiArrowUpRight className={`arrow-ne ${styles.socialArrow}`} aria-hidden="true" />
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className={styles.portrait} ref={portraitRef}>
          <div className={styles.arch}>
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                width="560"
                height="813"
                alt="Portrait of Manish Kumar Choudhary"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <figcaption className={styles.badge}>
            <span className={styles.badgeLabel}>Currently</span>
            Software Engineer at Platform Commons
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <dl className={styles.stats}>
          {profile.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              {...stat}
              className={styles.stat}
              numberClassName={styles.statValue}
              labelClassName={styles.statLabel}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Home;
