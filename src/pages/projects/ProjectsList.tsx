import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { type Project } from './ProjectsBody';
import './ProjectsList.css';

type CarouselState = { activeTab: number; currentIndex: number };

type ProjectsListProp = {
  setActiveProject: (id: string | null) => void;
  products: Project[];
  carousel: CarouselState;
  setCarousel: React.Dispatch<React.SetStateAction<CarouselState>>;
};


function CardImageSlider({ product }: { product: Project }) {
  const [idx, setIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [splashDismissed, setSplashDismissed] = useState(false);
  const hasVideo = !!product.videoUrl;
  const imgs = product.images ?? [];
  const total = (hasVideo ? 1 : 0) + imgs.length;

  if (total <= 1 && !hasVideo)
    return <motion.img src={imgs[0] ?? product.image} alt={product.title} layoutId={`image-${product.id}`} />;

  if (total <= 1 && hasVideo)
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {!videoLoaded && <div className="card-video-skeleton" />}
        <iframe
          src={product.videoUrl}
          className="project-video"
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
          onClick={e => e.stopPropagation()}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        />
      </div>
    );

  const isVideo = hasVideo && idx === 0;
  const imgIdx  = hasVideo ? idx - 1 : idx;
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % total); };

  return (
    <div className="card-img-slider">
      {isVideo ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {isVideo && !splashDismissed && (
            <div className="card-splash" onClick={e => e.stopPropagation()}>
              <span>🎧</span>
              <p>Put your earphones on!</p>
              <button onClick={() => setSplashDismissed(true)}>Got it →</button>
            </div>
          )}
          {!videoLoaded && <div className="card-video-skeleton" />}
          <iframe
            src={product.videoUrl}
            className="project-video"
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
            onClick={e => e.stopPropagation()}
            style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          />
        </div>
      ) : (
        <img src={imgs[imgIdx]} alt={product.title} />
      )}
      <button className="cs-prev" onClick={prev}>‹</button>
      <button className="cs-next" onClick={next}>›</button>
      <div className="cs-count">{idx + 1}/{total}</div>
    </div>
  );
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

export function ProjectsList({ setActiveProject, products, carousel, setCarousel }: ProjectsListProp) {
  const { activeTab, currentIndex } = carousel;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const activeTabRef = useRef(0);
  const isScrolling = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const slides = isMobile ? cards.map(c => [c]) : pairs;


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
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        <Link to="/projects" className="projects-view-all">View All →</Link>
      </div>
    </div>
  );
}
