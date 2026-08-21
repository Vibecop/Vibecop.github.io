import { parse } from 'parse5';
import fs from 'node:fs';
import { PAGES, sourceOf } from './routes.mjs';

const BASE = process.env.BASE_URL || 'http://localhost:3118';

// /404 has no route to fetch -- visual-check.mjs covers not-found.jsx instead
const CHECKED = PAGES.filter((p) => p.route !== '/404');

const SKIP_TAGS = new Set(['script', 'noscript', 'template']);

function walk(node, out) {
  for (const c of node.childNodes || []) {
    if (c.nodeName === '#text') {
      const t = c.value.replace(/\s+/g, ' ').trim();
      if (t) out.push('T:' + t);
      continue;
    }
    if (c.nodeName === '#comment') continue;
    if (!c.tagName || SKIP_TAGS.has(c.tagName)) continue;
    if (c.tagName === 'link' || c.tagName === 'style') continue;
    const attrs = Object.fromEntries((c.attrs || []).map((a) => [a.name, a.value]));
    // React's hoistable/suspense placeholder
    if (c.tagName === 'div' && 'hidden' in attrs && !attrs.class) continue;
    const cls = (attrs.class || '').split(/\s+/).filter(Boolean).sort().join(' ');
    const id = attrs.id || '';
    let src = attrs.src || attrs.href || '';
    src = src.replace(/\.html$/, '').replace(/^\.\//, '').replace(/^assets\//, '/assets/');
    if (src === 'index') src = '/';
    else if (src && !/^(https?:|mailto:|tel:|#|\/)/.test(src)) src = '/' + src;
    out.push(`${c.tagName}|${cls}|${id}|${src}`);
    walk(c, out);
  }
  return out;
}

function bodyOf(html) {
  const doc = parse(html);
  const find = (n) => {
    if (n.tagName === 'body') return n;
    for (const c of n.childNodes || []) {
      const r = find(c);
      if (r) return r;
    }
    return null;
  };
  return find(doc);
}

let failures = 0;
for (const { route } of CHECKED) {
  const original = fs.readFileSync(sourceOf(route), 'utf8');
  const rendered = await fetch(BASE + route).then((r) => r.text());

  const a = walk(bodyOf(original), []);
  const b = walk(bodyOf(rendered), []).filter((l) => !l.startsWith('T:$RC') && !l.startsWith('T:self.__next'));

  let firstDiff = -1;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) { firstDiff = i; break; }
  }
  if (firstDiff === -1) {
    console.log(`OK    ${route}  (${a.length} nodes)`);
  } else {
    failures++;
    console.log(`DIFF  ${route}  orig=${a.length} next=${b.length}  at #${firstDiff}`);
    for (let i = Math.max(0, firstDiff - 2); i < Math.min(Math.max(a.length, b.length), firstDiff + 4); i++) {
      console.log(`   ${i === firstDiff ? '>>' : '  '} orig: ${a[i]}`);
      console.log(`   ${i === firstDiff ? '>>' : '  '} next: ${b[i]}`);
    }
  }
}
console.log(failures ? `\n${failures} page(s) differ` : '\nAll pages match');
