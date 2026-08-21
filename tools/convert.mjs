import { parse, parseFragment } from 'parse5';
import { ROUTE_BY_SLUG } from './routes.mjs';

// ---- attribute name mapping ----------------------------------------------
const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  spellcheck: 'spellCheck',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  novalidate: 'noValidate',
  enctype: 'encType',
  usemap: 'useMap',
  srcset: 'srcSet',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  charset: 'charSet',
  'http-equiv': 'httpEquiv',
  accesskey: 'accessKey',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  datetime: 'dateTime',
  playsinline: 'playsInline',
  srclang: 'srcLang',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
};

const BOOLEAN_ATTRS = new Set([
  'checked', 'disabled', 'readonly', 'required', 'selected', 'multiple',
  'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'novalidate',
  'open', 'hidden', 'default', 'reversed', 'allowfullscreen', 'playsinline',
]);

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr',
]);

// ---- helpers --------------------------------------------------------------
function styleToObject(css) {
  const out = [];
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    let prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) continue;
    let key;
    if (prop.startsWith('--')) key = JSON.stringify(prop);
    else key = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${out.join(', ')} }}`;
}

function escapeText(text) {
  // parse5 gives decoded text; re-escape what JSX cares about
  return text
    .replace(/\\/g, '\\\\')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function resolveHref(href) {
  if (!href) return { href, internal: false };
  const clean = href.trim().replace(/^\.\//, '');
  if (/^(https?:|mailto:|tel:|#|javascript:)/i.test(clean)) {
    return { href: clean, internal: false };
  }
  if (clean === '') return { href: '', internal: false };

  const [file, hash = ''] = clean.split('#');
  const fragment = hash ? '#' + hash : '';
  const page = /^(.*)\.html$/.exec(file);

  if (page) {
    const route = ROUTE_BY_SLUG.get(page[1]);
    // a page the kit linked but never shipped stays a plain link, so it 404s
    // exactly as it did before
    return route
      ? { href: route + fragment, internal: true }
      : { href: '/' + page[1] + fragment, internal: false };
  }

  return { href: clean.startsWith('/') ? clean : '/' + clean, internal: false };
}

// ---- serializer -----------------------------------------------------------
function isRenderable(n) {
  if (n.nodeName === '#text') return true;
  if (n.nodeName === '#comment') return true;
  if (!n.tagName) return false;
  return n.tagName !== 'script' && n.tagName !== 'noscript';
}

/*
 * Every run of whitespace in the source becomes a single {' '} in the output.
 *
 * JSX drops whitespace that spans a newline, HTML does not -- it collapses it
 * to one space and lets CSS decide whether that space is visible. Guessing
 * which ones matter goes wrong quickly: this kit styles <li> and <div>
 * elements as inline-block (where the newline between them is a visible ~4px
 * gap) and writes things like `<span>18h/wk saved </span><span> 62% ...`,
 * where the space lives *inside* the inline elements rather than between them.
 *
 * So none of it is second-guessed. Emitting the space everywhere the source
 * had one reproduces the browser's own model exactly: whitespace-only text
 * collapses away at line-box edges and between block, flex, grid and table
 * boxes, which is precisely where the original was inert too.
 *
 * The one thing this would get wrong is white-space: pre content -- the kit
 * has no <pre> and its two <textarea>s are empty.
 */
function hasContent(n) {
  if (!n) return false;
  if (n.nodeName === '#text') return n.value.trim().length > 0;
  return true;
}

function serializeChildren(node, indent, ctx) {
  const pad = '  '.repeat(indent);
  const kids = (node.childNodes || []).filter(isRenderable);

  // an element whose only content is whitespace renders as empty either way
  if (!kids.some(hasContent)) return '';

  const parts = [];

  for (const child of kids) {
    if (child.nodeName === '#text') {
      const raw = child.value;
      const trimmed = raw.trim();

      if (!trimmed) {
        parts.push(`${pad}{' '}\n`);
        continue;
      }

      const text = escapeText(trimmed.replace(/[ \t\n\r\f]+/g, ' '));
      if (/^[ \t\n\r\f]/.test(raw)) parts.push(`${pad}{' '}\n`);
      parts.push(`${pad}${text}\n`);
      if (/[ \t\n\r\f]$/.test(raw)) parts.push(`${pad}{' '}\n`);
      continue;
    }

    const out = serialize(child, indent, ctx);
    if (out) parts.push(out);
  }

  return parts.join('');
}

function serialize(node, indent, ctx) {
  const pad = '  '.repeat(indent);

  if (node.nodeName === '#text') {
    const trimmed = node.value.trim();
    if (!trimmed) return '';
    return `${pad}${escapeText(trimmed.replace(/[ \t\n\r\f]+/g, ' '))}\n`;
  }

  if (node.nodeName === '#comment') {
    const body = node.data.replace(/\*\//g, '*⁄').trim();
    if (!body) return '';
    return `${pad}{/* ${body} */}\n`;
  }

  const tag = node.tagName;
  if (!tag) return '';
  if (tag === 'script' || tag === 'noscript') return '';

  const classOf = (n) => (n.attrs || []).find((a) => a.name === 'class')?.value || '';
  const idOf = (n) => (n.attrs || []).find((a) => a.name === 'id')?.value || '';

  if (ctx.extract) {
    if (tag === 'header') {
      ctx.usesHeader = true;
      return `${pad}<Header />\n`;
    }
    if (tag === 'section' && classOf(node).split(/\s+/).includes('footer-con')) {
      ctx.usesFooter = true;
      return `${pad}<Footer />\n`;
    }
    // topbar + back-to-top anchor live in the shared layout
    if (tag === 'div' && classOf(node).split(/\s+/).includes('promotional-topbar')) return '';
    if (tag === 'a' && idOf(node) === 'button') return '';
  }

  let jsxTag = tag;
  const attrs = [];

  const attrMap = {};
  for (const a of node.attrs || []) attrMap[a.name] = a.value;

  if (tag === 'a' && attrMap.href !== undefined) {
    const { href, internal } = resolveHref(attrMap.href);
    attrMap.href = href;
    if (internal && !attrMap.target) {
      jsxTag = 'Link';
      ctx.usesLink = true;
    }
  }

  if ((tag === 'img' || tag === 'source' || tag === 'video' || tag === 'audio') && attrMap.src) {
    attrMap.src = attrMap.src.replace(/^(?:\.\/)?assets\//, '/assets/');
  }
  if (tag === 'link' && attrMap.href) {
    attrMap.href = attrMap.href.replace(/^(?:\.\/)?assets\//, '/assets/');
  }
  if (tag === 'form' && attrMap.action === 'javascript:;') {
    delete attrMap.action;
    jsxTag = 'StaticForm';
    ctx.usesStaticForm = true;
  }

  for (const [name, value] of Object.entries(attrMap)) {
    if (name === 'style') {
      attrs.push(`style=${styleToObject(value)}`);
      continue;
    }
    if (BOOLEAN_ATTRS.has(name)) {
      attrs.push(`${ATTR_MAP[name] || name}={true}`);
      continue;
    }
    attrs.push(`${ATTR_MAP[name] || name}=${JSON.stringify(value)}`);
  }

  const inlineAttrs = attrs.join(' ');
  const multiline = inlineAttrs.length > 78;
  const openAttrs = attrs.length
    ? (multiline
        ? '\n' + attrs.map((a) => '  '.repeat(indent + 1) + a).join('\n') + '\n' + pad
        : ' ' + inlineAttrs)
    : '';

  if (VOID.has(tag)) {
    return multiline
      ? `${pad}<${jsxTag}${openAttrs}/>\n`
      : `${pad}<${jsxTag}${openAttrs} />\n`;
  }

  const kids = serializeChildren(node, indent + 1, ctx);
  if (!kids) return `${pad}<${jsxTag}${openAttrs}></${jsxTag}>\n`;
  return `${pad}<${jsxTag}${openAttrs}>\n${kids}${pad}</${jsxTag}>\n`;
}

export function htmlToJsx(html, indent = 2) {
  const frag = parseFragment(html);
  const ctx = { usesLink: false };
  const fake = { childNodes: frag.childNodes };
  const jsx = serializeChildren(fake, indent, ctx);
  return { jsx, usesLink: ctx.usesLink };
}

export function nodesToJsx(nodes, indent = 2, ctx = {}) {
  ctx.usesLink = ctx.usesLink || false;
  const jsx = serializeChildren({ childNodes: nodes }, indent, ctx);
  return { jsx, usesLink: ctx.usesLink, ctx };
}

export { parse, parseFragment };
