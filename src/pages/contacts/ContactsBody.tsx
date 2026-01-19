import { Reveal } from '../../components/Reveal';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import './ContactsBody.css';

export function ContactsBody() {
  return (
    <Reveal>
      <div className="contacts-body">
        <ContactInfo />
        <ContactForm />
      </div>
    </Reveal>
  );
}