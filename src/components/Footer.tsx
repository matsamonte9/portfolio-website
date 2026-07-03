import './Footer.css';

const links = [
  { label: 'email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mat.samonte9@gmail.com' },
  { label: 'github', href: 'https://github.com/matsamonte9' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/mark-anthony-samonte-48480b369/' },
  { label: 'resume', href: '/resume-samonte-mark-anthony.pdf' },
];

export function Footer() {
  return (
    <footer className="contact-footer section">
      <div className="section-label">// contact</div>
      <div className="contact-links">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
      <div className="contact-copyright">© 2026 Mark Samonte · Nueva Ecija, Philippines</div>
    </footer>
  );
}
