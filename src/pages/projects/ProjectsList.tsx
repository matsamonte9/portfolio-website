import { motion } from 'framer-motion';
import './ProjectsList.css';

type ProjectsListProp = {
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>;
  products: {
    id: string,
    image: string,
    title: string,
    cutDetails: string
  }[];
}

export function ProjectsList({ setActiveProject, products }: ProjectsListProp) {
  return (
    <div className='project-body'>
      {products.map((product) => {
        return (
          <motion.div 
            key={product.id}
            className='project-card'
            layoutId={`card-${product.id}`}
            onClick={() => setActiveProject(product.id)}
          >
            <div className='project-image-container'>
              <motion.img 
                src={product.image} 
                alt="Project Image" 
                layoutId={`image-${product.id}`}
              />
            </div>
            <div className='project-info-container'>
              <p className='project-title'>
                {product.title}
              </p>
              <p className='project-details'>
                {product.cutDetails}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}