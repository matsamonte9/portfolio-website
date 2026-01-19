import { forwardRef } from "react";

import { Reveal } from "../../components/Reveal";
import { SectionTitle } from "../../components/SectionTitle";
import { ContactsBody } from "./ContactsBody";

import './ContactsPage.css';

export const ContactsPage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="contacts">
      <SectionTitle title={'Contact Me'} />
      <ContactsBody />
      
      <div className="contacts-footer">

      </div>
    </section>
  </Reveal>
));