export function SuccessStories() {
  return (
    <section
      className="section bg-brand-grayLight"
      aria-labelledby="stories-title"
    >
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="stories-title" className="section-title">
            Hanno risolto i loro problemi con Online Payphone
          </h2>
          <p className="section-subtitle">
            Scopri come altri utenti hanno trovato le risposte che cercavano
          </p>
        </div>
        <div
          className="snap-x-container mt-8"
          role="list"
          aria-label="Storie di successo"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="snap-card w-64 shrink-0 rounded-2xl bg-white p-3 shadow-sm"
              role="listitem"
            >
              <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-gray-200" />
              <div className="mt-3 px-1">
                <p className="text-sm font-medium text-brand-text">
                  {i === 0 && "Ho risolto il mio problema legale in 10 minuti"}
                  {i === 1 &&
                    "Consulenza fiscale immediata senza uscire di casa"}
                  {i === 2 &&
                    "Finalmente un nutrizionista disponibile quando serve"}
                  {i === 3 && "Supporto psicologico 24/7, è stato fondamentale"}
                  {i === 4 &&
                    "Ingegnere trovato in 5 minuti per la ristrutturazione"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="sr-only">
          Nota tecnica: i video verranno caricati in formato MP4 ottimizzato e
          riprodotti in mute con controlli accessibili.
        </p>
      </div>
    </section>
  );
}
