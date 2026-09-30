import {
  ArrowUpRight,
  Braces,
  Database,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="sobre-mi" className="section container">
      <SectionHeading
        number="01"
        label="SOBRE MÍ"
        title={
          <>
            Un perfil conectado.
            <br />
            <span>Una visión completa.</span>
          </>
        }
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Soy <strong>{profile.name}</strong>, Ingeniero titulado en Redes y
            Ciberseguridad. Mi experiencia se ha desarrollado entre el{' '}
            <strong>
              análisis de datos, el desarrollo de software y la automatización
              de procesos.
            </strong>{' '}
            Como analista de datos, convierto información en resultados claros
            para apoyar decisiones.
          </p>
          <p>
            Creo <strong>agentes de IA a medida</strong> según las necesidades,
            objetivos y procesos de cada cliente. Los conecto con aplicaciones,
            APIs y bases de datos SQL para hacer útil la información y reducir
            tareas manuales.
          </p>
          <p>
            Mi formación en redes y ciberseguridad orienta el{' '}
            <strong>manejo responsable, la protección y el cuidado de la
            información</strong>{' '}
            en cada solución.
          </p>
          <a href="#experiencia" className="text-link accent-link">
            Explora mi trayectoria <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="about-summary">
          <div className="about-facts">
            <div>
              <strong>
                3<span>+</span>
              </strong>
              <span>Años de experiencia práctica</span>
            </div>
            <div>
              <strong>
                4<span>↗</span>
              </strong>
              <span>Áreas que se complementan</span>
            </div>
          </div>
          <div
            className="perspective-flow"
            aria-label="Datos, software, Inteligencia Artificial y seguridad conectados"
          >
            <span>
              <Database />
              Datos
            </span>
            <i />
            <span>
              <Braces />
              Software
            </span>
            <i />
            <span>
              <Network />
              IA
            </span>
            <i />
            <span>
              <ShieldCheck />
              Seguridad
            </span>
          </div>
          <div className="about-summary-footer">
            <span>
              {profile.age} años · {profile.shortLocation}
            </span>
            <span>
              Ingeniero titulado <ShieldCheck size={14} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
