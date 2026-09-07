import { ArrowUpRight, Globe2, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import type { LocalAssets } from '@/lib/assets';
import { ResumeLink } from './ResumeLink';
import { SocialLinks } from './SocialLinks';
export function Contact({ assets }: { assets: LocalAssets }) {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <p className="eyebrow">
          <span>06</span>CONTACTO
        </p>
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="contact-availability">
              <span className="status-dot" />
              Abierto a nuevas oportunidades
            </span>
            <h2>
              Tu próximo reto.
              <br />
              <span>Lo construimos juntos.</span>
            </h2>
            <p>
              ¿Buscas un perfil que conecte datos, desarrollo e Inteligencia
              Artificial? Hablemos de cómo puedo aportar a tu equipo o proyecto.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={25} />
            </a>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                <Mail size={17} />
                Enviar correo
              </a>
              <ResumeLink available={assets.hasResume} />
            </div>
          </div>
          <aside className="availability-card">
            <span className="mono-label">CONECTEMOS</span>
            <h3>{profile.shortName}</h3>
            <p className="availability-location">
              <MapPin size={17} />
              {profile.location}
            </p>
            <div className="availability-modes">
              {profile.availability.map((mode) => (
                <span key={mode}>{mode}</span>
              ))}
            </div>
            <p>Interés principal en CDMX y zona metropolitana.</p>
            <p className="open-location">
              <Globe2 size={18} />
              Abierto a oportunidades fuera de CDMX.
            </p>
            <div className="contact-socials">
              <SocialLinks labels />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
