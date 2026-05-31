import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { categories, type Tool } from '../../data/tools';
import './ToolsGrid.css';

function ToolCard({ icon, label, color }: Tool) {
  const isImg  = icon.includes('/');
  const isLogo = icon.startsWith('logos:');
  return (
    <div className="tool-card" style={{ '--brand-color': color } as React.CSSProperties}>
      {isImg
        ? <img src={icon} alt={label} width={36} height={36} style={{ objectFit: 'contain' }} />
        : <Icon icon={icon} width={36} height={36} style={isLogo ? undefined : { color }} />
      }
      <p>{label}</p>
    </div>
  );
}

export function ToolsGrid() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const activeTabRef = useRef<number | null>(null);
  const isScrolling = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current?.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Only hijack when 75% of the full tools section is visible
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const inView = visible / (rect.bottom - rect.top) >= 0.75;
      if (!inView) return;
      if (isScrolling.current) { e.preventDefault(); return; }

      const current = activeTabRef.current;
      const last = categories.length - 1;

      if (e.deltaY > 0) {
        if (current === null) {
          e.preventDefault(); setActiveTab(0); throttle();
        } else if (current < last) {
          e.preventDefault(); setActiveTab(current + 1); throttle();
        }
        // at last — release to normal scroll
      } else if (e.deltaY < 0) {
        if (current === null) {
          // release to normal scroll
        } else if (current === 0) {
          e.preventDefault(); setActiveTab(null); throttle();
        } else {
          e.preventDefault(); setActiveTab(current - 1); throttle();
        }
      }
    };

    const throttle = () => {
      isScrolling.current = true;
      setTimeout(() => { isScrolling.current = false; }, 450);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  const visibleTools: Tool[] = activeTab === null
    ? categories.flatMap(c => c.tools)
    : categories[activeTab].tools;

  return (
    <div className="sidebar-layout" ref={sectionRef}>
      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav-btn${activeTab === null ? ' active' : ''}`}
          onClick={() => setActiveTab(null)}
        >
          <span className="sidebar-dot" />
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            className={`sidebar-nav-btn${activeTab === i ? ' active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            <span className="sidebar-dot" />
            {cat.name}
          </button>
        ))}
      </nav>
      <div className="sidebar-content">
        <div className="category-tools">
          {visibleTools.map(tool => (
            <ToolCard key={tool.label} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
