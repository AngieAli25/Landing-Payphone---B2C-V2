"use client";

import { VideoCameraIcon, ArrowRightIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const pros = [
  {
    name: "Marco Benedet",
    role: "Veterinari",
    rating: 5,
    reviews: 127,
    rate: "€32",
    unit: "/ora",
    freeMinutes: 6,
    available: true,
    bio: "Medico veterinario esperto in medicina interna e dermatologia veterinaria e Istruttore di corsi di Primo Soccorso per animali. Molti quadri dermatologici possono essere inquadrati con precisione.",
    initials: "MB",
    code: "2b00j3",
    bgColor: "#1E88E5"
  },
  {
    name: "Naem Ballout",
    role: "Medico, Pediatra",
    rating: 5,
    reviews: 89,
    rate: "€70",
    unit: "/ora",
    freeMinutes: 5,
    available: true,
    bio: "Medico specializzato in pediatria e neonatologia.",
    initials: "NB",
    code: "evinvl",
    bgColor: "#1E88E5"
  },
  {
    name: "Dott.ssa Carla Avveniente",
    role: "Nutrizionisti, Erboristi, Tutor",
    rating: 5,
    reviews: 54,
    rate: "€80",
    unit: "/ora",
    freeMinutes: 5,
    available: true,
    bio: "Biologa nutrizionista. Accompagno le persone in un percorso di consapevolezza e riequilibrio attraverso la nutrizione clinico-funzionale. Piani alimentari personalizzati.",
    initials: "CA",
    code: "bsu2tl",
    bgColor: "#1E88E5"
  },
  {
    name: "Laura Caterina Abati",
    role: "Medico, Chirurgo, Pediatra",
    rating: 5,
    reviews: 201,
    rate: "€100",
    unit: "/ora",
    freeMinutes: 3,
    available: true,
    bio: "Medico chirurgo pediatrico in particolare mi occupo di problematiche urologiche e gastro enterologiche",
    initials: "LA",
    code: "g46zoc",
    bgColor: "#1E88E5"
  },
  {
    name: "Elisabetta Secci",
    role: "Avvocato",
    rating: 5,
    reviews: 143,
    rate: "€100",
    unit: "/ora",
    freeMinutes: 2,
    available: true,
    bio: "Sono un avvocato civilista, mi occupo di diritto di famiglia, diritti reali e di obbligazioni. Mi occupo anche di diritto penale.",
    initials: "ES",
    code: "kxh1dv",
    bgColor: "#1E88E5"
  },
  {
    name: "Andrea Raimondo Perra",
    role: "Architetto",
    rating: 5,
    reviews: 32,
    rate: "€80",
    unit: "/ora",
    freeMinutes: 0,
    available: true,
    bio: "Studio di Architettura con competenze che spaziano dal progetto urbano a quello edilizio, interior e design. Consulenze su pratiche edilizie, perizie, sicurezza e direzione lavori.",
    initials: "AP",
    code: "82ynpg",
    bgColor: "#1E88E5"
  },
];

export function ProfessionalsCarousel() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section
      id="professionisti"
      className="professionals-section"
      style={{
        background: "linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)",
        padding: "80px 5%",
      }}
    >
      <div className="section-header max-w-[1400px] mx-auto flex justify-between items-end mb-[48px]">
        <div>
          <h2
            className="section-title font-['Sora'] text-[40px] font-extrabold text-[#181818] mb-[8px]"
          >
            Scopri i nostri professionisti
          </h2>
          <p className="section-subtitle font-['Inter'] text-[16px] text-[#666666]">
            Migliaia di esperti certificati pronti a rispondere in videochiamata
          </p>
        </div>
        <a
          href="https://www.onlinepayphone.com/trova-professionista/"
          className="view-all-link font-['Sora'] text-[16px] font-semibold text-[#A03478] no-underline flex items-center gap-[8px] transition-all hover:gap-[12px]"
        >
          <span>Vedi tutti</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>

      <div className="professionals-carousel flex gap-[24px] overflow-x-auto pb-[20px] max-w-[1400px] mx-auto">
        {pros.map((p, idx) => (
          <div
            key={idx}
            className="professional-card bg-white p-[28px] rounded-[20px] min-w-[320px] max-w-[320px] border border-[#a03478]/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 relative group hover:-translate-y-[8px] hover:shadow-[0_16px_48px_rgba(160,52,120,0.15)] hover:border-[#a03478]/30 flex flex-col"
          >
            {/* Avatar */}
            <div className="professional-avatar w-[80px] h-[80px] rounded-full mb-[16px] relative overflow-hidden flex items-center justify-center font-['Sora'] text-[32px] font-extrabold"
                 style={{ 
                   background: (p as any).image ? "transparent" : ((p as any).bgColor || "#F5F5F5"),
                   color: (p as any).bgColor ? "#FFFFFF" : "#A03478"
                 }}>
              {(p as any).image ? (
                <Image
                  src={(p as any).image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              ) : (
                p.initials
              )}
            </div>

            {/* Info base */}
            <h3 className="professional-name font-['Sora'] text-[20px] font-bold text-[#181818] mb-[4px]">
              {p.name}
            </h3>
            <p className="professional-specialty font-['Inter'] text-[14px] text-[#666666] mb-[12px] h-[40px] line-clamp-2">
              {p.role}
            </p>

            {/* Rating */}
            <div className="rating-container flex items-center gap-[8px] mb-[16px]">
              <div className="stars flex gap-[2px] text-[#A03478] text-[16px]">
                {"★".repeat(p.rating)}
                {"☆".repeat(5 - p.rating)}
              </div>
              <span className="rating-count font-['Inter'] text-[14px] text-[#666666] font-medium">
                ({p.reviews})
              </span>
            </div>

            {/* CODICE UTENTE */}
            <div className="user-code-section flex items-center justify-between mb-[16px] p-[12px_16px] rounded-[12px] border border-[#a03478]/15"
                 style={{ background: "linear-gradient(135deg, rgba(160, 52, 120, 0.05) 0%, rgba(0, 183, 255, 0.05) 100%)" }}>
              <div>
                <div className="code-label font-['Inter'] text-[12px] font-[600] text-[#666666] uppercase tracking-[0.5px] mb-[4px]">
                  Codice Professionista
                </div>
                <div className="code-value font-['Sora'] text-[20px] font-[700] text-[#A03478] tracking-[1px]">
                  {p.code}
                </div>
              </div>
              <button 
                onClick={() => handleCopy(p.code)}
                className="copy-button bg-white border border-[#a03478]/30 rounded-[8px] px-[12px] py-[6px] font-['Inter'] text-[12px] font-[600] text-[#A03478] cursor-pointer transition-all duration-200 flex items-center gap-[6px] hover:bg-[#A03478] hover:text-white hover:border-[#A03478] active:scale-95"
              >
                {copiedCode === p.code ? (
                   <span>Copiato!</span>
                ) : (
                   <>
                     <span>Copia</span>
                     <ClipboardDocumentIcon className="w-4 h-4" />
                   </>
                )}
              </button>
            </div>

            {/* Bio */}
            <p className="professional-bio font-['Inter'] text-[14px] text-[#666666] leading-[1.5] mb-[20px] line-clamp-3 min-h-[63px]">
               {p.bio}
            </p>

            {/* Prezzo e Disponibilità */}
            <div className="professional-info-row flex justify-between items-center py-[16px] border-t border-b border-[#F0F0F0] mb-[20px] mt-auto">
               <div className="flex flex-col">
                  <div>
                    <span className="price font-['Sora'] text-[22px] font-bold text-[#181818]">{p.rate}</span>
                    <span className="price-unit text-[14px] font-medium text-[#666666]">{(p as any).unit || '/min'}</span>
                  </div>
                  {p.freeMinutes > 0 && (
                     <span className="text-[12px] font-bold text-[#00B7FF] mt-[2px]">
                       {p.freeMinutes} min gratis
                     </span>
                  )}
               </div>
               <div className={`availability inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-[20px] font-['Inter'] text-[13px] font-semibold ${p.available ? 'bg-[#A03478]/10 text-[#A03478]' : 'bg-gray-100 text-gray-500'}`}>
                  <div className={`w-[8px] h-[8px] rounded-full ${p.available ? 'bg-[#4CAF50]' : 'bg-gray-500'}`}></div>
                  {p.available ? 'Disponibile' : 'Occupato'}
               </div>
            </div>

            {/* CTA */}
            <button className="cta-videocall w-full text-white border-0 py-[14px] rounded-[12px] font-['Sora'] text-[16px] font-bold cursor-pointer flex items-center justify-center gap-[10px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(160,52,120,0.3)] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg, #A03478 0%, #FF6A00 100%)" }}>
               <VideoCameraIcon className="w-5 h-5" />
               Chiama Ora
            </button>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .professionals-carousel::-webkit-scrollbar {
          height: 6px;
        }
        .professionals-carousel::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .professionals-carousel::-webkit-scrollbar-thumb {
          background: #A03478;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
