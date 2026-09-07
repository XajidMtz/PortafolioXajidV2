import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';
import { SocialLinks } from './SocialLinks';
export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-name">
        <a href="#inicio" className="brand" aria-label="Volver al inicio">
          xm<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.shortName}
          <span>Datos. Desarrollo. Inteligencia.</span>
        </p>
      </div>
      <SocialLinks />
      <a href="#inicio" className="back-top">
        Volver arriba <ArrowUp size={16} />
      </a>
    </footer>
  );
}
