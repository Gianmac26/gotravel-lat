import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Goviaje",
  description:
    "Términos y condiciones del servicio de asesoría para visas de turismo de Goviaje.",
};

const SECTIONS = [
  {
    title: "1. Naturaleza del servicio",
    body: [
      "Goviaje (GOVIAJES) es una empresa de asesoría migratoria especializada en la preparación de solicitudes de visa de turismo para Estados Unidos, Canadá y México.",
      "No somos una agencia de viajes. No vendemos vuelos, hoteles, tours, paquetes turísticos ni seguros de viaje.",
      "Nuestro servicio consiste en evaluación de perfil, revisión documental, orientación sobre el proceso y acompañamiento durante la preparación de tu solicitud.",
    ],
  },
  {
    title: "2. Sobre la aprobación de la visa",
    body: [
      "Ninguna empresa puede garantizar la aprobación de una visa. La decisión final corresponde exclusivamente al oficial consular (Estados Unidos) o al IRCC (Canadá), según corresponda.",
      "Nuestro trabajo es ayudarte a preparar la solicitud con el mayor rigor posible para maximizar la calidad de tu expediente, no asegurar un resultado.",
      "No tenemos contactos, influencia ni acuerdos con consulados, embajadas o el IRCC que alteren el resultado de tu solicitud.",
    ],
  },
  {
    title: "3. Evaluación previa de tu caso",
    body: [
      "La evaluación previa que ofrecemos antes de iniciar tu solicitud es realizada por un asesor especializado. No es una decisión consular ni sustituye la evaluación oficial del consulado o del IRCC.",
      "Los resultados de la evaluación no garantizan ni predicen con certeza el resultado de tu solicitud.",
    ],
  },
  {
    title: "4. Pagos y tasas oficiales",
    body: [
      "El costo de nuestra asesoría es independiente de cualquier tasa oficial que debas pagar directamente al gobierno correspondiente (por ejemplo, la tasa consular de Estados Unidos o el pago de CAD 185 al IRCC en Canadá).",
      "Las tasas oficiales no son reembolsables por Goviaje en caso de rechazo, ya que son pagadas directamente a la entidad gubernamental.",
    ],
  },
  {
    title: "5. Responsabilidad del solicitante",
    body: [
      "Eres responsable de la veracidad de la información y documentación que nos proporcionas. Goviaje no se hace responsable por las consecuencias de información falsa o inexacta entregada por el solicitante.",
    ],
  },
  {
    title: "6. Atención y cobertura",
    body: [
      "La atención es 100% online. Atendemos principalmente a clientes de Perú, Colombia, México y Ecuador.",
    ],
  },
  {
    title: "7. Modificaciones",
    body: [
      "Podemos actualizar estos términos ocasionalmente. La fecha de la última actualización se indica al inicio de esta página.",
    ],
  },
];

export default function Terminos() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-xl font-bold tracking-tight text-white" aria-label="Goviaje">
            Go<span className="text-[#00C896]">viaje</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Términos y Condiciones</h1>
          <p className="mt-3 text-sm text-slate-300">Última actualización: julio de 2026</p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#0B1F3A]">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-[#F1F5F9] p-6 text-sm text-slate-600">
            ¿Tienes dudas sobre nuestros términos de servicio? Escríbenos por{" "}
            <a
              href="https://wa.me/51928672932?text=Hola%20Goviaje,%20tengo%20una%20consulta%20sobre%20los%20t%C3%A9rminos%20del%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B1F3A] underline"
            >
              WhatsApp
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
