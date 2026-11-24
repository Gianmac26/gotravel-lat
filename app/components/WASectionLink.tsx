"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import WALink, { type WAPosition } from "./WALink";
import { waMensajePorRuta, waUrl } from "../lib/wa-mensajes";

/**
 * Botón de WhatsApp del header/footer: arma el mensaje prellenado según la ruta actual (usePathname).
 * Es un componente cliente pequeño para que SiteHeader y SiteFooter sigan siendo componentes de servidor.
 */
export default function WASectionLink({
  cta_position,
  event,
  className,
  children,
}: {
  cta_position: WAPosition;
  event?: string;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <WALink href={waUrl(waMensajePorRuta(pathname))} cta_position={cta_position} service="auto" event={event} className={className}>
      {children}
    </WALink>
  );
}
