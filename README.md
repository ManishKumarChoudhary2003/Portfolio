# Manish Kumar Choudhary — Portfolio

Personal portfolio of **Manish Kumar Choudhary**, a software engineer building production backend systems with Java and Spring Boot: microservices, REST APIs, Apache Kafka, Elasticsearch and Redis.

**Live site:** https://manish-kumar-choudhary.netlify.app/

## What's inside

- **Hero** with portrait, positioning and animated stats (experience, microservices, latency and search improvements)
- **Experience** timeline for Platform Commons and earlier internships
- **Projects**: a tabbed showcase of ClearDocs, Peer Vault and Form Fusion, each with an architecture diagram drawn from the codebase, plus a grid of smaller builds
- **How I build**: short notes on the engineering habits behind the work
- **Skills**, **Education & certifications**
- **Contact** section with copy-to-clipboard email, social links and a validated contact form
- **Resume** (PDF) available to view or download

### Design and UX

- Warm paper/ink design with a forest-green accent, **light and dark themes** (follows the system setting and remembers the visitor's choice)
- Typography: Fraunces for headings, IBM Plex Sans and IBM Plex Mono for text and labels
- Subtle motion: scroll reveals, word-by-word headline, count-up stats, timeline draw-in, animated diagram connectors and a reading-progress back-to-top button
- Fully responsive from 320px phones to large desktops, with an accessible mobile menu
- Accessibility: semantic landmarks, keyboard support, visible focus, ARIA tabs and live form feedback; all motion is turned off for visitors who prefer reduced motion

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18 (Create React App), CSS Modules, design tokens as CSS custom properties |
| Icons | react-icons |
| Contact form | EmailJS (email notification) and Firebase Realtime Database (message storage) |
| Hosting | Netlify |

No UI framework or animation library is used; animations are plain CSS plus a few small React hooks.

## Getting started

Requires Node.js (developed and tested with **Node 22 LTS**).

```bash
git clone https://github.com/ManishKumarChoudhary2003/Portfolio.git
cd Portfolio
npm ci
npm start
```

The site runs at http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm start` | Starts the development server on port 3000 |
| `npm run build` | Creates an optimised production build in `build/` |

## Updating the content

Most content lives in JSON files, so text changes don't need code changes:

| File | Content |
| --- | --- |
| `src/Json/profile.json` | Name, title, location, email, phone, social links, resume path, hero stats |
| `src/Json/ExperienceJson.json` | Work experience (`**text**` renders in bold) |
| `src/Json/projectJson.json` | Featured projects (summary, highlights, stack, links) and smaller builds |
| `src/Json/SkillsJson.json` | Skill groups |
| `src/Json/EducationJson.json` | Education and certifications |

Other things you may want to change:

- **Resume:** replace `public/Manish_Kumar_Choudhary_Resume.pdf` (keep the file name, or update `resumeUrl` in `profile.json`).
- **Portrait:** `src/assets/portrait-560.webp` and `portrait-560.jpg`.
- **Project diagrams:** `src/Component/Project/ProjectVisuals.js`.
- **About and "How I build" text:** `src/Component/About/About.js` and `src/Component/Approach/Approach.js`.
- **Colours, fonts and spacing:** the design tokens at the top of `src/index.css`.
- **Favicon and app icons:** `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`.

## Contact form setup

The form validates every field in the browser, then:

1. stores the message in Firebase Realtime Database, and
2. sends an email notification through EmailJS.

The EmailJS service ID, template ID and public key are set in `src/Component/Contact/Contact.js`. The EmailJS public key is meant to be used in the browser, so it is not a secret.

The HTML for the notification email is in `docs/emailjs-contact-template.html`. Paste it into your EmailJS template (Content → Edit Content → Code view) and set **Reply To** to `{{email}}`, so replying goes straight to the sender. The template uses the variables `{{name}}`, `{{email}}`, `{{phone}}` and `{{message}}`, which match the form field names.

## Project structure

```
public/                 Static files: index.html, icons, manifest, resume PDF
docs/                   EmailJS notification email template
src/
  index.css             Design tokens, base styles, shared components, motion
  Json/                 Site content
  hooks/                useReveal (scroll reveals), useSpotlight (card glow)
  assets/               Portrait images
  Component/
    Dashboard/          Page layout and section order
    Common/             Navbar, Footer, BrandMark, SectionHeader, BackToTop, PageContent
    Home/               Hero and animated stats
    About/  Experience/  Project/  Approach/  Skills/  Education/  Contact/
```

## Deployment

The live site is hosted on Netlify. To deploy a build there (or on any static host):

- Build command: `npm run build`
- Publish directory: `build`

## Contact

- Portfolio: https://manish-kumar-choudhary.netlify.app/
- Email: cmanishkumar193@gmail.com
- LinkedIn: https://www.linkedin.com/in/manishkumarchoudhary/
- GitHub: https://github.com/ManishKumarChoudhary2003
