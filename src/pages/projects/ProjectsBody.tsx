import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Reveal } from "../../components/Reveal";
import { ProjectsFooter } from "./ProjectsFooter";
import { ProjectsList } from "./ProjectsList";
import { ProjectsView } from "./ProjectsView";

import AIGenerate from "../../assets/images/AI-Generate.png";
import OnionLensImage from "../../assets/images/onionlens.png";
import PersonalWebsiteImage from "../../assets/images/portfolio.png";
import Prokora from "../../assets/images/prokora.jpg";
import StoreSystemImage from "../../assets/images/store.png";

export function ProjectsBody() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const products = [
    {
      image: AIGenerate,
      href: "https://github.com/matsamonte9/AI-Generate",
      title: "AI Generate",
      cutDetails:
        "AI-powered platform for multimedia generation with credit-based usage, microservices, and early beta testing",
      fullDetails: `AI Generate is a scalable AI platform for image, video, and audio generation built with a credit-based system for creators, editors, and clients. It uses a microservices architecture, with an AI Chat module built in Python by a dedicated backend team. Services communicate through well-defined APIs between Python and Node.js/Express, ensuring scalability and separation of concerns. Redis and BullMQ handle queueing and job prioritization for heavy AI workloads. Supabase manages authentication and primary storage, while Cloudflare R2 provides backup storage. The system is deployed with Railway for backend services, Vercel for frontend, and RunPod GPUs running ComfyUI for AI generation. A secure GPU proxy layer with API key authentication and tunneling (Cloudflare Tunnel / ngrok) protects direct GPU access and hides public IPs. The platform is currently in a 30-user private beta used to test stability and identify bottlenecks before full release. I lead the project as full-stack developer and system architect, managing frontend, backend, and coordination with Python and frontend developers. Upcoming features include a creative community, collaboration tools between clients and creators, and a job marketplace for editors and brands with integrated portfolios.`,
      link: "https://ai-generator-frontend-git-master-markanthonyys-projects.vercel.app/",
      id: "placeholder1",
      tags: [
        "Tailwind",
        "React",
        "Express",
        "Node.js",
        "Supabase",
        "Python FastAPI",
        "ComfyUI",
      ],
    },
    {
      image: OnionLensImage,
      href: "https://github.com/matsamonte9/OnionLens",
      title: "OnionLens",
      cutDetails:
        "ML system that detects armyworm infestation in onions using CNNs as an early pest detection tool.",
      fullDetails:
        "OnionLens is a team-developed machine learning system built using Python, CNNs, and Flask, where I was responsible for creating and optimizing the machine learning model through image processing, model training, and hyperparameter tuning to detect armyworm infestation in onions as an early pest detection tool for local farmers.",
      link: "",
      id: "onionlens",
      tags: ["CNN", "TensorFlow", "Keras", "Python", "Flask"],
    },
    {
      image: StoreSystemImage,
      href: "https://github.com/matsamonte9/Store-System",
      title: "Store System",
      cutDetails:
        "Full-stack retail management system with inventory control, POS, order tracking, and barcode-based workflows.",
      fullDetails: `Store System is a full-stack retail management system I developed using Vanilla JavaScript, Node.js with Express, and MongoDB, designed to handle inventory control, point-of-sale operations, order tracking, user management, RBAC, and barcode-based workflows to reduce manual processes, workloads, and human error in small retail businesses specifically my Mother's business.`,
      link: "https://store-system-sand.vercel.app/login.html",
      id: "store",
      tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    },
    {
      image: Prokora,
      href: "https://github.com/matsamonte9/Prokora",
      title: "Prokora",
      cutDetails:
        "A secure admin management system built with role-based access control to handle users, permissions, and system workflows.",
      fullDetails: `Prokora is an internal admin management system built for a company during my internship, designed to track and manage business operations such as sales, employees, and marketing data through a centralized dashboard. My primary responsibility was the frontend development, where I built the user interface using plain HTML, CSS, and JavaScript. I focused on creating clean, functional, and responsive layouts for admin dashboards, data views, and management screens. The system was designed for internal company use, allowing different departments to monitor and manage operational data efficiently in one place. My work ensured that the UI was intuitive, structured, and easy for non-technical users to navigate. This project helped strengthen my fundamentals in frontend development, DOM manipulation, and building structured admin interfaces without relying on frameworks.`,
      link: "",
      id: "placeholder2",
      tags: ["Javascript", "Python", "Flask"],
    },
    {
      image: PersonalWebsiteImage,
      href: "https://github.com/matsamonte9/portfolio-website",
      title: "Portfolio Website",
      cutDetails:
        "Personal portfolio built with React and TypeScript featuring smooth animations and responsive design.",
      fullDetails:
        "A personal portfolio website built using React and TypeScript to showcase my projects, technical skills, and experience with a focus on clean design, smooth animations, and responsive layouts.",
      link: "https://portfolio-website-v2fc.vercel.app/",
      id: "portfolio",
      tags: ["React", "TypeScript"],
    },
  ];

  const product = products.find((product) => product.id === activeProject);

  return (
    <>
      <Reveal>
        <AnimatePresence>
          {activeProject ? (
            <ProjectsView
              activeProject={activeProject}
              setActiveProject={setActiveProject}
              product={product!}
            />
          ) : (
            <ProjectsList
              setActiveProject={setActiveProject}
              products={products}
            />
          )}
        </AnimatePresence>
      </Reveal>
      <Reveal>
        <ProjectsFooter isViewing={!!activeProject} product={product!} />
      </Reveal>
    </>
  );
}
