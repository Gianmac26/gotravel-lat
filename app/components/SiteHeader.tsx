const WHATSAPP_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa";

const NAV_LINKS = [
  { label: "Visa USA", href: "/visa-usa" },
  { label: "Visa Canadá", href: "/visa-canada" },
  { label: "Visa México", href: "/#visa-mexico" },
  { label: "Agendar asesoría", href: WHATSAPP_URL, external: true },
  { label: "FAQ", href: "/#faq" },
] as const;

function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Header sticky con navegación completa, compartido por las landings internas
 * (Visa USA, Visa Canadá) para que un visitante que llega por SEO/Ads a una
 * de estas páginas pueda navegar al resto del sitio.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold tracking-tight text-[#0B1F3A]" aria-label="Goviaje">
          Go<span className="text-[#00C896]">viaje</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb855] sm:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] text-[#0B1F3A] [&::-webkit-details-marker]:hidden">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <span className="sr-only">Abrir menú</span>
            </summary>
            <nav className="absolute right-0 mt-2 w-60 rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#F1F5F9]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
