import { motion } from "framer-motion";

import './ProjectsView.css';

type ProjectsViewProp = {
  activeProject: string;
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
  product: {
    id: string,
    image: string,
    title: string,
    fullDetails: string,
    cutDetails: string,
    href: string,
    link: string,
  };
}

export function ProjectsView({ setActiveProject, activeProject, product }: ProjectsViewProp) {

  return (
    <motion.div 
      layoutId={`card-${activeProject}`}
      className="view-project-container"
    >
      <i className="fa-solid fa-arrow-left" onClick={() => setActiveProject(null)}></i>
      <div className='project-card'>
        <motion.img 
          className='view-project-image' 
          src={product?.image} 
          alt="Project Image" 
          layoutId={`image-${activeProject}`}
        />
      </div>
      <p className='view-project-details'>
        {product?.fullDetails}
      </p>
      {product.link 
        ? <a target='_blank' rel="noopener noreferrer"  href={product.link}>Live Demo</a>
        : ''
      }
    </motion.div>
  )
}