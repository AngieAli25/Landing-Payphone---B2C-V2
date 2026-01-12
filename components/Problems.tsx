"use client";

import { motion } from "framer-motion";
import {
  PhoneXMarkIcon,
  BanknotesIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  HomeIcon,
  ClockIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const problems = [
  {
    icon: PhoneXMarkIcon,
    title: "Nessuno ti risponde",
    desc: "Hai un problema urgente ma i professionisti non rispondono o hanno l’agenda piena per settimane",
  },
  {
    icon: BanknotesIcon,
    title: "Hai pagato anticipatamente",
    desc: "Hai versato soldi in anticipo per una consulenza ma il professionista non era all’altezza",
  },
  {
    icon: QuestionMarkCircleIcon,
    title: "Nessun riferimento",
    desc: "Non hai un consulente di fiducia per il tuo problema specifico e non sai a chi rivolgerti",
  },
  {
    icon: MapPinIcon,
    title: "Studio troppo lontano",
    desc: "Lo specialista che ti serve si trova lontano da casa tua e raggiungerlo è complicato",
  },
  {
    icon: HomeIcon,
    title: "Non puoi uscire di casa",
    desc: "Hai difficoltà a muoverti o impegni che ti tengono a casa ma hai urgente bisogno di una consulenza",
  },
  {
    icon: ClockIcon,
    title: "Nessun tempo per attese",
    desc: "Non puoi permetterti di aspettare giorni o settimane per un appuntamento in studio",
  },
];

export function Problems() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)" }} aria-labelledby="problemi-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="problemi-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Sora']"
          >
            Ti riconosci in una di queste situazioni?
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto font-['Inter']">
            Ogni giorno migliaia di persone si trovano ad affrontare questi
            ostacoli quando cercano una consulenza professionale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group bg-white rounded-[20px] px-[32px] py-[40px] border border-[#a03478]/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(160,52,120,0.15)] hover:border-[#a03478]/30"
            >
              <div className="w-[64px] h-[64px] rounded-[16px] bg-gradient-to-br from-[#a03478] to-[#00b7ff] flex items-center justify-center mb-6 mx-auto shadow-[0_8px_24px_rgba(160,52,120,0.25)]">
                <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-['Sora'] text-[20px] font-bold text-[#181818] mb-4 text-center">
                {item.title}
              </h3>
              <p className="font-['Inter'] text-[15px] font-normal text-[#666666] leading-[1.6] text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a03478]/10 to-[#00b7ff]/10 px-6 py-2 rounded-full mb-6 shadow-md">
            <svg
              className="w-6 h-6 text-[#a03478]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            <span className="text-lg font-bold text-gray-900">
              20 minuti gratis quando ti iscrivi
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Scarica l&apos;app e risolvi tutti questi problemi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/it/app/online-payphone/id6738121965"
              target="_blank"
              rel="noreferrer"
              className="group relative text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden bg-gradient-to-r from-[#a03478] to-[#00b7ff] hover:from-[#F76a00] hover:to-[#F76a00] border-0"
              aria-label="Scarica su App Store"
            >
              <svg
                className="w-8 h-8 relative z-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.365 1.43c0 1.14-.466 2.244-1.204 3.06-.77.85-2.024 1.5-3.127 1.41-.13-1.04.382-2.17 1.138-2.97.78-.83 2.11-1.44 3.193-1.5zM20.59 17.16c-.61 1.42-.9 2.06-1.68 3.32-1.09 1.7-2.63 3.83-4.53 3.83-1.06 0-1.78-.35-2.85-.35-1.09 0-1.86.36-2.9.36-1.94 0-3.44-1.97-4.54-3.66C2.3 18.49 1 15.36 1 12.58c0-3.61 2.35-5.52 4.67-5.52 1.2 0 2.2.41 2.93.94.69.51 1.2 1.05 2.22 1.05 1 0 1.5-.53 2.2-1.04.76-.57 1.64-.95 2.77-.95 1.44 0 2.8.74 3.59 2 .1.15.18.31.26.47-.02.01-2.46 1.06-2.44 3.43.02 2.74 2.7 3.64 2.72 3.64z" />
              </svg>
              <span className="text-left relative z-10">
                <span className="block text-xs text-white/80">Scarica su</span>
                <span className="block text-lg font-semibold text-white">
                  App Store
                </span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
              target="_blank"
              rel="noreferrer"
              className="group relative text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden bg-gradient-to-r from-[#a03478] to-[#00b7ff] hover:from-[#F76a00] hover:to-[#F76a00] border-0"
              aria-label="Scarica su Google Play"
            >
              <svg
                className="w-8 h-8 relative z-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" />
                <path d="M16.81 15.12 6.05 21.34 14.54 12.85 16.81 15.12Z" />
                <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" />
                <path d="M6.05 2.66 16.81 8.88 14.54 11.15 6.05 2.66Z" />
              </svg>
              <span className="text-left relative z-10">
                <span className="block text-xs text-white/80">Scarica su</span>
                <span className="block text-lg font-semibold text-white">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), Math.round(index * 60));
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, visible]);
  return (
    <div
      ref={ref}
      className={
        visible
          ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
          : "opacity-0 translate-y-4 transition-all duration-700 ease-out will-change-transform will-change-opacity"
      }
    >
      {children}
    </div>
  );
}
