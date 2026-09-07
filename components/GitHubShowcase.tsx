import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';
import { profile } from '@/data/profile';
import { featuredRepositories } from '@/data/projects';
export function GitHubShowcase() {
  return (
    <section
      className="container github-section"
      aria-labelledby="github-title"
    >
      <div className="github-banner">
        <div className="github-icon">
          <Github size={30} />
        </div>
        <div>
          <h2 id="github-title">Más código, en GitHub.</h2>
          <p>Explora mis repositorios y sigue lo que voy construyendo.</p>
        </div>
        <a
          className="button button-secondary"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar GitHub <ArrowUpRight size={17} />
        </a>
      </div>
      {featuredRepositories.length > 0 && (
        <div className="repository-grid">
          {featuredRepositories.map((repository) => (
            <a
              className="repository-card"
              key={repository.url}
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                {repository.name}
                <ArrowUpRight size={16} />
              </h3>
              <p>{repository.description}</p>
              {repository.language && (
                <span className="tag">{repository.language}</span>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
