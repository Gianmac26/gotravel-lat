# PROMPT PARA CLAUDE CODE — Libro de Reclamaciones Virtual (GoViajes)

> Pegar en Claude Code, abierto en `gotravel-lat`. Ejecutar **antes** de `PROMPT_FASE1_CHECKOUT.md`.

---

Necesito integrar el Libro de Reclamaciones Virtual obligatorio (Indecopi, Ley 29571) en la web de GoViajes. Los archivos base ya están en el repo, en `docs/libro-reclamaciones/`:

- `libro-de-reclamaciones.html`: formulario con los campos del formato oficial (Anexo I del Reglamento). Envía los datos a un Web App de Google Apps Script.
- `apps-script-backend.gs`: backend (Google Sheets + correos). **Lo instalo yo. No lo modifiques ni lo despliegues.**

Antes de empezar, lee `AGENTS.md` y `CLAUDE.md` y respeta sus reglas. Esta versión de Next.js tiene cambios: revisa `node_modules/next/dist/docs/`. **Muéstrame primero el plan con los archivos que vas a tocar y espera mi aprobación.**

## Tareas

1. **Ruta `/libro-de-reclamaciones`** en App Router.
   - Convierte el HTML a componentes React: una página server con `metadata` y un Client Component para el formulario.
   - Usa el SiteHeader, el SiteFooter y el diseño actual de la web.
   - Reemplaza `--brand` por el color corporativo del design system.
   - **No quites ni cambies el `name` de ningún campo**, porque el backend depende de ellos. Tampoco cambies los textos legales del final.
   - Mantén el honeypot `website`, la lógica "Soy menor de edad → apoderado obligatorio", la validación y la pantalla de confirmación con número de hoja, fecha y plazo.
   - En el select `servicio` puedes **agregar** opciones ("Asesoría de visa – Renovación EE.UU." y "Adelanto de cita"). No quites las existentes.
2. **Configuración.**
   - Mueve los datos del proveedor a `lib/empresa.ts`, para que los reutilicen los Términos y el footer:
     - Razón social: AMG COMUNICA S.A.C.
     - Nombre comercial: GoViajes
     - RUC: 20606668733
     - Domicilio fiscal: Av. Benavides 1944, Miraflores, Lima
   - El endpoint va en `NEXT_PUBLIC_LIBRO_RECLAMACIONES_ENDPOINT` (es público: el navegador hace el POST). Agrégalo a `.env.example`. Yo te paso la URL `/exec`.
   - Mantén el `fetch` con `Content-Type: text/plain;charset=utf-8`, porque así Apps Script evita el preflight de CORS.
3. **Enlace permanente en el footer global** (así aparece en la home y en todas las páginas): ícono de libro + "Libro de Reclamaciones" → `/libro-de-reclamaciones`. Junto a él van la razón social y el RUC.
4. **Aviso oficial de Indecopi.**
   - Déjale en el footer un espacio reservado para la imagen `public/aviso-libro-reclamaciones.png`.
   - Si el archivo no existe, **pregúntame**. Lo descargo de consumidor.indecopi.gob.pe. No inventes ni dibujes el aviso.
5. **Calidad.**
   - Se ve bien desde 360 px de ancho.
   - Tiene `title` y `meta description` propios y `index, follow`. Agrégala a `sitemap.ts`.
   - Accesibilidad: labels asociados, foco visible, errores con `role="alert"` y confirmación con `aria-live`.
   - Sin librerías nuevas.
6. **Prueba de punta a punta** cuando te pase el endpoint:
   - Envía un reclamo de prueba.
   - Verifica la pantalla con el número de hoja.
   - Confírmame que llegaron los dos correos (al consumidor y a mí).
   - **Yo borro la fila de prueba en el Sheet.** Recuérdamelo.
   - Ejecuta `npm run lint` y `npm run build` sin errores.
7. **Commit** en la rama `feature/libro-reclamaciones` con el mensaje `feat: libro de reclamaciones virtual (Indecopi)`. **No hagas merge a `main` ni deploy sin mi aprobación.**
