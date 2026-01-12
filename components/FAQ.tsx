"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Come funziona il pagamento?",
    a: "Paghi solo se il professionista risponde alla videochiamata e solo per i minuti effettivi. Tariffe sempre visibili prima di chiamare.",
  },
  {
    q: "I professionisti sono davvero qualificati?",
    a: "Sì, tutti i professionisti sono verificati, certificati e selezionati per garantire qualità.",
  },
  {
    q: "Cosa succede se la videochiamata non va a buon fine?",
    a: "Se il professionista non risponde o la connessione si interrompe, non paghi nulla.",
  },
  {
    q: "Come funzionano i 20 minuti gratis?",
    a: "Alla registrazione ricevi 20 minuti gratuiti da usare per provare il servizio.",
  },
  {
    q: "Posso scegliere il professionista?",
    a: "Certo. Puoi leggere recensioni, verificare specializzazioni e tariffe prima di chiamare.",
  },
  {
    q: "L’app è disponibile per iPhone e Android?",
    a: "Sì, su App Store (iOS) e Google Play (Android).",
  },
  {
    q: "Posso programmare una consulenza?",
    a: "Sì, puoi videochiamare subito o prenotare un appuntamento per data e ora.",
  },
  {
    q: "Le videochiamate sono sicure e private?",
    a: "Usiamo tecnologie di crittografia avanzate per proteggere tutte le comunicazioni.",
  },
  {
    q: "Ci sono professionisti disponibili di sera o nel weekend?",
    a: "Sì, molti offrono disponibilità h24 e nei weekend. Puoi filtrare per disponibilità immediata.",
  },
  {
    q: "Cosa succede se non sono soddisfatto della consulenza?",
    a: "Puoi lasciare una recensione e contattare il nostro supporto per segnalazioni.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Domande Frequenti</h2>
        <p className="faq-subtitle">
          Hai altre domande? Contattaci o leggi qui sotto per trovare le risposte che cerchi.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>



      <style jsx>{`
        .faq-section {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%);
          padding: 100px 5% 80px;
        }

        .faq-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .faq-title {
          font-family: 'Sora', sans-serif;
          font-size: 44px;
          font-weight: 800;
          color: #181818;
          margin-bottom: 16px;
        }

        .faq-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #666666;
          line-height: 1.6;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          /* Removed counter-reset */
        }


      `}</style>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`faq-item ${open ? 'active' : ''}`}>
      <div 
        className="faq-question"
        onClick={() => setOpen(!open)}
      >
        <span className="faq-question-text">{q}</span>
        <div className="faq-icon"></div>
      </div>
      
      <div className="faq-answer">
        <p className="faq-answer-text">{a}</p>
      </div>

      <style jsx>{`
        .faq-item {
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(160, 52, 120, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(160, 52, 120, 0.3);
          box-shadow: 0 8px 24px rgba(160, 52, 120, 0.08);
          transform: translateY(-2px);
        }

        .faq-item.active {
          border-color: rgba(160, 52, 120, 0.4);
          box-shadow: 0 12px 32px rgba(160, 52, 120, 0.12);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
          user-select: none;
          transition: background 0.3s;
          gap: 12px;
        }

        .faq-question:hover {
          background: linear-gradient(90deg, rgba(160, 52, 120, 0.03) 0%, rgba(255, 106, 0, 0.03) 100%);
        }

        .faq-question-text {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #181818;
          line-height: 1.3;
          flex: 1;
        }

        /* Removed numbered pseudo-element */

        /* Icona freccia */
        .faq-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #A03478 0%, #FF6A00 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          font-weight: 700;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(160, 52, 120, 0.25);
        }

        .faq-icon:hover {
          box-shadow: 0 6px 16px rgba(160, 52, 120, 0.35);
          transform: scale(1.05);
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
          box-shadow: 0 6px 16px rgba(255, 106, 0, 0.35);
        }

        .faq-icon::before {
          content: '▼';
          display: block;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 500px; /* abbastanza alto per qualsiasi risposta */
          padding: 0 20px 16px 20px;
        }

        .faq-answer-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #666666;
          line-height: 1.6;
          padding-top: 12px;
          border-top: 1px solid rgba(160, 52, 120, 0.08);
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 14px 16px;
          }
          
          .faq-question-text {
            font-size: 15px;
          }
          
          .faq-answer-text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
