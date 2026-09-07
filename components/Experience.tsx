import { ArrowDownRight, MapPin } from 'lucide-react';
import { experience } from '@/data/experience';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experiencia" className="section container">
      <SectionHeading
        number="02"
        label="EXPERIENCIA"
        title={
          <>
            Tecnología aplicada.
            <br />
            <span>Experiencia que conecta.</span>
          </>
        }
        description="Del desarrollo de sistemas al análisis de datos y la integración de Inteligencia Artificial."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article
            className={`experience-item ${item.featured ? 'experience-featured' : ''}`}
            key={item.id}
          >
            <div className="experience-date">
              <span
                className={`timeline-dot ${item.current ? 'is-current' : ''}`}
              />
              <span>{item.period}</span>
              <span className="experience-location">
                <MapPin size={14} />
                {item.location}
              </span>
              {item.current && (
                <span className="current-label">ACTUALMENTE</span>
              )}
            </div>
            <div className="experience-card">
              {item.featured && (
                <p className="experience-focus">
                  DATA ANALYTICS + SOFTWARE + AUTOMATION
                </p>
              )}
              <h3>{item.title}</h3>
              <p className="experience-description">{item.description}</p>
              <ul className="responsibilities">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <ArrowDownRight size={14} />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="tags">
                {item.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
