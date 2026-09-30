export interface ExperienceItem {
  id: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  featured?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
export const experience: ExperienceItem[] = [
  {
    id: 'freelance',
    title: 'Desarrollador Freelance',
    location: 'Remoto',
    period: 'Septiembre 2026 — Actualidad',
    current: true,
    description:
      'Soluciones a medida, desde el levantamiento de requerimientos hasta producción. Diseño agentes de IA según las necesidades y procesos de cada cliente, con comunicación directa en modalidad remota.',
    responsibilities: [
      'Desarrollo de sitios y aplicaciones web, y soluciones con Python y otras tecnologías.',
      'Análisis de datos y creación de dashboards e informes estratégicos.',
      'Diseño y desarrollo de agentes de IA con OpenAI API, adaptados a los objetivos de cada cliente y conectados a APIs, servicios externos y bases de datos SQL.',
      'Integración de IA en proyectos existentes y diseño de flujos para consultar, procesar y utilizar información de otros sistemas.',
      'Automatización mediante RPA e Inteligencia Artificial para reducir tiempos de ejecución, tareas manuales y esfuerzo operativo.',
    ],
    technologies: [
      'Python',
      'OpenAI API',
      'AI Agents',
      'SQL',
      'REST APIs',
      'RPA',
    ],
  },
  {
    id: 'web-data',
    title: 'Desarrollador Web y Data Management',
    location: 'CDMX',
    period: 'Febrero 2024 — Septiembre 2026',
    featured: true,
    description:
      'Análisis de datos para el sector asegurador, desarrollo web y gestión de bases de datos. Información útil para decidir, con atención a su protección y cuidado.',
    responsibilities: [
      'Diseño e implementación de sitios web y desarrollo de soluciones internas con C# y Python.',
      'Administración y actualización responsable de bases de datos relacionales; diseño de vistas en SQL Server y optimización de consultas SQL.',
      'Análisis de información con Python, Pandas, NumPy y Excel. Desarrollo de dashboards en Power BI y generación de insights.',
      'Procesos ETL e integración de fuentes de datos. Desarrollo y optimización de reportes con Telerik.',
      'Implementación de IA y agentes de IA, y automatización de procesos mediante RPA.',
    ],
    technologies: [
      'SQL Server',
      'Python',
      'Power BI',
      'C#',
      'ETL',
      'Telerik',
      'AI Agents',
    ],
  },
  {
    id: 'developer',
    title: 'Desarrollador',
    location: 'Toluca',
    period: 'Enero 2023 — Octubre 2023',
    description:
      'Participación en sistemas de ventas nacionales e internacionales, con atención a requerimientos, mantenimiento de aplicaciones y administración de información.',
    responsibilities: [
      'Levantamiento y documentación de requerimientos funcionales en comunicación con usuarios clave.',
      'Diagnóstico y corrección de errores, mantenimiento de sistemas y actualización de catálogos.',
      'Administración de información y gestión de bases de datos de proveedores.',
      'Creación y consumo de WebServices para conectar sistemas.',
    ],
    technologies: [
      'WebServices',
      'Java',
      'Spring Data',
      'Oracle',
      'MySQL',
      'Bases de datos',
      'Sistemas empresariales',
      'Requerimientos',
    ],
  },
];
