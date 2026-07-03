import { stack } from '../../data/stack';
import './StackSection.css';

export function StackSection() {
  return (
    <section className="section">
      <div className="section-label">// stack</div>
      <div className="stack-grid">
        {stack.map(column => (
          <div key={column.label}>
            <div className="stack-column-label">{column.label}</div>
            <div className="stack-column-items">
              {column.items.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
