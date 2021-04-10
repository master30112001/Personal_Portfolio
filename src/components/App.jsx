import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  educationData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);

  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setEducation([...educationData]);
    setProjects([...projectsData]);

    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, education }}>
      <Hero />
      <About />
      <Education />
      <Projects />

      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

// to do -
// 1. on mobile it says gatsby simplefolio... remove all names from everywhere ...

// 3. add education
// 4. add experience
// 4. add other projects section
