import { forwardRef } from "react";

import { SectionTitle } from "../../components/SectionTitle";
import { ProjectsBody } from "./ProjectsBody";

import './ProjectsPage.css';
import { Reveal } from "../../components/Reveal";

export const ProjectsPage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="projects">
      <SectionTitle title={'Recent Projects'} />
      <ProjectsBody />
    </section>
  </Reveal>
));
