import './ProjectsFooter.css';

type ProjectsFooterProp = {
  isViewing: boolean
}

export function ProjectsFooter({ isViewing }: ProjectsFooterProp) {
  return (
    isViewing
      ? (
        <div className="projects-footer">
          <a 
            className="see-all-projects" 
            href="https://github.com/matsamonte9/Store-System"
            target='_blank'
          >
            <i className="fa-brands fa-github"></i> See Project
          </a>
        </div>
      )
      : (
        <div className="projects-footer">
          <a 
            className="see-all-projects" 
            href="https://github.com/matsamonte9"
            target='_blank'
          >
            <i className="fa-brands fa-github"></i> See All Projects
          </a>
        </div>
      )
  );
}