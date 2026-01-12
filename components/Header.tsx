import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3 focus:outline-none group">
            <div className="relative h-[45px] w-[180px]">
              <Image
                src="/logo.payphone.png"
                alt="Online Payphone Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <nav
            aria-label="Navigazione principale"
            className="hidden items-center gap-10 xl:flex text-[16px] font-medium"
          >
            <a
              href="#how-it-works"
              className="text-white font-medium hover:text-white hover:underline transition-colors tracking-wide text-shadow-soft"
            >
              Come Funziona
            </a>
            <a
              href="#professionisti"
              className="text-white font-medium hover:text-white hover:underline transition-colors tracking-wide text-shadow-soft"
            >
              Professionisti
            </a>
            <a
              href="#vantaggi"
              className="text-white font-medium hover:text-white hover:underline transition-colors tracking-wide text-shadow-soft"
            >
              Vantaggi
            </a>
          </nav>
          <a
            href="#professionisti"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:opacity-90 active:scale-95"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
          >
            <MagnifyingGlassIcon className="size-[18px]" />
            Trova il Professionista
          </a>
        </div>
      </div>
    </header>
  );
}
