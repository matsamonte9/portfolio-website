import AIGenerate from '../assets/images/AI-Generate.png';
import OnionLensImage from '../assets/images/onionlens.png';
import Prokora from '../assets/images/prokora.jpg';
import StoreSystemImage from '../assets/images/store.png';

import ps1 from '../assets/images/pos-system-webhook/step1.png';
import ps2 from '../assets/images/pos-system-webhook/step2.png';
import ps3 from '../assets/images/pos-system-webhook/step3.png';
import ps4 from '../assets/images/pos-system-webhook/step4.png';
import ps5 from '../assets/images/pos-system-webhook/step5.png';
import ps6 from '../assets/images/pos-system-webhook/step6.png';
import ps7 from '../assets/images/pos-system-webhook/step7.png';
import ps8 from '../assets/images/pos-system-webhook/step8.png';

import jt1  from '../assets/images/job-tracker/step1.png';
import jt2  from '../assets/images/job-tracker/step2.png';
import jt3  from '../assets/images/job-tracker/step3.png';
import jt4  from '../assets/images/job-tracker/step4.png';
import jt5  from '../assets/images/job-tracker/step5.png';
import jt6  from '../assets/images/job-tracker/step6.png';
import jt7  from '../assets/images/job-tracker/step7.png';
import jt8  from '../assets/images/job-tracker/step8.png';
import jt9  from '../assets/images/job-tracker/step9.png';
import jt10 from '../assets/images/job-tracker/step10.png';
import jt11 from '../assets/images/job-tracker/step11.png';

export type Project = {
  id: string;
  image: string;
  href: string;
  title: string;
  cutDetails: string;
  fullDetails: string;
  link: string;
  tags: string[];
  category: 'fullstack' | 'automation';
  videoUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    image: AIGenerate,
    href: "https://github.com/matsamonte9/AI-Generate",
    title: "AI Generate",
    cutDetails: "AI-powered platform for multimedia generation with credit-based usage, microservices, and early beta testing.",
    fullDetails: `AI Generate is a scalable AI platform for image, video, and audio generation built with a credit-based system for creators, editors, and clients. It uses a microservices architecture with an AI Chat module built in Python. Services communicate through well-defined APIs between Python and Node.js/Express. Redis and BullMQ handle queueing and job prioritization for heavy AI workloads. Supabase manages authentication and primary storage, while Cloudflare R2 provides backup storage. The system is deployed with Railway for backend services, Vercel for frontend, and RunPod GPUs running ComfyUI for AI generation. A secure GPU proxy layer with API key authentication and tunneling protects direct GPU access. The platform is onboarding a 30-user private beta from a creator and e-commerce network to test stability before full release. I lead the project as full-stack developer and system architect.`,
    link: "https://image-generator-zeta-sand.vercel.app/",
    id: "ai-generate",
    tags: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "ComfyUI", "Redis", "BullMQ"],
    category: 'fullstack',
  },
  {
    image: StoreSystemImage,
    href: "https://github.com/matsamonte9/Store-System",
    title: "Store System",
    cutDetails: "Full-stack retail management system with inventory control, POS, order tracking, and barcode-based workflows.",
    fullDetails: `Store System is a full-stack retail management system developed using Vanilla JavaScript, Node.js with Express, and MongoDB, designed to handle inventory control, point-of-sale operations, order tracking, user management, RBAC, and barcode-based workflows to reduce manual processes and human error in small retail businesses — specifically my mother's business.`,
    link: "https://store-system-sand.vercel.app/login.html",
    id: "store",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    category: 'fullstack',
  },
  {
    image: Prokora,
    href: "https://github.com/matsamonte9/Prokora",
    title: "Prokora",
    cutDetails: "Internal admin management system with role-based access control built during internship.",
    fullDetails: `Prokora is an internal admin management system built for a company during my internship, designed to track and manage business operations such as sales, employees, and marketing data through a centralized dashboard. My primary responsibility was frontend development — building clean, functional, and responsive layouts for admin dashboards, data views, and management screens using plain HTML, CSS, and JavaScript.`,
    link: "",
    id: "prokora",
    tags: ["JavaScript", "Python", "Flask"],
    category: 'fullstack',
  },
  {
    image: OnionLensImage,
    href: "https://github.com/matsamonte9/OnionLens",
    title: "OnionLens",
    cutDetails: "ML system that detects armyworm infestation in onions using CNNs as an early pest detection tool.",
    fullDetails: "OnionLens is a team-developed machine learning system built using Python, CNNs, and Flask, where I was responsible for creating and optimizing the machine learning model through image processing, model training, and hyperparameter tuning to detect armyworm infestation in onions as an early pest detection tool for local farmers.",
    link: "",
    id: "onionlens",
    tags: ["Python", "Flask", "CNN", "TensorFlow", "Keras"],
    category: 'fullstack',
  },
  {
    image: ps1,
    href: "",
    title: "Store System Webhook",
    cutDetails: "n8n automation connected to the Store System via webhook — delivering smart Slack notifications, scheduled reports, and an RBAC-powered Claude chatbot.",
    fullDetails: "An automation layer built with n8n on top of the existing Store System, triggered via webhooks. Slack notifications fire for relevant events across the operation. A scheduler sends daily sales summaries, daily expiry/order reminders, and weekly sales reports. A Slack chatbot powered by Claude handles natural language queries. RBAC is enforced throughout — admin IDs stored in the database can DM the bot directly, while sales and inventory staff can only interact through their respective Slack channels.",
    link: "",
    id: "pos-webhook",
    tags: ["n8n", "Claude", "Slack", "Webhook"],
    category: 'automation',
    videoUrl: "",
    images: [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8],
  },
  {
    image: jt1,
    href: "",
    title: "Job Tracker",
    cutDetails: "AI-powered job application tracker with smart Slack notifications, daily reminders, and a Groq chatbot to manage applications via chat.",
    fullDetails: "An automated job application tracking system built with n8n. Applications are submitted via Tally forms or Gmail triggers and stored in Google Sheets. Smart Slack notifications fire when offers lack salary details or when interviews and assessments are scheduled. A daily workflow checks Google Calendar and sends reminders for upcoming events. A Groq-powered chatbot lets you check, update, and delete job applications through natural chat commands — no manual spreadsheet edits needed.",
    link: "",
    id: "automation1",
    tags: ["n8n", "Groq", "Google Sheets", "Slack", "Google Calendar", "Tally", "Gmail"],
    category: 'automation',
    videoUrl: "",
    images: [jt1, jt2, jt3, jt4, jt5, jt6, jt7, jt8, jt9, jt10, jt11],
  },
];
