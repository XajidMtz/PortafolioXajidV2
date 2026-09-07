import {
  Braces,
  ChartNoAxesCombined,
  Cpu,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
const icons = {
  data: ChartNoAxesCombined,
  ai: Cpu,
  software: Braces,
  database: Database,
  security: ShieldCheck,
};
export function Skills() {
  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <SectionHeading
          number="03"
          label="HABILIDADES"
          title={
            <>
              Las herramientas detrás
              <br />
              <span>de cada solución.</span>
            </>
          }
          description="Un stack que conecta el análisis, la construcción de software y la automatización."
        />
        <div className="skill-groups">
          {skillGroups.map((group) => {
            const Icon = icons[group.id];
            return (
              <div className="skill-group" key={group.id}>
                <h3>
                  <Icon size={20} strokeWidth={1.5} />
                  {group.title}
                </h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
