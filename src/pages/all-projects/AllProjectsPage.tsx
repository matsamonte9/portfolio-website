import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { projects, type Project } from '../../data/projects';
import { VideoModal } from '../../components/VideoModal';
import './AllProjectsPage.css';

function ProjectCard({ project, onWatch }: { project: Project; onWatch: (project: Project) => void }) {
  const [isHovering, setIsHovering] = useState(false);
  const hasRepo = !!project.href;
  const marker = hasRepo ? 'code ↗' : project.link ? 'live ↗' : project.videoUrl ? 'watch ↗' : null;
  const destination = project.link || project.href;
  const thumbnailSrc = project.videoThumbnail && isHovering ? project.videoThumbnail : project.image;

  const content = (
    <>
      <div className="all-project-image">
        <img src={thumbnailSrc} alt={project.title} />
        {project.videoUrl && (
          <span className="all-project-play-badge">
            <span className="all-project-play-icon">▶</span> watch demo
          </span>
        )}
      </div>
      <div className="all-project-content">
        <div className="all-project-title-row">
          <span className="all-project-title">{project.title}</span>
          {marker && <span className="all-project-marker">{marker}</span>}
        </div>
        <span className="all-project-tags">{project.tags.join(' · ')}</span>
        <p className="all-project-details">{project.cutDetails}</p>
      </div>
    </>
  );

  const hoverHandlers = project.videoThumbnail
    ? { onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false) }
    : {};

  if (destination) {
    return (
      <a id={project.id} href={destination} target="_blank" rel="noopener noreferrer" className="all-project-card" {...hoverHandlers}>
        {content}
      </a>
    );
  }

  if (project.videoUrl) {
    return (
      <div id={project.id} className="all-project-card all-project-card-clickable" onClick={() => onWatch(project)} {...hoverHandlers}>
        {content}
      </div>
    );
  }

  return (
    <div id={project.id} className="all-project-card">
      {content}
    </div>
  );
}

function ProjectSection({ label, items, onWatch }: { label: string; items: Project[]; onWatch: (project: Project) => void }) {
  const location = useLocation();

  useEffect(() => {
    const hashId = location.hash.replace('#', '');
    if (!hashId || !items.some(p => p.id === hashId)) return;
    document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  if (items.length === 0) return null;

  return (
    <div className="section">
      <div className="section-label">// {label}</div>
      <div className="all-project-grid">
        {items.map(p => (
          <ProjectCard key={p.id} project={p} onWatch={onWatch} />
        ))}
      </div>
    </div>
  );
}

export function AllProjectsPage() {
  const [watching, setWatching] = useState<Project | null>(null);
  const fullStack = projects.filter(p => p.category === 'fullstack');
  const automation = projects.filter(p => p.category === 'automation');

  return (
    <div className="page-shell">
      <div className="page-container">
        <header className="all-header">
          <span className="home-path">~/mark-samonte/projects</span>
          <Link to="/" className="cd-home-link">← cd ~/home</Link>
        </header>

        <section className="all-title-section">
          <div className="hero-terminal-line">
            <span className="hero-accent-text">mark@markanthonysamonte.dev</span>:~$ ls ./projects
          </div>
          <h1 className="all-title">
            All Projects
            <span className="all-title-cursor" />
          </h1>
          <p className="all-subhead">Web apps, AI systems and automations — shipped or in production.</p>
        </section>

        <ProjectSection label="full-stack" items={fullStack} onWatch={setWatching} />
        <ProjectSection label="automation" items={automation} onWatch={setWatching} />

        <footer className="all-footer">
          <span className="contact-copyright">© 2026 Mark Samonte · Nueva Ecija, Philippines</span>
          <Link to="/" className="cd-home-link">← back to portfolio</Link>
        </footer>
      </div>

      {watching && <VideoModal project={watching} onClose={() => setWatching(null)} />}
    </div>
  );
}
