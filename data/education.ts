export interface EducationItem {
  title: string;
  period: string;
  status?: string;
  institution?: string;
  specialization?: string;
}
export const education: EducationItem[] = [
  {
    title: 'Ingeniería en Redes y Ciberseguridad',
    period: 'Agosto 2020 — Diciembre 2025',
    status: 'Titulado',
  },
  {
    title: 'Técnico en Tecnologías de la Información',
    period: 'Agosto 2020 — Abril 2023',
    status: '',
    institution: 'Universidad Tecnológica del Valle de Toluca',
    specialization: 'TSU · Área de Infraestructura de Redes Digitales',
  },
];
export interface Certification {
  name: string;
  year?: string;
  issuer?: string;
  url?: string;
}
export const certifications: Certification[] = [
  { name: 'Seguridad Informática y Pentesting', year: '2025' },
  { name: 'Hacking Ético y Ciberseguridad', year: '2025' },
  { name: 'Hacking Ético', year: '2024' },
  {
    name: 'CCNAv7: Redes empresariales, seguridad y automatización',
    year: '2023',
  },
  { name: 'Seguridad Forense', year: '2019' },
  { name: 'Hacking con Python' },
];
