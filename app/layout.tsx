import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/profile';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title:
    'Xajid Martínez | Analista de datos · Agentes de IA a medida · Ciberseguridad',
  description:
    'Analista de datos e Ingeniero en Redes y Ciberseguridad. Desarrollo agentes de IA según las necesidades de cada cliente y cuido la información en cada solución.',
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    siteName: 'Xajid Martínez · Portafolio',
    title: 'Xajid Martínez | Datos, agentes de IA y protección de información',
    description: profile.headline,
  },
  twitter: {
    card: 'summary',
    title: 'Xajid Martínez | Analista de datos · Agentes de IA',
    description: profile.headline,
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
