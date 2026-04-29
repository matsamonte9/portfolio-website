import { DiCss3 } from "react-icons/di";
import { MdOutlineAutoAwesome, MdOutlineQueue } from "react-icons/md";
import {
  SiAnthropic,
  SiClerk,
  SiCloudflare,
  SiCloudinary,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiZod,
} from "react-icons/si";
import { Reveal } from "../../components/Reveal";
import "./ToolsGrid.css";

type Tool = { icon: React.ElementType; label: string; color: string };

const tools: Tool[] = [
  // Core Stack
  { icon: SiPostgresql,        label: "PostgreSQL",     color: "#4169E1" },
  { icon: SiExpress,           label: "Express",        color: "#404040" },
  { icon: SiReact,             label: "React",          color: "#61DAFB" },
  { icon: SiNodedotjs,         label: "Node.js",        color: "#339933" },
  // Languages
  { icon: SiJavascript,        label: "JavaScript",     color: "#F7DF1E" },
  { icon: SiTypescript,        label: "TypeScript",     color: "#3178C6" },
  { icon: SiHtml5,             label: "HTML",           color: "#E34F26" },
  { icon: DiCss3,              label: "CSS",            color: "#1572B6" },
  // Libraries
  { icon: SiTailwindcss,       label: "Tailwind",       color: "#06B6D4" },
  { icon: SiReactquery,        label: "TanStack Query", color: "#FF4154" },
  { icon: SiZod,               label: "Zod",            color: "#3E67B1" },
  { icon: SiDrizzle,           label: "Drizzle",        color: "#C5F74F" },
  // Tools
  { icon: SiMongodb,           label: "MongoDB",        color: "#47A248" },
  { icon: SiSupabase,          label: "Supabase",       color: "#3ECF8E" },
  { icon: SiRedis,             label: "Redis",          color: "#DC382D" },
  { icon: SiCloudinary,        label: "Cloudinary",     color: "#3448C5" },
  { icon: SiCloudflare,        label: "Cloudflare",     color: "#F48120" },
  { icon: SiDocker,            label: "Docker",         color: "#2496ED" },
  { icon: SiGit,               label: "Git",            color: "#F05032" },
  { icon: SiGithubactions,     label: "GitHub Actions", color: "#2088FF" },
  { icon: SiPostman,           label: "Postman",        color: "#FF6C37" },
  { icon: SiVitest,            label: "Vitest",         color: "#6E9F18" },
  { icon: MdOutlineQueue,      label: "BullMQ",         color: "#D5233B" },
  { icon: SiClerk,             label: "Clerk",          color: "#6C47FF" },
  { icon: SiAnthropic,         label: "Claude",         color: "#CC785C" },
  { icon: MdOutlineAutoAwesome, label: "ComfyUI",       color: "#7C3AED" },
];

export function ToolsGrid() {
  return (
    <Reveal>
      <div className="tools-grid">
        {tools.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="tool-card"
            style={{ "--brand-color": color } as React.CSSProperties}
          >
            <Icon size={48} style={{ color }} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
