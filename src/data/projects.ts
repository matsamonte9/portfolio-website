import AIGenerate from '../assets/images/AI-Generate.png';
import OnionLensImage from '../assets/images/onionlens.png';
import Prokora from '../assets/images/prokora.jpg';
import StoreSystemImage from '../assets/images/store.png';
import AztridImage from '../assets/images/aztrid.fit.png';

import socialMediaAutomationPoster from '../assets/images/video-posters/social-media-automation.jpg';
import leadManagementPoster from '../assets/images/video-posters/lead-management.jpg';
import storeWebhookPoster from '../assets/images/video-posters/store-webhook.jpg';
import jobTrackerPoster from '../assets/images/video-posters/job-tracker.jpg';

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
  /** Loom's animated preview GIF for the videoUrl recording, used as the card thumbnail on hover. */
  videoThumbnail?: string;
  featured?: boolean;
  /** Short tag line for the home page's "selected work" row (full `tags` list is used on the All Projects page). */
  featuredTags?: string[];
};

export const projects: Project[] = [
  {
    image: AIGenerate,
    href: "",
    title: "AI Generate",
    cutDetails: "AI-powered platform for multimedia generation with credit-based usage, microservices, and early beta testing.",
    fullDetails: `AI Generate is a scalable AI platform for image, video, and audio generation built with a credit-based system for creators, editors, and clients. It uses a microservices architecture with an AI Chat module built in Python. Services communicate through well-defined APIs between Python and Node.js/Express. Redis and BullMQ handle queueing and job prioritization for heavy AI workloads. Supabase manages authentication and primary storage, while Cloudflare R2 provides backup storage. The system is deployed with Railway for backend services, Vercel for frontend, and RunPod GPUs running ComfyUI for AI generation. A secure GPU proxy layer with API key authentication and tunneling protects direct GPU access. The platform is onboarding a 30-user private beta from a creator and e-commerce network to test stability before full release. I lead the project as full-stack developer and system architect.`,
    link: "https://image-generator-zeta-sand.vercel.app/",
    id: "ai-generate",
    tags: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "ComfyUI", "Redis", "BullMQ"],
    category: 'fullstack',
    featured: true,
    featuredTags: ["React", "Node", "Supabase", "Redis", "BullMQ", "ComfyUI"],
  },
  {
    image: StoreSystemImage,
    href: "",
    title: "Store System",
    cutDetails: "Full-stack retail management system with inventory control, POS, order tracking, and barcode-based workflows.",
    fullDetails: `Store System is a full-stack retail management system developed using Vanilla JavaScript, Node.js with Express, and MongoDB, designed to handle inventory control, point-of-sale operations, order tracking, user management, RBAC, and barcode-based workflows to reduce manual processes and human error in small retail businesses — specifically my mother's business.`,
    link: "https://store-system-sand.vercel.app/",
    id: "store",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    category: 'fullstack',
    featured: true,
    featuredTags: ["Node", "MongoDB", "n8n"],
  },
  {
    image: AztridImage,
    href: "",
    title: "Aztrid",
    cutDetails: "Pasabuy management platform with an admin dashboard for warehouse sales and a client-facing storefront that routes orders through Messenger — built end-to-end in a single day with Claude.",
    fullDetails: "Aztrid is a full-stack pasabuy (personal shopper) management system built with Next.js, Supabase, and deployed on Vercel. An admin dashboard lets the shop owner manage warehouse sales — cut-offs, ETAs, and item allocation — across pasabuy batches, making the whole operation far more efficient than tracking it manually. On the client side, buyers browse the storefront and pick items, colors, and sizes, then complete their order through Messenger. Built end-to-end — admin dashboard, storefront, and Supabase schema — in a single day using Claude.",
    link: "https://www.aztrid.fit/",
    id: "aztrid",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel", "Claude"],
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
    image: socialMediaAutomationPoster,
    href: "",
    title: "AI Social Media Automation",
    cutDetails: "End-to-end content pipeline that generates and publishes social media posts automatically via n8n, Claude, and Buffer.",
    fullDetails: "A fully automated content pipeline built with n8n, triggered via a Tally form webhook. Users submit a topic, platform, and tone — the system handles everything else. Claude generates a platform-optimized hook, caption, hashtags, CTA, and image prompt. A custom image generation API returns a hosted image URL. A formatter node assembles the final payload and routes it to the correct social channel. Buffer receives the post via MCP (Model Context Protocol) and publishes to LinkedIn or Instagram automatically — zero manual intervention required.",
    link: "",
    id: "social-media-automation",
    tags: ["n8n", "Claude", "Buffer", "MCP", "Tally", "Webhook", "Image Generation"],
    category: 'automation',
    featured: true,
    featuredTags: ["n8n", "Claude", "AI Generate", "MCP"],
    videoUrl: "https://www.loom.com/embed/19f6d0d608f54082b6b07bfb189d356f",
    videoThumbnail: "https://cdn.loom.com/sessions/thumbnails/19f6d0d608f54082b6b07bfb189d356f-feb80f08c1170c14.gif",
  },
  {
    image: leadManagementPoster,
    href: "",
    title: "Lead Management System",
    cutDetails: "Fully automated lead pipeline inside GoHighLevel — form submission to qualified appointment or closure with zero manual input.",
    fullDetails: "A fully automated lead pipeline built natively inside GoHighLevel. When a lead submits a form, the system assigns a rep, creates an opportunity, and sends a welcome email automatically. A Conversation AI bot then qualifies leads through a 2-question flow — routing them to appointment booking, human handover, or closure based on their responses. Follow-up sequences run automatically for non-replies. All pipeline stages, tags, and rep notifications are handled end-to-end with zero manual input.",
    link: "",
    id: "lead-management",
    tags: ["GHL", "OpenAI", "Workflows", "Pipelines", "Calendars"],
    category: 'automation',
    featured: true,
    featuredTags: ["GoHighLevel", "OpenAI"],
    videoUrl: "https://www.loom.com/embed/8a7ad144a46d451eb03bff93b8313f47",
    videoThumbnail: "https://cdn.loom.com/sessions/thumbnails/8a7ad144a46d451eb03bff93b8313f47-abb6d847eb651c6f.gif",
  },
  {
    image: storeWebhookPoster,
    href: "",
    title: "Store System Webhook",
    cutDetails: "n8n automation connected to the Store System via webhook — delivering smart Slack notifications, scheduled reports, and an RBAC-powered Claude chatbot.",
    fullDetails: "An automation layer built with n8n on top of the existing Store System, triggered via webhooks. Slack notifications fire for relevant events across the operation. A scheduler sends daily sales summaries, daily expiry/order reminders, and weekly sales reports. A Slack chatbot powered by Claude handles natural language queries. RBAC is enforced throughout — admin IDs stored in the database can DM the bot directly, while sales and inventory staff can only interact through their respective Slack channels.",
    link: "",
    id: "pos-webhook",
    tags: ["n8n", "Claude", "Slack", "Webhook"],
    category: 'automation',
    videoUrl: "https://www.loom.com/embed/9f7841dbc0aa452a98d0ea18e8f74955",
    videoThumbnail: "https://cdn.loom.com/sessions/thumbnails/9f7841dbc0aa452a98d0ea18e8f74955-89e9fc40d14688ee.gif",
  },
  {
    image: jobTrackerPoster,
    href: "",
    title: "Job Tracker",
    cutDetails: "AI-powered job application tracker with smart Slack notifications, daily reminders, and a Groq chatbot to manage applications via chat.",
    fullDetails: "An automated job application tracking system built with n8n. Applications are submitted via Tally forms or Gmail triggers and stored in Google Sheets. Smart Slack notifications fire when offers lack salary details or when interviews and assessments are scheduled. A daily workflow checks Google Calendar and sends reminders for upcoming events. A Groq-powered chatbot lets you check, update, and delete job applications through natural chat commands — no manual spreadsheet edits needed.",
    link: "",
    id: "automation1",
    tags: ["n8n", "Groq", "Google Sheets", "Slack", "Google Calendar", "Tally", "Gmail"],
    category: 'automation',
    videoUrl: "https://www.loom.com/embed/e801f171cf1b4a57b4cda14af823df1d",
    videoThumbnail: "https://cdn.loom.com/sessions/thumbnails/e801f171cf1b4a57b4cda14af823df1d-ac39bec84abd5aac.gif",
  },
];
