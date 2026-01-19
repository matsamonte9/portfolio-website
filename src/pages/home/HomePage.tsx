import { Reveal } from "../../components/Reveal";
import { forwardRef } from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeBody } from "./HomeBody";

import './HomePage.css';

type SectionRefs = {
  homeRef: React.RefObject<HTMLElement | null>;
  toolsRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactsRef: React.RefObject<HTMLElement | null>;
};

type HomePageProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sectionRefs: SectionRefs;
};

export const HomePage = forwardRef<HTMLElement, HomePageProps>(
  ({ scrollToSection, sectionRefs }, ref) => (
    <Reveal>
      <section ref={ref} className="home">
        <HomeHeader scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
        <HomeBody />
      </section>
    </Reveal>
  )
);