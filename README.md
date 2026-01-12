# Online Payphone - Landing B2C V2

Landing page completa sviluppata con Next.js 14 (App Router), Tailwind CSS, Framer Motion e Heroicons.

## Requisiti

- Node.js 18+
- pnpm / npm / yarn

## Avvio locale

```bash
npm install
npm run dev
```

App disponibile su `http://localhost:3000`.

## Build e start

```bash
npm run build
npm start
```

## Variabili d'ambiente

Creare un file `.env.local` in root con:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Se non impostata, il loader GTM non verrà attivato anche con consenso cookie.

## Struttura

- `app/` layout, pagina principale e global CSS
- `components/` componenti sezioni
- `public/` assets (placeholder)

## Design system

Palette, gradienti e utility in `tailwind.config.ts` e `app/globals.css` in linea con la documentazione.

## Sezioni implementate

- Header fisso, banner minuti gratis (sticky)
- Hero con CTA (iOS/Android) e microinterazioni
- Problemi, Soluzione, Come funziona (timeline)
- Vantaggi (griglia), Professionisti (carousel orizzontale scroll-snap)
- Storie di successo (carousel placeholder per reel)
- Contatori (IntersectionObserver + easing)
- Testimonianze (carousel + JSON-LD schema Review)
- FAQ (accordion accessibile)
- CTA finale + Footer con link

## Accessibilità

- Contrasto, focus visibili, aria-label/aria-live dove utile
- Navigazione tastiera su bottoni e menù
- Immagini/icone con `aria-hidden` ove puramente decorative

## Marketing e tracking

- Attributi `data-analytics-id` sui CTA principali
- Loader GTM condizionato al consenso cookie (`components/Analytics.tsx`)
- Cookie consent banner (`components/CookieConsent.tsx`)

## Performance

- Animazioni attivate su viewport (Framer Motion / IntersectionObserver)
- Scroll-snap per carousel (no JS pesante)

## TODO contenutistici prima del lancio

- Sostituire testi placeholder dove necessario
- Inserire immagini reali dei professionisti (in `public/`)
- Inserire 5 reel video ottimizzati (MP4 H.264, preload=metadata)
- Aggiornare link store iOS/Android reali
- Aggiornare contatori, recensioni reali e structured data

## Note

Il progetto è pensato per essere semplice e manutenibile: componenti atomici, stili coerenti, e contenuti modulabili.
