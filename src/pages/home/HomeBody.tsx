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
          <p className="intro-role typing">
            Full Stack Web Developer | MERN
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
      </div>
      <div className="image-container">
        <img src={ProfilePicture} alt="headers-img" className="headers-img" />
        <div className="home-icons">
          <a 
            className='link-button' 
            href="https://github.com/matsamonte9"
            target="_blank"
            rel='noopener noreferrer'
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            className='link-button' 
            href="https://www.linkedin.com/in/mark-anthony-samonte-48480b369/"
            target="_blank" 
            rel='noopener noreferrer'
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            className='link-button' 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mat.samonte9@gmail.com"
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a 
            className='link-button'  
            href=""
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}