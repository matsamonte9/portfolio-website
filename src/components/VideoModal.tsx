import { useEffect, useState } from 'react';
import type { Project } from '../data/projects';
import './VideoModal.css';

type VideoModalProps = {
  project: Project;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: VideoModalProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [splashDismissed, setSplashDismissed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="video-modal-frame">
          {!splashDismissed && (
            <div className="video-modal-splash">
              <span>🎧</span>
              <p>Put your earphones on!</p>
              <button onClick={() => setSplashDismissed(true)}>Got it →</button>
            </div>
          )}
          {!videoLoaded && <div className="video-modal-skeleton" />}
          <iframe
            src={project.videoUrl}
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
            style={{ opacity: videoLoaded ? 1 : 0 }}
          />
        </div>

        <div className="video-modal-info">
          <h3 className="video-modal-title">{project.title}</h3>
          <span className="video-modal-tags">{project.tags.join(' · ')}</span>
          <p className="video-modal-description">{project.cutDetails}</p>
        </div>
      </div>
    </div>
  );
}
