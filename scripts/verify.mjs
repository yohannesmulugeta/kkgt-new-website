import { readFileSync, existsSync } from 'node:fs';

const required = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'standalone/site.css',
  'standalone/audit-fixes.css',
  'standalone/site-loader.js',
  'standalone/site-1.js',
  'standalone/site-2.js',
  'standalone/site-3.js',
  'standalone/site-4.js',
  'standalone/image-data-1.js',
  'standalone/image-data-2.js',
  'standalone/image-data-3.js',
  'standalone/image-data-4.js',
  'standalone/images/kkgt-logo.svg',
];

for (const path of required) {
  if (!existsSync(path)) throw new Error(`Missing required file: ${path}`);
}

const index = readFileSync('index.html', 'utf8');
if (index.includes('/src/main.tsx')) throw new Error('index.html still references the Vite source entry.');
if (!index.includes('/standalone/site-loader.js')) throw new Error('index.html does not load the standalone browser entry.');
if (!index.includes('var IMAGES=window.IMAGES')) throw new Error('The generated image store is not initialized.');

const loader = readFileSync('standalone/site-loader.js', 'utf8');
new Function(loader);

const source = ['site-1.js', 'site-2.js', 'site-3.js', 'site-4.js']
  .map((name) => readFileSync(`standalone/${name}`, 'utf8'))
  .join('\n');
new Function(source);

console.log('KKGT GitHub Pages preview verification passed.');
