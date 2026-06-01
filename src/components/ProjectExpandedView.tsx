import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { type Project } from '../pages/projects/ProjectsBody';
import './ProjectExpandedView.css';

type Props = { product: Project; onClose: () => void };

function ImageLightbox({ images, videoUrl, startIndex, onClose }: {
  images: string[]; videoUrl?: string; startIndex: number; onClose: () => void;
}) {
  const total = (videoUrl ? 1 : 0) + images.length;
  const [idx, setIdx] = useState(startIndex);
  const [lbVideoLoaded, setLbVideoLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(videoUrl && startIndex === 0);
  const thumbRef = useRef<HTMLDivElement>(null);

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  const isVideo = videoUrl && idx === 0;
  const imgIdx  = videoUrl ? idx - 1 : idx;

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
      {showSplash && (
        <div className="lb-splash" onClick={e => e.stopPropagation()}>
          <div className="lb-splash-icon">🎧</div>
          <h2 className="lb-splash-title">Put your earphones on!</h2>
          <p className="lb-splash-sub">Best experienced with audio</p>
          <button className="lb-splash-btn" onClick={() => setShowSplash(false)}>
            Got it →
          </button>
        </div>
      )}
      <button className="lb-close" onClick={onClose}>✕</button>
      <div className="lb-main" onClick={e => e.stopPropagation()}>
        <button className="lb-arrow lb-prev" onClick={prev}>‹</button>
        {isVideo ? (
          <div className="lb-video-wrapper">
            {!lbVideoLoaded && <div className="lb-video-skeleton" />}
            <iframe
              src={videoUrl}
              className="lb-video"
              allowFullScreen
              onLoad={() => setLbVideoLoaded(true)}
              style={{ border: 'none', opacity: lbVideoLoaded ? 1 : 0, transition: 'opacity 0.3s ease', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
          </div>
        ) : (
          <img src={images[imgIdx]} alt="" className="lb-img" />
        )}
        <button className="lb-arrow lb-next" onClick={next}>›</button>
      </div>
      <div className="lb-thumbs" ref={thumbRef} onClick={e => e.stopPropagation()}>
        {videoUrl && (
          <div
            className={`lb-thumb lb-thumb-video${idx === 0 ? ' active' : ''}`}
            onClick={() => setIdx(0)}
          >▶</div>
        )}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`lb-thumb${(videoUrl ? i + 1 : i) === idx ? ' active' : ''}`}
            onClick={() => setIdx(videoUrl ? i + 1 : i)}
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(!!product.videoUrl);
  const hasVideo = !!product.videoUrl;
  const imgs = product.images ?? [];
  const total = (hasVideo ? 1 : 0) + imgs.length;
  const isVideoSlide = hasVideo && viewIdx === 0;
  const imgIdx = hasVideo ? viewIdx - 1 : viewIdx;

  const openLightbox = (i = 0) => { setLbIndex(i); setLightbox(true); };
  const goPrev = (e: React.MouseEvent) => { e.stopPropagation(); setViewIdx(i => (i - 1 + total) % total); };
  const goNext = (e: React.MouseEvent) => { e.stopPropagation(); setViewIdx(i => (i + 1) % total); };

  return (
    <>
      <div className="view-container">
        <div className="view-image-wrapper">
          {total > 0 ? (
            <div className="view-img-slider">
              {showSplash && (
                <div className="view-splash" onClick={e => e.stopPropagation()}>
                  <div className="view-splash-icon">🎧</div>
                  <p className="view-splash-title">Put your earphones on!</p>
                  <button className="view-splash-btn" onClick={() => setShowSplash(false)}>Got it →</button>
                </div>
              )}
              {/* Keep iframe in DOM always so video doesn't reload */}
              {hasVideo && (
                <>
                  {isVideoSlide && !videoLoaded && <div className="video-skeleton" />}
                  <iframe
                    src={product.videoUrl}
                    className="view-image"
                    allowFullScreen
                    onLoad={() => setVideoLoaded(true)}
                    style={{
                      border: 'none',
                      display: isVideoSlide ? 'block' : 'none',
                      opacity: videoLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </>
              )}
              {!isVideoSlide && imgs.length > 0 && (
                <img
                  src={imgs[imgIdx]}
                  alt={product.title}
                  className="view-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openLightbox(imgIdx)}
                />
              )}
              {total > 1 && (
                <>
                  <button className="vs-prev" onClick={goPrev}>‹</button>
                  <button className="vs-next" onClick={goNext}>›</button>
                  <div className="vs-count">{viewIdx + 1} / {total}</div>
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

      {lightbox && (
        <ImageLightbox
          images={imgs}
          videoUrl={product.videoUrl}
          startIndex={lbIndex}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
}
