import './ScrollToTop.css';

type ScrollToTopProp = {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void; 
  homeRef: React.RefObject<HTMLElement | null>
}

export function ScrollToTop({ scrollToSection, homeRef }: ScrollToTopProp) {
  return (
    <button className="scroll-to-top" onClick={() => scrollToSection(homeRef)}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}