import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Reveal } from "../../components/Reveal";
import { ProjectsList } from "./ProjectsList";
import { ProjectsView } from "./ProjectsView";
import { ProjectsFooter } from "./ProjectsFooter";

import PersonalWebsiteImage from '../../assets/images/portfolio.png';
import OnionLensImage from '../../assets/images/onionlens.avif';
import StoreSystemImage from '../../assets/images/dashboard.jpg';

export function ProjectsBody() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const products = [{
    image: StoreSystemImage,
    href: "https://github.com/matsamonte9/Store-System",
    title: 'Store System',
    cutDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam...',
    fullDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sunt sapiente neque laboriosam fugit adipisci fuga illum, corporis iure dolorum repellat provident eum repellendus excepturi dolorem aperiam nostrum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis amet iste architecto voluptatum commodi ratione voluptatem, ab eveniet vel ipsum hic consequuntur asperiores sequi ut. Quisquam eos odio praesentium. Store',
    id: 'store'
  }, {
    image: PersonalWebsiteImage,
    href: "https://github.com/matsamonte9/portfolio-website",
    title: 'Portfolio Website',
    cutDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam...',
    fullDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sunt sapiente neque laboriosam fugit adipisci fuga illum, corporis iure dolorum repellat provident eum repellendus excepturi dolorem aperiam nostrum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis amet iste architecto voluptatum commodi ratione voluptatem, ab eveniet vel ipsum hic consequuntur asperiores sequi ut. Quisquam eos odio praesentium. Portfolio',
    id: 'portfolio'
  }, {
    image: OnionLensImage,
    href: "https://github.com/matsamonte9/OnionLens",
    title: 'OnionLens',
    cutDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam...',
    fullDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis sunt sapiente neque laboriosam fugit adipisci fuga illum, corporis iure dolorum repellat provident eum repellendus excepturi dolorem aperiam nostrum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis amet iste architecto voluptatum commodi ratione voluptatem, ab eveniet vel ipsum hic consequuntur asperiores sequi ut. Quisquam eos odio praesentium. OnionLens',
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