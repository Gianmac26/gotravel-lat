#!/usr/bin/env node
/**
 * Verifica que toda página (page.tsx) use SiteHeader o ArticleLayout.
 * Falla si alguna página define su propio <header> inline.
 *
 * Exenciones:
 *  - app/components/SiteHeader.tsx  — el componente en sí
 *  - Cualquier archivo que no sea page.tsx
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, "app");
const SITE_HEADER_FILE = join(APP_DIR, "components", "SiteHeader.tsx");

function walkPages(dir) {
  const pages = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules") continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) pages.push(...walkPages(full));
    else if (name === "page.tsx") pages.push(full);
  }
  return pages;
}

let failures = 0;

function fail(rel, reason) {
  console.error(`❌ ${rel} — ${reason}`);
  failures++;
}

for (const file of walkPages(APP_DIR)) {
  if (file === SITE_HEADER_FILE) continue;

  const src = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  const lines = src.split("\n");

  // Check 1 — sin <header> inline
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trimStart().startsWith("//") || line.trimStart().startsWith("*")) continue;
    if (/<header\b/.test(line)) {
      fail(rel, `<header> inline detectado (línea ${i + 1}). Usa <SiteHeader> en su lugar.`);
      break;
    }
  }

  // Páginas de solo redirect no renderizan UI — exentas
  const isRedirectOnly = /redirect\s*\(/.test(src) && !src.includes("return (") && !src.includes("return(");
  if (isRedirectOnly) continue;

  // Check 2 — debe usar SiteHeader o ArticleLayout
  const usesHeader =
    src.includes("SiteHeader") ||
    src.includes("ArticleLayout");

  if (!usesHeader) {
    fail(rel, "no importa SiteHeader ni ArticleLayout");
  }
}

if (failures > 0) {
  console.error(`\n❌ check-site-header: ${failures} página(s) con header inconsistente.`);
  console.error("   Todas las páginas deben usar <SiteHeader /> (o ArticleLayout que lo incluye).\n");
  process.exit(1);
} else {
  console.log("✅ check-site-header: todas las páginas usan SiteHeader.");
}
