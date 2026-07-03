import './ByNightSection.css';

export function ByNightSection() {
  return (
    <section className="section">
      <div className="section-label">// by night</div>
      <a
        href="https://www.facebook.com/profile.php?id=61591056305747"
        target="_blank"
        rel="noopener noreferrer"
        className="by-night-card"
      >
        <div className="by-night-header">
          <svg width="24" height="24" viewBox="0 0 26 26" aria-hidden="true" className="by-night-sun">
            <circle cx="13" cy="10.5" r="8.5" fill="none" stroke="var(--accent)" strokeWidth="2" />
            <line x1="1.5" y1="18" x2="24.5" y2="18" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="by-night-title">Beyond Horizon</span>
          <span className="by-night-badge">CO-FOUNDER</span>
        </div>
        <p className="by-night-body">
          A studio I co-founded with two others — we build full-stack websites, apps and automations
          for growing businesses. My side project, and where I get to own the whole stack.{' '}
          <span className="by-night-cta">Visit the studio →</span>
        </p>
      </a>
    </section>
  );
}
