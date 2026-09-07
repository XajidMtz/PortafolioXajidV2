import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChartNoAxesCombined,
  Cpu,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { profile } from '@/data/profile';
import type { LocalAssets } from '@/lib/assets';
import { ProfileImage } from './ProfileImage';
import { ResumeLink } from './ResumeLink';
import { SocialLinks } from './SocialLinks';

export function Hero({ assets }: { assets: LocalAssets }) {
  const [firstName, ...lastName] = profile.shortName.split(' ');
  return (
    <section
      id="inicio"
      className="hero container"
      aria-labelledby="hero-title"
    >
      <div className="hero-main">
        <div className="hero-copy">
          <span className="availability-badge">
            <span className="status-dot" />
            Disponible para nuevas oportunidades
          </span>
          <p className="hero-intro">DATOS · CÓDIGO · INTELIGENCIA</p>
          <h1 id="hero-title">
            {firstName}{' '}
            <span>
              {lastName.join(' ')}
              <span className="title-dot">.</span>
            </span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <div
            className="hero-specialties"
            aria-label={profile.focusAreas.join(' · ')}
          >
            {profile.focusAreas.map((area, i) => (
              <span key={area} style={{ animationDelay: `${i * 130}ms` }}>
                {i > 0 && <b aria-hidden="true">/</b>}
                {area}
              </span>
            ))}
          </div>
          <p className="hero-description">{profile.headline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiencia">
              Ver experiencia <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href="#proyectos">
              Ver proyectos <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-secondary-actions">
            <ResumeLink available={assets.hasResume} className="text-link" />
            <span className="action-separator" />
            <a className="text-link" href="#contacto">
              Contactarme <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-social-row">
            <SocialLinks />
            <span className="social-divider" />
            <span className="location">
              <MapPin size={15} />
              {profile.shortLocation}
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>XM / PERFIL PROFESIONAL</span>
              <span className="frame-cross">+</span>
            </div>
            <div className="portrait-image">
              <ProfileImage assets={assets} />
            </div>
            <div className="portrait-bottomline">
              <span>INGENIERO TITULADO</span>
              <ShieldCheck size={17} />
            </div>
          </div>
          <div className="floating-tag data-tag">
            <ChartNoAxesCombined size={21} />
            <span>
              De los datos
              <br />
              <strong>a las decisiones.</strong>
            </span>
          </div>
          <div className="floating-tag ai-tag">
            <Cpu size={20} />
            <span>AI + AUTOMATION</span>
            <span className="status-dot" />
          </div>
          <div className="visual-caption">
            <span className="tiny-cross">+</span> Conectar. Construir. Resolver.
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          Disponible para{' '}
          <span>{profile.availability.join(' · ').toLowerCase()}</span>
        </p>
        <a href="#sobre-mi">
          Conoce mi perfil <ArrowDown size={16} />
        </a>
      </div>
      <div className="discipline-strip" aria-label="Áreas de trabajo">
        <span>
          <ChartNoAxesCombined />
          Data Analytics
        </span>
        <span>
          <Braces />
          Software Development
        </span>
        <span>
          <Cpu />
          AI & Automation
        </span>
        <span>
          <ShieldCheck />
          Cybersecurity
        </span>
      </div>
    </section>
  );
}
