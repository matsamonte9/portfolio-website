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
  sectionRefs: SectionRefs;
};

export function HomeHeader({ scrollToSection, sectionRefs }: HomeHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home',     ref: sectionRefs.homeRef },
    { label: 'Tools',    ref: sectionRefs.toolsRef },
    { label: 'Projects', ref: sectionRefs.projectsRef },
    { label: 'Contact',  ref: sectionRefs.contactsRef },
  ];

  return (
    <header className="home-header">
      <button className="nav-brand" onClick={() => scrollToSection(sectionRefs.homeRef)}>
        Mark
      </button>

      <nav className="desktop-nav">
        {navItems.map(({ label, ref }) => (
          <button key={label} className="header-link" onClick={() => scrollToSection(ref)}>
            {label}
          </button>
        ))}
      </nav>

      <button
        className="menu-btn"
        aria-label="Menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>

      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map(({ label, ref }) => (
            <button key={label} onClick={() => { scrollToSection(ref); setMenuOpen(false); }}>
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
