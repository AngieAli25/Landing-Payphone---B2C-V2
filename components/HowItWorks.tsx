"use client";

import React from "react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Scarica e registrati",
      desc: "Scarica gratuitamente l'app per iOS o Android. Registrazione veloce e sicura in pochi secondi. Ricevi subito 20 minuti gratis per provare il servizio.",
    },
    {
      num: "02",
      title: "Scegli lo specialista",
      desc: "Cerca per specializzazione o sintomo. Vedi qualifiche, recensioni, tariffa e disponibilità in tempo reale. Trova il professionista perfetto per te.",
    },
    {
      num: "03",
      title: "Chiama e consulta",
      desc: "Avvia la chiamata con lo specialista. Consulto in tempo reale, sicuro e privato. Paghi automaticamente solo i minuti effettivi di consulenza.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
        padding: "80px 5% 60px",
        minHeight: "100vh",
      }}
      aria-labelledby="how-title"
    >
      {/* Header */}
      <div className="text-center mb-[60px]">
        <h2
          id="how-title"
          className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#181818] mb-[12px]"
        >
          Come funziona Online Payphone
        </h2>
        <p className="font-['Inter'] text-[16px] text-[#666666] max-w-[700px] mx-auto">
          Ricevi la tua consulenza professionale in 3 semplici passaggi
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-[40px] lg:gap-[60px] items-start">
        {/* Left Column - Sticky Mockup */}
        <div className="hidden lg:flex sticky top-[120px] justify-center items-center h-fit">
          <div className="relative group">
            {/* Decorative background circle with pulse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full -z-10 animate-pulse-slow"
              style={{
                background:
                  "radial-gradient(circle, rgba(160, 52, 120, 0.08) 0%, transparent 70%)",
              }}
            />

            <div
              className="relative w-[280px] h-[560px] rounded-[28px] overflow-hidden bg-white transition-transform duration-300 ease-out hover:scale-[1.02]"
              style={{ boxShadow: "0 40px 100px rgba(160, 52, 120, 0.25)" }}
            >
              {/* Phone Frame Border */}
              <div className="absolute inset-0 border-[12px] border-gray-900 rounded-[28px] z-20 pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-gray-900 rounded-b-[16px] z-20"></div>

              {/* Mockup Image */}
              <Image
                src="/professinisti.payphone.png"
                alt="App Mockup"
                fill
                className="object-cover object-top"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="relative pl-[40px] md:pl-[50px]">
          {/* Vertical Line */}
          <div
            className="absolute left-[20px] lg:left-[23px] top-[40px] bottom-[40px] w-[3px] rounded-[2px]"
            style={{
              background:
                "linear-gradient(180deg, #A03478 0%, #7B5BA8 50%, #00B7FF 100%)",
            }}
          ></div>

          <div className="flex flex-col gap-[50px]">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Number Bubble */}
                <div
                  className="absolute left-[-20px] lg:left-0 top-0 w-[50px] h-[50px] border-[3px] border-white rounded-full flex items-center justify-center font-['Sora'] text-[18px] font-[800] text-white shadow-[0_8px_24px_rgba(160,52,120,0.35)] z-20"
                  style={{
                    background:
                      "linear-gradient(135deg, #A03478 0%, #00B7FF 100%)",
                  }}
                >
                  {step.num}
                </div>

                {/* Content Card */}
                <div className="bg-white p-[24px_28px] rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#a03478]/10 ml-[20px] lg:ml-[30px] transition-all duration-300 ease group hover:translate-x-[8px] hover:shadow-[0_16px_48px_rgba(160,52,120,0.15)] hover:border-[#a03478]/20 relative z-10">
                  <h3 className="font-['Sora'] text-[20px] font-[700] text-[#181818] mb-[12px]">
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-[#666666] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[60px] flex flex-col sm:flex-row gap-[16px] pl-[20px] lg:pl-[30px]">
            <a
              href="https://apps.apple.com/it/app/online-payphone/id6738121965"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-[24px] py-[14px] rounded-[12px] border border-white/20 text-white font-['Sora'] font-[600] text-[15px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(160,52,120,0.3)] shadow-lg backdrop-blur-[10px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(160, 52, 120, 0.9) 0%, rgba(0, 183, 255, 0.9) 100%)",
              }}
              aria-label="Scarica su App Store"
            >
              <AppleLogo className="w-6 h-6 text-white" />
              <span>Scarica su App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-[24px] py-[14px] rounded-[12px] border border-white/20 text-white font-['Sora'] font-[600] text-[15px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(160,52,120,0.3)] shadow-lg backdrop-blur-[10px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(160, 52, 120, 0.9) 0%, rgba(0, 183, 255, 0.9) 100%)",
              }}
              aria-label="Scarica su Google Play"
            >
              <GooglePlayLogo className="w-6 h-6 text-white" />
              <span>Scarica su Google Play</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.466 2.244-1.204 3.06-.77.85-2.024 1.5-3.127 1.41-.13-1.04.382-2.17 1.138-2.97.78-.83 2.11-1.44 3.193-1.5zM20.59 17.16c-.61 1.42-.9 2.06-1.68 3.32-1.09 1.7-2.63 3.83-4.53 3.83-1.06 0-1.78-.35-2.85-.35-1.09 0-1.86.36-2.9.36-1.94 0-3.44-1.97-4.54-3.66C2.3 18.49 1 15.36 1 12.58c0-3.61 2.35-5.52 4.67-5.52 1.2 0 2.2.41 2.93.94.69.51 1.2 1.05 2.22 1.05 1 0 1.5-.53 2.2-1.04.76-.57 1.64-.95 2.77-.95 1.44 0 2.8.74 3.59 2 .1.15.18.31.26.47-.02.01-2.46 1.06-2.44 3.43.02 2.74 2.7 3.64 2.72 3.64z" />
    </svg>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 2.5v19l10.5-9.5L3 2.5z" fill="#34A853" />
      <path
        d="M20.5 12L15 8.8 5.2 2.9C4.5 2.5 3 2.5 3 2.5l10.5 10L3 22.5s1.5 0 2.2-.4L15 15.2 20.5 12z"
        fill="#4285F4"
      />
      <path
        d="M20.5 12L15 8.8 13.5 10.1 17.7 12 13.5 13.9 15 15.2 20.5 12z"
        fill="#FBBC05"
      />
      <path d="M13.5 13.9L3 22.5l12-7.3-1.5-1.3z" fill="#EA4335" />
    </svg>
  );
}
