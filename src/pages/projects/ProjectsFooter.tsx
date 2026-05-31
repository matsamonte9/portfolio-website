import "./ProjectsFooter.css";
import { type Project } from "./ProjectsBody";

type ProjectsFooterProp = {
  isViewing: boolean;
  product: Project | undefined;
};

export function ProjectsFooter({ isViewing }: ProjectsFooterProp) {
  return isViewing ? (
    <div className="projects-footer"></div>
  ) : (
    <div className="projects-footer">
      <a
        className="see-all-projects"
        href="https://github.com/matsamonte9"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i> See All Projects
      </a>
    </div>
  );
}
