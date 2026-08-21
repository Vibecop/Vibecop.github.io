/*
 * Writes `app/**\/page.jsx` for every page in the manifest, lifting the shared
 * chrome (promo bar, header, footer, back-to-top) out of the markup for the
 * groups that carry it.
 *
 * One-shot: the generated pages have been hand-edited since the port, so
 * re-running this overwrites that work. Read tools/README.md first.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { nodesToJsx } from './convert.mjs';
import { PAGES, componentNameOf, sourceOf } from './routes.mjs';

/** Where a page's file goes, per `group` in the manifest. */
const OUT_DIR = {
  site: (route) => `app/(site)${route === '/' ? '' : route}`,
  blog: (route) => `app/(site)/(blog)${route}`,
  bare: (route) => `app/(bare)${route}`,
};

// `/404` is not a route: Next renders app/not-found.jsx for anything unmatched
const NOT_FOUND = { dir: 'app', file: 'not-found.jsx', component: 'NotFound' };

function targetOf({ route, group = 'site' }) {
  if (route === '/404') return NOT_FOUND;
  return { dir: OUT_DIR[group](route), file: 'page.jsx', component: componentNameOf(route) };
}

function find(node, pred, out = []) {
  if (pred(node)) out.push(node);
  for (const c of node.childNodes || []) find(c, pred, out);
  return out;
}

function titleOf(doc) {
  const t = find(doc, (n) => n.tagName === 'title')[0];
  return (t?.childNodes?.[0]?.value || 'Vibecop').replace(/\s+/g, ' ').trim();
}

function convert(page) {
  const { route, group = 'site' } = page;
  const target = targetOf(page);

  const doc = parse(fs.readFileSync(sourceOf(route), 'utf8'));
  const body = find(doc, (n) => n.tagName === 'body')[0];

  // bare pages ship without chrome, so there is nothing to lift out
  const ctx = { extract: group !== 'bare' };
  const { jsx, usesLink } = nodesToJsx(body.childNodes, 2, ctx);

  const imports = [
    usesLink && 'import Link from "next/link";',
    ctx.usesHeader && 'import Header from "@/components/Header";',
    ctx.usesFooter && 'import Footer from "@/components/Footer";',
    ctx.usesStaticForm && 'import StaticForm from "@/components/StaticForm";',
  ].filter(Boolean);

  const out = `${imports.join('\n')}${imports.length ? '\n\n' : ''}export const metadata = {
  title: ${JSON.stringify(titleOf(doc))},
};

export default function ${target.component}() {
  return (
    <>
${jsx.replace(/^/gm, '  ').replace(/^\s+$/gm, '')}    </>
  );
}
`;

  fs.mkdirSync(target.dir, { recursive: true });
  fs.writeFileSync(path.join(target.dir, target.file), out);
  return `${route.padEnd(24)} -> ${path.join(target.dir, target.file)}`;
}

console.log(PAGES.map(convert).join('\n'));
