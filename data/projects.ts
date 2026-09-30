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
  visual: 'data' | 'development' | 'ai' | 'automation' | 'security';
  image?: string;
  imageAlt?: string;
  problem?: string;
  solution?: string;
  result?: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
}
// Trabajos documentados en el portafolio anterior. Ver CONTENT_SOURCES.md.
// No asociar repositorios, resultados o tecnologías que no estén documentados.
export const projects: Project[] = [
  {
    id: 'flechisa-rpa',
    name: 'Automatización de procesos · FLECHISA',
    category: ['Automation'],
    description:
      'Participación en la creación de cinco robots de automatización para una empresa de distribución y paquetería.',
    technologies: ['RPA', 'Automatización de procesos'],
    status: 'published',
    visual: 'automation',
    solution:
      'Colaboración en el desarrollo de robots para automatizar actividades de FLECHISA.',
    result: 'Contribución a la creación de cinco robots de automatización.',
  },
  {
    id: 'thb-web',
    name: 'Desarrollo web · THB',
    category: ['Development'],
    description:
      'Colaboración con SAO en la creación del sitio web de THB, dentro del sector asegurador.',
    technologies: ['Desarrollo web', 'Sector asegurador'],
    status: 'published',
    visual: 'development',
    solution: 'Participación en el desarrollo del sitio de THB junto con SAO.',
  },
  {
    id: 'recetario-api',
    name: 'Recetario con integración de APIs',
    category: ['Development'],
    description:
      'Aplicación web de recetas que integra APIs para consultar y mostrar información.',
    technologies: ['APIs', 'Desarrollo web'],
    status: 'published',
    visual: 'development',
    solution: 'Desarrollo de un recetario web con integración de APIs.',
    demo: 'https://recetas-23emd.vercel.app/index.html',
  },
  {
    id: 'login-demo',
    name: 'Login y base de datos temporal',
    category: ['Development'],
    description:
      'Proyecto web de demostración con inicio de sesión y una base de datos temporal.',
    technologies: ['Login', 'Base de datos temporal', 'Desarrollo web'],
    status: 'published',
    visual: 'development',
    solution:
      'Creación de una página con login conectado a una base de datos temporal.',
    demo: 'https://recetas-login.vercel.app/login.html',
  },
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
export const featuredRepositories: FeaturedRepository[] = [
  {
    name: 'PortafolioXajid',
    description:
      'Versión anterior de mi portafolio personal, construida con HTML, CSS y JavaScript.',
    url: 'https://github.com/XajidMtz/PortafolioXajid',
    language: 'HTML / CSS / JavaScript',
  },
];
