import { motion } from "framer-motion";
import './ProjectsView.css';

type ProjectsViewProp = {
  activeProject: string;
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
  product: {
    id: string;
    image: string;
    title: string;
    fullDetails: string;
    cutDetails: string;
    href: string;
    link: string;
    tags: string[];
  };
};

export function ProjectsView({ setActiveProject, activeProject, product }: ProjectsViewProp) {
  return (
    <motion.div
      layoutId={`card-${activeProject}`}
      className="view-container"
    >
      <button className="view-back" onClick={() => setActiveProject(null)}>
        ← Back
      </button>
      <div className="view-body">
        <div className="view-image-wrapper">
          <motion.img
            src={product.image}
            alt={product.title}
            layoutId={`image-${activeProject}`}
            className="view-image"
          />
        </div>
        <div className="view-info">
          <h2 className="view-title">{product.title}</h2>
          <p className="view-description">{product.fullDetails}</p>
          {product.tags.length > 0 && (
            <div className="view-tags">
              {product.tags.map(tag => (
                <span key={tag} className="view-tag">{tag}</span>
              ))}
            </div>
          )}
          <div className="view-links">
            {product.href && (
              <a href={product.href} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> GitHub
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
    </motion.div>
  );
}
