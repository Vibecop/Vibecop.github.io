/*
 * Visual check: screenshots every page twice -- once from the original HTML
 * file over file://, once from this app -- and reports the full-page height
 * delta plus the number of differing pixels.
 *
 * Animations are frozen and WOW's reveal is forced so both shots capture the
 * same settled state. Start the app first:
 *
 *   npm run build && npm run start -- -p 3118
 *   node tools/visual-check.mjs
 *
 * A few hundred differing pixels on text-heavy pages is expected: element
 * widths match exactly but container positions round differently by ~0.016px,
 * which changes glyph antialiasing without moving anything.
 */
import puppeteer from 'puppeteer-core';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import { NOT_FOUND_URL, slugOf, sourceOf } from './routes.mjs';

const BASE = process.env.BASE_URL || 'http://localhost:3118';

const OUT = '/tmp/claude-1000/shots';
fs.mkdirSync(OUT, { recursive: true });

// a spread of the kit rather than all of it: one of each layout, plus the two
// pages that ship without chrome
const CHECKED = [
  '/', '/about', '/services', '/pricing', '/contact', '/faq', '/team', '/blog',
  '/single-blog', '/three-column-sidebar', '/six-column-full-width',
  '/case-studies', '/coming-soon', '/404',
].map((route) => ({
  name: slugOf(route),
  source: 'file://' + sourceOf(route),
  url: BASE + (route === '/404' ? NOT_FOUND_URL : route),
}));

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--no-sandbox', '--allow-file-access-from-files'],
});

const shoot = async (url, file) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  // freeze WOW/animate.css so both shots capture the same settled state
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' });
  await page.evaluate(() => {
    document.querySelectorAll('.wow').forEach((e) => {
      e.style.setProperty('visibility', 'visible', 'important');
      e.style.setProperty('opacity', '1', 'important');
      e.style.setProperty('transform', 'none', 'important');
    });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: file, fullPage: true });
  const h = await page.evaluate(() => document.body.scrollHeight);
  await page.close();
  return h;
};

for (const { name, source, url } of CHECKED) {
  const a = await shoot(source, `${OUT}/${name}.orig.png`);
  const b = await shoot(url, `${OUT}/${name}.next.png`);
  const delta = Math.abs(a - b);
  console.log(`${name.padEnd(28)} orig=${a}px next=${b}px  Δ=${delta}px ${delta <= 2 ? 'OK' : delta / a < 0.01 ? 'ok(<1%)' : '** CHECK **'}`);
}
await browser.close();

// ---- pixel diff ----------------------------------------------------------
console.log('');
for (const { name } of CHECKED) {
  const a = PNG.sync.read(fs.readFileSync(`${OUT}/${name}.orig.png`));
  const b = PNG.sync.read(fs.readFileSync(`${OUT}/${name}.next.png`));
  if (a.width !== b.width || a.height !== b.height) {
    console.log(`${name.padEnd(28)} SIZE MISMATCH ${a.width}x${a.height} vs ${b.width}x${b.height}`);
    continue;
  }
  let diff = 0;
  for (let i = 0; i < a.data.length; i += 4) {
    const d =
      Math.abs(a.data[i] - b.data[i]) +
      Math.abs(a.data[i + 1] - b.data[i + 1]) +
      Math.abs(a.data[i + 2] - b.data[i + 2]);
    if (d > 24) diff++;
  }
  const total = a.width * a.height;
  console.log(
    `${name.padEnd(28)} ${a.width}x${a.height}  differing px: ${diff} (${((diff / total) * 100).toFixed(4)}%)`
  );
}
