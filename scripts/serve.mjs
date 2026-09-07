import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    );
    let target = path.resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
      res.writeHead(403).end();
      return;
    }
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, 'index.html');
    } catch {
      if (!path.extname(target)) target += '.html';
    }
    const body = await readFile(target);
    res.writeHead(200, {
      'Content-Type': mime[path.extname(target)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      ...(path.extname(target) === '.pdf'
        ? {
            'Content-Disposition':
              'attachment; filename="CV_Xajid_Martinez.pdf"',
          }
        : {}),
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res
      .writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      .end('Archivo no encontrado');
  }
}).listen(port, '0.0.0.0', () =>
  process.stdout.write(`Local: http://localhost:${port}\n`),
);
