export const education = [
  {
    title: 'Ingeniería en Redes y Ciberseguridad',
    period: 'Agosto 2020 — Diciembre 2025',
    status: 'Titulado',
  },
  {
    title: 'Técnico en Tecnologías de la Información',
    period: 'Agosto 2020 — Abril 2023',
    status: '',
  },
] as const;
export interface Certification {
  name: string;
  year: string;
  issuer?: string;
  url?: string;
}
export const certifications: Certification[] = [
  { name: 'Seguridad Informática y Pentesting', year: '2025' },
  { name: 'Hacking Ético y Ciberseguridad', year: '2025' },
];
