"use client";
import { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Marco B.",
    quote: "Problema legale risolto in 10 minuti",
    video: "/reel1.mov"
  },
  {
    id: 2,
    name: "Laura S.",
    quote: "Consulenza fiscale immediata da casa",
    video: "/reel3.mp4"
  },
  {
    id: 3,
    name: "Andrea M.",
    quote: "Nutrizionista disponibile quando serve",
    video: "/reel2.mov"
  },
  {
    id: 4,
    name: "Giulia R.",
    quote: "Supporto psicologico 24/7 fondamentale",
    video: "/reel7.mp4"
  },
  {
    id: 5,
    name: "Roberto P.",
    quote: "Ingegnere trovato per ristrutturazione",
    video: "/reel4.mp4"
  }
];

interface TestimonialVideoProps {
  t: typeof testimonials[0];
  isMuted: boolean;
  onToggleAudio: () => void;
}

const TestimonialVideo = ({ t, isMuted, onToggleAudio }: TestimonialVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video is playing
      videoRef.current.play().catch(e => console.log("Autoplay caught:", e));
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleAudio();
  };

  return (
    <>
      <video 
        ref={videoRef}
        className="screen-video"
        onClick={handleClick}
        playsInline
        autoPlay
        muted={isMuted}
        loop
      >
        <source src={t.video} type="video/mp4" />
      </video>

      {isMuted && (
        <div className="audio-hint" onClick={handleClick}>
          🔇 Tocca per audio
        </div>
      )}

      <style jsx>{`
        .screen-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: auto;
          cursor: pointer;
        }

        .audio-hint {
          position: absolute;
          bottom: 90px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          opacity: 0.8;
          animation: pulse 2s infinite;
          z-index: 20;
          cursor: pointer;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export function TestimonialsSection() {
  // Use -1 or null to signify all muted.
  const [currentUnmutedId, setCurrentUnmutedId] = useState<number | null>(null);

  const handleToggleAudio = (id: number) => {
    if (currentUnmutedId === id) {
      setCurrentUnmutedId(null); // Mute if already playing
    } else {
      setCurrentUnmutedId(id); // Unmute this one, others will mute
    }
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>Hanno risolto i loro problemi con Online Payphone</h2>
        <p>Scopri come altri utenti hanno trovato le risposte che cercavano</p>
      </div>
      
      <div className="mockups-showcase">
        {testimonials.map((t) => (
          <div key={t.id} className="iphone-mockup">
            <div className="phone-body">
              <div className="phone-screen bg-black">
                <div className="screen-content">
                  <TestimonialVideo 
                    t={t} 
                    isMuted={currentUnmutedId !== t.id}
                    onToggleAudio={() => handleToggleAudio(t.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #f5f7fa; 
          padding: 60px 0;
          overflow-x: hidden;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
          padding: 0 20px;
        }

        .section-header h2 {
          font-family: 'Sora', sans-serif;
          font-size: 44px;
          font-weight: 800;
          color: #181818;
          margin-bottom: 16px;
        }

        .section-header p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #666666;
        }

        /* Container principale */
        .mockups-showcase {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: -30px; /* overlap per effetto "stack" */
          padding: 80px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          perspective: 2000px; /* per effetto 3D */
          min-height: 700px; /* Ensure enough height */
        }

        /* Singolo iPhone mockup */
        .iphone-mockup {
          position: relative;
          width: 280px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        /* Dimensioni diverse per profondità */
        .iphone-mockup:nth-child(1),
        .iphone-mockup:nth-child(5) {
          /* 80% scale */
          transform: scale(0.8) translateY(10px); 
          opacity: 0.8;
          z-index: 1;
        }

        .iphone-mockup:nth-child(2),
        .iphone-mockup:nth-child(4) {
          /* 90% scale */
          transform: scale(0.9) translateY(5px);
          opacity: 0.95;
          z-index: 3;
        }

        .iphone-mockup:nth-child(3) {
          /* 110% scale */
          transform: scale(1.1);
          z-index: 5;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2); /* Extra shadow for emphasis */
        }
        
        /* Adjust gap for tight stacking */
        .mockups-showcase {
          gap: -20px; /* Adjust as needed for visual overlap */
        }

        /* Hover effect */
        .iphone-mockup:hover {
          transform: scale(1.15) translateY(-20px) rotateY(0deg) !important;
          z-index: 10;
        }

        /* Corpo del telefono (metal frame) */
        .phone-body {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 19.5;
          background: linear-gradient(145deg, #e8e8e8, #ffffff);
          border-radius: 50px;
          padding: 3px;
          box-shadow: 
            0 0 0 8px #c0c0c0,
            0 0 0 10px #d8d8d8,
            0 40px 100px rgba(0, 0, 0, 0.35),
            inset 0 2px 4px rgba(255, 255, 255, 0.5);
        }

        /* Notch (tacca superiore) */
        .phone-body::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 35px;
          background: #000000;
          border-radius: 0 0 25px 25px;
          z-index: 100;
          box-shadow: inset 0 -2px 4px rgba(255, 255, 255, 0.1);
        }

        /* Camera dentro il notch */
        .phone-body::after {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(20px);
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #1a1a1a 30%, #4a4a4a 100%);
          border-radius: 50%;
          z-index: 101;
        }

        /* Schermo */
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000000;
          border-radius: 48px;
          overflow: hidden;
          position: relative;
        }

        /* Container del contenuto */
        .screen-content {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0; /* Remove padding to let video fill */
        }
        
        @media (max-width: 1400px) {
           .mockups-showcase {
             gap: -10px;
           }
        }
        
        @media (max-width: 1200px) {
           .mockups-showcase {
              flex-wrap: wrap;
              gap: 40px;
              padding: 40px 20px;
              height: auto;
           }
           
           .iphone-mockup, 
           .iphone-mockup:nth-child(1),
           .iphone-mockup:nth-child(2),
           .iphone-mockup:nth-child(3),
           .iphone-mockup:nth-child(4),
           .iphone-mockup:nth-child(5) {
             width: 280px;
             transform: none;
             opacity: 1;
             z-index: 1;
           }
           
           .iphone-mockup:hover {
              transform: scale(1.05) !important;
              z-index: 10;
           }
        }
      `}</style>
    </section>
  );
}
