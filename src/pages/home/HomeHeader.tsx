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
  return (
    <div className="home-header">
      <nav className="home-header-links-container">
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.homeRef)}>Home</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.toolsRef)}>Tools</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.projectsRef)}>Projects</button>
        <button className='header-link' onClick={() => scrollToSection(sectionRefs.contactsRef)}>Contact</button>
      </nav>
    </div>
  );
}