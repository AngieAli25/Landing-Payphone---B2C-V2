import { GiftIcon } from "@heroicons/react/24/solid";

export function StickyBanner() {
  return (
    <div
      className="text-white"
      style={{
        background: "linear-gradient(135deg, #A03478 0%, #FF6A00 100%)",
      }}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-center gap-3 py-2 text-sm font-semibold">
          <GiftIcon className="size-5 animate-pulse" aria-hidden="true" />
          <p>
            Scarica ora e ricevi{" "}
            <span className="underline">20 minuti gratis</span> per provare il
            servizio
          </p>
        </div>
      </div>
    </div>
  );
}
