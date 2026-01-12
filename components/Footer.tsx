import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-16 py-12 text-white bg-transparent">
      {/* Overlay gradient per transizione smooth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <div className="relative h-[36px] w-[140px]">
            <Image 
              src="/logo.payphone.png" 
              alt="Online Payphone Logo" 
              fill
              className="object-contain object-left"
            />
          </div>
          
          {/* Links legali */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center">
            <a 
              href="https://www.iubenda.com/privacy-policy/64809643" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition opacity-90 hover:opacity-100"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.iubenda.com/privacy-policy/64809643/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition opacity-90 hover:opacity-100"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          © 2026 Payphone. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
