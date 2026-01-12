"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie-consent");
      if (!stored) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const handleChoice = (value: boolean) => {
    try {
      localStorage.setItem("cookie-consent", String(value));
    } catch {}
    setOpen(false);
    if (value) {
      // Simple reload to initialize analytics if user just accepted
      window.location.reload();
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie policy"
      aria-modal="true"
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 w-[95%] sm:w-auto"
      )}
    >
      <div className="container-responsive">
        <div className="rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/5 sm:p-5 lg:p-6">
          <h2 className="text-lg font-semibold text-brand-text">
            Usiamo i cookie
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Utilizziamo cookie per migliorare l&apos;esperienza e misurare le
            performance. Accetta per attivare statistiche e marketing. Puoi
            cambiare idea in qualsiasi momento.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              className="btn btn-ghost"
              onClick={() => handleChoice(false)}
              data-analytics-id="cookie-decline"
            >
              Rifiuta
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleChoice(true)}
              data-analytics-id="cookie-accept"
              autoFocus
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
