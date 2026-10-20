import { useEffect } from "react";
import PageContent from "../Common/PageContent/PageContent";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Project from "../Project/Project";
import Approach from "../Approach/Approach";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import useReveal from "../../hooks/useReveal";
import useSpotlight from "../../hooks/useSpotlight";
import BackToTop from "../Common/BackToTop/BackToTop";

const Dashboard = () => {
  useReveal();
  useSpotlight();

  // The browser tries to jump to a #hash before React has rendered the sections; do it once they exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <PageContent>
        <Home />
        <About />
        <Experience />
        <Project />
        <Approach />
        <Skills />
        <Education />
        <Contact />
      </PageContent>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Dashboard;
