import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { EMPRESA } from "../lib/empresa";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Goviaje",
  description:
    "Términos y condiciones del servicio de asesoría para visas de turismo de GoViajes (AMG COMUNICA S.A.C.). Planes, pagos, reembolsos y obligaciones de las partes.",
  robots: { index: true, follow: true },
};

const SECCIONES = [
  { id: "naturaleza", titulo: "1. Naturaleza del servicio" },
  { id: "planes", titulo: "2. Planes y alcance del servicio" },
  { id: "adelanto", titulo: "3. Adelanto de Cita" },
  { id: "pagos", titulo: "4. Pagos" },
  { id: "obligaciones", titulo: "5. Obligaciones del cliente" },
  { id: "reembolsos", titulo: "6. Reembolsos y cancelaciones" },
  { id: "plazos", titulo: "7. Plazos de atención" },
  { id: "datos", titulo: "8. Protección de datos personales" },
  { id: "libro", titulo: "9. Libro de Reclamaciones" },
  { id: "propiedad", titulo: "10. Propiedad intelectual, limitación de responsabilidad y fuerza mayor" },
  { id: "ley", titulo: "11. Ley aplicable y jurisdicción" },
  { id: "aceptacion", titulo: "12. Aceptación" },
] as const;

export default function TerminosYCondiciones() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-slate-900">
        {/* ── Hero ── */}
        <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Términos y Condiciones</h1>
            <p className="mt-3 text-sm text-slate-300">
              {EMPRESA.razonSocial} · RUC {EMPRESA.ruc}
            </p>
            <p className="mt-1 text-sm text-slate-400">Última actualización: septiembre de 2026</p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {/* ── Aviso principal ── */}
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-sm font-semibold text-amber-900">
              <strong>IMPORTANTE:</strong>{" "}
              <strong>
                La decisión de aprobación o rechazo de una visa corresponde exclusivamente a la autoridad
                consular (Estados Unidos) o al IRCC (Canadá). GoViajes no garantiza la aprobación de ninguna solicitud.
              </strong>{" "}
              Nuestro servicio consiste en asesoría y preparación de la solicitud, no en la obtención de resultados.
            </p>
          </div>

          {/* ── Índice ── */}
          <nav className="mb-10 rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-5" aria-label="Índice">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0B1F3A]">Contenido</p>
            <ol className="space-y-1.5">
              {SECCIONES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-[#00A87D] underline-offset-2 hover:underline">
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Secciones ── */}
          <div className="space-y-12 text-sm leading-relaxed text-slate-700 sm:text-base">

            {/* 1 */}
            <section id="naturaleza" aria-labelledby="h-naturaleza">
              <h2 id="h-naturaleza" className="mb-4 text-xl font-bold text-[#0B1F3A]">1. Naturaleza del servicio</h2>
              <p>
                {EMPRESA.nombreComercial} ({EMPRESA.razonSocial}, RUC {EMPRESA.ruc}, domicilio en{" "}
                {EMPRESA.domicilio}) es una empresa privada especializada en asesoría migratoria para la
                preparación de solicitudes de visa de turismo para Estados Unidos, Canadá y México.
              </p>
              <p className="mt-3">
                <strong>GoViajes NO es una embajada, consulado ni entidad de gobierno.</strong> No vendemos
                vuelos, hoteles, tours, paquetes turísticos ni seguros de viaje.
              </p>
              <p className="mt-3">
                Nuestro servicio comprende: evaluación de perfil, revisión documental, orientación sobre el
                proceso consular y acompañamiento durante la preparación de la solicitud. La atención es
                100 % online.
              </p>
            </section>

            {/* 2 */}
            <section id="planes" aria-labelledby="h-planes">
              <h2 id="h-planes" className="mb-4 text-xl font-bold text-[#0B1F3A]">2. Planes y alcance del servicio</h2>
              <p>Los planes de asesoría disponibles y su precio por solicitante son:</p>

              <div className="mt-4 overflow-x-auto rounded-xl border border-[#E2E8F0]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] bg-[#F1F5F9] text-left text-xs font-semibold uppercase tracking-wide text-[#0B1F3A]">
                      <th className="px-4 py-3">Plan</th>
                      <th className="px-4 py-3">Precio (PEN)</th>
                      <th className="px-4 py-3">Incluye</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {[
                      {
                        plan: "Visa USA — Estándar",
                        precio: "S/ 250",
                        incluye: "Evaluación de perfil, DS-160, checklist documental, orientación para entrevista.",
                      },
                      {
                        plan: "Visa USA — Preferente",
                        precio: "S/ 350",
                        incluye: "Todo lo del plan Estándar + revisión documental prioritaria y simulación de entrevista.",
                      },
                      {
                        plan: "Visa USA — Premium",
                        precio: "S/ 450",
                        incluye: "Todo lo del plan Preferente + acompañamiento extendido y revisión ilimitada de documentos.",
                      },
                      {
                        plan: "Renovación Visa USA",
                        precio: "S/ 350",
                        incluye: "Evaluación de caso, DS-160, revisión de historial migratorio y checklist.",
                      },
                    ].map((row) => (
                      <tr key={row.plan} className="bg-white">
                        <td className="px-4 py-3 font-medium text-[#0B1F3A]">{row.plan}</td>
                        <td className="whitespace-nowrap px-4 py-3 font-semibold">{row.precio}</td>
                        <td className="px-4 py-3 text-slate-600">{row.incluye}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Los precios son por solicitante. Los planes admiten hasta 6 solicitantes; el total es el precio
                unitario multiplicado por la cantidad de solicitantes.
              </p>
              <p className="mt-3 rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-3 text-sm">
                <strong>Los precios NO incluyen</strong> la tasa consular (derechos MRV), biométricos ni
                ningún pago que se realice directamente a la embajada, consulado o al IRCC. Esos pagos son
                responsabilidad exclusiva del solicitante.
              </p>
              <p className="mt-3">
                El servicio inicia una vez confirmado el pago y recibida la información del cliente. GoViajes no
                garantiza aprobación. Una visa negada no da derecho a reembolso del servicio de asesoría ya prestado.
              </p>
            </section>

            {/* 3 */}
            <section id="adelanto" aria-labelledby="h-adelanto">
              <h2 id="h-adelanto" className="mb-4 text-xl font-bold text-[#0B1F3A]">3. Adelanto de Cita</h2>
              <p>
                El servicio de Adelanto de Cita (S/ 500 / USD 150) es un servicio adicional y opcional que
                no reemplaza ningún plan de asesoría. Consiste en el monitoreo de disponibilidad en el
                sistema oficial del consulado para encontrar una fecha anterior a la ya asignada.
              </p>
              <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                <strong>Este servicio NO garantiza conseguir una fecha más próxima.</strong> El adelanto
                depende exclusivamente de la disponibilidad en el sistema consular, que está fuera del
                control de GoViajes.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Plazo de monitoreo activo: <strong>TODO_DIAS</strong> días hábiles desde la contratación.</li>
                <li>
                  Política si no se consigue una fecha: <strong>TODO_POLITICA_ADELANTO</strong>.
                </li>
                <li>
                  El servicio se considera cumplido cuando se ha monitoreado activamente durante el plazo
                  pactado, independientemente del resultado.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section id="pagos" aria-labelledby="h-pagos">
              <h2 id="h-pagos" className="mb-4 text-xl font-bold text-[#0B1F3A]">4. Pagos</h2>
              <p>GoViajes procesa pagos a través de las siguientes pasarelas:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Izipay (soles peruanos — PEN):</strong> disponible para clientes en Perú. Acepta
                  tarjeta de crédito/débito, QR, Yape y Plin. El cargo aparecerá en tu estado de cuenta como{" "}
                  <strong>{EMPRESA.descriptorCobro}</strong>.
                </li>
                <li>
                  <strong>PayPal (dólares americanos — USD):</strong> disponible para clientes internacionales.
                  Los precios en USD incluyen la comisión internacional de PayPal; no se aplican recargos adicionales.
                </li>
              </ul>
              <p className="mt-3">
                GoViajes <strong>no almacena datos de tarjeta</strong>. El procesamiento es realizado
                íntegramente por las pasarelas de pago mencionadas, conforme a sus propios estándares de seguridad (PCI-DSS).
              </p>
              <p className="mt-3">
                El servicio inicia con el pago confirmado y el envío de la información requerida por parte del cliente.
              </p>
            </section>

            {/* 5 */}
            <section id="obligaciones" aria-labelledby="h-obligaciones">
              <h2 id="h-obligaciones" className="mb-4 text-xl font-bold text-[#0B1F3A]">5. Obligaciones del cliente</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Proporcionar información veraz, completa y actualizada. GoViajes no se responsabiliza por negativas o consecuencias derivadas de información falsa u omitida.</li>
                <li>Enviar la documentación requerida dentro de los plazos acordados.</li>
                <li>Asistir puntualmente a las citas consulares programadas.</li>
                <li>Notificar cualquier cambio en su situación migratoria, laboral o personal que sea relevante para el trámite.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="reembolsos" aria-labelledby="h-reembolsos">
              <h2 id="h-reembolsos" className="mb-4 text-xl font-bold text-[#0B1F3A]">6. Reembolsos y cancelaciones</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Antes de iniciar el trabajo:</strong> reembolso de <strong>TODO_%</strong> del monto pagado.
                </li>
                <li>
                  <strong>Después de iniciado el servicio</strong> (DS-160 trabajado o perfil evaluado):{" "}
                  <strong>TODO_POLITICA_REEMBOLSO_PARCIAL</strong>.
                </li>
                <li>
                  <strong>Una visa negada no da derecho a reembolso</strong> del servicio de asesoría ya prestado.
                </li>
                <li>
                  Plazo de devolución: <strong>TODO_DIAS_HABILES</strong> días hábiles, por el mismo medio de pago utilizado.
                </li>
                <li>
                  Antes de solicitar un contracargo bancario, el cliente debe presentar su reclamo a través
                  de los canales de atención de GoViajes o del Libro de Reclamaciones.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section id="plazos" aria-labelledby="h-plazos">
              <h2 id="h-plazos" className="mb-4 text-xl font-bold text-[#0B1F3A]">7. Plazos de atención</h2>
              <p>Los plazos de atención por etapa del servicio son los siguientes:</p>
              <p className="mt-3 font-medium text-amber-800">
                TODO: definir plazos por etapa (evaluación inicial, entrega de DS-160, revisión documental, etc.).
              </p>
            </section>

            {/* 8 */}
            <section id="datos" aria-labelledby="h-datos">
              <h2 id="h-datos" className="mb-4 text-xl font-bold text-[#0B1F3A]">8. Protección de datos personales</h2>
              <p>
                {EMPRESA.razonSocial} trata los datos personales de sus clientes conforme a la{" "}
                <strong>Ley N° 29733</strong> (Ley de Protección de Datos Personales del Perú) y su reglamento.
              </p>
              <p className="mt-3">
                Los datos recopilados (nombre, documento de identidad, teléfono, correo, situación laboral,
                datos de pasaporte y vínculos familiares cuando corresponda) se utilizan exclusivamente para
                brindar el servicio de asesoría contratado.
              </p>
              <p className="mt-3">
                Ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación, Oposición):{" "}
                {EMPRESA.emailAtencion}.
              </p>
              <p className="mt-3">
                Consulta nuestra{" "}
                <Link href="/politica-de-privacidad" className="font-medium text-[#00A87D] underline-offset-2 hover:underline">
                  Política de Privacidad
                </Link>{" "}
                para mayor detalle.
              </p>
            </section>

            {/* 9 */}
            <section id="libro" aria-labelledby="h-libro">
              <h2 id="h-libro" className="mb-4 text-xl font-bold text-[#0B1F3A]">9. Libro de Reclamaciones</h2>
              <p>
                Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571), GoViajes cuenta
                con un Libro de Reclamaciones virtual disponible en:
              </p>
              <p className="mt-3">
                <Link
                  href="/libro-de-reclamaciones"
                  className="font-semibold text-[#00A87D] underline-offset-2 hover:underline"
                >
                  goviaje.uk/libro-de-reclamaciones
                </Link>
              </p>
              <p className="mt-3 text-sm text-slate-500">
                La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es
                requisito previo para interponer una denuncia ante el Indecopi. El proveedor responderá en
                un plazo no mayor a 15 días hábiles.
              </p>
            </section>

            {/* 10 */}
            <section id="propiedad" aria-labelledby="h-propiedad">
              <h2 id="h-propiedad" className="mb-4 text-xl font-bold text-[#0B1F3A]">
                10. Propiedad intelectual, limitación de responsabilidad y fuerza mayor
              </h2>
              <p>
                Todos los contenidos del sitio goviaje.uk (textos, diseños, marca) son propiedad de{" "}
                {EMPRESA.razonSocial} o sus licenciantes. Queda prohibida su reproducción sin autorización expresa.
              </p>
              <p className="mt-3">
                GoViajes no es responsable por: decisiones consulares, cambios en la normativa migratoria,
                cierres o restricciones de consulados, caídas de sistemas oficiales (USCIS, IRCC, MRE) ni
                cualquier otra causa de fuerza mayor ajena a su control.
              </p>
            </section>

            {/* 11 */}
            <section id="ley" aria-labelledby="h-ley">
              <h2 id="h-ley" className="mb-4 text-xl font-bold text-[#0B1F3A]">11. Ley aplicable y jurisdicción</h2>
              <p>
                Estos términos se rigen por las leyes de la República del Perú. Para cualquier controversia,
                las partes se someten a los tribunales de{" "}
                <strong>{EMPRESA.ciudadJurisdiccion}</strong>,
                con renuncia a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            {/* 12 */}
            <section id="aceptacion" aria-labelledby="h-aceptacion">
              <h2 id="h-aceptacion" className="mb-4 text-xl font-bold text-[#0B1F3A]">12. Aceptación</h2>
              <p>
                Realizar un pago a través de Izipay, PayPal o cualquier link de pago de GoViajes implica la
                aceptación plena de estos Términos y Condiciones, así como de la{" "}
                <Link href="/politica-de-privacidad" className="font-medium text-[#00A87D] underline-offset-2 hover:underline">
                  Política de Privacidad
                </Link>.
              </p>
            </section>

            {/* Contacto */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-6">
              <p className="font-semibold text-[#0B1F3A]">¿Tienes dudas sobre estos términos?</p>
              <p className="mt-2 text-sm text-slate-600">
                Escríbenos por{" "}
                <a
                  href={`${EMPRESA.whatsappHref}?text=Hola%20Goviaje,%20tengo%20una%20consulta%20sobre%20los%20t%C3%A9rminos%20del%20servicio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0B1F3A] underline underline-offset-2"
                >
                  WhatsApp
                </a>{" "}
                o al correo de atención al cliente.{" "}
                <strong>
                  Aviso: un abogado debe revisar este texto antes de su publicación definitiva.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
