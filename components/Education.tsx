import { GraduationCap, BadgeCheck } from 'lucide-react';
import { education } from '@/data/education';
import { SectionHeading } from './SectionHeading';
import { Certifications } from './Certifications';
import { Languages } from './Languages';
export function Education() {
  return (
    <section id="educacion" className="section container">
      <SectionHeading
        number="05"
        label="EDUCACIÓN"
        title={
          <>
            Una base sólida.
            <br />
            <span>Aprendizaje continuo.</span>
          </>
        }
      />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.title}>
            <GraduationCap size={28} strokeWidth={1.4} />
            <div>
              <p className="education-date">{item.period}</p>
              <h3>{item.title}</h3>
              {item.status && (
                <span className="degree-status">
                  <BadgeCheck size={15} />
                  {item.status}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
      <Certifications />
      <Languages />
    </section>
  );
}
