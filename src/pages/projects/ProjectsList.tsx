import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { type Project } from './ProjectsBody';
import './ProjectsList.css';

type ProjectsListProp = {
  setActiveProject: (id: string | null) => void;
  products: Project[];
};


function CardImageSlider({ product }: { product: Project }) {
  const [idx, setIdx] = useState(0);
  const imgs = product.images && product.images.length > 1 ? product.images : null;

  if (product.videoUrl)
    return <iframe src={product.videoUrl} className="project-video" allowFullScreen onClick={e => e.stopPropagation()} />;

  if (imgs) {
    const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + imgs.length) % imgs.length); };
    const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % imgs.length); };
    return (
      <div className="card-img-slider">
        <img src={imgs[idx]} alt={product.title} />
        <button className="cs-prev" onClick={prev}>‹</button>
        <button className="cs-next" onClick={next}>›</button>
        <div className="cs-count">{idx + 1}/{imgs.length}</div>
      </div>
    );
  }

  return <motion.img src={product.images?.[0] ?? product.image} alt={product.title} layoutId={`image-${product.id}`} />;
}

function ProjectCard({ product, setActiveProject }: {
  product: Project;
  setActiveProject: ProjectsListProp['setActiveProject'];
}) {
  return (
    <motion.div
      className="project-card"
      layoutId={`card-${product.id}`}
      onClick={() => setActiveProject(product.id)}
    >
      <div className="project-image-container">
        <CardImageSlider product={product} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{product.title}</h3>
        <p className="project-details">{product.cutDetails}</p>
        {product.tags.length > 0 && (
          <div className="project-tags">
            {product.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
          </div>
        )}
        <div className="project-links" onClick={e => e.stopPropagation()}>
          {product.href && <a href={product.href} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
          {product.link && <a href={product.link} target="_blank" rel="noopener noreferrer">Live ↗</a>}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsList({ setActiveProject, products }: ProjectsListProp) {
  const [{ activeTab, currentIndex }, setCarousel] = useState({ activeTab: 0, currentIndex: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const activeTabRef = useRef(0);
  const isScrolling = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);

  const setActiveTab = (tab: number) =>
    setCarousel({ activeTab: tab, currentIndex: 0 });

  const setCurrentIndex = (val: number | ((prev: number) => number)) =>
    setCarousel(prev => ({
      ...prev,
      currentIndex: typeof val === 'function' ? val(prev.currentIndex) : val,
    }));

  const tabs = [
    { label: 'Full Stack',      items: products.filter(p => p.category === 'fullstack') },
    { label: 'AI & Automation', items: products.filter(p => p.category === 'automation') },
  ];

  const cards = tabs[activeTab].items;

  // Desktop: group into pairs; mobile: individual cards
  const pairs: Project[][] = [];
  for (let i = 0; i < cards.length; i += 2) pairs.push(cards.slice(i, i + 2));

  const slides     = isMobile ? cards.map(c => [c]) : pairs;
  const totalSlides = slides.length;

  useEffect(() => { totalRef.current = totalSlides; }, [totalSlides]);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalRef.current);
    }, 3000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeTab, isMobile]);

  const currentPair = slides[currentIndex] ?? [];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current?.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Only hijack when 75% of the full projects section is visible
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const inView = visible / (rect.bottom - rect.top) >= 0.75;
      if (!inView) return;
      if (isScrolling.current) { e.preventDefault(); return; }

      const cur = activeTabRef.current;
      const last = tabs.length - 1;

      const throttle = () => {
        isScrolling.current = true;
        setTimeout(() => { isScrolling.current = false; }, 450);
      };

      if (e.deltaY > 0 && cur < last) {
        e.preventDefault(); setActiveTab(cur + 1); throttle();
        // at last — release to normal scroll
      } else if (e.deltaY < 0 && cur > 0) {
        e.preventDefault(); setActiveTab(cur - 1); throttle();
        // at first — release to normal scroll
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [tabs.length]);

  return (
    <div className="sidebar-layout" ref={sectionRef}>
      <nav className="sidebar-nav">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`sidebar-nav-btn${i === activeTab ? ' active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            <span className="sidebar-dot" />
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`project-body${currentPair.length === 1 ? ' solo' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentPair.map(product => (
              <ProjectCard key={product.id} product={product} setActiveProject={setActiveProject} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots — pairs on desktop, individual on mobile */}
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === currentIndex ? ' active' : ''}`}
              onClick={() => { setCurrentIndex(i); startInterval(); }}
            />
          ))}
        </div>

        <Link to="/projects" className="projects-view-all">View All →</Link>
      </div>
    </div>
  );
}
