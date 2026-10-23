import { AVISO_NO_AFILIACION_BREVE } from "../lib/empresa";

/** Banda breve de no afiliación, para colocar junto al primer CTA (fondo oscuro). */
export default function AvisoNoAfiliacion() {
  return (
    <p className="mt-4 max-w-xl border-l-2 border-[#00C896]/50 pl-3 text-xs leading-relaxed text-slate-300">
      {AVISO_NO_AFILIACION_BREVE}{" "}
      <a href="#aviso-no-afiliacion" className="underline underline-offset-2 hover:text-white">
        Ver aviso completo
      </a>
    </p>
  );
}
