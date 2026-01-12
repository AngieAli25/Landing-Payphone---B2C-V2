"use client";

import {
  BoltIcon,
  CheckBadgeIcon,
  CurrencyEuroIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export function Solution() {
  return (
    <section className="py-20 bg-white" aria-labelledby="soluzione-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="soluzione-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            La soluzione è Online Payphone
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Videochiama esperti certificati in pochi secondi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto mb-12">
          {/* Benefit 1 */}
          <Item
            icon={<BoltIcon className="w-6 h-6 text-white" />}
            title="Risposta immediata in videochiamata"
            desc="Collegati subito, ovunque tu sia"
            variant="orange"
          />
          {/* Benefit 2 */}
          <Item
            icon={<CheckBadgeIcon className="w-6 h-6 text-white" />}
            title="Professionisti verificati e certificati"
            desc="Esperti selezionati e verificati"
            variant="blue"
          />
          {/* Benefit 3 */}
          <Item
            icon={<CurrencyEuroIcon className="w-6 h-6 text-white" />}
            title="Paghi solo i minuti effettivi"
            desc="Solo minuti effettivi, zero sorprese"
            variant="blue"
          />
          {/* Benefit 4 */}
          <Item
            icon={<LockClosedIcon className="w-6 h-6 text-white" />}
            title="Pagamenti sicuri e protetti"
            desc="Pagamenti protetti e certificati"
            variant="orange"
          />
          {/* Benefit 5 */}
          <Item
            icon={<ShieldCheckIcon className="w-6 h-6 text-white" />}
            title="Privacy e riservatezza garantite"
            desc="Dati protetti, massima riservatezza"
            variant="orange"
          />
          {/* Benefit 6 */}
          <Item
            icon={<ClockIcon className="w-6 h-6 text-white" />}
            title="Disponibilità H24 per emergenze"
            desc="Disponibili 24/7, anche nei weekend"
            variant="blue"
          />
        </div>

        <div className="text-center">
          <a
            href="#how-it-works"
            className="bg-gradient-to-r from-[#a03478] to-[#00b7ff] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            data-analytics-id="cta-solution"
          >
            Scopri Come Funziona
          </a>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon,
  title,
  desc,
  variant = "blue",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  variant?: "blue" | "orange";
}) {
  return (
    <div className="flex items-start gap-4 pb-6 border-b-2 border-gray-200">
      <div
        className={
          "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md " +
          (variant === "orange"
            ? "bg-gradient-to-br from-[#a03478] to-[#F76a00]"
            : "bg-gradient-to-br from-[#a03478] to-[#00b7ff]")
        }
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}
