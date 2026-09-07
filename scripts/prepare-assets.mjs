import { existsSync } from 'node:fs';
import { unlink } from 'node:fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const source = new URL('../public/profile.jpg', import.meta.url);
const output = new URL('../public/profile-800.webp', import.meta.url);
if (existsSync(source)) {
  await sharp(
    await import('node:fs/promises').then((fs) => fs.readFile(source)),
  )
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(fileURLToPath(output));
} else if (existsSync(output)) {
  await unlink(output);
}
