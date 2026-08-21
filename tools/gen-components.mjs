import fs from 'node:fs';
import { parse } from 'parse5';
import { nodesToJsx } from './convert.mjs';
import { sourceOf } from './routes.mjs';

// /contact carries the superset header -- it is the only page with a Contact item
const doc = parse(fs.readFileSync(sourceOf('/contact'), 'utf8'));

function find(node, pred, out = []) {
  if (pred(node)) out.push(node);
  for (const c of node.childNodes || []) find(c, pred, out);
  return out;
}
const cls = (n) => (n.attrs || []).find((a) => a.name === 'class')?.value || '';

const header = find(doc, (n) => n.tagName === 'header')[0];
const footer = find(doc, (n) => n.tagName === 'section' && cls(n).includes('footer-con'))[0];
const topbar = find(doc, (n) => n.tagName === 'div' && cls(n).includes('promotional-topbar') && !cls(n).includes('icon'))[0];

fs.writeFileSync('tools/out-header.jsx', nodesToJsx([header], 3).jsx);
fs.writeFileSync('tools/out-footer.jsx', nodesToJsx([footer], 3).jsx);
fs.writeFileSync('tools/out-topbar.jsx', nodesToJsx([topbar], 3).jsx);
console.log('written');
