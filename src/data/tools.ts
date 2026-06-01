import comfyuiImg from '../assets/images/comfyui.svg';
import ghlImg from '../assets/images/GoHighLevel.jpeg';
import groqImg from '../assets/images/groq.png';

export type Tool = { icon: string; label: string; color: string; featured?: boolean };
export type Category = { name: string; tools: Tool[] };

export const categories: Category[] = [
  {
    name: 'Frontend',
    tools: [
      { icon: 'simple-icons:typescript',  label: 'TypeScript',    color: '#3178C6', featured: true },
      { icon: 'simple-icons:react',        label: 'React',         color: '#61DAFB', featured: true },
      { icon: 'simple-icons:tailwindcss',  label: 'Tailwind',      color: '#06B6D4', featured: true },
      { icon: 'simple-icons:reactquery',   label: 'TanStack',      color: '#FF4154', featured: true },
      { icon: 'simple-icons:javascript',   label: 'JavaScript',    color: '#F7DF1E'                 },
      { icon: 'simple-icons:html5',        label: 'HTML',          color: '#E34F26'                 },
      { icon: 'simple-icons:css3',         label: 'CSS',           color: '#1572B6'                 },
      { icon: 'simple-icons:sass',         label: 'SCSS',          color: '#CC6699'                 },
      { icon: 'simple-icons:prettier',     label: 'Prettier',      color: '#F7B93E'                 },
      { icon: 'simple-icons:eslint',       label: 'ESLint',        color: '#4B32C3'                 },
    ],
  },
  {
    name: 'Backend',
    tools: [
      { icon: 'simple-icons:nodedotjs',    label: 'Node.js',    color: '#339933', featured: true },
      { icon: 'simple-icons:express',      label: 'Express',    color: '#404040', featured: true },
      { icon: 'simple-icons:postgresql',   label: 'PostgreSQL', color: '#4169E1', featured: true },
      { icon: 'simple-icons:mongodb',      label: 'MongoDB',    color: '#47A248', featured: true },
      { icon: 'logos:redis',               label: 'Redis',      color: '#DC382D', featured: true },
      { icon: 'simple-icons:supabase',     label: 'Supabase',   color: '#3ECF8E'                 },
      { icon: 'simple-icons:drizzle',      label: 'Drizzle',    color: '#C5F74F'                 },
      { icon: 'simple-icons:zod',          label: 'Zod',        color: '#3E67B1'                 },
      { icon: 'game-icons:charging-bull',  label: 'BullMQ',     color: '#111111'                 },
      { icon: 'simple-icons:clerk',        label: 'Clerk',      color: '#6C47FF'                 },
    ],
  },
  {
    name: 'DevOps & Tools',
    tools: [
      { icon: 'simple-icons:docker',         label: 'Docker',         color: '#2496ED', featured: true },
      { icon: 'simple-icons:git',            label: 'Git',            color: '#F05032', featured: true },
      { icon: 'simple-icons:githubactions',  label: 'GitHub Actions', color: '#2088FF', featured: true },
      { icon: 'simple-icons:postman',        label: 'Postman',        color: '#FF6C37', featured: true },
      { icon: 'simple-icons:cloudflare',     label: 'Cloudflare',     color: '#F48120'                 },
      { icon: 'simple-icons:cloudinary',     label: 'Cloudinary',     color: '#3448C5'                 },
      { icon: 'simple-icons:vitest',         label: 'Vitest',         color: '#6E9F18'                 },
    ],
  },
  {
    name: 'AI & Automation',
    tools: [
      { icon: 'simple-icons:openai',          label: 'OpenAI',   color: '#412991', featured: true },
      { icon: 'simple-icons:claude',          label: 'Claude',   color: '#CC785C', featured: true },
      { icon: groqImg,                        label: 'Groq',     color: '#F55036', featured: true },
      { icon: comfyuiImg,                    label: 'ComfyUI',  color: '#7C3AED', featured: true },
      { icon: 'simple-icons:n8n',            label: 'n8n',      color: '#EA4B71', featured: true },
      { icon: 'simple-icons:zapier',         label: 'Zapier',   color: '#FF4A00', featured: true },
      { icon: 'simple-icons:make',            label: 'Make',     color: '#6D00CC', featured: true },
      { icon: ghlImg,                        label: 'GoHighLevel', color: '#F9B000', featured: true },
      { icon: 'simple-icons:buffer',         label: 'Buffer',   color: '#168EEA', featured: true },
      { icon: 'simple-icons:slack',          label: 'Slack',    color: '#4A154B', featured: true },
      { icon: 'simple-icons:notion',         label: 'Notion',   color: '#000000', featured: true },
    ],
  },
];
