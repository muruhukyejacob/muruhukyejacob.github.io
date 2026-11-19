// Checks that every internal link and asset referenced in dist/ exists. Run after `npm run build`.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(dist);

let bad = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    let p = join(dist, decodeURI(url));
    if (url.endsWith('/')) p = join(p, 'index.html');
    if (!existsSync(p)) { console.log(`Broken: ${url}  (in ${f})`); bad++; }
  }
}
console.log(`${files.length} pages checked, ${bad} broken internal link(s).`);
process.exit(bad ? 1 : 0);
