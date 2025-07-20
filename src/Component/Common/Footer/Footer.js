import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/manishkumarchoudhary/",
      icon: "💼",
      label: "LinkedIn"
    },
    {
      href: "https://github.com/Manishkumarchoudhary2003",
      icon: "💻",
      label: "GitHub"
    },
    {
      href: "https://leetcode.com/Manish_193/",
      icon: "🧩",
      label: "LeetCode"
    },
    {
      href: "mailto:cmanishkumar193@gmail.com",
      icon: "📧",
      label: "Email"
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Manish Kumar Choudhary</h3>
            <p className={styles.brandTitle}>Java Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className={styles.social}>
            <h4 className={styles.sectionTitle}>Let's Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.label}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialLabel}>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>© {new Date().getFullYear()} Manish Kumar. All rights reserved.</span>
          </div>
          <div className={styles.love}>
            <span>Made by Manish with ❤️</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
