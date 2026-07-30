# Auditoría GoTravel — Estado actual y recomendaciones

**Fecha:** 2026-06-17
**Objetivo:** Convertir GoTravel en una marca consistente, profesional y preparada para escalar la generación de leads.

---

## 1. Inventario de páginas

| Ruta | Archivo | Metadata SEO | Estado |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ Layout global | Completa |
| `/visa-usa` | `app/visa-usa/page.tsx` | ❌ Sin metadata propia | Incompleta |
| `/visa-canada` | `app/visa-canada/page.tsx` | ✅ Propia | Completa |
| `/analisis-perfil-ia` | `app/analisis-perfil-ia/page.tsx` | ✅ Propia | Completa |
| `/visa-mexico` | ❌ No existe | — | Faltante |
| `/blog/*` | ❌ No existe | — | Faltante |
| `/404` | ❌ No existe | — | Faltante |
| `/terminos` | ❌ No existe | — | Faltante |
| `/privacidad` | ❌ No existe | — | Faltante |

**Total de páginas activas:** 4 de las 9 que el negocio requiere mínimamente.

---

## 2. Inventario de componentes

### Componentes declarados por página (sin carpeta `/components` compartida)

#### Home (`app/page.tsx`)
| Nombre | Tipo | Reutilizable |
|---|---|---|
| `BtnPrimary` | Botón verde | Duplicado en otras páginas |
| `BtnWhatsApp` | Botón WhatsApp | Duplicado con diferente nombre |
| `BtnOutline` | Botón contorno | Solo en Home |
| `SectionLabel` | Eyebrow/etiqueta | Duplicado con diferente nombre |
| `SectionTitle` | Título de sección | No compartido |
| `FeatureList` | Lista de features | No compartido |
| `IconWhatsApp` | SVG ícono | Duplicado 3 veces (diferente nombre) |
| `IconArrow` | SVG ícono | Duplicado 2 veces |
| `IconCheck` | SVG ícono | Duplicado 3 veces |

#### Visa Canadá (`app/visa-canada/page.tsx`)
| Nombre | Equivalente en Home | Diferencia |
|---|---|---|
| `BtnPrimary` | `BtnPrimary` | Mismo código, diferente archivo |
| `BtnWA` | `BtnWhatsApp` | Idéntico, distinto nombre |
| `Eyebrow` | `SectionLabel` | Misma función, distinto nombre |
| `PlanCard` | — | Único de esta página |
| `CheckCell` / `DashCell` | — | Único de esta página |
| `WAIcon` | `IconWhatsApp` | SVG idéntico, nombre diferente |
| `ArrowIcon` | `IconArrow` | SVG idéntico, nombre diferente |
| `CheckIcon` | `IconCheck` | SVG idéntico, nombre diferente |

#### Visa USA (`app/visa-usa/page.tsx`)
| Nombre | Equivalente | Diferencia notable |
|---|---|---|
| `ServiceCard` | — | Único |
| `Plan` | `PlanCard` (Canadá) | Mismo concepto, diseño diferente |
| `InfoBox` | — | Único |
| Botones inline | `BtnPrimary`/`BtnWA` | Sin componentes, HTML directo |

#### Evaluación IA (`app/analisis-perfil-ia/page.tsx`)
| Nombre | Equivalente | Diferencia |
|---|---|---|
| `WhatsAppButton` | `BtnWA`, `BtnWhatsApp` | Idéntico, cuarto nombre |
| `SectionEyebrow` | `Eyebrow`, `SectionLabel` | Misma función, tercer nombre |
| `CheckIcon` / `WhatsAppIcon` | Duplicados globales | Idéntico SVG, cuarta copia |

**Total de componentes duplicados identificados:** 9 componentes con 3–4 implementaciones idénticas cada uno.

---

## 3. Problemas visuales detectados

### 3.1 Inconsistencia de color en Visa USA
- **Problema:** El hero de Visa USA usa `bg-[#071B33]` en lugar de `bg-[#0B1F3A]` (el azul marino corporativo).
- **Impacto:** Diferencia de tono visible al navegar entre Home y Visa USA. Rompe continuidad de marca.
- **Archivo:** `app/visa-usa/page.tsx:9`

### 3.2 Inconsistencia de forma en botones
- **Problema:** Home y Visa Canadá usan botones con `rounded-full` (píldora). Visa USA usa `rounded-2xl` (cuadrado redondeado) y `rounded-3xl` en las tarjetas.
- **Impacto:** El sitio luce como dos marcas distintas dependiendo de la página que visites.
- **Archivo:** `app/visa-usa/page.tsx` (múltiples líneas)

### 3.3 Tokens Tailwind vs. valores hex
- **Problema:** Visa USA usa `text-emerald-400`, `text-emerald-600`, `text-emerald-500` (tokens genéricos de Tailwind) mientras que el resto del sitio usa los valores hex del brand (`#00C896`, `#00A87D`).
- **Impacto:** Si en algún momento se ajusta el color corporativo o se extiende el tema, Visa USA quedará desconectada.
- **Archivos:** `app/visa-usa/page.tsx:33, 107, 308, 357`

### 3.4 Tipografía de peso inconsistente
- **Problema:** Home usa `font-semibold` en botones y títulos. Visa Canadá y Evaluación IA usan `font-black`. Visa USA usa `font-bold`.
- **Impacto:** Apariencia de "peso visual" diferente entre páginas del mismo sitio.

### 3.5 Header sin navegación en páginas internas
- **Problema:** Home tiene header sticky con menú completo. Visa USA, Visa Canadá y Evaluación IA tienen un header mínimo (solo logo + WhatsApp, sin menú de navegación).
- **Impacto:** El usuario que llega por SEO a `/visa-usa` no puede navegar fácilmente a `/visa-canada` u otros servicios. Pérdida de cross-selling.

### 3.6 Footer ausente en páginas internas
- **Problema:** Solo la Home tiene footer completo. Las páginas de Visa USA, Visa Canadá y Evaluación IA no tienen footer.
- **Impacto:** Sin pie de página, no hay acceso a redes sociales, políticas de privacidad ni navegación secundaria desde esas páginas.

### 3.7 Blog sin imágenes reales
- **Problema:** Los artículos del blog usan un `div` con gradiente como sustituto de imagen (`h-36 bg-gradient-to-br from-[#0B1F3A] to-[#132D52]`).
- **Impacto:** Apariencia placeholder. Baja credibilidad editorial.

### 3.8 Sticky bar inconsistente
- **Problema:** Home tiene sticky bar con dos CTAs (IA + WhatsApp). Visa Canadá tiene sticky bar con dos CTAs. Visa USA no tiene sticky bar mobile. Evaluación IA no tiene sticky bar.
- **Impacto:** Experiencia mobile fragmentada.

---

## 4. Problemas SEO detectados

### 4.1 Visa USA sin metadata propia (CRÍTICO)
- **Problema:** `app/visa-usa/page.tsx` no exporta `metadata`. La página hereda el título genérico del layout: *"GoTravel | Asesoría Profesional para Visas de Turismo"*.
- **Impacto:** Google indexa la página con título y descripción genérica. Pierde posicionamiento para "visa americana asesoría", "visa b1/b2", "visa USA Perú", etc.
- **Fix:** Exportar `metadata` con título y descripción específicos para USA.

### 4.2 Sin Open Graph ni Twitter Cards
- **Problema:** Ninguna página tiene tags `og:image`, `og:title`, `og:description`, ni `twitter:card`.
- **Impacto:** Los links compartidos en WhatsApp, Facebook e Instagram aparecen sin preview visual. Reduce CTR y credibilidad en redes.

### 4.3 Sin structured data (Schema.org)
- **Problema:** No hay markup JSON-LD de tipo `LocalBusiness`, `Service`, ni `FAQPage`.
- **Impacto:** Google no puede generar rich results (fragmentos enriquecidos con FAQ, precios, etc.) en los resultados de búsqueda. Menor visibilidad en SERP.

### 4.4 Visa México sin landing page
- **Problema:** No existe `/visa-mexico`. El contenido de Visa México es solo una sección en la Home anclada a `#visa-mexico`.
- **Impacto:** Imposible posicionar para keywords como "visa mexico asesoría", "visa turismo mexico perú/colombia". Cero tráfico orgánico directo para ese servicio.

### 4.5 Blog sin páginas individuales
- **Problema:** Los 3 artículos del blog son placeholders estáticos sin URL, sin contenido real y sin enlace.
- **Impacto:** El blog no genera tráfico SEO. Es una de las fuentes de adquisición de mayor ROI a mediano plazo para este tipo de negocio.

### 4.6 Sin sitemap.xml ni robots.txt
- **Problema:** No existe `app/sitemap.ts` ni `public/robots.txt`.
- **Impacto:** Googlebot debe descubrir las páginas por crawl. Más lento. Mayor riesgo de páginas no indexadas.

### 4.7 Titles SEO mejorables
- **Home:** "GoTravel | Asesoría Profesional para Visas de Turismo" — correcto pero genérico.
- **Visa Canadá:** "Visa de Turismo a Canadá — Asesoría Profesional | GoTravel" — bueno.
- **Visa USA:** hereda título del layout — crítico.
- **Evaluación IA:** "Evaluación de Probabilidad con IA | GoTravel" — aceptable, pero podría mejorar incluyendo "visa" como keyword.

### 4.8 H1 de Visa USA demasiado largo
- **Problema:** H1 es: "Prepara tu visa americana con asesoría profesional e IA" — 54 caracteres, sin mention explícita de B1/B2 ni Perú/LATAM.
- **Impacto:** Keyword targeting subóptimo para búsquedas como "visa b1 b2 asesoría" o "visa americana perú".

---

## 5. Problemas de conversión detectados

### 5.1 URL de Evaluación IA en Visa USA apunta a servicio externo (CRÍTICO)
- **Problema:** En `app/visa-usa/page.tsx:4`:
  ```js
  const IA_URL = "https://app." + "isa" + "visa.com/consulta/gotravel";
  ```
  Esto construye `https://app.isavisa.com/consulta/gotravel` — un dominio externo.
- **Impacto:** Todos los clics en "Evaluar mi perfil con IA" desde Visa USA sacan al usuario fuera de GoTravel. Se pierde el lead, el dato de contacto y el control del proceso. Las otras páginas apuntan a `/analisis-perfil-ia` (interno).
- **Riesgo adicional:** Si `isavisa.com` cambia, desaparece o tiene problemas técnicos, el CTA principal de Visa USA deja de funcionar sin que GoTravel lo note.

### 5.2 Sin formulario de captura de lead
- **Problema:** Todo el flujo de conversión depende de que el usuario haga clic en WhatsApp. No hay ningún formulario (nombre, email, teléfono) en todo el sitio.
- **Impacto:** Si WhatsApp falla, el usuario no tiene canal alternativo. No se capturan emails para remarketing. El costo de adquisición no se puede medir con precisión.

### 5.3 Sin testimonios ni prueba social numérica
- **Problema:** El sitio afirma "más de 10 años de experiencia" pero no muestra ningún testimonio, caso de éxito, número de visas gestionadas ni reseñas.
- **Impacto:** Para un servicio de alta confianza como gestión de visas, la prueba social es fundamental. Sin ella, el visitante tiene que confiar solo en el texto.

### 5.4 Precios visibles solo en Visa USA, no en otras páginas
- **Problema:** Visa USA muestra precios (S/250, S/350, S/450). Visa Canadá también muestra precios. Home no muestra precios. Evaluación IA no menciona precios.
- **Impacto menor:** Inconsistencia en transparencia. Usuario que llega a la Home no sabe si el servicio está en su rango de precio, puede abandonar sin contactar.

### 5.5 Evaluación IA sin flujo real visible
- **Problema:** La página `/analisis-perfil-ia` describe la evaluación pero el único CTA es WhatsApp. No hay un botón que lleve a un formulario o herramienta real de evaluación.
- **Impacto:** El visitante llega buscando una herramienta o flujo de IA y encuentra solo texto + botón de WhatsApp. Expectativa vs. realidad desalineadas. Riesgo de alta tasa de rebote.

### 5.6 Visa México sin landing page propia
- **Problema:** Ya señalado en SEO. Desde la perspectiva de conversión, tampoco existe un CTA específico contextualizado para México más allá de un botón de WhatsApp genérico.
- **Impacto:** Los usuarios interesados en visa México no tienen una página que responda sus preguntas específicas ni que construya confianza antes del contacto.

### 5.7 Navegación mobile sin acceso a todos los servicios en páginas internas
- **Problema:** En Visa USA y Visa Canadá el header mobile solo tiene logo. No hay menú hamburguesa.
- **Impacto:** Un usuario en móvil que llega a `/visa-canada` y quiere ver planes de Visa USA no tiene cómo navegar sin ir atrás en el navegador.

---

## 6. Inconsistencias entre Home, Visa Canadá, Visa USA y Visa México

| Elemento | Home | Visa Canadá | Visa USA | Eval. IA |
|---|---|---|---|---|
| Fondo hero | `#0B1F3A` | `#0B1F3A` | `#071B33` ⚠️ | `#0B1F3A` |
| Color acento | `#00C896` hex | `#00C896` hex | `emerald-400` Tailwind ⚠️ | `#00C896` hex |
| Forma botones | `rounded-full` | `rounded-full` | `rounded-2xl` ⚠️ | `rounded-full` |
| Peso tipográfico | `font-semibold` | `font-black` ⚠️ | `font-bold` ⚠️ | `font-black` |
| Header | Sticky + nav completa | Logo + WA | Logo + WA ⚠️ | Logo + WA |
| Footer | Completo | ❌ Ausente | ❌ Ausente ⚠️ | ❌ Ausente |
| Sticky bar mobile | 2 CTAs | 2 CTAs | ❌ Ausente ⚠️ | ❌ Ausente |
| Metadata SEO | Layout global | ✅ Propia | ❌ Ausente ⚠️ | ✅ Propia |
| Nombre ícono WA | `IconWhatsApp` | `WAIcon` ⚠️ | SVG inline ⚠️ | `WhatsAppIcon` ⚠️ |
| Nombre eyebrow | `SectionLabel` | `Eyebrow` ⚠️ | — | `SectionEyebrow` ⚠️ |
| URL botón IA | `/analisis-perfil-ia` | `/analisis-perfil-ia` | `isavisa.com` 🚨 | WhatsApp |
| Visa México | Sección en page | — | — | — |

---

## 7. Recomendaciones priorizadas por impacto

### Prioridad ALTA — Impacto en conversión y SEO inmediato

**A1. Corregir URL de Evaluación IA en Visa USA**
- **Qué:** Cambiar `IA_URL` en `app/visa-usa/page.tsx` de `https://app.isavisa.com/...` a `/analisis-perfil-ia`.
- **Por qué:** El CTA principal de la página más importante del sitio saca al usuario fuera de GoTravel. Pérdida directa de leads.
- **Archivo:** `app/visa-usa/page.tsx:4`
- **Esfuerzo:** 5 minutos.

**A2. Agregar metadata SEO a Visa USA**
- **Qué:** Exportar `metadata` con `title` y `description` específicos para la página de Visa USA.
- **Por qué:** Sin metadata propia, Google indexa con título genérico. Pérdida de posicionamiento para keywords de alto valor ("visa americana", "visa b1/b2", "visa americana perú").
- **Archivo:** `app/visa-usa/page.tsx`
- **Esfuerzo:** 15 minutos.

**A3. Crear landing page `/visa-mexico`**
- **Qué:** Página dedicada para Visa México, equivalente en estructura a Visa Canadá.
- **Por qué:** Sin esta página no existe posicionamiento SEO para México. La sección de Home no rankea de forma independiente. Es el tercer servicio del negocio.
- **Esfuerzo:** 4–6 horas.

**A4. Armonizar diseño de Visa USA con el resto del sitio**
- **Qué:** Cambiar `#071B33` → `#0B1F3A`, `emerald-*` → `#00C896`/`#00A87D`, `rounded-2xl` → `rounded-full` en botones.
- **Por qué:** Coherencia visual de marca. El sitio actualmente luce como dos marcas distintas.
- **Archivos:** `app/visa-usa/page.tsx` (múltiples líneas)
- **Esfuerzo:** 1–2 horas.

**A5. Agregar navegación completa a páginas internas**
- **Qué:** Implementar el mismo header sticky de la Home en Visa USA, Visa Canadá y Evaluación IA, o al menos un menú hamburguesa mobile.
- **Por qué:** Los usuarios que llegan por SEO a páginas internas no tienen forma de explorar otros servicios. Pérdida de cross-selling y tiempo en el sitio.
- **Esfuerzo:** 2–3 horas (ideal: extraer header a componente compartido).

**A6. Agregar Open Graph y Twitter Card meta tags**
- **Qué:** Agregar `openGraph` y `twitter` al objeto `metadata` del layout y de cada página.
- **Por qué:** Cada link compartido en WhatsApp, Instagram o Facebook genera preview visual. Impacto directo en CTR y percepción de marca.
- **Archivos:** `app/layout.tsx`, `app/visa-canada/page.tsx`, `app/analisis-perfil-ia/page.tsx`
- **Esfuerzo:** 1 hora.

---

### Prioridad MEDIA — Mejoras de profesionalización y SEO a mediano plazo

**M1. Crear carpeta `/components` con componentes compartidos**
- **Qué:** Extraer `BtnPrimary`, `BtnWhatsApp`, `BtnOutline`, `SectionLabel`/`Eyebrow`, `IconWhatsApp`, `IconArrow`, `IconCheck` a archivos compartidos.
- **Por qué:** Hay 4 implementaciones idénticas del mismo botón de WhatsApp. Cualquier cambio (color, texto, icono, número de teléfono) requiere editar 4 archivos. Riesgo de inconsistencias futuras.
- **Esfuerzo:** 3–4 horas.

**M2. Agregar footer a páginas internas**
- **Qué:** Footer completo (igual al de Home) en Visa USA, Visa Canadá y Evaluación IA.
- **Por qué:** Sin footer, usuarios en páginas internas no acceden a redes sociales, políticas ni navegación secundaria. Afecta percepción de profesionalismo.
- **Esfuerzo:** 1–2 horas (ideal: componente compartido).

**M3. Agregar sticky bar mobile a Visa USA y Evaluación IA**
- **Qué:** Barra fija inferior con CTAs de IA + WhatsApp, igual a la de Home y Visa Canadá.
- **Por qué:** Mobile representa la mayoría del tráfico. Sin sticky bar, el CTA desaparece del viewport al hacer scroll. Impacto directo en tasa de contacto mobile.
- **Esfuerzo:** 30 minutos por página.

**M4. Generar sitemap.xml dinámico**
- **Qué:** Crear `app/sitemap.ts` con la lista de rutas del sitio.
- **Por qué:** Facilita la indexación por Google. Obligatorio para cualquier sitio que quiera posicionarse.
- **Esfuerzo:** 30 minutos.

**M5. Agregar structured data Schema.org (FAQPage y Service)**
- **Qué:** JSON-LD con `FAQPage` en páginas que tienen FAQ, y `Service` en las landing pages de cada visa.
- **Por qué:** Habilita rich results en Google (fragmentos con preguntas y respuestas expandibles). Mayor visibilidad en SERP, mayor CTR.
- **Esfuerzo:** 2–3 horas.

**M6. Unificar número de teléfono WhatsApp en constante global**
- **Qué:** Extraer `51928672932` a una constante en `/lib/constants.ts` referenciada por todas las páginas.
- **Por qué:** Actualmente el número está hardcodeado en al menos 4 archivos diferentes. Un cambio de número requiere editar manualmente todos los archivos con riesgo de dejar alguno desactualizado.
- **Esfuerzo:** 1 hora.

**M7. Activar el blog con al menos 3 artículos reales**
- **Qué:** Crear `/app/blog/[slug]/page.tsx` y escribir al menos los 3 artículos ya listados como placeholders.
- **Por qué:** El blog es la palanca SEO de mayor ROI a mediano plazo para este tipo de negocio. "Requisitos visa americana", "cómo preparar entrevista consular" son keywords con alto volumen y alta intención.
- **Esfuerzo:** 4–6 horas técnicas + contenido editorial.

**M8. Agregar testimonios o prueba social**
- **Qué:** Sección de testimonios (texto o capturas verificadas) con nombre, país y servicio utilizado.
- **Por qué:** Ninguna página del sitio muestra prueba social. Para un servicio de alta confianza (visa = inversión económica y emocional), los testimonios son uno de los mayores drivers de conversión.
- **Esfuerzo:** 2–3 horas (depende de disponibilidad de testimonios reales).

---

### Prioridad BAJA — Optimizaciones de pulido y escalabilidad

**B1. Agregar robots.txt**
- **Qué:** Crear `public/robots.txt` indicando a los crawlers qué indexar.
- **Esfuerzo:** 10 minutos.

**B2. Armonizar peso de fuentes entre páginas**
- **Qué:** Decidir si el estándar es `font-semibold` (Home) o `font-black` (Visa Canadá) y aplicarlo uniformemente.
- **Por qué:** Impacto visual menor pero afecta la sensación de coherencia de marca.
- **Esfuerzo:** 1–2 horas.

**B3. Agregar favicon personalizado**
- **Qué:** Crear un favicon que represente la marca (ícono de avión + visa o simplemente las iniciales "GT").
- **Por qué:** Actualmente usa el ícono genérico de Next.js. Pequeño detalle de profesionalismo.
- **Esfuerzo:** 30 minutos (diseño externo + 10 min implementación).

**B4. Agregar páginas de términos y privacidad**
- **Qué:** `/terminos` y `/privacidad` con el contenido legal mínimo.
- **Por qué:** Requerido por buenas prácticas y posiblemente por regulaciones de protección de datos (GDPR/Ley de datos LATAM). Aumenta percepción de formalidad.
- **Esfuerzo:** 2 horas (principalmente contenido).

**B5. Optimizar meta description de la Home**
- **Qué:** La descripción actual ("Asesoría especializada para visas de turismo a Estados Unidos, Canadá y México. Evaluación con inteligencia artificial, renovación de visa y adelanto de citas.") es buena pero podría incluir el diferencial de "100% online" y llamado a la acción.
- **Esfuerzo:** 10 minutos.

**B6. Agregar página 404 personalizada**
- **Qué:** `app/not-found.tsx` con diseño acorde a la marca y CTAs para reconducir al usuario.
- **Esfuerzo:** 1 hora.

---

## Resumen ejecutivo

El sitio tiene una base sólida de diseño y copy, particularmente en Home y Visa Canadá. Las páginas más completas del proyecto (Visa Canadá, Home) muestran el potencial real de la marca. Los problemas principales son de **consistencia** y **completitud**, no de concepto.

Las tres acciones de mayor impacto inmediato son:

1. **Corregir el IA_URL en Visa USA** — un bug de 5 minutos que está enviando leads a un servicio externo.
2. **Agregar metadata SEO a Visa USA** — crítico para posicionamiento orgánico del servicio principal del negocio.
3. **Crear la landing de Visa México** — el tercer servicio del portafolio no tiene presencia en el buscador.

El camino hacia una marca consistente y escalable pasa por tres decisiones técnicas de fondo:
- Extraer componentes compartidos a `/components`
- Extraer constantes globales (WhatsApp, colores) a `/lib/constants`
- Activar el blog como motor SEO de largo plazo
