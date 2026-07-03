export type StackColumn = {
  label: string;
  items: string[];
};

export const stack: StackColumn[] = [
  {
    label: 'languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind', 'Vitest'],
  },
  {
    label: 'infra',
    items: ['Git & GitHub', 'GitHub Actions / CI-CD', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Cloudflare', 'Supabase'],
  },
  {
    label: 'automation',
    items: ['n8n / Make.com / Zapier', 'GHL', 'Botcake.io', 'Respond.io'],
  },
];
