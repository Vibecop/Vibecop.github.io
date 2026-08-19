import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { nodesToJsx, ROUTES } from './convert.mjs';

const SRC = path.resolve('..');

// these link assets/css/blog.css, so they live in the (blog) route group
// whose layout imports it
const BLOG_CSS_PAGES = new Set([
  'one-column.html', 'two-column.html', 'three-column.html',
  'three-column-sidebar.html', 'four-column.html',
  'six-column-full-width.html', 'single-blog.html',
]);

// pages that ship without the topbar / header / footer chrome
const BARE = new Set(['404.html', 'coming-soon.html']);

const OUT_DIR = {};
for (const [file, route] of Object.entries(ROUTES)) {
  if (file === 'six-colum-full-wide.html') continue;
  if (route === '/') {
    OUT_DIR[file] = 'app/(site)';
  } else if (BLOG_CSS_PAGES.has(file)) {
    OUT_DIR[file] = `app/(site)/(blog)${route}`;
  } else {
    OUT_DIR[file] = `app/(site)${route}`;
  }
}
OUT_DIR['coming-soon.html'] = 'app/(bare)/coming-soon';
delete OUT_DIR['404.html'];

function find(node, pred, out = []) {
  if (pred(node)) out.push(node);
  for (const c of node.childNodes || []) find(c, pred, out);
  return out;
}

function titleOf(doc) {
  const t = find(doc, (n) => n.tagName === 'title')[0];
  const txt = t?.childNodes?.[0]?.value || 'Opzio';
  return txt.replace(/\s+/g, ' ').trim();
}

function componentName(file) {
  const base = file.replace(/\.html$/, '').replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
  return base.charAt(0).toUpperCase() + base.slice(1) + 'Page';
}

function convert(file, outDir) {
  const html = fs.readFileSync(path.join(SRC, file), 'utf8');
  const doc = parse(html);
  const body = find(doc, (n) => n.tagName === 'body')[0];

  const ctx = { extract: !BARE.has(file) };
  const { jsx, usesLink } = nodesToJsx(body.childNodes, 2, ctx);

  const imports = [];
  if (usesLink) imports.push('import Link from "next/link";');
  if (ctx.usesHeader) imports.push('import Header from "@/components/Header";');
  if (ctx.usesFooter) imports.push('import Footer from "@/components/Footer";');

  if (ctx.usesStaticForm) imports.push('import StaticForm from "@/components/StaticForm";');

  const title = titleOf(doc);

  const out = `${imports.join('\n')}${imports.length ? '\n\n' : ''}export const metadata = {
  title: ${JSON.stringify(title)},
};

export default function ${componentName(file)}() {
  return (
    <>
${jsx.replace(/^/gm, '  ').replace(/^\s+$/gm, '')}    </>
  );
}
`;
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.jsx'), out);
  return { file, outDir, title };
}


const results = [];
for (const [file, outDir] of Object.entries(OUT_DIR)) {
  results.push(convert(file, outDir));
}
// 404 -> not-found.jsx
{
  const html = fs.readFileSync(path.join(SRC, '404.html'), 'utf8');
  const doc = parse(html);
  const body = find(doc, (n) => n.tagName === 'body')[0];
  const ctx = { extract: false };
  const { jsx, usesLink } = nodesToJsx(body.childNodes, 2, ctx);
  const imports = usesLink ? 'import Link from "next/link";\n\n' : '';
  fs.mkdirSync('app', { recursive: true });
  fs.writeFileSync('app/not-found.jsx', `${imports}export const metadata = {
  title: ${JSON.stringify(titleOf(doc))},
};

export default function NotFound() {
  return (
    <>
${jsx.replace(/^/gm, '  ').replace(/^\s+$/gm, '')}    </>
  );
}
`);
  results.push({ file: '404.html', outDir: 'app', title: titleOf(doc) });
}

console.log(results.map((r) => `${r.file.padEnd(28)} -> ${r.outDir}`).join('\n'));
