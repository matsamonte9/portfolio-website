import './HomeHeader.css';

const AVAILABLE = true;

export function HomeHeader() {
  return (
    <header className="home-header">
      <span className="home-path">~/mark-samonte</span>
      {AVAILABLE && (
        <span className="availability-pill">
          <span className="availability-dot" />
          open to opportunities
        </span>
      )}
    </header>
  );
}
