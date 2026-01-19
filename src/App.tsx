import { useRef } from "react";

import { HomePage } from './pages/home/HomePage';
import { ToolsPage } from './pages/tools/ToolsPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

import './App.css';

function App() {
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
      <HomePage scrollToSection={scrollToSection} sectionRefs={sectionRefs} ref={homeRef} />
      <ToolsPage ref={toolsRef} />
      <ProjectsPage ref={projectsRef} />
      <ContactsPage ref={contactsRef} />
      <ScrollToTop scrollToSection={scrollToSection} homeRef={homeRef} />
      <Footer />
    </>
  );
}

export default App;
