import { ProjectExpandedView } from '../../components/ProjectExpandedView';
import { type Project } from './ProjectsBody';

type ProjectsViewProp = {
  activeProject: string;
  setActiveProject: (id: string | null) => void;
  product: Project;
};

export function ProjectsView({ setActiveProject, product }: ProjectsViewProp) {
  return (
    <ProjectExpandedView
      product={product}
      onClose={() => setActiveProject(null)}
    />
  );
}
