export const profile = {
  name: 'Xajid Sibraim Martínez Herrera',
  shortName: 'Xajid Martínez',
  role: 'Ingeniero en Redes y Ciberseguridad',
  age: 25,
  email: 'xajidcash@gmail.com',
  phone: '+52 55 6068 7436',
  phoneHref: 'tel:+525560687436',
  whatsappUrl: 'https://wa.me/5215560687436',
  github: 'https://github.com/XajidMtz',
  linkedin: 'https://www.linkedin.com/in/ingxajidmartinez/',
  location: 'Ciudad de México, México',
  shortLocation: 'CDMX, México',
  availability: ['Remoto', 'Híbrido', 'Presencial'],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B1 · Intermedio' },
  ],
  resumeUrl: '/CV_Xajid_Martinez.pdf',
  resumeUrlEn: '/CV_Xajid_Martinez_EN.pdf',
  profileImage: '/profile.jpg',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://portafolioxajidv2.al222210593.workers.dev',
  headline:
    'Creo agentes de IA a medida, convierto datos en decisiones y cuido la información que hace posible cada solución.',
  focusAreas: [
    'Analista de datos',
    'Agentes de IA a medida',
    'Protección de información',
    'Desarrollo de software',
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
