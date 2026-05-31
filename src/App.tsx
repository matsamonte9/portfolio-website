import { useRef } from "react";
import { Routes, Route } from 'react-router';

import { HomeHeader } from './pages/home/HomeHeader';
import { HomePage } from './pages/home/HomePage';
import { ToolsPage } from './pages/tools/ToolsPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { AllProjectsPage } from './pages/all-projects/AllProjectsPage';
import { AllToolsPage } from './pages/all-tools/AllToolsPage';

import './App.css';

function MainPortfolio() {
  const homeRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionRefs = { homeRef, toolsRef, projectsRef, contactsRef };

  return (
    <>
      <HomeHeader scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <HomePage ref={homeRef} />
      <ToolsPage ref={toolsRef} />
      <ProjectsPage ref={projectsRef} />
      <ContactsPage ref={contactsRef} />
      <ScrollToTop scrollToSection={scrollToSection} homeRef={homeRef} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/"         element={<MainPortfolio />} />
      <Route path="/projects" element={<AllProjectsPage />} />
      <Route path="/tools"    element={<AllToolsPage />} />
    </Routes>
  );
}

export default App;
