import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const output = path.resolve('out');
const html = await readFile(path.join(output, 'index.html'), 'utf8');
assert.match(html, /<html[^>]+lang="es"/);
assert.equal(
  (html.match(/<h1[\s>]/g) || []).length,
  1,
  'Debe haber un único h1.',
);
for (const section of [
  'inicio',
  'sobre-mi',
  'experiencia',
  'habilidades',
  'proyectos',
  'educacion',
  'contacto',
]) {
  assert.ok(html.includes(`id="${section}"`), `Falta la sección ${section}.`);
}
const ids = new Set(
  [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
);
for (const [, anchor] of html.matchAll(/href="#([^"]*)"/g)) {
  assert.ok(ids.has(anchor), `Ancla interna rota: #${anchor}`);
}
for (const tag of [
  'name="description"',
  'property="og:title"',
  'property="og:description"',
  'name="twitter:card"',
  'rel="canonical"',
]) {
  assert.ok(html.includes(tag), `Falta metadata: ${tag}`);
}
assert.ok(existsSync(path.join(output, 'favicon.svg')));
assert.ok(existsSync(path.join(output, 'CV_Xajid_Martinez.pdf')));
assert.ok(existsSync(path.join(output, 'CV_Xajid_Martinez_EN.pdf')));
assert.ok(existsSync(path.join(output, 'robots.txt')));
assert.ok(existsSync(path.join(output, 'sitemap.xml')));
assert.match(html, /href="mailto:[^"\s]+@[^"\s]+"/);
assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/ingxajidmartinez\/"/);
assert.match(html, /href="tel:\+525560687436"/);
assert.match(html, /href="https:\/\/wa\.me\/5215560687436"/);
assert.match(html, /href="\/CV_Xajid_Martinez_EN\.pdf" download="CV_Xajid_Martinez_EN\.pdf"/);
assert.ok(
  !html.includes('DOCUMENTO TEMPORAL DE PRUEBA'),
  'No publicar fixtures.',
);
const urls = [
  ...new Set(
    [
      ...html.matchAll(
        /(?:src|href)="(\/_next\/static\/[^"<>]+\.(?:js|css))"/g,
      ),
    ].map((match) => match[1]),
  ),
];
let total = 0;
const sizes = { js: 0, css: 0 };
for (const url of urls) {
  const content = await readFile(path.join(output, url));
  const compressed = gzipSync(content).length;
  total += compressed;
  sizes[path.extname(url).slice(1)] += compressed;
}
process.stdout.write(
  JSON.stringify(
    {
      status: 'passed',
      sections: 7,
      internalAnchors: 'valid',
      metadata: 'valid',
      gzipKiB: {
        html: +(gzipSync(html).length / 1024).toFixed(1),
        js: +(sizes.js / 1024).toFixed(1),
        css: +(sizes.css / 1024).toFixed(1),
        jsAndCss: +(total / 1024).toFixed(1),
      },
    },
    null,
    2,
  ) + '\n',
);
