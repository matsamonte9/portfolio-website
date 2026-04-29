import "./ProjectsFooter.css";

type ProjectsFooterProp = {
  isViewing: boolean;
  product: {
    id: string;
    image: string;
    title: string;
    fullDetails: string;
    cutDetails: string;
    href: string;
  };
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
