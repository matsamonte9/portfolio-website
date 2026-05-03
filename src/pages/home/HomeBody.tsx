import { HomeIcons } from "./HomeIcons";

import ProfilePicture from "../../assets/images/profile.png";
import "./HomeBody.css";

export function HomeBody() {
  return (
    <div className="home-body">
      <div className="home-intro-container">
        <div className="availability-badge">
          <span className="availability-dot" />
          Open to opportunities
        </div>
        <p className="intro-header">Hello! I am</p>
        <div className="intro-body">
          <h1 className="intro-name">Mark</h1>
          <p className="intro-role">
            <span className="typing">Full Stack Developer</span>
          </p>
        </div>
        <p className="intro-footer">
          Result-driven <span>Full Stack Developer</span> focused on building
          scalable, user-centered <span>web applications</span>. I work across
          the full development lifecycle, from planning and system design to
          deployment. I use and integrate <span>AI</span> in my workflow to
          improve efficiency and build more capable applications.
        </p>
        <a
          href="/resume-samonte-mark-anthony.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="view-cv"
        >
          Check CV ↗
        </a>
        <HomeIcons />
      </div>
      <div className="image-container">
        <img src={ProfilePicture} alt="Mark Samonte" className="headers-img" />
      </div>
    </div>
  );
}
