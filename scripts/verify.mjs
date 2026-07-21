import { readFileSync, existsSync } from 'node:fs';

const required = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'standalone/site.css',
  'standalone/audit-fixes.css',
  'standalone/reference-redesign.css',
  'standalone/site-loader.js',
  'standalone/site-1.js',
  'standalone/site-2.js',
  'standalone/site-3.js',
  'standalone/site-4.js',
  'standalone/images/kkgt-logo.svg',
];

for (const path of required) {
  if (!existsSync(path)) throw new Error(`Missing required file: ${path}`);
}

const index = readFileSync('index.html', 'utf8');
if (index.includes('/src/main.tsx')) throw new Error('index.html still references the Vite source entry.');
if (!index.includes('/standalone/site-loader.js')) throw new Error('index.html does not load the standalone browser entry.');
if (!index.includes('/standalone/reference-redesign.css')) throw new Error('The reference-matched design stylesheet is not loaded.');
if (!index.includes('class="topbar"')) throw new Error('The approved two-level header is missing.');

const loader = readFileSync('standalone/site-loader.js', 'utf8');
new Function(loader);
if (/unsplash|pexels/i.test(loader)) throw new Error('Stock-photo URLs remain in the active loader.');

const source = ['site-1.js', 'site-2.js', 'site-3.js', 'site-4.js']
  .map((name) => readFileSync(`standalone/${name}`, 'utf8'))
  .join('\n');
new Function(source);
if (!source.includes('reference-hero')) throw new Error('The reference-matched homepage was not found.');

const redesign = readFileSync('standalone/reference-redesign.css', 'utf8');
if (!redesign.includes('--photo-sprite')) throw new Error('The custom generated photo sprite is not configured.');

console.log('KKGT GitHub Pages reference redesign verification passed.');
