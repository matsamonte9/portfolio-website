import { useState } from 'react';
import './HomeHeader.css';

type SectionRefs = {
  homeRef: React.RefObject<HTMLElement | null>;
  toolsRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactsRef: React.RefObject<HTMLElement | null>;
};

type HomeHeaderProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sectionRefs: SectionRefs
}

export function HomeHeader({ scrollToSection, sectionRefs }: HomeHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <header className="home-header">
      <nav className="home-header-links-container desktop-nav">
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.homeRef)}>Home</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.toolsRef)}>Tools</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.projectsRef)}>Projects</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.contactsRef)}>Contact</button>
      </nav>

      <i 
        className="fa-solid fa-bars menu-btn" 
        aria-label='Menu'
        onClick={openMenu}
      />

      {menuOpen && (
        <nav className="mobile-nav">
          <button onClick={() => {
            scrollToSection(sectionRefs.homeRef)
            setMenuOpen(false)
          }}>Home</button>
          <button onClick={() => {
            scrollToSection(sectionRefs.toolsRef)
            setMenuOpen(false)
          }}>Tools</button>
          <button onClick={() => {
            scrollToSection(sectionRefs.projectsRef)
            setMenuOpen(false)
          }}>Projects</button>
          <button onClick={() => {
            scrollToSection(sectionRefs.contactsRef)
            setMenuOpen(false)
          }}>Contact</button>
        </nav>
      )}
    </header>
  );
}