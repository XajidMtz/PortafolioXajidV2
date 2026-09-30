import { Award, ArrowUpRight } from 'lucide-react';
import { certifications } from '@/data/education';
export function Certifications() {
  return (
    <div className="certifications">
      <h3>Certificaciones y cursos</h3>
      {certifications.map((certificate) => (
        <div className="certificate" key={certificate.name}>
          <Award size={22} strokeWidth={1.5} />
          <div>
            {certificate.url ? (
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {certificate.name}
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <h4>{certificate.name}</h4>
            )}
            {certificate.issuer && <p>{certificate.issuer}</p>}
          </div>
          {certificate.year && <span>{certificate.year}</span>}
        </div>
      ))}
    </div>
  );
}
