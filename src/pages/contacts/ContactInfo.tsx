import './ContactInfo.css';

export function ContactInfo() {
  return (
    <div className="contacts-info-container">
      <h1>Let's Talk</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum quibusdam cupiditate vel distinctio</p>
      <div className="contact-details-container">
        <div>
          <i className="fa-solid fa-envelope"></i>
          <p>mat.samonte9@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <p>+63 (929) 181-5435</p>
        </div>
        <div>
          <i className="fa-solid fa-location-pin"></i>
          <p>Nueva Ecija, Philippines</p>
        </div>
      </div>
    </div>
  );
}