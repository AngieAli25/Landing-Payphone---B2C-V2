"use client";

import {
  BoltIcon,
  HomeModernIcon,
  ClockIcon,
  CurrencyEuroIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  BuildingOffice2Icon,
  LockClosedIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export function Benefits() {
  return (
    <section
      id="vantaggi"
      className="py-20 bg-gray-50"
      aria-labelledby="benefits-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="benefits-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Perché scegliere Online Payphone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accedi a consulenze professionali di qualità con la massima
            semplicità e trasparenza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card
            icon={<BoltIcon className="w-8 h-8 text-white" />}
            title="Risposta veloce ai tuoi problemi"
          >
            Niente più attese infinite. Trova il professionista e ricevi
            risposte immediate ai tuoi problemi in tempo reale.
          </Card>
          <Card
            icon={<HomeModernIcon className="w-8 h-8 text-white" />}
            title="Nessuno sbattimento ad uscire"
          >
            Consulenze comodamente dal divano. Non devi spostarti, cercare
            parcheggio o perdere tempo in viaggio.
          </Card>
          <Card
            icon={<ClockIcon className="w-8 h-8 text-white" />}
            title="Nessuna attesa"
          >
            Dimentica le sale d&apos;attesa e gli appuntamenti rimandati.
            Collegati quando hai bisogno, senza vincoli di orario.
          </Card>
          <Card
            icon={<CurrencyEuroIcon className="w-8 h-8 text-white" />}
            title="Paghi solo i minuti di consulenza"
          >
            Trasparenza totale: nessun costo nascosto, nessun anticipo. Paghi
            esclusivamente i minuti effettivi di consulenza ricevuta.
          </Card>
          <Card
            icon={<CheckBadgeIcon className="w-8 h-8 text-white" />}
            title="Professionisti certificati"
          >
            Tutti i nostri esperti sono verificati, certificati e selezionati.
            Competenza e affidabilità garantite in ogni consulenza.
          </Card>
          <Card
            icon={<ExclamationTriangleIcon className="w-8 h-8 text-white" />}
            title="Risposte h24 in emergenza"
          >
            Problemi urgenti anche di notte o nel weekend? Trova professionisti
            disponibili 24 ore su 24, 7 giorni su 7.
          </Card>
          <Card
            icon={<BuildingOffice2Icon className="w-8 h-8 text-white" />}
            title="Uno studio virtuale completo"
          >
            Accedi a centinaia di categorie professionali: legali, fiscali,
            mediche, tecniche e molto altro. Tutto in un&apos;unica app.
          </Card>
          <Card
            icon={<LockClosedIcon className="w-8 h-8 text-white" />}
            title="Pagamento sicuro ed immediato"
          >
            Sistema di pagamento protetto e certificato. Transazioni sicure,
            rapide e tracciabili in totale serenità.
          </Card>
          <Card
            icon={<ShieldCheckIcon className="w-8 h-8 text-white" />}
            title="Privacy garantita"
          >
            I tuoi dati e le tue conversazioni sono protetti e riservati.
            Massima riservatezza su ogni consulenza ricevuta.
          </Card>
          <Card
            icon={<BellAlertIcon className="w-8 h-8 text-white" />}
            title="Promemoria appuntamento"
          >
            Non perdere mai più una consulenza programmata. Sistema di notifiche
            e reminder automatici per i tuoi appuntamenti.
          </Card>
          <Card
            icon={<GiftIcon className="w-8 h-8 text-white" />}
            title="20 minuti gratis per provare"
          >
            Iscriviti ora e ricevi 20 minuti gratuiti per testare il servizio e
            scoprire quanto è semplice avere un professionista sempre
            disponibile.
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://apps.apple.com/it/app/online-payphone/id6738121965"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#a03478] to-[#00b7ff] text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            data-analytics-id="cta-benefits-download"
          >
            Scarica subito!
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a03478] to-[#00b7ff] flex items-center justify-center mb-6 mx-auto shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">{children}</p>
    </div>
  );
}
