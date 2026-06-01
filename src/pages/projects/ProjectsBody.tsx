import { useState } from "react";

import { Reveal } from "../../components/Reveal";
import { ProjectsFooter } from "./ProjectsFooter";
import { ProjectsList } from "./ProjectsList";
import { ProjectsView } from "./ProjectsView";
import { projects } from "../../data/projects";

export type { Project } from "../../data/projects";

const FADE_MS = 200;

export function ProjectsBody() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const [carousel, setCarousel] = useState({ activeTab: 0, currentIndex: 0 });
  const product = projects.find(p => p.id === activeProject);

  const switchProject = (id: string | null) => {
    setFading(true);
    setTimeout(() => {
      setActiveProject(id);
      document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      requestAnimationFrame(() => requestAnimationFrame(() => setFading(false)));
    }, FADE_MS);
  };

  return (
    <>
      <Reveal>
        <div className={`projects-content${fading ? ' projects-fading' : ''}`}>
          {activeProject ? (
            <ProjectsView
              activeProject={activeProject}
              setActiveProject={switchProject}
              product={product!}
            />
          ) : (
            <ProjectsList
              setActiveProject={switchProject}
              products={projects}
              carousel={carousel}
              setCarousel={setCarousel}
            />
          )}
        </div>
      </Reveal>
      <Reveal>
        <ProjectsFooter isViewing={!!activeProject} product={product} />
      </Reveal>
    </>
  );
}
