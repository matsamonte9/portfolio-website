import './HomeIcons.css';

const icons = [
  { icon: 'fa-brands fa-github',   href: 'https://github.com/matsamonte9',                                        label: 'GitHub',   id: 'github'   },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mark-anthony-samonte-48480b369/',            label: 'LinkedIn', id: 'linkedin' },
  { icon: 'fa-solid fa-envelope',  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mat.samonte9@gmail.com',   label: 'Gmail',    id: 'gmail'    },
  { icon: 'fa-brands fa-twitter',  href: 'https://x.com/markitongatog',                                           label: 'X',        id: 'x'        },
];

export function HomeIcons() {
  return (
    <div className="home-icons">
      {icons.map(i => (
        <a
          key={i.id}
          className="icon-btn"
          href={i.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={i.label}
        >
          <i className={i.icon} />
        </a>
      ))}
    </div>
  );
}
