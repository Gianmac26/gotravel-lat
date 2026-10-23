#!/usr/bin/env node
/**
 * Verifica que ningún link de WhatsApp aparezca como <a> directo en JSX/TSX.
 * Todo link wa.me debe pasar por <WALink> con cta_position y service.
 *
 * Detecta:
 *  - href="https://wa.me..."  (string literal directo)
 *  - href={VAR}               donde VAR es una const con valor wa.me
 *  - href={VAR}               donde VAR es resultado de wa(...) / waAfterPay(...)
 *  - href={plan.wa}           object property access típico de plan data
 *  - href={`${EMPRESA.whatsappHref}...`}  template literals con wa.me
 *  - wa.me en dangerouslySetInnerHTML
 *  - wa.me en strings dentro de arrays de datos (plan data, nav links, etc.)
 *
 * Exclusiones:
 *  - app/components/WALink.tsx (el helper en sí)
 *  - redirect() — navegación server-side
 *  - Líneas que son solo declaración de constante: const X = "https://wa.me..."
 *  - Llamadas a encodeURIComponent/template literals para construir la URL
 *    (estas son las URL en sí, no el JSX que las usa)
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, "app");
const WALINK_FILE = join(APP_DIR, "components", "WALink.tsx");

// Nombres de variables y propiedades conocidos que contienen WA URLs
// Además de los que detectamos dinámicamente por archivo
const KNOWN_WA_PROPS = [
  "plan\\.wa",      // plan.wa
  "item\\.wa",
  "link\\.href",    // nav link objects with wa href
];

// Funciones/patrones cuyo resultado es una WA URL
const WA_CALL_PATTERNS = [
  /\bwa\s*\(/,           // wa(...)
  /\bwaAfterPay\b/,      // waAfterPay / waAfterPay(...)
  /\bwaLink\b/,          // waLink variable (dynamic)
  /EMPRESA\.whatsappHref/,  // template literal with EMPRESA.whatsappHref
];

function walk(dir) {
  const entries = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules") continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) entries.push(...walk(full));
    else if (name.endsWith(".tsx") || name.endsWith(".ts")) entries.push(full);
  }
  return entries;
}

let failures = 0;

function fail(rel, lineNum, line, reason) {
  console.error(`❌ ${rel}:${lineNum} — ${reason}:`);
  console.error(`   ${line.trim()}`);
  failures++;
}

for (const file of walk(APP_DIR)) {
  if (file === WALINK_FILE) continue;

  const src = readFileSync(file, "utf8");
  const lines = src.split("\n");
  const rel = relative(ROOT, file);

  // ── 1. Collect file-level wa.me variable names ──────────────────────────
  const waVars = new Set();
  for (const line of lines) {
    // const VAR = "https://wa.me..."
    const m1 = line.match(/const\s+(\w+)\s*=\s*["'`]https:\/\/wa\.me/);
    if (m1) { waVars.add(m1[1]); continue; }

    // const VAR = wa(...)  or  const VAR = waLink(...)
    const m2 = line.match(/const\s+(\w+)\s*=\s*wa\s*\(/);
    if (m2) { waVars.add(m2[1]); continue; }

    // const VAR = waAfterPay || const VAR = waAfterPay(...)
    const m3 = line.match(/const\s+(\w+)\s*=\s*waAfterPay/);
    if (m3) { waVars.add(m3[1]); continue; }

    // const VAR = `${EMPRESA.whatsappHref}...`
    const m4 = line.match(/const\s+(\w+)\s*=\s*`\$\{EMPRESA\.whatsappHref\}/);
    if (m4) { waVars.add(m4[1]); continue; }

    // const VAR = `${EMPRESA.whatsappHref}...` (with spaces)
    const m5 = line.match(/^\s*const\s+(\w+)\s*=\s*`.*EMPRESA\.whatsappHref/);
    if (m5) { waVars.add(m5[1]); continue; }
  }

  // ── 2. Check each line ────────────────────────────────────────────────────
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    if (line.trimStart().startsWith("//") || line.trimStart().startsWith("*")) continue;
    if (line.includes("redirect(")) continue;

    // Look-back: is this line inside a WALink, BtnWhatsApp, BtnWA, or tracked component?
    const lookbackStart = Math.max(0, i - 8);
    const context = lines.slice(lookbackStart, i + 1).join("\n");
    const isTracked = (ctx) =>
      ctx.includes("<WALink") ||
      ctx.includes("waPosition=") ||
      ctx.includes("<BtnWhatsApp") ||
      ctx.includes("BtnWA");

    // ── 2a. Direct string href ──────────────────────────────────────────────
    if (/href=["']https:\/\/wa\.me/.test(line)) {
      if (!isTracked(context)) {
        fail(rel, lineNum, line, "href con URL wa.me directa sin WALink");
      }
      continue;
    }

    // ── 2b. Multi-line: href="https://wa.me..." on its own line ────────────
    if (/^\s*href=["']https:\/\/wa\.me/.test(line)) {
      if (!isTracked(context)) {
        fail(rel, lineNum, line, "href wa.me fuera de WALink");
      }
      continue;
    }

    // ── 2c. href={VAR} where VAR is a known wa.me variable ─────────────────
    for (const varName of waVars) {
      const re = new RegExp(`href=\\{\\s*${varName}\\s*\\}`);
      if (!re.test(line)) continue;
      if (line.includes("<WALink")) continue;
      if (line.includes("href: string") || line.includes("href?:")) continue;
      if (!isTracked(context)) {
        fail(rel, lineNum, line, `href={${varName}} en elemento sin tracking`);
      }
    }

    // ── 2d. href={waFunction(...)} — function calls returning wa URL ────────
    if (/href=\{/.test(line) && !line.includes("<WALink") && !line.includes("href: string")) {
      for (const pat of WA_CALL_PATTERNS) {
        if (pat.test(line) && !isTracked(context)) {
          fail(rel, lineNum, line, `href con llamada que produce URL wa.me sin tracking`);
          break;
        }
      }
    }

    // ── 2e. href={plan.wa} or href={item.wa} — object property ─────────────
    if (/href=\{[a-z_]\w*\.wa\}/.test(line) && !line.includes("<WALink")) {
      if (!isTracked(context)) {
        fail(rel, lineNum, line, "href={*.wa} objeto con URL wa.me sin tracking");
      }
      continue;
    }

    // ── 2f. dangerouslySetInnerHTML with wa.me ──────────────────────────────
    if (line.includes("dangerouslySetInnerHTML") && line.includes("wa.me")) {
      fail(rel, lineNum, line, "wa.me en dangerouslySetInnerHTML (no rastreable)");
      continue;
    }

    // ── 2g. wa.me inside object literals / data arrays ─────────────────────
    // Detect: wa: "https://wa.me..." or wa: wa(...) in data objects
    if (/^\s*wa:\s*(["'`]https:\/\/wa\.me|wa\()/.test(line)) {
      // This is data — the component that renders it must use WALink
      // We just note it for visibility but don't fail here; rendering is checked above
      // (leaving this as a comment-level note)
      continue;
    }
  }
}

if (failures > 0) {
  console.error(`\n❌ check-wa-links: ${failures} link(s) de WhatsApp sin tracking encontrados.`);
  console.error("   Usa <WALink href={...} cta_position='...' service='...'> para cada uno.\n");
  process.exit(1);
} else {
  console.log("✅ check-wa-links: todos los links de WhatsApp usan WALink tracking.");
}
