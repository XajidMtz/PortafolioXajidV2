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
    title: 'Analista de datos',
    subtitle: 'INFORMACIÓN PARA DECIDIR',
    description:
      'Analizo e integro datos para convertirlos en dashboards, reportes e información útil para decidir. Trabajo con SQL, procesos ETL y visualización, cuidando la calidad de la información.',
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
    title: 'Agentes de IA a medida',
    subtitle: 'DISEÑADOS PARA CADA CLIENTE',
    description:
      'Creo agentes de IA a partir de las necesidades, objetivos y procesos de cada cliente. Integro OpenAI API, otros servicios y bases de datos SQL para consultar información y automatizar tareas.',
    tags: ['OpenAI API', 'AI Agents', 'RPA', 'Intelligent Workflows'],
  },
  {
    id: 'security',
    title: 'Protección de la información',
    subtitle: 'CUIDADO DE LOS DATOS EN CADA SOLUCIÓN',
    description:
      'Mi formación como Ingeniero en Redes y Ciberseguridad guía el manejo responsable, la protección y el cuidado de la información en las soluciones que construyo.',
    tags: ['Linux', 'Windows Server', 'Redes', 'Seguridad informática'],
  },
];
export const skillGroups = [
  {
    id: 'data',
    title: 'Análisis de datos',
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
    title: 'Agentes de IA y automatización',
    skills: [
      'OpenAI API',
      'AI Agents',
      'Diseño de agentes a medida',
      'AI Integration',
      'AI Automation',
      'API Integration',
      'SQL Integration',
      'Process Automation',
      'RPA',
      'UiPath',
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
      'Spring Data',
      'MVC',
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
    title: 'Ciberseguridad y protección de información',
    skills: [
      'Linux',
      'Windows Server',
      'Infraestructura de Redes',
      'Seguridad Informática',
      'Pentesting',
      'Hacking Ético',
      'Ciberseguridad',
      'Protección de información',
    ],
  },
] as const;
