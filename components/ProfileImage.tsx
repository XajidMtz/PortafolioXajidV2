'use client';
import { useState } from 'react';
import Image from 'next/image';
import { profile } from '@/data/profile';
import type { LocalAssets } from '@/lib/assets';

export function ProfileImage({ assets }: { assets: LocalAssets }) {
  const [failed, setFailed] = useState(false);
  if (!assets.hasPhoto || failed)
    return (
      <figure
        className="portrait-placeholder"
        aria-label={`Monograma XM. Fotografía de ${profile.shortName} próximamente.`}
      >
        <span className="portrait-orbit orbit-one" />
        <span className="portrait-orbit orbit-two" />
        <span className="portrait-monogram">
          xm<span>.</span>
        </span>
        <span className="photo-caption">
          UN PERFIL. MÚLTIPLES PERSPECTIVAS.
        </span>
      </figure>
    );
  return (
    <Image
      src={
        assets.hasOptimizedPhoto && profile.profileImage === '/profile.jpg'
          ? '/profile-800.webp'
          : profile.profileImage
      }
      alt={`${profile.shortName} - ${profile.role}`}
      fill
      sizes="(max-width: 760px) 90vw, 440px"
      preload
      className="profile-photo"
      onError={() => setFailed(true)}
    />
  );
}
