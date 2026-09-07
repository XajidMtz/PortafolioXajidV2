export const profile = {
  name: 'Xajid Sibraim Martínez Herrera',
  shortName: 'Xajid Martínez',
  role: 'Ingeniero en Redes y Ciberseguridad',
  age: 25,
  email: 'Xajidmartinez@gmail.com',
  github: 'https://github.com/XajidMtz',
  linkedin: '', // Agrega aquí tu URL completa de LinkedIn.
  location: 'Ciudad de México, México',
  shortLocation: 'CDMX, México',
  availability: ['Remoto', 'Híbrido', 'Presencial'],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B1 · Intermedio' },
  ],
  resumeUrl: '/CV_Xajid_Martinez.pdf',
  profileImage: '/profile.jpg',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://xajid-martinez.sao-insurtec-7461.chatgpt.site',
  headline:
    'Transformo datos, software e Inteligencia Artificial en soluciones eficientes, automatizadas y seguras.',
  focusAreas: [
    'Data Analyst',
    'Software Developer',
    'AI Automation',
    'Cybersecurity',
  ],
} as const;

export const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' },
] as const;
