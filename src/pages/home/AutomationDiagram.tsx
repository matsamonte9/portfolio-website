import './AutomationDiagram.css';

export function AutomationDiagram() {
  return (
    <div className="automation-diagram">
      <div className="automation-label">// the whole thing runs while you sleep</div>
      <svg viewBox="0 0 420 90" width="100%" height="90" className="automation-svg" aria-hidden="true">
        <line x1="31" y1="45" x2="129" y2="45" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" className="automation-line l1" />
        <line x1="149" y1="45" x2="251" y2="22" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" className="automation-line l2" />
        <line x1="149" y1="45" x2="251" y2="68" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" className="automation-line l2" />
        <line x1="280" y1="22" x2="369" y2="43" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" className="automation-line l3" />
        <line x1="280" y1="68" x2="369" y2="47" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" className="automation-line l3" />
        <circle cx="20" cy="45" r="11" fill="currentColor" className="automation-node c1" />
        <circle cx="140" cy="45" r="11" fill="currentColor" className="automation-node c2" />
        <circle cx="260" cy="20" r="9.5" fill="currentColor" className="automation-node c3" />
        <circle cx="260" cy="70" r="9.5" fill="currentColor" className="automation-node c3" />
        <circle cx="380" cy="45" r="11" fill="currentColor" className="automation-node c4" />
      </svg>
      <div className="automation-labels-row">
        <span className="automation-node-label c1">enquiry in</span>
        <span className="automation-arrow">→</span>
        <span className="automation-node-label c2">AI qualifies</span>
        <span className="automation-arrow">→</span>
        <span className="automation-node-label c3">CRM + booking</span>
        <span className="automation-arrow">→</span>
        <span className="automation-node-label c4">deal closed</span>
      </div>
    </div>
  );
}
