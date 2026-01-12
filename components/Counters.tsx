"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { label: "Medici specialisti verificati", value: 8000, suffix: "+" },
  { label: "Consulti medici completati", value: 150000, suffix: "+" },
  { label: "Clienti soddisfatti", value: 98, suffix: "%" },
  {
    label: "Tempo medio di risposta",
    value: 90,
    suffix: " sec",
    prefix: "<" as "<" | undefined,
  },
];

export function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStart(true);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" aria-label="Social proof">
      <div className="container-responsive" ref={ref}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c) => (
            <div key={c.label} className="text-center">
              <div className="text-4xl font-extrabold text-white">
                {c.prefix ?? ""}
                <CountTo value={c.value} start={start} />
                {c.suffix}
              </div>
              <div className="mt-2 text-sm text-white/80">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountTo({ value, start }: { value: number; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const startTs = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);
  return <span aria-live="polite">{n.toLocaleString("it-IT")}</span>;
}
