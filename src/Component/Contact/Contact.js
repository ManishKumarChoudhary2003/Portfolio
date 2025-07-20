
import React, { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0p7j6uq',
        'template_1y0fxp8',
        form.current,
        'IMVKX8RBjNb8nOTwo'
      )
      .then(
        (result) => {
          console.log(result.text);
          showSuccess();
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    if (!formData.name.trim()) {
      newFormErrors.name = "Name is required";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newFormErrors.name = "Invalid Name";
      valid = false;
    } else {
      newFormErrors.name = "";
    }

    if (!formData.email.trim()) {
      newFormErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newFormErrors.email = "Invalid email format";
      valid = false;
    } else {
      newFormErrors.email = "";
    }

    if (!formData.phone.trim()) {
      newFormErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newFormErrors.phone = "Invalid phone number";
      valid = false;
    } else {
      newFormErrors.phone = "";
    }

    if (!formData.message.trim()) {
      newFormErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newFormErrors.message = "Message should be at least 10 characters";
      valid = false;
    } else {
      newFormErrors.message = "";
    }

    setFormErrors(newFormErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        // Send to Firebase
        const response = await fetch(
          "https://laptop-galaxy-project-default-rtdb.firebaseio.com/Contact.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
              submissionDate: formattedDate,
            }),
          }
        );

        if (response.ok) {
          // Send Email
          sendEmail(e);
        } else {
          console.error("Failed to send data to Firebase");
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setIsSubmitting(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "cmanishkumar193@gmail.com",
      link: "mailto:cmanishkumar193@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8955946276",
      link: "tel:+918955946276"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Jodhpur, Rajasthan, India",
      link: "#"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/manishkumarchoudhary/"
    }
  ];

  return (
    <section className={styles.contactSection} id="contact" ref={contactRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>
        <div className={styles.floatingParticles}>
          <div className={styles.particle1}></div>
          <div className={styles.particle2}></div>
          <div className={styles.particle3}></div>
          <div className={styles.particle4}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
          <span className={styles.sectionLabel}>Let's Connect</span>
          <h2 className={styles.sectionTitle}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.sectionDescription}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.contactContent}>
          <div className={`${styles.contactInfo} ${styles.animateOnScroll}`}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.profileSection}>
                  <div className={styles.profileAvatar}>
                    <div className={styles.avatarInitials}>MC</div>
                    <div className={styles.statusIndicator}></div>
                  </div>
                  <div className={styles.profileInfo}>
                    <h3 className={styles.name}>Manish Kumar Choudhary</h3>
                    <p className={styles.title}>Java Backend Developer</p>
                    <div className={styles.availability}>
                      <span className={styles.statusDot}></span>
                      Available for new opportunities
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contactMethods}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={styles.contactMethod}
                  >
                    <div className={styles.methodIcon}>
                      <span>{info.icon}</span>
                    </div>
                    <div className={styles.methodContent}>
                      <span className={styles.methodLabel}>{info.label}</span>
                      <span className={styles.methodValue}>{info.value}</span>
                    </div>
                    <div className={styles.methodArrow}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.responseTime}>
                <div className={styles.responseIcon}>⚡</div>
                <div className={styles.responseText}>
                  <span className={styles.responseTitle}>Quick Response</span>
                  <span className={styles.responseDesc}>Usually within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.contactForm} ${styles.animateOnScroll}`}>
            <div className={styles.formCard}>
              {showSuccessMessage && (
                <div className={styles.successNotification}>
                  <div className={styles.successIcon}>✅</div>
                  <div className={styles.successContent}>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="👤 Full Name"
                      required
                      className={styles.input}
                    />
                    {formErrors.name && (
                      <span className={styles.errorMessage}>{formErrors.name}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="📧 Email Address"
                      required
                      className={styles.input}
                    />
                    {formErrors.email && (
                      <span className={styles.errorMessage}>{formErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="📞 Phone Number"
                    required
                    className={styles.input}
                  />
                  {formErrors.phone && (
                    <span className={styles.errorMessage}>{formErrors.phone}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="📝 Your Message"
                    required
                    className={`${styles.input} ${styles.textarea}`}
                  />
                  {formErrors.message && (
                    <span className={styles.errorMessage}>{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.loader}></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message ✈️</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;