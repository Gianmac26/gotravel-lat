"use client";

import { useRef, useState } from "react";
import { EMPRESA } from "../lib/empresa";

type Estado = "idle" | "enviando" | "ok" | "error";

interface RespBackend {
  ok: boolean;
  numero?: string;
  fecha?: string;
  plazo?: string;
  error?: string;
}

export default function FormReclamacion() {
  const formRef = useRef<HTMLFormElement>(null);
  const [estado, setEstado] = useState<Estado>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [respuesta, setRespuesta] = useState<Pick<RespBackend, "numero" | "fecha" | "plazo">>({});
  const [emailEnviado, setEmailEnviado] = useState("");
  const [menorEdad, setMenorEdad] = useState(false);

  const hoyFormateado = new Date().toLocaleString("es-PE", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Lima",
  });

  function validar(form: HTMLFormElement): boolean {
    let primerError: HTMLElement | null = null;
    form.querySelectorAll<HTMLElement>("[required]").forEach((el) => {
      const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      const vacio =
        input.type === "checkbox"
          ? !(input as HTMLInputElement).checked
          : !input.value.trim() ||
            (input.type === "email" && !/^\S+@\S+\.\S+$/.test(input.value));
      input.classList.toggle("border-red-500", vacio);
      if (vacio && !primerError) primerError = el;
    });
    if (primerError) {
      (primerError as HTMLElement).focus();
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validar(form)) {
      setErrMsg("Completa los campos obligatorios marcados con *.");
      return;
    }
    setErrMsg("");
    setEstado("enviando");

    const data: Record<string, unknown> = Object.fromEntries(new FormData(form).entries());
    data.menor = menorEdad;
    data.acepta = true;
    data.datos = true;
    data.notifEmail = (form.elements.namedItem("notifEmail") as HTMLInputElement)?.checked ?? true;
    data.origen = window.location.href;

    const endpoint = process.env.NEXT_PUBLIC_LIBRO_RECLAMACIONES_ENDPOINT ?? "";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      const out: RespBackend = await res.json();
      if (!out.ok) throw new Error(out.error ?? "Error del servidor");
      setRespuesta({ numero: out.numero, fecha: out.fecha, plazo: out.plazo });
      setEmailEnviado(String(data.email ?? ""));
      setEstado("ok");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setEstado("error");
      setErrMsg(
        "No pudimos registrar tu hoja en este momento. Inténtalo nuevamente en unos minutos. Si el problema continúa, escríbenos y lo registraremos manualmente."
      );
    }
  }

  /* ── Pantalla de confirmación ── */
  if (estado === "ok") {
    return (
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center" aria-live="polite">
        <p className="text-lg font-bold text-[#067647]">Tu hoja de reclamación fue registrada</p>
        <p className="mt-2 text-sm text-slate-600">Número de hoja</p>
        <p className="mt-1 text-2xl font-extrabold tracking-wide text-[#0B1F3A]">{respuesta.numero}</p>
        <p className="mt-3 text-sm text-slate-600">{respuesta.fecha && `Registrada el ${respuesta.fecha}`}</p>
        <p className="mt-3 text-sm text-slate-700">
          Enviamos una copia a <strong>{emailEnviado}</strong>. Te responderemos en un plazo máximo de{" "}
          15 días hábiles (a más tardar el <strong>{respuesta.plazo}</strong>).
        </p>
        <p className="mt-2 text-xs text-slate-500">Si no ves el correo, revisa tu carpeta de spam.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8">
      {/* Datos del proveedor */}
      <div
        className="mb-5 grid gap-3 rounded-xl bg-[#F1F5F9] p-4 text-sm sm:grid-cols-3"
        aria-label="Datos del proveedor"
      >
        <div>
          <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">Razón social</span>
          {EMPRESA.razonSocial}
        </div>
        <div>
          <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">RUC</span>
          {EMPRESA.ruc}
        </div>
        <div>
          <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">Domicilio fiscal</span>
          {EMPRESA.domicilio}
        </div>
      </div>
      <p className="mb-6 text-sm text-slate-500">
        El número de hoja se asigna automáticamente al enviar. Recibirás una copia de tu reclamación en el
        correo que indiques.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="website"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px]"
        />

        {/* ── 1. Consumidor ── */}
        <fieldset className="mb-8 border-0 p-0">
          <legend className="mb-4 w-full border-b-2 border-[#0B1F3A] pb-2 text-base font-bold text-[#0B1F3A]">
            1. Identificación del consumidor reclamante
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nombres" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Nombres
              </label>
              <input type="text" id="nombres" name="nombres" required autoComplete="given-name"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="apellidos" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Apellidos
              </label>
              <input type="text" id="apellidos" name="apellidos" required autoComplete="family-name"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="tipoDoc" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Tipo de documento
              </label>
              <select id="tipoDoc" name="tipoDoc" required
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20">
                <option value="DNI">DNI</option>
                <option value="CE">Carné de extranjería</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
            </div>
            <div>
              <label htmlFor="numDoc" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                N° de documento
              </label>
              <input type="text" id="numDoc" name="numDoc" required inputMode="numeric"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="domicilio" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Domicilio
              </label>
              <input type="text" id="domicilio" name="domicilio" required autoComplete="street-address"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="telefono" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Teléfono / celular
              </label>
              <input type="tel" id="telefono" name="telefono" required autoComplete="tel"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Correo electrónico
              </label>
              <input type="email" id="email" name="email" required autoComplete="email"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="menor"
                  name="menor"
                  checked={menorEdad}
                  onChange={(e) => setMenorEdad(e.target.checked)}
                  className="h-4 w-4 rounded border-[#d9dee5] text-[#0B1F3A]"
                />
                Soy menor de edad
              </label>
            </div>
            {menorEdad && (
              <div className="sm:col-span-2">
                <label htmlFor="apoderado" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                  Nombre del padre, madre o apoderado
                </label>
                <input type="text" id="apoderado" name="apoderado" required={menorEdad}
                  className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
              </div>
            )}
          </div>
        </fieldset>

        {/* ── 2. Bien contratado ── */}
        <fieldset className="mb-8 border-0 p-0">
          <legend className="mb-4 w-full border-b-2 border-[#0B1F3A] pb-2 text-base font-bold text-[#0B1F3A]">
            2. Identificación del bien contratado
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">Tipo</span>
              <div className="flex flex-wrap gap-5">
                <label className="flex items-center gap-2 text-sm font-normal">
                  <input type="radio" name="tipoBien" value="Servicio" defaultChecked className="h-4 w-4" />
                  Servicio
                </label>
                <label className="flex items-center gap-2 text-sm font-normal">
                  <input type="radio" name="tipoBien" value="Producto" className="h-4 w-4" />
                  Producto
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="servicio" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Servicio contratado
              </label>
              <select id="servicio" name="servicio" required
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20">
                <option value="">Selecciona…</option>
                <option>Asesoría de visa – Estados Unidos</option>
                <option>Asesoría de visa – Renovación EE.UU.</option>
                <option>Asesoría de visa – Canadá</option>
                <option>Asesoría de visa – México</option>
                <option>Adelanto de cita</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="monto" className="mb-1 block text-sm font-semibold">
                Monto reclamado (S/)
              </label>
              <input type="number" id="monto" name="monto" min="0" step="0.01" inputMode="decimal"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="descBien" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Descripción
              </label>
              <input type="text" id="descBien" name="descBien" required
                placeholder="Ej.: Asesoría para visa de turismo B1/B2, contratada el 10/09/2026"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="pedido" className="mb-1 block text-sm font-semibold">
                N° de pedido / comprobante (opcional)
              </label>
              <input type="text" id="pedido" name="pedido"
                className="w-full rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
          </div>
        </fieldset>

        {/* ── 3. Detalle ── */}
        <fieldset className="mb-8 border-0 p-0">
          <legend className="mb-4 w-full border-b-2 border-[#0B1F3A] pb-2 text-base font-bold text-[#0B1F3A]">
            3. Detalle de la reclamación y pedido del consumidor
          </legend>
          <div className="grid gap-4">
            <div>
              <span className="mb-2 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">Tipo</span>
              <div className="flex flex-wrap gap-5">
                <label className="flex items-center gap-2 text-sm font-normal">
                  <input type="radio" name="tipo" value="Reclamo" defaultChecked className="h-4 w-4" />
                  Reclamo
                </label>
                <label className="flex items-center gap-2 text-sm font-normal">
                  <input type="radio" name="tipo" value="Queja" className="h-4 w-4" />
                  Queja
                </label>
              </div>
              <div className="mt-3 rounded-lg bg-[#F1F5F9] px-4 py-3 text-sm text-slate-600">
                <strong>Reclamo:</strong> disconformidad relacionada a los productos o servicios.
                <br />
                <strong>Queja:</strong> disconformidad no relacionada a los productos o servicios, o malestar respecto a la atención al público.
              </div>
            </div>
            <div>
              <label htmlFor="detalle" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Detalle
              </label>
              <textarea id="detalle" name="detalle" required maxLength={3000} rows={5}
                className="w-full resize-y rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
            <div>
              <label htmlFor="pedidoConsumidor" className="mb-1 block text-sm font-semibold after:ml-0.5 after:text-red-600 after:content-['*']">
                Pedido
              </label>
              <textarea id="pedidoConsumidor" name="pedidoConsumidor" required maxLength={1500} rows={4}
                placeholder="¿Qué solución solicitas?"
                className="w-full resize-y rounded-lg border border-[#d9dee5] px-3 py-2.5 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20" />
            </div>
          </div>
        </fieldset>

        {/* ── Declaración ── */}
        <fieldset className="mb-6 border-0 p-0">
          <legend className="mb-4 w-full border-b-2 border-[#0B1F3A] pb-2 text-base font-bold text-[#0B1F3A]">
            Declaración y notificación
          </legend>
          <div className="space-y-3">
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="acepta" name="acepta" required className="mt-0.5 h-4 w-4 rounded border-[#d9dee5]" />
              Declaro que la información proporcionada es verdadera.
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="notifEmail" name="notifEmail" defaultChecked className="mt-0.5 h-4 w-4 rounded border-[#d9dee5]" />
              Acepto recibir la respuesta a mi reclamo o queja en el correo electrónico indicado.
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="datos" name="datos" required className="mt-0.5 h-4 w-4 rounded border-[#d9dee5]" />
              Autorizo el tratamiento de mis datos personales para la atención de esta reclamación, conforme a la Ley N° 29733.
            </label>
          </div>
        </fieldset>

        {/* Error */}
        {(estado === "error" || errMsg) && (
          <div role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errMsg || "Ocurrió un error. Por favor intenta nuevamente."}
          </div>
        )}

        <button
          type="submit"
          disabled={estado === "enviando"}
          className="w-full rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#132D52] disabled:cursor-wait disabled:opacity-60"
        >
          {estado === "enviando" ? "Enviando…" : "Enviar hoja de reclamación"}
        </button>
      </form>

      {/* Textos legales — no modificar */}
      <div className="mt-8 border-t border-[#d9dee5] pt-5 text-xs leading-relaxed text-slate-500">
        <p>* La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el Indecopi.</p>
        <p className="mt-2">* El proveedor deberá dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles.</p>
        <p className="mt-2">Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571) y su Reglamento del Libro de Reclamaciones.</p>
      </div>

      {/* Fecha visible — decorativa, la oficial la da el backend */}
      <p className="mt-4 text-right text-xs text-slate-400">{hoyFormateado}</p>
    </div>
  );
}
