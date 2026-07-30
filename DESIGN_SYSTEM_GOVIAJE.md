# Design System — GoTravel

**Versión:** 1.0
**Fecha:** 2026-06-17
**Stack:** Next.js · Tailwind CSS v4 · Geist Font

Este documento es la referencia oficial de diseño. Cualquier página nueva o componente modificado debe seguir estas definiciones. Donde el código existente difiera, el código debe corregirse para coincidir con este sistema.

---

## 1. Paleta de colores

### Colores corporativos

| Token CSS | Hex | Uso |
|---|---|---|
| `--brand-navy` | `#0B1F3A` | Color principal. Fondos hero, headers internos, botones oscuros. |
| `--brand-navy-light` | `#132D52` | Gradientes, hover del navy. |
| `--brand-green` | `#00C896` | Color acento primario. CTAs, checks, highlights. |
| `--brand-green-dark` | `#00A87D` | Hover del verde, texto sobre fondo claro. |
| `--brand-gray` | `#F1F5F9` | Fondos de sección alternada, cards de datos. |
| `--brand-gray-border` | `#E2E8F0` | Bordes de cards, separadores. |
| `--background` | `#FFFFFF` | Fondo base del sitio. |
| `--foreground` | `#0F172A` | Texto principal (slate-900). |

### Colores funcionales

| Nombre | Hex / Tailwind | Uso |
|---|---|---|
| WhatsApp Green | `#25D366` | Botón WhatsApp exclusivamente. |
| WhatsApp Hover | `#1FB855` | Hover del botón WhatsApp. |
| Text body | `slate-600` (`#475569`) | Párrafos, descripciones. |
| Text muted | `slate-400` (`#94A3B8`) | Textos secundarios, notas al pie. |
| Text on dark | `slate-300` (`#CBD5E1`) | Párrafos sobre fondo navy. |
| Amber warning | `amber-50 / amber-200 / amber-800 / amber-900` | Alertas, advertencias (ej. "no garantizamos aprobación"). |

### Regla crítica
> **Prohibido usar tokens genéricos de Tailwind para los colores corporativos.**
> Usar `text-emerald-400` o `bg-emerald-500` en lugar de `#00C896` rompe la coherencia.
> Siempre usar los valores hex o las variables CSS del brand.

### Gradientes estándar

```
Hero navy:         from-[#0B1F3A] to-[#132D52]
Card dark:         bg-gradient-to-br from-[#0B1F3A] to-[#132D52]
Hero overlay:      linear-gradient(135deg, rgba(0,200,150,0.14), transparent 42%),
                   linear-gradient(315deg, rgba(255,255,255,0.08), transparent 36%)
Decorativo blur 1: bg-[#00C896]/10  blur-3xl  (esquina superior derecha)
Decorativo blur 2: bg-blue-500/10   blur-3xl  (esquina inferior izquierda)
```

---

## 2. Tipografía

### Familia de fuentes

```
Sans-serif: Geist Sans → var(--font-geist-sans)
Monospace:  Geist Mono → var(--font-geist-mono)  (solo para código/datos técnicos)
Fallback:   system-ui, sans-serif
```

### Escala tipográfica

| Elemento | Clase Tailwind | Peso | Uso |
|---|---|---|---|
| H1 hero | `text-4xl md:text-5xl lg:text-6xl` | `font-black` | Título principal de cada landing |
| H1 mobile | `text-[1.35rem] sm:text-4xl` | `font-black` | Versión mobile del H1 hero |
| H2 sección | `text-2xl sm:text-3xl` | `font-bold` | Títulos de sección en Home |
| H2 landing | `text-3xl sm:text-4xl` | `font-black` | Títulos de sección en páginas internas |
| H3 card | `text-lg sm:text-xl` | `font-semibold` | Títulos dentro de cards y cajas |
| Eyebrow | `text-xs` | `font-semibold uppercase tracking-wide` | Etiqueta sobre H2 |
| Body large | `text-lg leading-7` | `font-normal` | Párrafos de introducción |
| Body base | `text-base leading-relaxed` | `font-normal` | Párrafos estándar |
| Body small | `text-sm leading-relaxed` | `font-normal` | Textos secundarios, items de lista |
| Caption | `text-xs leading-5` | `font-normal` | Notas, disclaimers |

### Regla de peso
- `font-black` → solo para H1 y H2 en páginas internas (Visa Canadá, Visa USA, IA).
- `font-bold` → H2 en la Home.
- `font-semibold` → H3, etiquetas, botones, textos destacados.
- `font-medium` → navegación, labels de datos.
- `font-normal` → cuerpo de texto.

> No mezclar `font-black` y `font-semibold` para el mismo nivel jerárquico en distintas páginas.

---

## 3. Tamaños de títulos por contexto

### Landing pages (Visa USA, Visa Canadá, Visa México, IA)

```
H1 hero:
  mobile:  text-4xl leading-[1.05] tracking-tight
  tablet:  min-[375px]:text-5xl
  desktop: md:text-6xl
  peso:    font-black

H2 de sección:
  mobile:  text-3xl tracking-tight
  desktop: sm:text-4xl
  peso:    font-black

H3 de card / subsección:
  text-base leading-snug
  peso:    font-black (en cards oscuras) / font-semibold (en cards claras)
```

### Home page

```
H1 hero:
  mobile:  text-[1.35rem] leading-[1.14] tracking-tight
  tablet:  min-[375px]:text-[1.5rem]
  desktop: sm:text-4xl lg:text-5xl lg:leading-[1.15]
  peso:    font-bold

H2 de sección:
  mobile:  text-2xl tracking-tight
  desktop: sm:text-3xl
  peso:    font-bold

H3 de card:
  text-base leading-snug
  peso:    font-semibold
```

---

## 4. Botones

GoTravel tiene **4 variantes de botón**. Todas usan `rounded-full`, `min-h-12`, y `inline-flex items-center justify-center gap-2`.

### BtnPrimary — Verde corporativo

```tsx
// Uso: CTA principal de evaluación de perfil, acción primaria de conversión
className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full
           bg-[#00C896] px-6 py-3
           text-sm font-semibold text-[#0B1F3A]
           shadow-lg shadow-[#00C896]/20
           transition hover:bg-[#00A87D]
           sm:text-base"
```

### BtnWhatsApp — Verde WhatsApp

```tsx
// Uso: CTA de WhatsApp. Siempre target="_blank" rel="noopener noreferrer"
// Siempre incluye el ícono <IconWhatsApp> a la izquierda
className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full
           bg-[#25D366] px-6 py-3
           text-sm font-semibold text-white
           shadow-sm
           transition hover:bg-[#1FB855]
           sm:text-base"
```

### BtnOutline — Contorno sobre fondo claro

```tsx
// Uso: Acción secundaria sobre fondo blanco o gris claro
className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full
           border border-[#0B1F3A]/20 bg-white px-6 py-3
           text-sm font-semibold text-[#0B1F3A]
           transition hover:border-[#0B1F3A]/40 hover:shadow-sm
           sm:text-base"
```

### BtnGhost — Fantasma sobre fondo oscuro (hero)

```tsx
// Uso: Botón secundario dentro del hero (fondo navy)
className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full
           border border-white/20 bg-white/5 px-6 py-3
           text-sm font-semibold text-white backdrop-blur
           transition hover:bg-white/10
           sm:text-base"
```

### BtnDark — Navy sobre fondo claro

```tsx
// Uso: Botón primario cuando el acento verde ya está ocupado en la misma sección
className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full
           bg-[#0B1F3A] px-6 py-3
           text-sm font-semibold text-white
           transition hover:bg-[#132D52]
           sm:text-base"
```

### Reglas de botones

1. **Ancho:** `w-full sm:w-auto` cuando hay solo 1 botón. En pares: `w-full sm:w-auto` para ambos.
2. **Orden en pares:** Siempre `BtnPrimary` primero, `BtnWhatsApp` segundo.
3. **Forma:** Siempre `rounded-full`. Nunca `rounded-2xl` ni `rounded-3xl` para botones.
4. **Tamaño mínimo:** `min-h-12` en todos los botones (accesibilidad táctil).
5. **Icono en BtnWhatsApp:** El SVG de WhatsApp es obligatorio, a la izquierda del texto.

---

## 5. Formularios

GoTravel aún no tiene formularios activos. Cuando se implementen, deben seguir esta guía.

### Input de texto

```tsx
className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3
           text-sm text-slate-900 placeholder:text-slate-400
           focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20
           transition"
```

### Label

```tsx
className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
```

### Select

```tsx
className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3
           text-sm text-slate-900
           focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20
           appearance-none transition"
```

### Textarea

```tsx
className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3
           text-sm text-slate-900 placeholder:text-slate-400 resize-none
           focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20
           transition"
```

### Campo de error

```tsx
// Mensaje de error bajo el input
className="mt-1.5 text-xs font-medium text-red-600"
// Border del input en error
className="border-red-300 focus:border-red-500 focus:ring-red-200"
```

### Campo de éxito

```tsx
className="border-[#00C896] focus:ring-[#00C896]/20"
```

### Contenedor de formulario

```tsx
className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
```

### Disclaimer / nota legal bajo formulario

```tsx
className="mt-3 text-center text-xs text-slate-500"
// Ejemplo: "Sin compromiso · Respuesta en menos de 24 horas"
```

---

## 6. Cards

### Card estándar (servicio / beneficio)

```tsx
className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm
           transition hover:border-[#00C896]/30 hover:shadow-md"
```

### Card oscura (sobre fondo navy)

```tsx
className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
```

### Card de datos / info box

```tsx
className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-5"
```

### Card destacada (feature card con gradiente)

```tsx
className="rounded-2xl border border-[#00C896]/40 bg-gradient-to-br
           from-[#0B1F3A] to-[#132D52] p-6 sm:p-8"
```

### Plan card (pricing)

```tsx
// Normal
className="relative rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm"

// Destacado ("Más solicitado")
className="relative rounded-3xl border-2 border-[#00C896] bg-white p-6 shadow-xl"
```

### Card de advertencia (amber)

```tsx
className="rounded-2xl border border-amber-200 bg-amber-50 p-6"
// Título: text-amber-900 font-bold
// Cuerpo: text-amber-800 text-sm leading-relaxed
```

### Card de proceso (paso numerado)

```tsx
// Contenedor
className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
// Número
className="flex h-10 w-10 items-center justify-center rounded-xl
           bg-[#00C896]/10 text-sm font-bold text-[#00A87D]"
// Variante oscura
className="flex h-10 w-10 items-center justify-center rounded-xl
           bg-[#0B1F3A] text-sm font-bold text-[#00C896]"
```

---

## 7. Badges y etiquetas

### Eyebrow / SectionLabel (etiqueta sobre títulos)

```tsx
// Sobre fondo claro
className="inline-flex items-center gap-2 rounded-full
           bg-[#00C896]/10 px-3 py-1.5
           text-xs font-semibold uppercase tracking-wide text-[#00A87D]"

// Sobre fondo oscuro (navy)
className="inline-flex items-center gap-2 rounded-full
           bg-[#00C896]/15 px-3 py-1.5
           text-xs font-semibold uppercase tracking-wide text-[#00C896]"
```

### Badge de plan destacado

```tsx
// Posición: absolute -top-4 left-6
className="absolute -top-4 left-6 rounded-full bg-[#00C896] px-4 py-2
           text-sm font-bold text-[#0B1F3A]"
```

### Tag de servicio (pill de categoría)

```tsx
className="inline-flex rounded-full bg-[#00C896] px-3 py-1
           text-xs font-semibold text-[#0B1F3A]"
```

### Tag de dato / feature value (badge verde claro)

```tsx
className="rounded-full bg-[#00C896]/10 px-2.5 py-0.5
           text-xs font-semibold text-[#00A87D]"
```

### Badge de live / activo

```tsx
// Punto animado
<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00C896]" />
// Texto
className="text-xs font-medium text-[#00C896]"
```

### Tag de país / blog

```tsx
className="text-xs font-semibold uppercase tracking-wide text-[#00A87D]"
```

---

## 8. CTAs

### Jerarquía de CTAs en GoTravel

GoTravel tiene **dos CTAs primarios** que deben estar presentes en todas las páginas:

1. **Evaluación de perfil** → `BtnPrimary` → enlace a `/analisis-perfil-ia`
2. **WhatsApp** → `BtnWhatsApp` → enlace a `https://wa.me/51928672932`

> El orden es siempre: Evaluación primero, WhatsApp segundo. Nunca invertir el orden.

### Variantes contextuales de texto para el CTA de evaluación

| Contexto | Texto del botón |
|---|---|
| Hero general | "Evalúa tu caso ahora" |
| Hero Visa USA | "Evaluar mi perfil con IA" |
| Dentro del sitio | "Conocer la evaluación con IA" |
| Sección FAQ | "Evaluar mi caso" |
| CTA final | "Conocer la evaluación con IA" |

### Variantes de texto para el CTA de WhatsApp

| Contexto | Texto del botón |
|---|---|
| Header / general | "WhatsApp" |
| Hero | "Hablar por WhatsApp" |
| Sección de servicio | "Asesoría por WhatsApp" |
| Visa específica | "Consultar visa [país]" |
| FAQ | "Hablar por WhatsApp" |

### Textos de confianza bajo CTAs

Siempre incluir una línea de microcopy después del par de CTAs:

```
Sin compromiso · Respuesta en menos de 24 horas
```

En secciones de cierre:
```
Respuesta rápida · Sin compromiso · No garantizamos aprobación
```

### Sticky bar mobile (obligatorio en todas las páginas)

```tsx
<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E2E8F0]
               bg-white/95 p-3 backdrop-blur-lg sm:hidden">
  <div className="flex gap-2">
    <a href="/analisis-perfil-ia"
       className="flex min-h-12 flex-1 items-center justify-center gap-1.5
                  rounded-full bg-[#00C896] px-3 py-3
                  text-xs font-semibold text-[#0B1F3A] min-[375px]:text-sm">
      Evaluar caso
      <IconArrow className="h-3.5 w-3.5 shrink-0" />
    </a>
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
       className="flex min-h-12 flex-1 items-center justify-center gap-1.5
                  rounded-full bg-[#25D366] px-3 py-3
                  text-sm font-semibold text-white">
      <IconWhatsApp className="h-4 w-4" />
      WhatsApp
    </a>
  </div>
</div>
```

---

## 9. Estructura de hero

### Hero estándar (todas las landing pages)

```
┌─────────────────────────────────────────────────────┐
│  HEADER (logo + nav o logo + WA)                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  bg-[#0B1F3A]  ← ÚNICO color permitido             │
│  + blur decorativos (verde top-right, azul bot-left)│
│                                                     │
│  [Eyebrow badge]                                    │
│  H1 — título principal                              │
│  Párrafo de apoyo (text-slate-300)                  │
│                                                     │
│  [BtnPrimary]  [BtnWhatsApp o BtnGhost]             │
│                                                     │
│  3 trust badges (rounded-2xl border border-white/10)│
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Trust badges estándar

Los 3 ítems de confianza del hero deben ser:

```
+10 años · [diferencial de la página] · 100% online
```

Ejemplos por página:
- Home: "Más de 10 años de experiencia" · "Revisión documental especializada" · "Atención 100% online"
- Visa USA: "+10 años" · "Análisis del Perfil con IA" · "100% online"
- Visa Canadá: "+10 años" · "Sin entrevista" · "100% online"
- Visa México: "+10 años" · "Trámite remoto" · "100% online"

#### Clases del contenedor hero

```tsx
<section className="relative overflow-hidden bg-[#0B1F3A]
                    px-4 pb-14 pt-5 text-white
                    sm:px-6 sm:pb-20 sm:pt-8
                    lg:px-8">
  {/* Overlay decorativo */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,200,150,0.14),
                  transparent_42%),linear-gradient(315deg,rgba(255,255,255,0.08),
                  transparent_36%)]" />

  <div className="relative mx-auto max-w-6xl">
    {/* Header interno */}
    {/* Contenido */}
  </div>
</section>
```

### Variante hero con columna derecha (card de diferenciador)

Usado en Visa Canadá y Evaluación IA:

```
┌────────────────────────────┬──────────────────────┐
│ Col izquierda (1.1fr)      │ Col derecha (0.9fr)  │
│                            │                      │
│ Eyebrow                    │ ┌──────────────────┐ │
│ H1                         │ │ Card blanca       │ │
│ Párrafo                    │ │ sobre bg navy     │ │
│ [CTAs]                     │ │ con datos clave   │ │
│ Trust badges               │ └──────────────────┘ │
└────────────────────────────┴──────────────────────┘
```

```tsx
<div className="grid gap-10 pt-14 sm:pt-20
               lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
```

La card de la columna derecha:

```tsx
<div className="rounded-[2rem] border border-white/10 bg-white/[0.07]
               p-5 shadow-2xl backdrop-blur sm:p-7">
  <div className="rounded-[1.5rem] bg-white p-5 text-[#0B1F3A] sm:p-7">
    {/* Contenido de la card */}
  </div>
</div>
```

---

## 10. Header

### Header de la Home (sticky, navegación completa)

```tsx
<header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80
                  bg-white/90 backdrop-blur-lg">
  <div className="mx-auto flex max-w-6xl items-center justify-between
                 px-4 py-3 sm:px-6 lg:px-8">

    {/* Logo */}
    <a href="/" className="text-xl font-bold tracking-tight text-[#0B1F3A]">
      Go<span className="text-[#00C896]">Travel</span>
    </a>

    {/* Nav desktop */}
    <nav className="hidden items-center gap-6 lg:flex">
      {/* Links */}
    </nav>

    {/* Acciones */}
    <div className="flex items-center gap-2">
      <BtnWhatsApp className="!hidden sm:!inline-flex !px-4 !py-2 !text-sm" />
      {/* Menú hamburguesa mobile */}
    </div>
  </div>
</header>
```

### Header simplificado (páginas internas sin nav completa)

Actualmente en uso en Visa USA, Visa Canadá, IA. Contiene solo logo + botón WhatsApp.

> **Pendiente de migración:** El ideal es que todas las páginas usen el Header completo como componente compartido. Mientras tanto, este es el estándar mínimo aceptable para páginas internas.

```tsx
<header className="flex items-center justify-between">
  <Link href="/" className="text-xl font-bold tracking-tight text-white">
    Go<span className="text-[#00C896]">Travel</span>
  </Link>
  <a href={WA_URL} target="_blank" rel="noopener noreferrer"
     className="hidden items-center gap-2 rounded-full bg-[#25D366]
                px-4 py-2 text-sm font-semibold text-white
                transition hover:bg-[#1FB855] sm:inline-flex">
    <IconWhatsApp className="h-4 w-4 shrink-0" />
    WhatsApp
  </a>
</header>
```

### Logo

```tsx
Go<span className="text-[#00C896]">Travel</span>
```

- Familia: Geist Sans
- Peso: `font-bold`
- Tamaño: `text-xl`
- Color base: `text-[#0B1F3A]` (sobre fondo claro) / `text-white` (sobre fondo oscuro)
- Color acento "Travel": siempre `text-[#00C896]`

### Links de navegación

```
Visa USA → /visa-usa
Visa Canadá → /visa-canada
Visa México → /visa-mexico   (pendiente de crear la landing)
Evaluar perfil → /analisis-perfil-ia
Blog → /blog
FAQ → /#faq
```

---

## 11. Footer

El footer aparece **solo en la Home** actualmente. Debe replicarse como componente compartido en todas las páginas.

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│  bg-[#F1F5F9]  border-t border-[#E2E8F0]                   │
│  px-4 py-12 sm:px-6 lg:px-8                                 │
├──────────────────────┬──────────────┬──────────────────────-┤
│ Columna 1 + 2 (brand)│ Servicios    │ Empresa               │
│ Logo                 │ Visa USA     │ Blog                  │
│ Descripción          │ Visa Canadá  │ FAQ                   │
│ Redes sociales       │ Visa México  │ Contacto              │
│                      │ Adelanto     │ Evaluación con IA     │
└──────────────────────┴──────────────┴───────────────────────┘
│ Línea copyright                                             │
│ © [año] GoTravel. Todos los derechos reservados.            │
│ No somos agencia de viajes.                                 │
└─────────────────────────────────────────────────────────────┘
```

### Clases de estructura

```tsx
<footer className="border-t border-[#E2E8F0] bg-[#F1F5F9]
                  px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {/* Col 1-2: Brand */}
      <div className="sm:col-span-2"> ... </div>
      {/* Col 3: Servicios */}
      <div> ... </div>
      {/* Col 4: Empresa */}
      <div> ... </div>
    </div>
    {/* Copyright */}
    <div className="mt-10 border-t border-[#E2E8F0] pt-6
                   text-center text-xs text-slate-500 sm:text-left">
      © {new Date().getFullYear()} GoTravel. Todos los derechos reservados.
      No somos agencia de viajes.
    </div>
  </div>
</footer>
```

### Ícono de red social (footer)

```tsx
<a className="flex h-10 w-10 items-center justify-center rounded-xl
             border border-[#E2E8F0] bg-white text-slate-600
             transition hover:border-[#00C896]/30 hover:text-[#0B1F3A]">
```

### Redes sociales activas

- Facebook: `https://www.facebook.com/profile.php?id=61580668796322`
- Instagram: `https://www.instagram.com/gotravel2.0/`

---

## 12. Iconografía

GoTravel usa exclusivamente **íconos SVG inline** con las siguientes firmas. Deben vivir en `/components/icons/` y ser importados donde se necesiten. No duplicar.

### IconWhatsApp

```tsx
// Tamaño por defecto: h-5 w-5
// Color: currentColor (heredado del padre)
// Uso: En BtnWhatsApp, header, footer
function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
    </svg>
  );
}
```

### IconArrow

```tsx
// Tamaño por defecto: h-4 w-4
// Uso: En BtnPrimary, links de "ver más", tarjetas
// Animación hover disponible: transition group-hover:translate-x-0.5
function IconArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24"
         strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
```

### IconCheck

```tsx
// Tamaño por defecto: h-5 w-5
// Uso: En FeatureList, trust badges, checkmarks de plan
// Color típico: text-[#00C896] o text-[#00A87D]
function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24"
         strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
```

### IconChevronDown

```tsx
// Tamaño: h-5 w-5
// Uso: En accordion/details del FAQ
// Animación: transition group-open:rotate-180
function IconChevronDown({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24"
         strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
```

### Reglas de íconos

1. Todos los íconos SVG llevan `aria-hidden` (son decorativos).
2. Si el ícono es el único contenido de un elemento interactivo, el elemento padre lleva `aria-label`.
3. El tamaño se controla con `className` prop, nunca con atributos `width`/`height` directos.
4. No usar librerías de íconos externas (Heroicons, Lucide, etc.) para mantener el bundle mínimo.

---

## 13. Secciones reutilizables

### FAQ Accordion

Patrón estándar con `<details>` / `<summary>`:

```tsx
<details className="group rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
  <summary className="flex cursor-pointer list-none items-center
                      justify-between gap-4 px-5 py-4 text-left
                      text-sm font-semibold text-[#0B1F3A]
                      sm:px-6 sm:py-5 sm:text-base
                      [&::-webkit-details-marker]:hidden">
    {pregunta}
    <IconChevronDown className="h-5 w-5 shrink-0 text-slate-400
                                transition group-open:rotate-180" />
  </summary>
  <div className="border-t border-[#E2E8F0] px-5 pb-4 pt-2 sm:px-6 sm:pb-5">
    <p className="text-sm leading-relaxed text-slate-600">{respuesta}</p>
  </div>
</details>
```

### FeatureList (lista de includes con checkmark)

```tsx
<ul className="mt-6 space-y-3">
  {items.map((item) => (
    <li key={item} className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                       rounded-full bg-[#00C896]/15 text-[#00A87D]">
        <IconCheck className="h-3 w-3" />
      </span>
      <span className="text-sm leading-relaxed text-slate-600 sm:text-base">
        {item}
      </span>
    </li>
  ))}
</ul>
```

### Sección "Proceso en pasos" (sobre fondo navy)

```tsx
<section className="bg-[#0B1F3A] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
  {/* Eyebrow + H2 + descripción */}
  {/* Grid de pasos */}
  {/* CTA box interior */}
</section>
```

### CTA box final (dentro de sección oscura)

```tsx
<div className="rounded-2xl border border-white/10 bg-white/5
               p-6 text-center sm:p-10">
  <h3 className="text-xl font-bold text-white sm:text-2xl">
    ¿Listo para iniciar tu proceso?
  </h3>
  <p className="mx-auto mt-3 max-w-xl text-base text-slate-300"> ... </p>
  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <BtnPrimary href="/analisis-perfil-ia">Evalúa tu caso ahora <IconArrow /></BtnPrimary>
    <BtnWhatsApp href={WA_URL}>Hablar por WhatsApp</BtnWhatsApp>
  </div>
</div>
```

### Sección CTA final de página (fondo blanco/gris)

```tsx
<section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
  <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl
                 bg-gradient-to-br from-[#0B1F3A] to-[#132D52]
                 px-6 py-10 text-center shadow-xl sm:px-12 sm:py-16">
    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl"> ... </h2>
    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300"> ... </p>
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <BtnPrimary href="/analisis-perfil-ia"> ... </BtnPrimary>
      <BtnWhatsApp href={WA_URL}> ... </BtnWhatsApp>
    </div>
    <p className="mt-5 text-xs text-slate-400">
      Respuesta rápida · Sin compromiso · No garantizamos aprobación
    </p>
  </div>
</section>
```

---

## 14. Componentes que deben ser compartidos

Esta es la lista de componentes que actualmente están duplicados y deben extraerse a `/components/` para ser importados en todas las páginas.

### Componentes de layout (prioridad inmediata)

| Archivo destino | Qué contiene | Páginas que lo usan |
|---|---|---|
| `components/Header.tsx` | Header sticky completo con nav + menú mobile | Todas |
| `components/Footer.tsx` | Footer completo con 4 columnas | Todas |
| `components/StickyMobileBar.tsx` | Barra fija inferior mobile con 2 CTAs | Todas |

### Componentes de UI (prioridad alta)

| Archivo destino | Qué contiene | Actualmente duplicado como |
|---|---|---|
| `components/ui/BtnPrimary.tsx` | Botón verde principal | `BtnPrimary` (Home, Visa Canadá, IA) |
| `components/ui/BtnWhatsApp.tsx` | Botón WhatsApp | `BtnWhatsApp`, `BtnWA`, `WhatsAppButton`, inline |
| `components/ui/BtnOutline.tsx` | Botón contorno | `BtnOutline` (Home) |
| `components/ui/BtnGhost.tsx` | Botón fantasma (sobre hero) | inline en múltiples páginas |
| `components/ui/Eyebrow.tsx` | Etiqueta/label de sección | `SectionLabel`, `Eyebrow`, `SectionEyebrow` |
| `components/ui/SectionTitle.tsx` | H2 de sección | `SectionTitle` (Home, no compartido) |
| `components/ui/FeatureList.tsx` | Lista con checkmarks | `FeatureList` (Home, no compartido) |
| `components/ui/PlanCard.tsx` | Card de plan de precios | `Plan` (Visa USA), `PlanCard` (Visa Canadá) |
| `components/ui/FaqItem.tsx` | Item de FAQ con details/summary | Inline en Home, Visa Canadá, Visa USA |

### Íconos (prioridad alta)

| Archivo destino | Actualmente duplicado como |
|---|---|
| `components/icons/IconWhatsApp.tsx` | `IconWhatsApp`, `WAIcon`, `WhatsAppIcon` (3 copias) |
| `components/icons/IconArrow.tsx` | `IconArrow`, `ArrowIcon` (2 copias) |
| `components/icons/IconCheck.tsx` | `IconCheck`, `CheckIcon` (3 copias) |
| `components/icons/IconChevronDown.tsx` | SVG inline en FAQ (múltiples) |

### Constantes globales

| Archivo destino | Qué contiene |
|---|---|
| `lib/constants.ts` | `WHATSAPP_NUMBER`, todas las `WA_URL_*`, `IA_URL` |

### Estructura de carpetas propuesta

```
app/
  layout.tsx
  page.tsx              ← Home
  visa-usa/page.tsx
  visa-canada/page.tsx
  visa-mexico/page.tsx  ← pendiente de crear
  analisis-perfil-ia/page.tsx
  sitemap.ts            ← pendiente de crear
  not-found.tsx         ← pendiente de crear

components/
  Header.tsx
  Footer.tsx
  StickyMobileBar.tsx
  ui/
    BtnPrimary.tsx
    BtnWhatsApp.tsx
    BtnOutline.tsx
    BtnGhost.tsx
    BtnDark.tsx
    Eyebrow.tsx
    SectionTitle.tsx
    FeatureList.tsx
    PlanCard.tsx
    FaqItem.tsx
  icons/
    IconWhatsApp.tsx
    IconArrow.tsx
    IconCheck.tsx
    IconChevronDown.tsx

lib/
  constants.ts          ← número WA, URLs, nav links
```

---

## 15. Espaciado y layout

### Contenedor máximo

```tsx
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
```

### Secciones

```tsx
// Sección estándar (fondo blanco o gris)
className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8"

// Sección reducida (separadores, navegación rápida)
className="px-4 py-7 sm:px-6 sm:py-10 lg:px-8"
```

### Grids estándar

```tsx
// 2 columnas con ajuste desktop
className="grid gap-10 lg:grid-cols-2"

// 2 columnas asimétricas (izquierda mayor)
className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"

// 3 columnas de cards
className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"

// 4 columnas de pasos
className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"

// Navegación rápida (servicios)
className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
```

---

## 16. Disclaimer legal (obligatorio)

Toda sección que mencione evaluación de IA, probabilidades o resultados debe incluir este disclaimer:

```
La aprobación depende exclusivamente del consulado. No garantizamos resultados.
```

Variante breve (bajo CTAs):
```
Sin compromiso · No garantizamos aprobación
```

Variante para sección de Evaluación IA:
```tsx
<div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
  <p className="text-sm font-black uppercase tracking-wide">Importante</p>
  <p className="mt-3 text-xl font-black leading-snug sm:text-2xl">
    La evaluación no garantiza aprobación. La decisión final depende
    exclusivamente del oficial consular.
  </p>
</div>
```
