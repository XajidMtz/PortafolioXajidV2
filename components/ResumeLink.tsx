import { Download } from 'lucide-react';
import { profile } from '@/data/profile';

export function ResumeLink({
  available,
  className = 'button button-secondary',
}: {
  available: boolean;
  className?: string;
}) {
  return available ? (
    <a
      className={className}
      href={profile.resumeUrl}
      download="CV_Xajid_Martinez.pdf"
    >
      <Download size={17} />
      Descargar CV
    </a>
  ) : (
    <span className="resume-pending">
      <button
        type="button"
        className={className}
        disabled
        title="CV próximamente"
      >
        <Download size={17} />
        Descargar CV
      </button>
      <span className="resume-note">Próximamente</span>
    </span>
  );
}
