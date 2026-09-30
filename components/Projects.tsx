'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, FolderOpen, X } from 'lucide-react';
import { flushSync } from 'react-dom';
import {
  projects,
  projectFilters,
  type Project,
  type ProjectFilter,
} from '@/data/projects';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { SectionHeading } from './SectionHeading';
import { ProjectVisual } from './ProjectVisual';
import { registerPortfolioTools } from '@/lib/webmcp';

function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image && !imageFailed ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.name}
            fill
            sizes="(max-width: 760px) 90vw, 400px"
            className="project-photo"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <ProjectVisual
            visual={project.visual}
            comingSoon={project.status === 'coming-soon'}
          />
        )}
      </div>
      <div className="project-body">
        <div className="project-category">
          <span>{project.category.join(' / ')}</span>
          {project.status === 'coming-soon' && (
            <span className="project-status">Próximamente</span>
          )}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <Dialog>
          <DialogTrigger className="project-detail-link">
            Ver ficha <ArrowUpRight size={17} />
            <span className="sr-only">
              {' '}
              de {project.name} · {project.category.join(' y ')}
            </span>
          </DialogTrigger>
          <DialogContent className="project-dialog" showCloseButton={false}>
            <DialogClose
              className="mobile-close icon-button"
              aria-label="Cerrar ficha"
            >
              <X size={20} />
            </DialogClose>
            <span className="eyebrow">{project.category.join(' / ')}</span>
            <DialogTitle className="project-dialog-title">
              {project.name}
            </DialogTitle>
            <DialogDescription className="project-dialog-description">
              {project.status === 'coming-soon'
                ? 'Esta ficha es un espacio reservado. Todavía no representa un proyecto realizado.'
                : project.description}
            </DialogDescription>
            <div className="case-study-fields">
              {[
                { title: 'Problema', value: project.problem },
                { title: 'Solución', value: project.solution },
                { title: 'Resultado', value: project.result },
              ].map(({ title, value }) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{value || 'Información por documentar.'}</p>
                </div>
              ))}
            </div>
            <div className="tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className="project-links">
              {[
                { label: 'GitHub', href: project.github },
                { label: 'Demo', href: project.demo },
                { label: 'Caso de estudio', href: project.caseStudy },
              ].map(({ label, href }) =>
                href ? (
                  <a
                    className="button button-secondary"
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span key={label} className="pending-project-link">
                    {label}
                    <small>
                      {project.status === 'coming-soon'
                        ? 'Próximamente'
                        : 'Sin enlace público'}
                    </small>
                  </span>
                ),
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('Todos');
  const filtered = projects.filter(
    (project) =>
      filter === 'Todos' ||
      project.category.some((category) => category === filter),
  );
  useEffect(
    () =>
      registerPortfolioTools((category) => {
        flushSync(() => setFilter(category));
        document
          .getElementById('proyectos')
          ?.scrollIntoView({ behavior: 'instant' });
        return projects
          .filter(
            (project) =>
              category === 'Todos' ||
              project.category.some((value) => value === category),
          )
          .map(({ id, name, status }) => ({ id, name, status }));
      }),
    [],
  );
  return (
    <section id="proyectos" className="section container">
      <SectionHeading
        number="04"
        label="PROYECTOS"
        title={
          <>
            Ideas que se convierten
            <br />
            <span>en soluciones.</span>
          </>
        }
        description="Una selección que irá creciendo con casos de datos, software e Inteligencia Artificial."
      />
      <fieldset className="project-filters">
        <legend className="sr-only">Filtrar proyectos por categoría</legend>
        {projectFilters.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </fieldset>
      <output className="project-count" aria-live="polite">
        {filtered.length
          ? `${filtered.length} ${filtered.length === 1 ? 'ficha' : 'fichas'} · ${filter}`
          : `Sin proyectos publicados en ${filter}`}
      </output>
      {filtered.length ? (
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="projects-empty">
          <FolderOpen size={32} strokeWidth={1.3} />
          <h3>Proyecto próximamente</h3>
          <p>
            Los proyectos de {filter} aparecerán aquí cuando estén disponibles.
          </p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setFilter('Todos')}
          >
            Ver todas las categorías
          </button>
        </div>
      )}
    </section>
  );
}
