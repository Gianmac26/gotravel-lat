"use client";

import { useEffect } from "react";

type WinWithAnalytics = Window & { gtag?: (...args: unknown[]) => void };

export default function GraciasTracker() {
  useEffect(() => {
    const w = window as unknown as WinWithAnalytics;
    if (typeof w.gtag === "function") {
      w.gtag("event", "generate_lead", { currency: "PEN", event_category: "payment" });
    }
  }, []);

  return null;
}
