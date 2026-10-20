import { FiArrowUpRight, FiFileText, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import BrandMark from "../BrandMark/BrandMark";
import profile from "../../../Json/profile.json";
import projects from "../../../Json/projectJson.json";
import styles from "./Footer.module.css";

const resumeHref = profile.resumeUrl ? `${process.env.PUBLIC_URL}${profile.resumeUrl}` : "";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const connect = [
  { label: "GitHub", href: profile.links.github, Icon: FiGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FiLinkedin },
  { label: "LeetCode", href: profile.links.leetcode, Icon: SiLeetcode },
  ...(resumeHref ? [{ label: "Resume", href: resumeHref, Icon: FiFileText }] : []),
];

const External = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
    {children}
    <FiArrowUpRight className={styles.arrow} aria-hidden="true" />
    <span className="visually-hidden">(opens in a new tab)</span>
  </a>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Building something that needs a <em>reliable backend?</em>
        </h2>
        <div className={styles.ctaActions}>
          <a href={`mailto:${profile.email}`} className={`${styles.button} ${styles.buttonPrimary}`}>
            <FiMail aria-hidden="true" />
            Say hello
          </a>
          {resumeHref && (
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className={styles.button}>
              <FiFileText aria-hidden="true" />
              View resume
              <span className="visually-hidden">(PDF, opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <a href="#home" className={styles.brandLink}>
            <BrandMark />
            <span>{profile.name}</span>
          </a>
          <p className={styles.blurb}>
            Software Engineer building Java and Spring Boot backends: microservices, Kafka, Elasticsearch and Redis.
          </p>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Available for new opportunities
          </p>
        </div>

        <nav className={styles.column} aria-label="Footer">
          <h3 className={styles.heading}>Navigate</h3>
          <ul className={styles.list}>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={styles.link}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h3 className={styles.heading}>Projects</h3>
          <ul className={styles.list}>
            {projects.featured.map((project) => (
              <li key={project.id}>
                <External href={project.links[0].href}>{project.title}</External>
              </li>
            ))}
            <li>
              <a href="#more-builds" className={styles.link}>
                More builds
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Connect</h3>
          <ul className={styles.list}>
            {connect.map(({ label, href, Icon }) => (
              <li key={label}>
                <External href={href}>
                  <Icon className={styles.icon} aria-hidden="true" />
                  {label}
                </External>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.column} ${styles.contactColumn}`}>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.list}>
            <li>
              <a href={`mailto:${profile.email}`} className={`${styles.link} ${styles.wrap}`}>
                <FiMail className={styles.icon} aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phone.href} className={styles.link}>
                <FiPhone className={styles.icon} aria-hidden="true" />
                {profile.phone.display}
              </a>
            </li>
            <li className={styles.plain}>
              <FiMapPin className={styles.icon} aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Set in Fraunces & IBM Plex</p>
      </div>
    </div>
  </footer>
);

export default Footer;
