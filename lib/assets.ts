import { existsSync } from 'node:fs';
import path from 'node:path';
import { profile } from '@/data/profile';

export interface LocalAssets {
  hasPhoto: boolean;
  hasResume: boolean;
  hasOptimizedPhoto: boolean;
}

export function getLocalAssets(): LocalAssets {
  const publicFileExists = (url: string) =>
    existsSync(path.join(process.cwd(), 'public', url));
  return {
    hasPhoto: publicFileExists(profile.profileImage),
    hasResume: publicFileExists(profile.resumeUrl),
    hasOptimizedPhoto: publicFileExists('/profile-800.webp'),
  };
}
