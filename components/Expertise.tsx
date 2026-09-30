import {
  ArrowUpRight,
  Braces,
  ChartNoAxesCombined,
  Cpu,
  ShieldCheck,
} from 'lucide-react';
import { expertise } from '@/data/skills';
const icons = {
  data: ChartNoAxesCombined,
  software: Braces,
  ai: Cpu,
  security: ShieldCheck,
};
export function Expertise() {
  return (
    <section
      className="expertise-section container"
      aria-labelledby="expertise-title"
    >
      <div className="subsection-heading">
        <h2 id="expertise-title">
          Cuatro perspectivas. <span>Soluciones conectadas.</span>
        </h2>
        <span className="mono-label">MI ENFOQUE</span>
      </div>
      <div className="expertise-grid">
        {expertise.map((area, index) => {
          const Icon = icons[area.id];
          return (
            <article
              key={area.id}
              className={`expertise-card expertise-${area.id} reveal`}
            >
              <div className="expertise-top">
                <div className="expertise-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <span className="card-index">0{index + 1}</span>
              </div>
              <p className="card-overline">{area.subtitle}</p>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {area.id === 'data' && (
                <div className="data-note">
                  Datos claros para decisiones responsables
                  <ArrowUpRight size={15} />
                </div>
              )}
              {area.id === 'ai' && (
                <div className="ai-note">
                  Agentes diseñados para cada cliente{' '}
                  <ArrowUpRight size={15} />
                </div>
              )}
              {area.id === 'security' && (
                <div className="security-note">
                  Protección y cuidado de la información
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
