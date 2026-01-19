import { HomeIcons } from './HomeIcons';

import ProfilePicture from '../../assets/images/profile.png'
import './HomeBody.css';

export function HomeBody() {
  return (
    <div className="home-body">
      <div className="home-intro-container">
        <p className="intro-header">
          Hello! I am
        </p>
        <div className="intro-body">
          <h1 className="intro-name">
            Mark
          </h1>
          <p className="intro-role">
            <span className='typing'>
              Full Stack Web Developer | MERN
            </span>
          </p>
        </div>
        <p className="intro-footer">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam atque voluptatum fuga doloribus rem dolores iusto reprehenderit possimus, dolore repellat similique ab ea id, eveniet vel numquam provident deleniti vero.
        </p>
        <a 
          href="/resume-samonte-mark-anthony.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="view-cv"
        >
          Check CV
        </a>
        <HomeIcons className='mobile-icons' />
      </div>
      <div className="image-container">
        <img src={ProfilePicture} alt="headers-img" className="headers-img" />
        <HomeIcons className='desktop-icons' />

      </div>
    </div>
  );
}