import { Reveal } from '../../components/Reveal';

import HTMLCSSLogo from '../../assets/images/html-css-logo.png';
import JavaScriptLogo from '../../assets/images/javascript-logo.png';
import TypeScriptLogo from '../../assets/images/typescript-logo.png';
import MySQLLogo from '../../assets/images/mysql-logo.png';
import GitLogo from '../../assets/images/git-logo.png';
import './ExtraToolLogo.css';

export function ExtraToolLogo() {
  return (
    <Reveal>
      <div className="extra-tool-logo-container">
        <div>
          <img className="extra-tool-logo" src={HTMLCSSLogo} alt="HTML/CSS Logo" />
          <p>HTML/CSS</p>
        </div>
        <div>
          <img className="extra-tool-logo" src={JavaScriptLogo} alt="JavaScript Logo" />
          <p>JavaScript</p>
        </div>
        <div>
          <img className="extra-tool-logo" src={TypeScriptLogo} alt="TypeScript Logo" />
          <p>TypeScript</p>
        </div>
        <div>
          <img className="extra-tool-logo" src={MySQLLogo} alt="MySQL Logo" />
          <p>MySQL</p>
        </div>
        <div>
          <img className="extra-tool-logo" src={GitLogo} alt="Git Logo" />
          <p>Git</p>
        </div>
      </div>
    </Reveal>
  );
}