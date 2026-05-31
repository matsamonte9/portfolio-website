import { forwardRef } from "react";

import { Reveal } from "../../components/Reveal";
import { SectionTitle } from "../../components/SectionTitle";
import { ProjectsBody } from "./ProjectsBody";

import './ProjectsPage.css';

export const ProjectsPage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="projects">
      <SectionTitle title="Recent Projects" />
      <ProjectsBody />
    </section>
  </Reveal>
));
