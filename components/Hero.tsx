"use client";

import {
  VideoCameraIcon,
  PhoneXMarkIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <>
      <section
        className={`relative min-h-screen overflow-hidden text-white`}
      >
        {/* Overlay per depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Cerchi sfocati di profondità */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, #FF6A00 0%, rgba(255,106,0,0) 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 w-[560px] h-[560px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, #00B7FF 0%, rgba(0,183,255,0) 70%)",
          }}
        />


        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] text-white">
          <div className="max-w-2xl">
            {/* Badge rimosso su richiesta */}

            {/* Headline principale */}
            <h1
              className="font-extrabold text-white mb-6"
              style={{ fontFamily: "'Sora', sans-serif", fontSize: "61px", lineHeight: "1.1" }}
            >
              Hai bisogno di <br className="lg:hidden" />
              un professionista?
              <br />
              Videochiamalo in 30 secondi
            </h1>

            {/* Sottotitolo */}
            <p className="text-[20px] font-medium text-white/90 opacity-95 mb-8 leading-[1.6] max-w-[520px]">
              Consulenze professionali in videochiamata. Nessun appuntamento.
              Paghi solo i minuti che usi.
            </p>

            {/* Lista benefit rimossa */}

            {/* Trust Box rimosso */}

            {/* CTA Primary grande */}
            <a
              href="#footer"
              className="inline-block w-full sm:w-auto px-9 py-[18px] text-white text-[20px] font-semibold rounded-2xl hover:opacity-95 hover:scale-105 transition-all duration-300 mb-8 mt-2"
              style={{
                background: "#FFFFFF",
                color: "#A03478",
                boxShadow: "0 12px 35px rgba(255, 255, 255, 0.25)",
              }}
            >
              Inizia Ora - 20 Min Gratis 🎁
            </a>

            {/* Download buttons row */}
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <a
                href="https://apps.apple.com/it/app/online-payphone/id6738121965"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 md:backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all group"
                aria-label="Scarica su App Store"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AppleLogo className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/70">Scarica su</div>
                  <div className="text-sm font-semibold text-white">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 md:backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all group"
                aria-label="Scarica su Google Play"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GooglePlayLogo className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/70">Scarica su</div>
                  <div className="text-sm font-semibold text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Trust badges rimossi su richiesta */}
          </div>
        </div>

        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full flex items-center justify-center pointer-events-none">
          {/* Main phone mockup - 3D tilted */}
          <div
            className="relative w-[320px] h-[650px]"
            style={{
              transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg) scale(0.90)",
              marginRight: "60px",
            }}
          >
            {/* Phone Border/Frame */}
            <div className="absolute inset-0 rounded-[3rem] bg-transparent shadow-2xl border-[14px] border-[#3a3a3a] z-20 pointer-events-none">
               {/* Inner glossy bezel */}
               <div className="absolute inset-0 rounded-[2.5rem] border-[2px] border-[#000000] opacity-50"></div>
            </div>
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#121212] rounded-b-2xl z-20"></div>

            {/* Screen content */}
            <div className="absolute inset-[10px] rounded-[2.5rem] overflow-hidden bg-black z-10">
               <video 
                 src="/Payphone_B2C.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover transform scale-105" // Scale up slightly to avoid black edges
               />
               
               {/* Call Controls Overlay */}
               <div className="absolute bottom-[40px] left-0 right-0 px-[24px] flex justify-between items-center z-30">
                  <div className="flex gap-[16px]">
                    <button className="w-[48px] h-[48px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pointer-events-auto hover:bg-white/30 transition-colors">
                      <SpeakerWaveIcon className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-[48px] h-[48px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pointer-events-auto hover:bg-white/30 transition-colors">
                      <VideoCameraIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  <button className="w-[64px] h-[64px] rounded-full bg-[#FF3B30] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform pointer-events-auto">
                    <PhoneXMarkIcon className="w-8 h-8 text-white" />
                  </button>
               </div>
            </div>
          </div>

          {/* Badge riposizionato fuori dal container inclinato per evitare sovrapposizioni */}
          <div className="absolute top-[20%] right-[10%] px-6 py-3 rounded-2xl shadow-xl animate-float pointer-events-auto z-40 hidden md:block" // Allineato verticalmente con margine destro simmetrico
               style={{
                 background: "rgba(255, 255, 255, 0.15)",
                 backdropFilter: "blur(12px)",
                 border: "1px solid rgba(255, 255, 255, 0.3)",
                 color: "#FFFFFF",
                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)"
               }}>
            <div className="text-[14px] font-semibold tracking-wide whitespace-nowrap">
              98% - Clienti soddisfatti
            </div>
          </div>

          <div className="absolute bottom-[20%] right-[10%] px-5 py-3 rounded-2xl shadow-xl animate-float pointer-events-auto z-0"
               style={{
                 background: "rgba(255, 255, 255, 0.15)",
                 backdropFilter: "blur(10px)",
                 border: "1px solid rgba(255, 255, 255, 0.25)",
                 color: "#FFFFFF",
                 animationDelay: "1.5s"
               }}>
            <div className="text-sm font-semibold">
              5.000+ - Professionisti attivi
            </div>
            </div>

          </div>
      </section>
    </>
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
