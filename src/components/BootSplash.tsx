import { useEffect, useState } from 'react';
import './BootSplash.css';

const SPLASH_SESSION_KEY = 'p2-splash-shown';
const SPLASH_DURATION_MS = 4300;

function shouldShowSplash() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    if (sessionStorage.getItem(SPLASH_SESSION_KEY)) return false;
  } catch {
    return false;
  }
  return true;
}

export function BootSplash() {
  const [visible, setVisible] = useState(shouldShowSplash);

  useEffect(() => {
    if (!visible) return;
    try {
      sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
    } catch {
      /* sessionStorage unavailable, splash still plays once for this render */
    }
    const timer = setTimeout(() => setVisible(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="boot-splash">
      <div className="boot-splash-scanlines" />
      <div className="boot-splash-lines">
        <div className="boot-line" style={{ animation: 'bhtype 0.5s steps(38, end) 0.05s both' }}>
          <span className="boot-accent">mark@markanthonysamonte.dev</span>
          <span className="boot-muted">:~$</span> <span className="boot-ink">./init</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.32s steps(16, end) 0.55s both' }}>
          <span className="boot-muted">&gt; loading home </span><span className="boot-accent">done</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.32s steps(17, end) 0.87s both' }}>
          <span className="boot-muted">&gt; loading stack </span><span className="boot-accent">done</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.32s steps(20, end) 1.19s both' }}>
          <span className="boot-muted">&gt; loading projects </span><span className="boot-accent">done</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.32s steps(22, end) 1.51s both' }}>
          <span className="boot-muted">&gt; loading experience </span><span className="boot-accent">done</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.32s steps(19, end) 1.83s both' }}>
          <span className="boot-muted">&gt; loading contact </span><span className="boot-accent">done</span>
        </div>
        <div className="boot-line" style={{ animation: 'bhtype 0.34s steps(24, end) 2.2s both' }}>
          <span className="boot-ink">&gt; launching portfolio...</span>
          <span className="boot-cursor" />
        </div>
      </div>
    </div>
  );
}
