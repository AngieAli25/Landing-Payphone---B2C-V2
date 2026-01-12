import Script from "next/script";

const reviews = [
  {
    rating: 5,
    text: "Fantastico! Avevo un problema legale urgente e in meno di 5 minuti ero già in videochiamata con un avvocato esperto. Servizio impeccabile!",
    name: "Marco R.",
    category: "Consulenza Legale",
  },
  {
    rating: 5,
    text: "Non riuscivo a trovare un nutrizionista disponibile prima di settimane. Con Online Payphone l'ho videochiamata la sera stessa.",
    name: "Laura S.",
    category: "Nutrizione",
  },
  {
    rating: 5,
    text: "I 20 minuti gratis mi hanno convinto a provare. Ora uso Online Payphone per tutte le mie consulenze.",
    name: "Andrea M.",
    category: "Consulenze Multiple",
  },
  {
    rating: 5,
    text: "Mia madre anziana non poteva uscire. Con Online Payphone abbiamo videochiamato un dottore dal salotto.",
    name: "Giulia F.",
    category: "Consulenza Medica",
  },
  {
    rating: 5,
    text: "Trasparenza totale: vedi la tariffa prima di chiamare e paghi solo i minuti effettivi.",
    name: "Roberto P.",
    category: "Consulenza Fiscale",
  },
];

export function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((r, i) => ({
      "@type": "Review",
      position: i + 1,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewBody: r.text,
    })),
  };

  return (
    <section className="section" aria-labelledby="testimonials-title">
      <Script
        id="reviews-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-title" className="section-title">
            Cosa dicono i nostri utenti
          </h2>
          <p className="section-subtitle">
            La soddisfazione dei nostri clienti è la nostra priorità
          </p>
        </div>
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <div aria-roledescription="carousel" aria-label="Recensioni">
      <div className="snap-x-container">
        {reviews.map((r, idx) => (
          <figure key={idx} className="snap-card w-full shrink-0 sm:w-[520px]">
            <div
              className="text-yellow-500"
              aria-label={`${r.rating} su 5 stelle`}
            >
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>
            <blockquote className="mt-3 text-brand-text">“{r.text}”</blockquote>
            <figcaption className="mt-3 text-sm text-gray-700">
              <span className="font-medium">{r.name}</span> — {r.category}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-3 text-center text-xs text-gray-500">
        Scorri per leggere altre recensioni
      </div>
    </div>
  );
}
