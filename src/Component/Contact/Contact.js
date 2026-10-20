import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiAlertCircle, FiArrowUpRight, FiCheck, FiCheckCircle, FiCopy, FiSend } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import profile from "../../Json/profile.json";
import styles from "./Contact.module.css";

const EMAIL = profile.email;

const channels = [
  { label: "LinkedIn", value: "in/manishkumarchoudhary", href: profile.links.linkedin },
  { label: "GitHub", value: "Manishkumarchoudhary2003", href: profile.links.github },
  { label: "LeetCode", value: "Manish_193", href: profile.links.leetcode },
  { label: "Phone", value: profile.phone.display, href: profile.phone.href },
  ...(profile.resumeUrl
    ? [{ label: "Resume", value: "View PDF", href: `${process.env.PUBLIC_URL}${profile.resumeUrl}`, newTab: true }]
    : []),
];

const emptyForm = { name: "", email: "", phone: "", message: "" };

const MIN_MESSAGE = 10;

// Short, specific messages; an empty string means the field is valid.
const validators = {
  name: (v) => {
    if (!v.trim()) return "Enter your name";
    if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(v.trim())) return "Letters only, please";
    return "";
  },
  email: (v) => {
    if (!v.trim()) return "Enter your email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return "Enter a valid email";
    return "";
  },
  phone: (v) => {
    const digits = v.replace(/\D/g, "");
    if (!digits) return "Enter your phone number";
    const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
    if (local.length !== 10) return "Use a 10-digit number";
    return "";
  },
  message: (v) => {
    const length = v.trim().length;
    if (!length) return "Write a short message";
    if (length < MIN_MESSAGE) return `Add ${MIN_MESSAGE - length} more character${MIN_MESSAGE - length === 1 ? "" : "s"}`;
    return "";
  },
};

const validate = (data) =>
  Object.fromEntries(Object.keys(validators).map((key) => [key, validators[key](data[key])]));

const allTouched = { name: true, email: true, phone: true, message: true };

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", inputMode: "tel" },
];

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [dodge, setDodge] = useState(0); // horizontal offset of the locked Send button
  const trackRef = useRef(null);
  const buttonRef = useRef(null);
  const pointerType = useRef("mouse");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [copyState, setCopyState] = useState("idle"); // idle | copied | failed
  const form = useRef();

  useEffect(() => {
    if (copyState === "idle") return undefined;
    const timer = setTimeout(() => setCopyState("idle"), 2500);
    return () => clearTimeout(timer);
  }, [copyState]);

  useEffect(() => {
    if (status !== "success") return undefined;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const errors = validate(formData);
  const remaining = Object.values(errors).filter(Boolean).length;
  const isValid = remaining === 0;

  // Once everything is valid, the button settles back into place.
  useEffect(() => {
    if (isValid) setDodge(0);
  }, [isValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value) setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // The locked button slips to the other end of its track.
  const slipAway = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const track = trackRef.current;
    const button = buttonRef.current;
    if (!track || !button) return;
    const max = Math.max(track.clientWidth - button.offsetWidth, 0);
    setDodge((offset) => (offset > 0 ? 0 : max));
  };

  const revealErrors = (moveFocus) => {
    setTouched(allTouched);
    if (moveFocus) {
      const firstInvalid = Object.keys(errors).find((key) => errors[key]);
      form.current?.elements[firstInvalid]?.focus();
    }
  };

  // A mouse can't catch the locked button, so hovering it is when we explain what's missing.
  const onSendPointerEnter = (e) => {
    if (isValid || e.pointerType !== "mouse") return;
    revealErrors(false);
    slipAway();
  };

  const onSendClick = (e) => {
    if (isValid) return;
    e.preventDefault();
    const fromKeyboard = e.detail === 0;
    revealErrors(fromKeyboard);
    if (!fromKeyboard && pointerType.current !== "mouse") slipAway();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      revealErrors(true);
      return;
    }

    setStatus("submitting");
    try {
      // Store the message in Firebase, then send the email notification through EmailJS.
      const response = await fetch("https://laptop-galaxy-project-default-rtdb.firebaseio.com/Contact.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, submissionDate: new Date().toLocaleString() }),
      });
      if (!response.ok) throw new Error(`Firebase responded with ${response.status}`);

      await emailjs.sendForm("service_0gng1uo", "template_1y0fxp8", form.current, "IMVKX8RBjNb8nOTwo");
      setFormData(emptyForm);
      setTouched({});
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeader
            index="07"
            label="Contact"
            title={
              <>
                Let's <em>talk.</em>
              </>
            }
            titleId="contact-title"
          >
            Email is the quickest way to reach me. I'm available for new opportunities in backend engineering.
          </SectionHeader>

          <div className={styles.mailRow} data-reveal>
            <a href={`mailto:${EMAIL}`} className={styles.mail}>
              {EMAIL}
            </a>
            <button type="button" className={styles.copy} onClick={copyEmail}>
              {copyState === "copied" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span>{copyState === "copied" ? "Copied" : "Copy"}</span>
              <span className="visually-hidden"> email address</span>
            </button>
            <span className="visually-hidden" role="status">
              {copyState === "copied" && "Email address copied to clipboard"}
              {copyState === "failed" && "Could not copy. Please select the address manually."}
            </span>
          </div>

          <ul className={styles.channels} data-reveal>
            {channels.map((channel) => {
              const external = channel.newTab || channel.href.startsWith("http");
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className={styles.channel}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={styles.channelLabel}>{channel.label}</span>
                    <span className={styles.channelValue}>{channel.value}</span>
                    <FiArrowUpRight className={`arrow-ne ${styles.channelIcon}`} aria-hidden="true" />
                    {external && <span className="visually-hidden">(opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.formWrap} data-reveal>
          <h3 className={styles.formTitle}>Or send a message</h3>
          <p className={styles.formNote}>All fields are required.</p>
          <form ref={form} onSubmit={handleSubmit} className={styles.form} noValidate>
            {[...fields, { name: "message", label: "Message", multiline: true }].map((field) => {
              const id = `contact-${field.name}`;
              const error = touched[field.name] ? errors[field.name] : "";
              const ok = formData[field.name] && !errors[field.name];
              const Control = field.multiline ? "textarea" : "input";
              const length = formData.message.trim().length;
              return (
                <div
                  key={field.name}
                  className={`${styles.field} ${field.multiline ? styles.full : ""} ${error ? styles.hasError : ""} ${
                    ok ? styles.isValid : ""
                  }`}
                >
                  <div className={styles.labelRow}>
                    <label htmlFor={id}>{field.label}</label>
                    {field.multiline && (
                      <span className={styles.counter} aria-hidden="true">
                        {length < MIN_MESSAGE ? `${length}/${MIN_MESSAGE} min` : `${length} chars`}
                      </span>
                    )}
                  </div>
                  <div className={styles.control}>
                    <Control
                      id={id}
                      name={field.name}
                      {...(field.multiline
                        ? { rows: 5 }
                        : { type: field.type, autoComplete: field.autoComplete, inputMode: field.inputMode })}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={error ? "true" : undefined}
                      aria-describedby={error ? `${id}-error` : undefined}
                      required
                    />
                    {ok && <FiCheckCircle className={styles.stateIcon} aria-hidden="true" />}
                    {error && <FiAlertCircle className={styles.stateIcon} aria-hidden="true" />}
                  </div>
                  {error && (
                    <p id={`${id}-error`} className={styles.error}>
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <div className={`${styles.full} ${styles.submitArea}`}>
              <div ref={trackRef} className={styles.track}>
                <button
                  ref={buttonRef}
                  type="submit"
                  className={`btn btn--primary ${styles.send} ${!isValid ? styles.locked : ""}`}
                  style={{ transform: `translateX(${dodge}px)` }}
                  aria-disabled={!isValid || isSubmitting ? "true" : undefined}
                  aria-describedby="contact-send-hint"
                  disabled={isSubmitting}
                  onPointerDown={(e) => (pointerType.current = e.pointerType)}
                  onPointerEnter={onSendPointerEnter}
                  onClick={onSendClick}
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  {!isSubmitting && <FiSend aria-hidden="true" />}
                </button>
              </div>
              <p id="contact-send-hint" className={`${styles.hint} ${isValid ? styles.hintReady : ""}`} aria-live="polite">
                {isValid
                  ? "All set, ready to send."
                  : `Complete ${remaining} more field${remaining === 1 ? "" : "s"} to send.`}
              </p>
              <p className={styles.formStatus} role="status">
                {status === "success" && "Thanks, your message was sent. I'll get back to you soon."}
                {status === "error" && (
                  <span className={styles.formError}>
                    Sorry, the message could not be sent. Please email me directly at {EMAIL}.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
