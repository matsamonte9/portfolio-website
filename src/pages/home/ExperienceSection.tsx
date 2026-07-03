import { experience } from '../../data/experience';
import './ExperienceSection.css';

export function ExperienceSection() {
  return (
    <section className="section">
      <div className="section-label">// experience</div>
      <div className="xp-list">
        {experience.map(entry => (
          <div key={entry.title} className="xp-row">
            <span className="xp-range">{entry.range}</span>
            <div>
              <div className="xp-title">{entry.title}</div>
              <div className="xp-description">{entry.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
