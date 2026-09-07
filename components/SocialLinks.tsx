import { Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/BrandIcons';
import { profile } from '@/data/profile';

export function SocialLinks({ labels = false }: { labels?: boolean }) {
  const className = labels ? 'social-link social-labeled' : 'social-link';
  return (
    <div className="social-links">
      <a
        className={className}
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub de ${profile.shortName} (nueva pestaña)`}
      >
        <Github size={19} />
        {labels && 'GitHub'}
      </a>
      {profile.linkedin ? (
        <a
          className={className}
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${profile.shortName} (nueva pestaña)`}
        >
          <Linkedin size={19} />
          {labels && 'LinkedIn'}
        </a>
      ) : (
        <button
          type="button"
          className={`${className} social-pending`}
          disabled
          title="LinkedIn próximamente"
          aria-label="LinkedIn próximamente"
        >
          <Linkedin size={19} />
          {labels && (
            <>
              LinkedIn <span className="pending-label">Próximamente</span>
            </>
          )}
        </button>
      )}
      <a
        className={className}
        href={`mailto:${profile.email}`}
        aria-label={`Enviar correo a ${profile.email}`}
      >
        <Mail size={19} />
        {labels && 'Correo'}
      </a>
    </div>
  );
}
