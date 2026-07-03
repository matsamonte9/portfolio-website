import { Link } from 'react-router';
import { projects } from '../../data/projects';
import './SelectedWorkSection.css';

const featured = projects.filter(p => p.featured);

export function SelectedWorkSection() {
  return (
    <section className="section">
      <div className="section-label">// selected work</div>
      <div className="work-list">
        {featured.map(project => {
          const external = project.href || project.link;
          const content = (
            <>
              <span className="work-title">{project.title}</span>
              <span className="work-tags">{(project.featuredTags ?? project.tags).join(' · ')} →</span>
            </>
          );
          return external ? (
            <a
              key={project.id}
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              className="work-row"
            >
              {content}
            </a>
          ) : (
            <Link key={project.id} to={`/projects#${project.id}`} className="work-row">
              {content}
            </Link>
          );
        })}
      </div>
      <Link to="/projects" className="view-all-pill">~$ view all projects →</Link>
    </section>
  );
}
