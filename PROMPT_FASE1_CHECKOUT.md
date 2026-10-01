# PROMPT PARA CLAUDE CODE — Fase 1: Checkout con pago online (Izipay + PayPal)

> Pegar completo en Claude Code, abierto en la carpeta `gotravel-lat`.

---

## Rol y contexto

Eres el desarrollador senior de **Goviaje** (goviaje.uk), una empresa de asesoría de visas de turismo 100% online. El sitio es este repo: **Next.js 16 (App Router) + React 19 + Tailwind 4, desplegado en Vercel**, con GTM/GA4 ya instalado.

Antes de escribir código:
1. Lee `AGENTS.md`, `CLAUDE.md`, `app/visa-usa/CLAUDE.md` y `DESIGN_SYSTEM_GOVIAJE.md`, y respétalos.
2. Esta versión de Next.js tiene cambios importantes. Revisa `node_modules/next/dist/docs/` antes de crear Route Handlers, Server Actions o Client Components.
3. **Primero entrégame un plan** con la lista de archivos que vas a crear y modificar. No edites nada hasta que yo lo apruebe.

## Objetivo de negocio

Hoy todos los planes de `/visa-usa` terminan en WhatsApp, y cada venta necesita 5 pasos manuales. Quiero que el cliente pueda **elegir su plan, pagar online y quedar registrado automáticamente**. Después del pago, un flujo en n8n (fuera de este repo) le manda por WhatsApp la bienvenida y el enlace a su portal de datos.

**KPI:** % de visitantes de `/visa-usa` que completan un pago.

## Alcance

### 1. Catálogo único (fuente de verdad de precios)
Crea `lib/catalogo.ts` con los productos. **El servidor siempre calcula el monto desde aquí.** Nunca aceptes un precio enviado desde el navegador.

| id | Nombre | PEN | USD | `paypalHostedButtonId` (solo referencia) |
|---|---|---|---|---|
| `usa-estandar` | Visa USA — Plan Estándar | 250 | 90 | `ZUJDNSWAJFSVW` |
| `usa-preferente` | Visa USA — Plan Preferente | 350 | 110 | `7NE5CUGENZQ9W` |
| `usa-premium` | Visa USA — Plan Premium | 450 | 150 | `LN4GBTSJHFRDY` |
| `usa-renovacion` | Renovación de Visa USA | 350 | 110 | `8A3DLH4LRHCHU` |
| `usa-adelanto` | Adelanto de Cita (servicio adicional y opcional; no forma parte de ningún plan) | 500 | 150 | — |

- El precio es **por solicitante**. Cantidad de 1 a 6. Total = precio × cantidad.
- Los precios en USD ya incluyen la comisión internacional de PayPal. No les sumes recargos.
- Los textos de los planes en `/visa-usa` deben leer este catálogo, para no duplicar precios.

### 2. Página `/checkout`
- URL: `/checkout?plan=usa-preferente`. Si el plan no es válido, redirige a `/visa-usa#planes`.
- Muestra un resumen del plan (nombre, qué incluye, precio unitario, cantidad y total).
- Formulario con validación en cliente y en servidor:
  - Nombre completo
  - Correo
  - WhatsApp con código de país (valida el formato E.164)
  - País de residencia: Perú, Colombia, México, Ecuador u Otro
  - N.º de solicitantes
  - Checkbox obligatorio: "Acepto los Términos y condiciones y la Política de privacidad", con enlaces a `/terminos-y-condiciones` y `/politica-de-privacidad`
- **Regla de pasarela:**
  - País = Perú → **Izipay en PEN** como opción principal, y PayPal en USD como alternativa secundaria.
  - Cualquier otro país → **PayPal en USD**.
- Avisos obligatorios, visibles junto al botón de pago:
  - "El precio no incluye la tasa consular (derechos MRV), que se paga directamente a la embajada."
  - "Ninguna asesoría garantiza la aprobación. La decisión es exclusiva del oficial consular."
  - Solo con Izipay: "El cargo aparecerá en tu estado de cuenta como **IZI*MARCALCORP**". Esto reduce los contracargos por cargos que el cliente no reconoce.
  - Solo en el Adelanto de Cita: "Servicio sujeto a disponibilidad del consulado. No se garantiza conseguir una fecha."
- Mobile-first. Usa el SiteHeader y el SiteFooter existentes, y los colores y tipografías actuales. No crees variantes de header, logo ni botón de WhatsApp.
- Agrega `noindex` a `/checkout` y a las páginas de resultado.

### 3. Izipay (PEN)
- **Paso 0 obligatorio:** pregúntame qué integración web tiene activa mi cuenta Izipay: (a) Formulario incrustado / API REST (formToken + IPN con `kr-answer`/`kr-hash`) o (b) el Checkout de Izipay con sesión/token. **No asumas.** Implementa según la documentación oficial vigente (developers.izipay.pe) y cita en el código la URL de la doc que usaste.
- Crea un adaptador `lib/pagos/izipay.ts` con: crear la transacción desde el servidor, verificar la firma del retorno del navegador y verificar la firma de la IPN.
- Route Handlers:
  - `POST /api/pagos/izipay/crear`: valida los datos, calcula el monto desde el catálogo, genera un `orderId` único (`GV-AAAAMMDD-xxxxx`) y crea la transacción. En los metadatos de la transacción viaja lo necesario para no depender de una base de datos: `productoId`, `cantidad`, `nombre`, `whatsapp`, `pais`.
  - `POST /api/pagos/izipay/ipn`: **es la única fuente de verdad del pago.** Verifica la firma y, solo si el estado es pagado, dispara el evento a n8n (punto 5). Responde 200 rápido.
- La cuenta ya acepta **tarjeta, QR, Yape y Plin** y ya usa **links de pago de Izipay**. Habilita en el formulario web todos los medios que la integración confirmada permita. Los que no se puedan, déjalos como TODO documentado.
- Si en el Paso 0 resulta que mi cuenta **solo tiene links de pago** y no tiene API web, **detente y avísame**. En ese caso, el plan B es que `/checkout` capture los datos, los envíe a n8n y redirija al link de pago de Izipay del plan. Esa opción no confirma el pago automáticamente, así que decidimos juntos.

### 4. PayPal (USD)

**Contexto:** en la cuenta PayPal ya existen 4 *Hosted Buttons* (los IDs están en el catálogo). En el checkout **no los uses**, por estas razones:
- Tienen cantidad fija en 1, así que no pueden cobrar por solicitante.
- No permiten adjuntar nuestro `orderId`, por lo que no se puede identificar al cliente ni automatizar.
- No hay forma de verificar el pago desde el servidor.

Sigue usándolos solo como **links de pago y QR que Gian envía por WhatsApp**, y déjalos documentados en `docs/pagos-paypal.md`.

**Implementación del checkout:**
- Usa `@paypal/react-paypal-js` en el cliente y la **Orders API v2** en el servidor, con credenciales REST (client id + secret) y token OAuth.
- El client-id público que se usa hoy para los Hosted Buttons es `BAARx7f9jXhttLnr1zRiClkt_HVzrvkDm34v19WVfZgnDjFjX1Hq3VM8YDTZz8ODAXq3YA6IdF_vcDr1Cw`. **Pregúntame** si pertenece a una REST app con secret, o si debo crear una app en developer.paypal.com (en sandbox y en live).
- Configuración del SDK: `currency=USD`, `disable-funding=venmo`, `intent=capture`.
- En la orden usa `shipping_preference: "NO_SHIPPING"` (es un servicio).
- Carga el SDK **solo en `/checkout`**, nunca en las landings, para cuidar la velocidad y el SEO.
- Reserva `min-height` en el contenedor del botón para evitar CLS. Ocupa el 100% del ancho en móvil.
  - `POST /api/pagos/paypal/crear-orden`: calcula el monto desde el catálogo y pone el `orderId` propio en `custom_id` / `invoice_id` (incluye `productoId` y `cantidad`).
  - `POST /api/pagos/paypal/capturar`: captura, confirma que el estado sea `COMPLETED` y que el monto coincida con el catálogo, y dispara el evento a n8n.
  - `POST /api/pagos/paypal/webhook`: escucha `PAYMENT.CAPTURE.COMPLETED` y verifica la firma con `verify-webhook-signature`. Sirve de respaldo por si el navegador se cierra antes de capturar.

### 5. Evento a n8n (contrato)
Crea `lib/notificar.ts`. Hace POST a `N8N_WEBHOOK_URL` con el header `x-goviaje-secret: N8N_WEBHOOK_SECRET`.

```json
{
  "evento": "pago_confirmado",
  "idempotencyKey": "GV-20260927-ab12c",
  "pasarela": "izipay | paypal",
  "transaccionId": "id de la pasarela",
  "producto": { "id": "usa-preferente", "nombre": "...", "precioUnitario": 350 },
  "cantidad": 3,
  "moneda": "PEN | USD",
  "total": 1050,
  "cliente": { "nombre": "", "email": "", "whatsapp": "+51...", "pais": "" },
  "fecha": "ISO-8601"
}
```
- **Idempotencia:** la IPN, el webhook y la captura pueden llegar más de una vez. Siempre manda el mismo `idempotencyKey` (n8n deduplica).
- Si n8n no responde, reintenta 3 veces con backoff y registra el error con `console.error` (sin datos de tarjeta; nunca los tocamos).
- Documenta el contrato en `docs/n8n-contrato-pagos.md`.

### 6. Páginas de resultado
- `/pago/exito?orden=...`: confirmación, número de orden, y "En los próximos minutos te escribiremos por WhatsApp con el acceso a tu formulario". Incluye un botón de WhatsApp prellenado ("Hola Goviaje, ya pagué la orden GV-...").
  - Para Izipay, verifica la firma del retorno antes de mostrar el éxito.
  - Para PayPal, muestra el éxito solo después de la captura confirmada.
- `/gracias` (noindex): landing de retorno para los pagos hechos con los **links/QR de PayPal** enviados por WhatsApp.
  - No verifica el pago. Muestra: "Pago recibido. Envíanos tu comprobante por WhatsApp para iniciar tu trámite", con un botón de WhatsApp prellenado.
  - Dispara el evento GA4 `generate_lead` con `method: "paypal_link"`. **No** dispares `purchase` aquí, para no inflar las ventas.
  - Cuando termines, entrégame la URL de `/gracias` para configurarla como redirección en cada Hosted Button.
- `/pago/error`: mensaje claro, botón "Reintentar pago" (vuelve a `/checkout` con el mismo plan) y botón de WhatsApp de ayuda.

### 7. Cambios en `/visa-usa` (mínimos, sin rediseño)
- **Cada `Plan`:** CTA principal "Pagar y empezar" → `/checkout?plan=...`, y debajo un link secundario "Tengo dudas, hablar por WhatsApp".
- **ServiceCard de Renovación y de Adelanto:** mismo patrón.
- Mantén el CTA de WhatsApp del hero tal como está.
- Debajo de cada precio en soles agrega una línea pequeña: "¿Pagas desde el extranjero? USD 90 con PayPal". Usa el monto de cada plan y léelo del catálogo.
- En la tarjeta verde (Preferente), verifica que el contraste cumpla WCAG AA.
- No cambies colores, tipografías ni estructura global.

### 8. Legal (requisito para cobrar en Perú y para los links de Izipay)
Los links de pago de Izipay van a apuntar a los Términos, así que su URL tiene que quedar estable.

**Rutas**
- Hoy existen `/terminos` y `/privacidad`. Muévelas a **`/terminos-y-condiciones`** y **`/politica-de-privacidad`**.
- Deja **redirecciones 301** desde las rutas viejas en `next.config.ts` y actualiza `sitemap.ts`.
- Estas páginas llevan `index, follow` y su propio title y description.

**Datos del titular**: úsalos desde `lib/empresa.ts`, que ya creó la tarea del Libro de Reclamaciones.
- Razón social: AMG COMUNICA S.A.C.
- Nombre comercial: GoViajes / Goviaje
- RUC: 20606668733
- Domicilio fiscal: Av. Benavides 1944, Miraflores, Lima
- Correo de atención: `TODO_EMAIL`
- WhatsApp: +51 928 672 932
- Ciudad de jurisdicción: `TODO_CIUDAD`
- Descriptor de cobro: `IZI*MARCALCORP`
- Mantén los `TODO` visibles como constantes y **no inventes datos**. Muéstrame la lista al final.

**`/terminos-y-condiciones`: secciones obligatorias**
- HTML ligero, mobile-first, con índice de anclas y "Última actualización" visible.
- Sin popups ni cookies de terceros para aceptar.

1. **Naturaleza del servicio.** Asesoría privada; no es embajada, consulado ni entidad de gobierno. Pon en **negrita y cerca del inicio**: la decisión de la visa es exclusiva de la autoridad consular y **no se garantiza la aprobación**.
2. **Planes y alcance.** Tabla con qué incluye y qué NO incluye cada plan: Estándar S/250, Preferente S/350, Premium S/450 y Renovación S/350. Genérala desde `lib/catalogo.ts`, con los mismos ítems que en `/visa-usa`. Aclara que los precios no incluyen la tasa consular (MRV/biométricos), que el cliente paga directamente al gobierno.
3. **Adelanto de Cita, S/500 (USD 150).** Servicio adicional y opcional que no reemplaza ningún plan. Busca una fecha anterior sujeta a la disponibilidad del consulado y **no garantiza una fecha**. Placeholders: plazo del servicio `TODO_DIAS`, qué pasa si no se consigue fecha `TODO_POLITICA_ADELANTO` y cuándo se considera cumplido.
4. **Pagos.**
   - Izipay: tarjeta, QR, Yape y Plin. PayPal: USD.
   - GoViajes no almacena datos de tarjeta.
   - El cargo aparece como `IZI*MARCALCORP`.
   - El servicio inicia con el pago confirmado y el envío de la información del cliente.
5. **Obligaciones del cliente.** Dar información veraz, completa y a tiempo; GoViajes no responde por negativas causadas por información falsa u omitida. Asistir puntualmente a las citas.
6. **Reembolsos y cancelaciones.**
   - Antes de iniciar el trabajo: `TODO_%`.
   - Después de iniciar (DS-160 o perfil trabajado): `TODO`.
   - **Una visa negada no da derecho a reembolso.**
   - Plazo de devolución: `TODO_DIAS_HABILES`, por el mismo medio de pago.
   - Antes de pedir un contracargo al banco, el cliente debe reclamar por los canales de GoViajes.
7. **Plazos de atención** por etapa: `TODO`.
8. **Protección de datos (Ley 29733).** Qué datos se piden, para qué y por cuánto tiempo se guardan. Consentimiento, derechos ARCO y el correo para ejercerlos. Enlace a la política de privacidad.
9. **Libro de Reclamaciones (Ley 29571).** Enlace visible.
10. **Propiedad intelectual, limitación de responsabilidad y fuerza mayor.** Cierres consulares, cambios de normativa y caídas de sistemas oficiales.
11. **Ley aplicable.** Leyes del Perú y tribunales de `TODO_CIUDAD`.
12. **Aceptación.** Pagar por un link de Izipay, por PayPal o por el checkout implica aceptar estos términos.
- **Cierre:** bloque de contacto con WhatsApp y correo.

**`/politica-de-privacidad`:** actualízala al mismo estándar de la Ley 29733, con los datos del titular y el uso de pasaporte, datos laborales y familiares.

**`/libro-de-reclamaciones`**: **ya existe** (tarea previa, backend en Google Apps Script). **No lo rehagas ni lo conectes a n8n.** Solo enlázalo desde los Términos.

**Footer global:** enlaces a Términos y condiciones, Política de privacidad y Libro de reclamaciones (con su ícono), más la razón social y el RUC.

**Tono:** español claro y párrafos cortos. Nunca uses "garantizado", "aprobación segura" ni "100% efectivo". No menciones a ningún proveedor tercero en los textos públicos.

**Aviso para mí:** en tu resumen final, recuérdame que un abogado revise el texto antes de publicarlo.

### 9. Analítica (GA4 vía dataLayer existente)
- `begin_checkout` al cargar `/checkout`
- `add_payment_info` al elegir la pasarela
- `purchase` en `/pago/exito`, solo tras la confirmación, con `transaction_id`, `value`, `currency` e `items`, y sin duplicarse si se recarga la página

### 10. Configuración
Crea `.env.example` (sin valores reales) y verifica que `.env*` esté en `.gitignore`:
```
IZIPAY_USERNAME=
IZIPAY_PASSWORD=
IZIPAY_PUBLIC_KEY=
IZIPAY_HMAC_KEY=
IZIPAY_ENV=sandbox
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_WEBHOOK_ID=
PAYPAL_ENV=sandbox
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
N8N_WEBHOOK_URL=
N8N_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=https://www.goviaje.uk
```
Ajusta los nombres de las variables de Izipay según la integración confirmada en el Paso 0.

## Reglas de seguridad (no negociables)
- Los montos se calculan siempre en el servidor, desde el catálogo.
- Un pago se confirma solo con firma verificada (IPN o webhook) o con captura del servidor. Nunca por un parámetro en la URL.
- Ningún secreto va en el cliente ni en el repo.
- Todo en **sandbox** hasta que yo apruebe pasar a producción.

## Forma de trabajo
1. Plan con la lista de archivos → espera mi aprobación.
2. Trabaja en la rama `feature/checkout-fase1` con commits pequeños y descriptivos.
3. Al terminar, ejecuta `npm run lint` y `npm run build` sin errores.
4. Prueba en sandbox:
   - Pago Izipay aprobado
   - Pago Izipay rechazado
   - Pago PayPal aprobado
   - PayPal cancelado
   - IPN duplicada: n8n recibe el mismo `idempotencyKey`
   - Intento de manipular el precio desde el navegador: debe fallar
5. Entrégame:
   - Un resumen de los cambios
   - Los riesgos pendientes
   - Los `TODO` que dependen de mí: correo de atención, ciudad de jurisdicción, porcentajes y plazos de reembolso, política del Adelanto, plazos de atención, tipo de integración Izipay y credenciales REST de PayPal
   - La URL final de `/terminos-y-condiciones`, para configurarla en los links de Izipay
   - Los pasos para configurar en Vercel las variables de entorno y las URLs de IPN y webhook en los paneles de Izipay y PayPal
6. **No hagas deploy a producción ni merge a `main` sin mi aprobación.**

## Fuera de alcance (no lo hagas aquí)
- El flujo n8n (WhatsApp de bienvenida, recordatorios y registro en ISAVISA)
- La emisión de boleta o factura electrónica
- Cambios en las landings de Canadá y México (se replican después, si esta funciona)
