export const projectFilters = [
  'Todos',
  'Data',
  'Development',
  'AI',
  'Automation',
  'Cybersecurity',
] as const;
export type ProjectCategory = Exclude<(typeof projectFilters)[number], 'Todos'>;
export type ProjectFilter = (typeof projectFilters)[number];
export interface Project {
  id: string;
  name: string;
  category: ProjectCategory[];
  description: string;
  technologies: string[];
  status: 'coming-soon' | 'published';
  visual: 'data' | 'development' | 'ai' | 'security';
  image?: string;
  imageAlt?: string;
  problem?: string;
  solution?: string;
  result?: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
}
// Fichas de ejemplo identificadas como próximas. Sustituir únicamente por proyectos reales.
export const projects: Project[] = [
  {
    id: 'data-placeholder',
    name: 'Proyecto próximamente',
    category: ['Data'],
    description:
      'Espacio para un próximo caso de análisis de datos, dashboards o procesos ETL.',
    technologies: ['Power BI', 'Python', 'SQL Server'],
    status: 'coming-soon',
    visual: 'data',
  },
  {
    id: 'development-placeholder',
    name: 'Proyecto próximamente',
    category: ['Development'],
    description:
      'Espacio para una próxima aplicación web, solución de software o integración de APIs.',
    technologies: ['C#', 'JavaScript', 'REST APIs'],
    status: 'coming-soon',
    visual: 'development',
  },
  {
    id: 'ai-placeholder',
    name: 'Proyecto próximamente',
    category: ['AI', 'Automation'],
    description:
      'Espacio para un próximo agente de IA o flujo de automatización conectado a datos y servicios.',
    technologies: ['OpenAI API', 'AI Agents', 'Python'],
    status: 'coming-soon',
    visual: 'ai',
  },
];
export interface FeaturedRepository {
  name: string;
  description: string;
  url: string;
  language?: string;
}
// Opcional: agrega repositorios reales manualmente; no requiere token ni GitHub API.
export const featuredRepositories: FeaturedRepository[] = [];
