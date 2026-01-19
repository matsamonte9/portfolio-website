import { Reveal } from '../../components/Reveal';

import MongoDBLogo from '../../assets/images/mongodb-logo.png';
import ExpressLogo from '../../assets/images/express-logo.png';
import ReactLogo from '../../assets/images/react.svg';
import NodeJSLogo from '../../assets/images/nodejs-logo.png';
import './CoreToolLogo.css';

export function CoreToolLogo() {
  return (
    <Reveal>
      <div className="core-tool-logo-container">
        <div className="mongodb">
          <img className="logo" src={MongoDBLogo} alt="MongoDB Logo" />
          <p>MongoDB</p>
        </div>
        <div className="express">
          <img className="logo" src={ExpressLogo} alt="Express Logo" />
          <p>Express</p>
        </div>
        <div className="react">
          <img className="logo" src={ReactLogo} alt="React Logo" />
          <p>React</p>
        </div>
        <div className="nodejs">
          <img className="logo" src={NodeJSLogo} alt="NodeJS Logo" />
          <p>NodeJS</p>
        </div>
      </div>
    </Reveal>
  );
}