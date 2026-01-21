import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Reveal } from "../../components/Reveal";
import { ProjectsList } from "./ProjectsList";
import { ProjectsView } from "./ProjectsView";
import { ProjectsFooter } from "./ProjectsFooter";

import PersonalWebsiteImage from '../../assets/images/portfolio.png';
import OnionLensImage from '../../assets/images/onionlens.png';
import StoreSystemImage from '../../assets/images/store.png';

export function ProjectsBody() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const products = [{
    image: StoreSystemImage,
    href: "https://github.com/matsamonte9/Store-System",
    title: 'Store System',
    cutDetails: 'Store System is a full-stack retail management system I developed using...',
    fullDetails: `Store System is a full-stack retail management system I developed using Vanilla JavaScript, Node.js with Express, and MongoDB, designed to handle inventory control, point-of-sale operations, order tracking, user management, RBAC, and barcode-based workflows to reduce manual processes, workloads, and human error in small retail businesses specifically my Mother's business.`,
    link: 'https://store-system-sand.vercel.app/login.html',
    id: 'store'
  }, {
    image: PersonalWebsiteImage,
    href: "https://github.com/matsamonte9/portfolio-website",
    title: 'Portfolio Website',
    cutDetails: 'A personal portfolio website built using React and TypeScript to showcase...',
    fullDetails: 'A personal portfolio website built using React and TypeScript to showcase my projects, technical skills, and experience with a focus on clean design, smooth animations, and responsive layouts.',
    link: 'https://portfolio-website-v2fc.vercel.app/',
    id: 'portfolio'
  }, {
    image: OnionLensImage,
    href: "https://github.com/matsamonte9/OnionLens",
    title: 'OnionLens',
    cutDetails: 'OnionLens is a team-developed machine learning system built using Python...',
    fullDetails: 'OnionLens is a team-developed machine learning system built using Python, CNNs, and Flask, where I was responsible for creating and optimizing the machine learning model through image processing, model training, and hyperparameter tuning to detect armyworm infestation in onions as an early pest detection tool for local farmers.',
    link: '',
    id: 'onionlens'
  }]

  const product = products.find(product => product.id === activeProject);

  return (
    <>
      <Reveal>
        <AnimatePresence>
          {activeProject
            ? <ProjectsView 
                activeProject={activeProject}
                setActiveProject={setActiveProject}
                product={product!}
              />
            : <ProjectsList 
                setActiveProject={setActiveProject} 
                products={products}
              />
          }
        </AnimatePresence>
      </Reveal>
      <Reveal>
        <ProjectsFooter 
          isViewing={!!activeProject}
          product={product!}
        />
      </Reveal>
    </>
  );
}