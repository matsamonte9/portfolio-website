import { motion } from 'framer-motion';
import './ProjectsList.css';

type Project = {
  id: string;
  image: string;
  title: string;
  cutDetails: string;
  href: string;
  link: string;
  tags: string[];
};

type ProjectsListProp = {
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
  products: Project[];
};

export function ProjectsList({ setActiveProject, products }: ProjectsListProp) {
  return (
    <div className="project-body">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="project-card"
          layoutId={`card-${product.id}`}
          onClick={() => setActiveProject(product.id)}
        >
          <div className="project-image-container">
            <motion.img
              src={product.image}
              alt={product.title}
              layoutId={`image-${product.id}`}
            />
          </div>
          <div className="project-content">
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="project-title">{product.title}</h3>
            <p className="project-details">{product.cutDetails}</p>
            {product.tags.length > 0 && (
              <div className="project-tags">
                {product.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="project-links" onClick={e => e.stopPropagation()}>
              {product.href && (
                <a href={product.href} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              )}
              {product.link && (
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
