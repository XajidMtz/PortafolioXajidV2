import { Braces, Cpu, Database, ShieldCheck, Workflow } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectVisual({
  visual,
  comingSoon,
}: {
  visual: Project['visual'];
  comingSoon: boolean;
}) {
  return (
    <div
      className={`project-visual project-visual-${visual}`}
      aria-hidden="true"
    >
      <span className="visual-top-label">
        {visual === 'data'
          ? 'DATA / INSIGHTS'
          : visual === 'development'
            ? 'BUILD / CONNECT'
            : visual === 'security'
              ? 'SECURITY / NETWORKS'
              : 'INTELLIGENCE / WORKFLOWS'}
      </span>
      {visual === 'data' ? (
        <div className="concept-chart">
          <div className="chart-grid" />
          <svg viewBox="0 0 300 115" fill="none">
            <path
              d="M0 100 35 87 65 94 101 63 137 71 174 43 209 51 247 18 279 26 300 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M0 100 35 87 65 94 101 63 137 71 174 43 209 51 247 18 279 26 300 8V115H0Z"
              fill="currentColor"
              opacity=".07"
            />
            <circle cx="247" cy="18" r="4" fill="currentColor" />
          </svg>
        </div>
      ) : visual === 'development' ? (
        <div className="concept-code">
          <span className="code-line">
            <i /> <b>const</b> solution = {'{'}
          </span>
          <span className="code-line indent">
            data: <em>connected</em>,
          </span>
          <span className="code-line indent">
            code: <em>purposeful</em>,
          </span>
          <span className="code-line indent">
            impact: <em>human</em>
          </span>
          <span className="code-line">{'}'};</span>
          <Braces className="code-icon" size={38} strokeWidth={1} />
        </div>
      ) : (
        <div className="concept-nodes">
          <span>
            <Database size={21} />
            <small>Datos</small>
          </span>
          <i />
          <span className="central-node">
            {visual === 'security' ? (
              <ShieldCheck size={26} />
            ) : (
              <Cpu size={26} />
            )}
            <small>{visual === 'security' ? 'Seguridad' : 'Agente IA'}</small>
          </span>
          <i />
          <span>
            <Workflow size={21} />
            <small>Acción</small>
          </span>
        </div>
      )}
      <span className="visual-bottom-label">
        VISTA CONCEPTUAL{comingSoon ? ' · PROYECTO PRÓXIMAMENTE' : ''}
      </span>
    </div>
  );
}
