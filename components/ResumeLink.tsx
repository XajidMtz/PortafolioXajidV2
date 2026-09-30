import { Download } from 'lucide-react';
import { profile } from '@/data/profile';

export function ResumeLink({
  available,
  className = 'button button-secondary',
  language = 'es',
  label,
}: {
  available: boolean;
  className?: string;
  language?: 'es' | 'en';
  label?: string;
}) {
  const isEnglish = language === 'en';
  const url = isEnglish ? profile.resumeUrlEn : profile.resumeUrl;
  const filename = isEnglish
    ? 'CV_Xajid_Martinez_EN.pdf'
    : 'CV_Xajid_Martinez.pdf';
  const text = label ?? (isEnglish ? 'Descargar CV en inglés' : 'Descargar CV');
  return available ? (
    <a
      className={className}
      href={url}
      download={filename}
    >
      <Download size={17} />
      {text}
    </a>
  ) : (
    <span className="resume-pending">
      <button
        type="button"
        className={className}
        disabled
        title={isEnglish ? 'CV en inglés próximamente' : 'CV próximamente'}
      >
        <Download size={17} />
        {text}
      </button>
      <span className="resume-note">Próximamente</span>
    </span>
  );
}
