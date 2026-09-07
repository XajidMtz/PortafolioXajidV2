export type ExpertiseId = 'data' | 'software' | 'ai' | 'security';
export const expertise: {
  id: ExpertiseId;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}[] = [
  {
    id: 'data',
    title: 'Data Analytics',
    subtitle: 'INFORMACIÓN QUE ORIENTA DECISIONES',
    description:
      'Integro y analizo información para convertirla en dashboards, reportes e insights útiles. Trabajo con consultas SQL, procesos ETL y visualización de datos.',
    tags: ['SQL', 'Python', 'Power BI', 'ETL'],
  },
  {
    id: 'software',
    title: 'Software Development',
    subtitle: 'DE LA NECESIDAD A LA SOLUCIÓN',
    description:
      'Desarrollo aplicaciones web y sistemas empresariales. Conecto servicios mediante APIs y WebServices, y construyo herramientas que resuelven necesidades concretas.',
    tags: ['C#', 'Python', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'MENOS TAREAS MANUALES. MÁS VALOR.',
    description:
      'Diseño agentes con OpenAI API e integro IA en sistemas existentes. Conecto APIs y bases de datos SQL para consultar información y automatizar actividades empresariales.',
    tags: ['OpenAI API', 'AI Agents', 'RPA', 'Intelligent Workflows'],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    subtitle: 'UNA BASE EN REDES Y SEGURIDAD',
    description:
      'Mi formación como Ingeniero en Redes y Ciberseguridad aporta una perspectiva de seguridad e infraestructura a cada solución, con conocimientos en pentesting y hacking ético.',
    tags: ['Linux', 'Windows Server', 'Redes', 'Seguridad informática'],
  },
];
export const skillGroups = [
  {
    id: 'data',
    title: 'Data Analytics',
    skills: [
      'SQL',
      'Power BI',
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Excel Avanzado',
      'ETL',
      'Data Management',
      'Data Visualization',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence & Automation',
    skills: [
      'OpenAI API',
      'AI Agents',
      'AI Integration',
      'AI Automation',
      'API Integration',
      'SQL Integration',
      'Process Automation',
      'RPA',
      'Intelligent Workflows',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    skills: [
      'Python',
      'C#',
      'JavaScript',
      'Java',
      'Angular',
      'REST APIs',
      'WebServices',
      'Git',
      'Desarrollo Web',
      'Sistemas empresariales',
    ],
  },
  {
    id: 'database',
    title: 'Bases de datos',
    skills: ['SQL Server', 'Oracle', 'MySQL', 'SQL Developer'],
  },
  {
    id: 'security',
    title: 'Cybersecurity & Infrastructure',
    skills: [
      'Linux',
      'Windows Server',
      'Infraestructura de Redes',
      'Seguridad Informática',
      'Pentesting',
      'Hacking Ético',
      'Ciberseguridad',
    ],
  },
] as const;
