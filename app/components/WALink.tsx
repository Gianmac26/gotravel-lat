"use client";
import type { ReactNode } from "react";

export type WAService = "visa-usa" | "visa-canada" | "visa-mexico" | "general";
export type WAPosition = "top" | "middle" | "bottom" | "floating";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function detectService(pathname: string): WAService {
  if (
    pathname.startsWith("/visa-usa") ||
    /visa-americana|adelantar-cita|me-negaron|renovacion-visa|tramitar-visa|solvencia-economica|preguntas-entrevista|razones-rechazo|cuanto-cuesta-demora-visa-americana|como-llenar-ds|requisitos-visa-americana/.test(pathname)
  ) return "visa-usa";
  if (
    pathname.startsWith("/visa-canada") ||
    /canadiense|carta-invitacion|cuanto-cuesta-demora-visa-canada/.test(pathname)
  ) return "visa-canada";
  if (pathname.startsWith("/visa-mexico") || pathname.includes("visa-mexico")) return "visa-mexico";
  return "general";
}

export default function WALink({
  href,
  service = "auto",
  cta_position,
  className,
  children,
}: {
  href: string;
  service?: WAService | "auto";
  cta_position: WAPosition;
  className?: string;
  children: ReactNode;
}) {
  function handleClick() {
    try {
      window.dataLayer = window.dataLayer || [];
      const resolvedService: WAService =
        service === "auto" ? detectService(window.location.pathname) : service;
      window.dataLayer.push({
        event: "whatsapp_click",
        page_path: window.location.pathname,
        cta_position,
        service: resolvedService,
      });
    } catch {}
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
