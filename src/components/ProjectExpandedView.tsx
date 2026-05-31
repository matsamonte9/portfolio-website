import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { type Project } from '../pages/projects/ProjectsBody';
import './ProjectExpandedView.css';

type Props = { product: Project; onClose: () => void };

function ImageLightbox({ images, startIndex, onClose }: {
  images: string[]; startIndex: number; onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const thumbRef = useRef<HTMLDivElement>(null);

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const el = thumbRef.current?.children[idx] as HTMLElement;
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [idx]);

  return createPortal(
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <div className="lb-main" onClick={e => e.stopPropagation()}>
        <button className="lb-arrow lb-prev" onClick={prev}>‹</button>
        <img src={images[idx]} alt="" className="lb-img" />
        <button className="lb-arrow lb-next" onClick={next}>›</button>
      </div>
      <div className="lb-thumbs" ref={thumbRef} onClick={e => e.stopPropagation()}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`lb-thumb${i === idx ? ' active' : ''}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>,
    document.body
  );
}

export function ProjectExpandedView({ product, onClose }: Props) {
  const [lightbox, setLightbox] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [viewIdx, setViewIdx] = useState(0);
  const imgs = product.images && product.images.length > 0 ? product.images : null;

  const openLightbox = (i = 0) => { setLbIndex(i); setLightbox(true); };
  const goPrev = (e: React.MouseEvent) => { e.stopPropagation(); setViewIdx(i => (i - 1 + (imgs?.length ?? 1)) % (imgs?.length ?? 1)); };
  const goNext = (e: React.MouseEvent) => { e.stopPropagation(); setViewIdx(i => (i + 1) % (imgs?.length ?? 1)); };

  return (
    <>
      <div className="view-container">
        <div className="view-image-wrapper">
          {product.videoUrl ? (
            <iframe src={product.videoUrl} className="view-image" allowFullScreen style={{ border: 'none' }} />
          ) : imgs ? (
            <div className="view-img-slider">
              <img
                src={imgs[viewIdx]}
                alt={product.title}
                className="view-image"
                style={{ cursor: 'pointer' }}
                onClick={() => openLightbox(viewIdx)}
              />
              {imgs.length > 1 && (
                <>
                  <button className="vs-prev" onClick={goPrev}>‹</button>
                  <button className="vs-next" onClick={goNext}>›</button>
                  <div className="vs-count">{viewIdx + 1} / {imgs.length}</div>
                </>
              )}
            </div>
          ) : (
            <img src={product.image} alt={product.title} className="view-image" />
          )}
        </div>
        <div className="view-info">
          <button className="view-close" onClick={onClose}>✕</button>
          <h2 className="view-title">{product.title}</h2>
          <p className="view-description">{product.fullDetails}</p>
          {product.tags.length > 0 && (
            <div className="view-tags">
              {product.tags.map(tag => <span key={tag} className="view-tag">{tag}</span>)}
            </div>
          )}
          <div className="view-links">
            {product.href && (
              <a href={product.href} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github" /> GitHub
              </a>
            )}
            {product.link && (
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {lightbox && imgs && (
        <ImageLightbox
          images={imgs}
          startIndex={lbIndex}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
}
