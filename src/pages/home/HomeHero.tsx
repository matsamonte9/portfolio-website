import { AutomationDiagram } from './AutomationDiagram';
import ProfilePicture from '../../assets/images/new-hero-portfolio.png';
import './HomeHero.css';

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-terminal-line">
        <span className="hero-accent-text">mark@markanthonysamonte.dev</span>:~$ whoami
      </div>
      <div className="hero-name-row">
        <img src={ProfilePicture} alt="Mark Samonte" className="hero-avatar" />
        <h1 className="hero-name">Mark Samonte</h1>
      </div>
      <div className="hero-title-line">
        Software Engineer
        <span className="hero-title-muted"> · full-stack · automation</span>
        <span className="hero-cursor" />
      </div>
      <p className="hero-bio">
        I build modern web applications with a focus on performance, security, and user experience.
        I use AI to accelerate development, automate repetitive tasks, and spend more time on planning
        and solving complex problems.
      </p>
      <AutomationDiagram />
    </section>
  );
}
