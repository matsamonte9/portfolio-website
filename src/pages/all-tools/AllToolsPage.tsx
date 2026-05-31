import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@iconify/react';
import { categories, type Tool } from '../../data/tools';
import './AllToolsPage.css';

function ToolCard({ icon, label, color }: Tool) {
  const isImg  = icon.includes('/');
  const isLogo = icon.startsWith('logos:');
  return (
    <div className="tool-card" style={{ '--brand-color': color } as React.CSSProperties}>
      {isImg
        ? <img src={icon} alt={label} width={36} height={36} style={{ objectFit: 'contain' }} />
        : <Icon icon={icon} width={36} height={36} style={isLogo ? undefined : { color }} />
      }
      <p>{label}</p>
    </div>
  );
}

export function AllToolsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = categories.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
      );
      if (sectionRefs.current[i]) observer.observe(sectionRefs.current[i]!);
      return observer;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="all-page">
      <div className="all-page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="all-page-title">All Tools</h1>
      </div>
      <div className="all-tools-layout">
        <nav className="all-tools-sidebar sidebar-nav">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`sidebar-nav-btn${i === activeIndex ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
            >
              <span className="sidebar-dot" />
              {cat.name}
            </button>
          ))}
        </nav>
        <div className="all-tools-content">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              ref={el => { sectionRefs.current[i] = el; }}
              className="all-tool-section"
            >
              <div className="all-section-header">
                <span className="all-section-label">{cat.name}</span>
                <span className="all-section-line" />
              </div>
              <div className="all-tools-row">
                {cat.tools.map(tool => (
                  <ToolCard key={tool.label} {...tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
