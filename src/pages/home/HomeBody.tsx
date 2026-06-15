import { HomeIcons } from "./HomeIcons";

import ProfilePicture from "../../assets/images/profile-new-2.jpg";
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
            <span className="typing">
              Full Stack Developer | AI Automation Specialist
            </span>
          </p>
        </div>
        <p className="intro-footer">
          <span>Full Stack Developer</span> who builds web applications and
          designs <span>AI-integrated systems</span> and{" "}
          <span>automation workflows</span>. From database architecture to
          deployment — and from AI generation pipelines to workflow automation
          using tools like n8n, Make, and Zapier.
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
