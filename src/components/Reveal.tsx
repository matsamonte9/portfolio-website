import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
};

export function Reveal({ children }: RevealProps) {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!revealRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(revealRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className="reveal">
      {children}
    </div>
  );
}
