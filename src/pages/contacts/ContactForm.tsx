import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import './ContactForm.css';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      const formData = new FormData(formRef.current!);
      const name = formData.get("name") as string;
      const message = formData.get("message") as string;
      const email = formData.get("email") as string;

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          name,
          message,
          email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      formRef.current?.reset();
    }).catch(() => {
      alert("Failed to send message");
    });
  }

  return (
    <form ref={formRef} className="contacts-form" onSubmit={sendEmail}>
      <label htmlFor="name">Your Name/Company</label>
      <input id="name" name="name" type="text" placeholder="Enter your name/company" />
      <label htmlFor="email">Your Email</label>
      <input id="email" name="email" type="email" placeholder="Enter your email" />
      <label htmlFor="message">Write your message here</label>
      <textarea id="message" name="message" placeholder="Enter your message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}