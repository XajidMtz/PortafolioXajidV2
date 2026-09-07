import { Languages as LanguagesIcon } from 'lucide-react';
import { profile } from '@/data/profile';
export function Languages() {
  return (
    <div className="languages">
      <h3>
        <LanguagesIcon size={20} strokeWidth={1.5} />
        Idiomas
      </h3>
      {profile.languages.map((language) => (
        <div key={language.name}>
          <strong>{language.name}</strong>
          <span>{language.level}</span>
        </div>
      ))}
    </div>
  );
}
