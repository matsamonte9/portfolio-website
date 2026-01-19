import './HomeIcons.css';

type HomeIconsProp = {
  className: string,
}

const icons = [{
  icon: "fa-brands fa-github",
  href: "https://github.com/matsamonte9",
  label: "Github",
  id: "github"
}, {
  icon: "fa-brands fa-linkedin",
  href: "https://www.linkedin.com/in/mark-anthony-samonte-48480b369/",
  label: "LinkedIn",
  id: "linkedin"
}, {
  icon: "fa-solid fa-envelope",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=mat.samonte9@gmail.com",
  label: "Gmail",
  id: "gmail"
}, {
  icon: "fa-brands fa-twitter",
  href: "https://x.com/markitongatog",
  label: "X",
  id: "x"
}];

export function HomeIcons({ className }: HomeIconsProp) {
  return (
    <div className={`home-icons ${className}`}>
      {icons.map((i) => {
        return (
          <a
            key={i.id}
            className='link-button'
            href={i.href}
            target="_blank"
            rel='noopener noreferrer'
            aria-label={i.label}
          >
            <i className={i.icon}></i>
          </a>
        )
      })}

    </div>
  );
}