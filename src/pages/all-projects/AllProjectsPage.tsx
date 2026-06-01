import { useState } from 'react';
import { Link } from 'react-router';
import { projects, type Project } from '../../data/projects';
import { ProjectExpandedView } from '../../components/ProjectExpandedView';
import './AllProjectsPage.css';

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [splashDismissed, setSplashDismissed] = useState(false);

  return (
    <div
      className={`all-project-card${isExpanded ? ' expanded' : ''}`}
      onClick={!isExpanded ? onToggle : undefined}
    >
      {isExpanded ? (
        <ProjectExpandedView
          product={project}
          onClose={onToggle}
        />
      ) : (
        <>
          <div className="all-project-image">
            {project.videoUrl ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {!splashDismissed && (
                  <div className="card-splash" onClick={e => e.stopPropagation()}>
                    <span>🎧</span>
                    <p>Put your earphones on!</p>
                    <button onClick={() => setSplashDismissed(true)}>Got it →</button>
                  </div>
                )}
                {!videoLoaded && <div className="card-video-skeleton" />}
                <iframe
                  src={project.videoUrl}
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                  onClick={e => e.stopPropagation()}
                  style={{ border: 'none', width: '100%', height: '100%', opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                />
              </div>
            ) : (
              <img src={project.image} alt={project.title} />
            )}
          </div>
          <div className="all-project-content">
            <h3 className="all-project-title">{project.title}</h3>
            <p className="all-project-details">{project.cutDetails}</p>
            {project.tags.length > 0 && (
              <div className="all-project-tags">
                {project.tags.map(tag => <span key={tag} className="all-project-tag">{tag}</span>)}
              </div>
            )}
            <div className="all-project-links" onClick={e => e.stopPropagation()}>
              {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live ↗</a>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const FADE_MS = 200;

function ProjectSection({ title, items }: { title: string; items: Project[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  if (items.length === 0) return null;

  const handleToggle = (id: string) => {
    setFading(true);                          // 1. fade out
    setTimeout(() => {
      setActiveId(prev => prev === id ? null : id); // 2. rearrange while invisible
      requestAnimationFrame(() => {           // 3. wait one frame for React to commit
        requestAnimationFrame(() => {
          setFading(false);                   // 4. fade back in — cards already settled
        });
      });
    }, FADE_MS);
  };

  const ordered = activeId
    ? [items.find(p => p.id === activeId)!, ...items.filter(p => p.id !== activeId)]
    : items;

  return (
    <div className="all-section">
      <div className="all-section-header">
        <span className="all-section-label">{title}</span>
        <span className="all-section-line" />
      </div>
      <div className={`all-project-grid${fading ? ' grid-fading' : ''}`}>
        {ordered.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
            isExpanded={activeId === p.id}
            onToggle={() => handleToggle(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function AllProjectsPage() {
  const fullStack  = projects.filter(p => p.category === 'fullstack');
  const automation = projects.filter(p => p.category === 'automation');

  return (
    <div className="all-page">
      <div className="all-page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="all-page-title">All Projects</h1>
      </div>
      <div className="all-page-content">
        <ProjectSection title="Full Stack Web Apps" items={fullStack} />
        <ProjectSection title="AI & Automation"    items={automation} />
      </div>
    </div>
  );
}
